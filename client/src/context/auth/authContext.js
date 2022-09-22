import {createContext, useReducer} from "react";
import authReducer, { authState } from "./authReducer";
import * as api from "../../api/index"


export const AuthContext = createContext(authState);

export const AuthProvider = ({children}) =>{

    const [state, dispatch] = useReducer(authReducer, authState);

    const signIn = async (formData, navigate) => {

        try{
            const response = await api.login(formData)
            console.log("response in signin", response)
   
                dispatch({type :"AUTH_SIGNIN", payload: response.data})
                localStorage.setItem("auth",response.data.token )
                navigate("/")

            }
            catch(err){
            dispatch({type:"SIGNIN_ERR", payload:err.message})
        }
    }

    const signUp = async (formData, navigate) => {

        try{
            const response = await api.signup(formData)
            dispatch({type :"AUTH_SIGNUP", payload: response.data.savedUser}) 
            navigate("/")

        }
        catch(err){
            dispatch({type:"SIGNIN_ERR", payload:err.message})
        }
    }

    const tokenValidator = async () =>{
        
        try{
            const response = await api.validateToken()
            dispatch({type :"AUTH_VALID", payload: {username: response.data.username, id: response.data.id}})
        }
        catch(err){
            console.log(err)
        } 

    }

    const signOut = () => {
        dispatch({type :"SIGN_OUT"})
        if(localStorage.getItem("auth")) localStorage.removeItem("auth")
        
    }

    const resetError = () => {
        dispatch({type :"CLR_ERR"})
        
    }


    const value ={
        signIn,
        signUp,
        signOut,
        isAuthenticated: state.isAuthenticated,
        error: state.error,
        user:state.user,
        tokenValidator,
        resetError
        
        
    }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}