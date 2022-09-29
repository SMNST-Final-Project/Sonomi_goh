import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1618845333293-0b37cd92ea0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTJ8fG5hdHVyYWwlMjBmb29kc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 30%;
  height: 90%;
  padding: 10px;
  background-color: #ffffffaf;
  overflow-y: scroll;
`;

const Register = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    console.log(e.target.name, e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/users/signup", user, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <Container>
      <Wrapper>
        <Typography gutterButton variant="h6" align="center">
          Create a New Account with Us
        </Typography>
        <Card style={{ maxWidth: 480, margin: "0 auto", padding: "10px 5px" }}>
          <CardContent>
            <Typography gutterBottom variant="h4">
              Register
            </Typography>
            <Typography color="textSecondary" variant='"subtitle1"'>
              Fill up the form and get access to our new features and Products
              everyday.
            </Typography>

            <form onChange={changeHandler} onSubmit={submitHandler}>
              <Grid container spacing={1}>
                {/**First name */}
                {/**controlling the width according to browser width */}
                <Grid xs={12}>
                  <TextField
                    label="First Name"
                    placeholder="Enter first name"
                    variant="outlined"
                    margin="dense"
                    type="text"
                    name="firstName"
                    fullWidth
                    required
                  />
                </Grid>

                {/**last name */}
                <Grid xs={12}>
                  <TextField
                    label="Last Name"
                    placeholder="Enter last name"
                    variant="outlined"
                    margin="dense"
                    type="text"
                    name="lastName"
                    fullWidth
                    required
                  />
                </Grid>

                {/**Email */}
                <Grid xs={12}>
                  <TextField
                    label="Email"
                    placeholder="enter your email"
                    variant="outlined"
                    margin="dense"
                    type="text"
                    name="email"
                    fullWidth
                    required
                  />
                </Grid>

                {/**Password */}
                <Grid xs={12}>
                  <TextField
                    label="Password"
                    placeholder="Enter password"
                    variant="outlined"
                    margin="dense"
                    type="password"
                    autoComplete="current-password"
                    name="password"
                    fullWidth
                    required
                  />
                </Grid>

                {/**Confirm Password */}
                <Grid xs={12}>
                  <TextField
                    label="Confirm Password"
                    placeholder="Enter password again"
                    variant="outlined"
                    margin="dense"
                    type="password"
                    fullWidth
                    required
                  />
                </Grid>

                {/**Phone */}
                <Grid xs={12}>
                  <TextField
                    label="Phone"
                    placeholder="Enter your Phone number"
                    variant="outlined"
                    margin="dense"
                    type="number"
                    fullWidth
                  />
                </Grid>

                {/**Address  */}

                <Grid item xs={8}>
                  <h4>Address</h4>
                </Grid>
                <Grid xs={12} sm={6}>
                  <TextField
                    label="Street Name"
                    placeholder="Street Name"
                    variant="outlined"
                    margin="dense"
                    type="text"
                    fullWidth
                  />
                </Grid>

                {/**Street Number */}
                <Grid xs={8} sm={6}>
                  <TextField
                    label="Street Number"
                    placeholder="Street Number"
                    variant="outlined"
                    margin="dense"
                    type="text"
                    fullWidth
                  />
                </Grid>

                {/**Zip code */}
                <Grid xs={8} sm={6}>
                  <TextField
                    label="Zip Code"
                    placeholder="Street Number"
                    variant="outlined"
                    margin="dense"
                    type="text"
                    fullWidth
                  />
                </Grid>

                {/**Country */}
                <Grid xs={12} sm={6}>
                  <TextField
                    label="Country"
                    placeholder="Country"
                    variant="outlined"
                    margin="dense"
                    type="text"
                    fullWidth
                  />
                </Grid>

                {/**Submit button */}
                <Grid xs={12} textAlign="center" sx={{ marginBottom: "1rem" }}>
                  <Button
                    style={{ backgroundColor:"#409460" }}
                    variant="contained"
                    type="submit"
                    size="medium"
                  >
                    Register
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default Register;
