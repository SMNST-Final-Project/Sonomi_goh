import React from "react";
import { Announcement } from "../Announcement/Announcement";
import { Categories } from "../Categories/Categories";
import { Footer } from "../Footer/Footer";
import { SubNav } from "../Navbar/SubNav";
import { Newsletter } from "../Newsletter/Newsletter";
import { Products } from "../Products/Products";
import { HomeNavbar } from "./HomeNavbar";
import styled from "styled-components";
import { Link } from "react-router-dom";


const Container = styled.div`
height: 20vh;
background-color: #fcf5f5;
display: flex;
align-items: left;
justify-content: center;
flex-direction: column;
`

const Desc = styled.div`
font-size: 20px;
font-weight: 100;
margin-top: 15px;
margin-left: 60px;
color: #696363;
`
const linkStyling = {textDecoration:"none", color:"black", marginLeft:"60px"}

export const Home = () => {
  return (
    <>
      <HomeNavbar />
     <SubNav/>

     <Container>
      
     <Link to="/products"
     style={linkStyling}
     > 
     <h3 style={{
      color:"#696363"}}>Home / Products / Gifts </h3> 
     </Link>
     
    <h2 style={{
      marginLeft: "60px",
      marginTop: "20px",
      color:"#7f7c7c",
      letterSpacing: "3px"
      
      }}>New Arrivals</h2> 
     
     <Desc>
      Looking for something new?
      This is the place to shop all the Organic, Natural Products and Gifts from out tried and tested resources.
     </Desc>

      </Container>


      <Categories />
      <Products />
     <Newsletter/> 
      <Footer />

      <Announcement />
    </>
  );
};
