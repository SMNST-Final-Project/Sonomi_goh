import videoBg from "../../assets/videoBg/videoBg.mp4";
import vid2 from "../../assets/videoBg/vid2.mp4";
import ovgvd from "../../assets/videoBg/ovgvd.ovg";
//import ovg2 from "../../assets/videoBg/vid2.ovg"
//import { HomeNavbar } from "../../components/Home/HomeNavbar";
import { Footer } from "../../components/Footer/Footer";
import styled from "styled-components";
import "./index.css";
import { Announcement } from "../Announcement/Announcement";
import { Link } from "react-router-dom";
import Sonomi from "../../assets/videoBg/9.png"
import { Button } from "@mui/material";
import { HomeOutlined } from "@mui/icons-material";



const Container = styled.div`
  background: #ebe2e2;
`
const TeamNav = styled.div`
display: flex;
justify-content: center;
  align-items: center;
  padding-Top:  5px;
  
`;

const Hr = styled.hr`
  background-color: #887272;
  border: none;
  height: 10px;
`;

export const Team = () => {
  return (
    <Container>
  {/**Logo */}
  <TeamNav>
  
              <img src={Sonomi} alt="" width="130px" height="130px" />
              <h1 style={{marginLeft:"100px"}}>Our Own Team Page</h1> 
              <Button
              variant="text"
              component={Link}
              to={"/home"}
              style={{
                color: " #5f5f5f",
                cursor: "pointer",
                padding: "5px",
                marginLeft: "50rem",
               
              }}
            >
              Home
              <HomeOutlined fontSize="small" />
            </Button> 
          </TeamNav>
        
          {/**first video */}
      <div className="main">
        <div className="overlay"></div>
        <video autoPlay loop muted>
          <source src={videoBg} type="video/mp4" />
          <source src={ovgvd} type="video/ogg" />
        </video>
        <div className="content">
        <p>Welcome</p>
        </div>
         </div>
      <Hr/>
    {/**second video */}
      <section 
      className='team padding' 
      style={{
        backgroundColor: " #ebe2e299;",
        paddingLeft: "250px",
        paddingRight:"250px",
        paddingTop: "100px"
        
      }}>
      <video autoPlay loop muted>
          <source src={vid2} type="video/mp4" />
        </video>
        </section>
        
      <Hr/>
      <Footer />
      <Announcement/>
    </Container>
  );
};
