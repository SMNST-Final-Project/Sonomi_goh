import {
  AlternateEmailOutlined,
  Facebook,
  Instagram,
  PermPhoneMsgOutlined,
  RoomOutlined,
  Twitter,
} from "@mui/icons-material";
import styled from "styled-components";
import { mobile, tablet } from "../../responsive.js";
import { Link } from "react-router-dom";
import Sonomi from "../../assets/videoBg/9.png";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column"})}
  ${tablet ({ marginTop: "10px"})}

`;
//Left
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  
`;
const Logo = styled.div`
cursor: pointer;

`;

const Desc = styled.p`
  margin: 20px 40px;
  text-align: center;
  font-size: large;
  font-weight: 100;
`;

const SocialContainer = styled.div`
  display: flex;
  margin-top: 10px;
`;
const SocialIcon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 10px 100px / 130px;
  border: 1px solid ;
  background-color: #cbc2c29c;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  margin-left: 10px;
  margin-bottom: 2px;
  padding: 3px;
  cursor: pointer;
`;

//Center
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
  ${tablet ({ display: "none" })}
`;
const Title = styled.h3`
  margin: 20px;
`;

const List = styled.h3`
  margin-bottom: 30px;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
  text-decoration: none;
  
`;

//Link Styles
const linkStyling = {textDecoration:"none", color:"black"}

//Right
const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8"})}
`;

const ContactItem = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

export const Footer = () => {
  return (
    <Container>
      {/**Left side of the footer */}
      <Left>
        <Logo>
        <img src={Sonomi} alt="logo" width="70px" height="70px" />
          </Logo>
        <Desc>
       <h3 style={{marginBottom:"10px"}}>SONOMI, garden of hope</h3> 
          Choose from over 75 tea blends – from the classic Earl Grey to the
          award-winning Blueberry Merlot – our whole leaf teas are available in
          a variety of package types to chose from.In addition to that Organic cold press oils and wide verity of healthy breakfast and Gifts.
        </Desc>
        
      </Left>

      {/**Center of the footer */}
      <Center>
        <Title>Useful Links</Title>
        <List>
        <ListItem><Link to="/home" style={linkStyling}> Home</Link></ListItem> 
          <ListItem><Link to="/cart" style={linkStyling}>Cart</Link></ListItem>
          <ListItem><Link to="/products" style={linkStyling}>Products</Link></ListItem>
          <ListItem><Link to="/" style={linkStyling}>Helpful Resources</Link></ListItem>
          <ListItem><Link to="/login" style={linkStyling}>My Account</Link></ListItem>
          <ListItem><Link to="/cart" style={linkStyling}>Order Tracking</Link></ListItem>
          <ListItem><Link to="/pay" style={linkStyling}>Payment Methods</Link></ListItem>
          <ListItem><Link to="/term" style={linkStyling}>Terms & Conditions</Link></ListItem>
          
        </List>
      </Center>

      {/**Right side of the footer */}

      <Right>
      <SocialContainer>
       <h3 >Follow Us On</h3> 
          <SocialIcon style={{ color: "#696565" }}>
          <Facebook /> 
          </SocialIcon>
          <SocialIcon style={{ color: "#696565" }}>
            <Twitter />
          </SocialIcon>
          <SocialIcon style={{ color: "#696565" }}>
            <Instagram />
          </SocialIcon>
        </SocialContainer>
        <Title>Contact Us</Title>
        <ContactItem>
          <RoomOutlined style={{ marginRight: "10px" }} /> Germany
        </ContactItem>
        <ContactItem>
          <PermPhoneMsgOutlined style={{ marginRight: "10px" }} /> +00 333 666
          999
        </ContactItem>
        <ContactItem>
          <AlternateEmailOutlined style={{ marginRight: "10px" }} />{" "}
          contact@sonomi.web
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};
