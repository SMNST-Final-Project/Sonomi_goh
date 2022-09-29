import React from "react";
import axios from "axios";
import {
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import styled from "styled-components";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import SendIcon from "@mui/icons-material/Send";
import { Popup } from "../Popup/Popup";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1508401531113-289ab4692d3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fDNkJTIwaW1hZ2UlMjBuYXR1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const changeHandler = (e) => {
    console.log(e.target.name, e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  //const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzIxYmRjY2IwZDE0OTVkOTdhNmJhOGUiLCJpYXQiOjE2NjMxNTU2NjB9.GijLCaEb2LUhLFS-8qHjkho3BoYOQQKc4C3IKZ56tn0";

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/users/login", user, {
        headers: {
          "Content-Type": "application/json",
        
        },
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        navigate("/home");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 400,
    margin: "70px auto",
  };
  const avatarStyle = {
    backgroundColor: "#9b8888",
    padding: 5,
  };
  const btnStyle = {
    margin: "25px 0",
    backgroundColor: "#3c9e7e",
  };

  return (
   <>
    <Container>
      <Grid>
     <h2>Welcome Back</h2> 
        <Paper elevation={12} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon style={{fontSize:"25px"}} />
            </Avatar>

            <h2>Log In</h2>
          </Grid>
          <TextField
            style={{ marginBottom: "5px" }}
            margin="dense"
            label="Username"
            placeholder="Enter your name here"
            onChange={changeHandler}
            name="email"
            fullWidth
            required
          />

          <TextField
            style={{ marginTop: "5px" }}
            margin="dense"
            label="Password"
            placeholder="Enter password here"
            type="password"
            name="password"
            onChange={changeHandler}
            fullWidth
            required
          />

          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label="Remember Me"
          />
          {/**Forgot Password */}
          <Typography>
            <Link
              color="#409460"
              href="#"
              style={{textDecoration:"none"}}
              onClick={() => {
                navigate("/signup");
              }}
            >
              Forgot password?
            </Link>
          </Typography>

          {/**Sign In  */}
          <div>
            <Button
              type="submit"
              variant="contained"
              onClick={submitHandler}
              fullWidth
              style={btnStyle}
              endIcon={<SendIcon />}
            >
              Sign In
            </Button>
            <Popup />
          </div>

          
          <Typography>
            Don't have an account? <br/> 
            <Link
              style={{textDecoration:"none", color:"#409460"}}
              component="button"
              to={"/signup"}
              onClick={() => {
                navigate("/signup");
              }}
            >
              Create an Account
            </Link>
          </Typography>
        </Paper>
      </Grid>
    </Container>
    </> 
  );
};

export default Login;
