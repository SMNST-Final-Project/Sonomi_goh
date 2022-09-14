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
import { useState } from "react";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1566231270035-0aaca1fd2bbf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80")
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
  const changeHandler = (e) => {
    console.log(e.target.name, e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzIxYmRjY2IwZDE0OTVkOTdhNmJhOGUiLCJpYXQiOjE2NjMxNTU2NjB9.GijLCaEb2LUhLFS-8qHjkho3BoYOQQKc4C3IKZ56tn0";

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
    backgroundColor: "#6c6969",
    padding: 5,
  };
  const btnStyle = {
    margin: "12px 0",
  };

  return (
    <Container>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>

            <h2>Log In 👇</h2>
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
            label="Remember🧤"
          />
          {/**Sign In  */}
          <div>
            <Button
              type="submit"
              color="grey"
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

          {/**Forgot Password */}
          <Typography>
            <Link
              color="#020202"
              href="#"
              onClick={() => {
                console.log("I'm a button.");
              }}
            >
              Forgot password🤔
            </Link>
          </Typography>

          <Typography>
            Do you have an account? 🌚
            <Link
              color="#020202"
              onClick={() => {
                console.log("I'm a button.");
              }}
            >
              {" "}
              Register
            </Link>
          </Typography>
        </Paper>
      </Grid>
    </Container>
  );
};

export default Login;
