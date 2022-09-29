import {
  AlternateEmailOutlined,
  Facebook,
  Instagram,
  PermPhoneMsgOutlined,
  RoomOutlined,
  Twitter,
} from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../../responsive.js";
import { Link } from "react-router-dom"

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;
//Left
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1`
cursor: pointer;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #003552;
  //background color will be extracted through props
  background-color: ${(props) => props.color};
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;

//Center
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;
const Title = styled.h3`
  margin: 30px;
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
  ${mobile({ backgroundColor: "#fff8f8" })}
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
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
        <Logo>SONOMI, garden of hope</Logo>
        <Desc>
          Choose from over 75 tea blends – from the classic Earl Grey to the
          award-winning Blueberry Merlot – our whole leaf teas are available in
          a variety of package types to chose from.
        </Desc>
        <SocialContainer>
          <SocialIcon color="385999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
        </SocialContainer>
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
        <Title>Contact Us</Title>
        <ContactItem>
          <RoomOutlined style={{ marginRight: "10px" }} /> World Of Alternatives
        </ContactItem>
        <ContactItem>
          <PermPhoneMsgOutlined style={{ marginRight: "10px" }} /> +00 333 666
          999
        </ContactItem>
        <ContactItem>
          <AlternateEmailOutlined style={{ marginRight: "10px" }} />{" "}
          contact@contact.web
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};
