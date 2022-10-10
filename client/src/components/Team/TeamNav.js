import React from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { mobile } from "../../responsive.js";
import Sonomi from "../../assets/videoBg/9.png";

const Section = styled.div`
  width: 100%;
  height: 80px;
  background-color:  #ebe2e2;
  ${mobile({ height: "40px" })}

`
const Logo = styled.div`
  flex: 1;
  cursor: pointer;
  width: 100px;
  height: 100px;
  z-index: 1;
  ${mobile({ display: "none" })}//${mobile({ height: "20px", width: "20px" })}
`;

export const TeamNav = () => {
  return (
   <>
  <Section>
  <Logo>
            <Link to="/home">
              <img src={Sonomi} alt="" width="150px" height="150px" />
            </Link>
          </Logo>
    
    </Section> 
      
   
   </> 
  )
}
