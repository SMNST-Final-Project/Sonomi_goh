import { Box, Button } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { mobile, tablet } from "../../responsive.js";

//styled components
const Container = styled.div`
  height: 80px;
  background-color: #ebe2e2;
  margin-bottom: 5px;
  
  `
const Wrapper = styled.div`
  padding: 20px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${mobile({ display: "none"})}
`;

export const SubNav = () => {
  return (
    <Container>
      <Wrapper>
        <Box component="div" m={1}>
          <Button
            variant="text"
            component={Link}
            to={"/products?category=tea"}
            style={{
              color: "#696565",
              fontSize: "25px",
              fontWeight: "bold",
              marginLeft: "20px",
            }}
          >
            Tea
          </Button>
          {/**Oil Category */}
          <Button
            variant="text"
            component={Link}
            to={"/products?category=oil"}
            style={{
              color: "#696565",
              fontSize: "25px",
              fontWeight: "bold",
              marginLeft: "20px",
            }}
          >
            Oils
          </Button>
          {/**Breakfast Category */}
          <Button
            variant="text"
            component={Link}
            to={"/products?category=food"}
            style={{
              color: "#696565",
              fontSize: "25px",
              fontWeight: "bold",
              marginLeft: "20px",
            }}
          >
            Breakfast
          </Button>
          {/**Skin Care Category */}
          <Button
            variant="text"
            component={Link}
            to={"/products?category=natural"}
            style={{
              color: "#696565",
              fontSize: "25px",
              fontWeight: "bold",
              marginLeft: "20px",
              
            }}
          >
            Skin Care
          </Button>
        </Box>
      </Wrapper>
    </Container>
  );
};
