export const authState = {
  isAuthenticated: false,
  loading: true,
  user: {}, // we are expecting a user object that will contain user id, user name, or anything that is sent from the backend.
  error: false,
};

const authReducer = (state, action) => {
  // (type : signin, payload: data coming , and i will updated state according to the action type and the data and then i will return the state back)

  const { type, payload } = action;

  switch (type) {
    case "AUTH_SIGNIN": {
      console.log("payload in signin", payload.user);
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload.user,
      };
    }
    case "AUTH_SIGNUP": {
      console.log("payload in reducer", payload);
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };
    }
    case "SIGNIN_ERR": {
      return {
        ...state,
        error: payload,
      };
    }
    case "AUTH_VALID": {
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };
    }
    case "SIGN_OUT": {
      return {
        ...state,
        isAuthenticated: false,
        loading: true,
        user: {}, // we are expecting a user object that will contain user id, user name, or anything that is sent from the backend.
        error: false,
      };
    }
    case "CLR_ERR": {
      return {
        ...state,
        error: false,
      };
    }

    default: {
      return state;
    }
  }
};
export default authReducer;
