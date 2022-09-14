
import { 
  AlternateEmailOutlined,
  Facebook, 
  Instagram, 
  PermPhoneMsgOutlined, 
  RoomOutlined, 
  Twitter } from "@mui/icons-material";
import styled from "styled-components"

const Container = styled.div`
    display: flex;
`
//Left
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1``;

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
`;

//Center
const Center = styled.div`
    flex: 1;
    padding: 20px;
`
const Title = styled.h3`
margin: 30px;
`

const List = styled.h3`
 margin-bottom: 30px;
 padding: 0;
 list-style: none;
 display: flex;
 flex-wrap: wrap;
`
const ListItem =styled.li`
width: 50%;
margin-bottom: 10px;
`

//Right
const Right = styled.div`
    flex: 1;
`
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`
const Payment = styled.img`
  width: 50%;
`

export const Footer = () => {
  return (
   <Container>
    {/**Left side of the footer */}
    <Left>
       <Logo>Our LOGO</Logo>
      <Desc>
      Choose from over 75 tea blends – from the classic Earl Grey to the award-winning Blueberry Merlot – our whole leaf teas are available in a variety of package types to chose from.
        </Desc>
       <SocialContainer>
       <SocialIcon color="385999">
          <Facebook/> 
         
        </SocialIcon > 
        <SocialIcon color="55ACEE">
          <Twitter/> 
         
        </SocialIcon> 
        <SocialIcon color="E4405F">
          <Instagram/> 
         
        </SocialIcon> 
        </SocialContainer>  

        </Left>

{/**Center of the footer */}
    <Center>
    <Title>Useful Links</Title>
    <List>
     <ListItem>Home</ListItem> 
     <ListItem>Cart</ListItem> 
     <ListItem>My Blog</ListItem> 
     <ListItem>Other Creators</ListItem> 
     <ListItem>Helpful Resources</ListItem> 
     <ListItem>My Account</ListItem> 
     <ListItem>Order Tracking</ListItem> 
     <ListItem>WhishList</ListItem> 
     <ListItem>Privacy Policy</ListItem> 
     <ListItem>Terms & Conditions</ListItem> 
      </List> 


      </Center>

    {/**Right side of the footer */}

    <Right>
    <Title>Contact Us</Title> 
     <ContactItem>
    <RoomOutlined style={{marginRight: "10px"}} />  World Of Alternatives
      </ContactItem> 
      <ContactItem>
       <PermPhoneMsgOutlined style={{marginRight: "10px"}} />  +00 333 666 999
      </ContactItem>
      <ContactItem>
      <AlternateEmailOutlined style={{marginRight: "10px"}}/>  contact@contact.web
      </ContactItem> 
     <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/> 

      </Right> 
      
   </Container> 
  )
}

