import React from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { mobile } from "../../responsive.js";
import Sonomi from "../../assets/videoBg/9.png";
import { CottageOutlined } from '@mui/icons-material';

const Section = styled.div`
  width: 100%;
  height: 130px;
  background-color:  #ebe2e2;
  z-index: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  ${mobile({ height: "40px" })}

`
const Logo = styled.div`
 
  cursor: pointer;
  margin-top: 1rem;
  margin-left: 3rem;
  
  
  ${mobile({ display: "none" })}//${mobile({ height: "20px", width: "20px" })}
`;

export const TeamNav = () => {
  return (
   <>
  <Section>
  <Logo>
            <Link to="/home">
              <img src={Sonomi} alt="" width="130px" height="130px" />
            </Link>
          </Logo>
           <h1>Our Own Team Page</h1>
           <Button
            component={Link}
            to={"/home"}
            variant="text"
            style={{
              color: "gray",
              cursor: "pointer",
             
            }}
          >
            Home
            <CottageOutlined />
          </Button>
    
    </Section> 
      
   
   </> 
  )
}
