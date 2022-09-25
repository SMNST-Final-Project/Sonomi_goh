import videoBg from "../../assets/videoBg/videoBg.mp4";
import ovgvd from "../../assets/videoBg/ovgvd.ovg";
//import { HomeNavbar } from "../../components/Home/HomeNavbar";
import { Footer } from "../../components/Footer/Footer";
import styled from "styled-components";
import "./index.css";
import { Announcement } from "../Announcement/Announcement";
import logo from "../../assets/videoBg/9.png"

const Container = styled.div`
  background: #ebe2e2;
`
const Hr = styled.hr`
  background-color: #5f5f5f;
  border: none;
  height: 10px;
`;

export const Team = () => {
  return (
    <Container>
   <div>
    <img src={logo} alt={logo} width="150px" height="150px" />
    </div>  
        
      <div className="main">
        <div className="overlay"></div>
        <video autoPlay loop muted>
          <source src={videoBg} type="video/mp4" />
          <source src={ovgvd} type="video/ogg" />
        </video>
        <div className="content">
          <h1>Our Own Team Page</h1>
          <p>Welcome</p>
        </div>
      </div>
      <Hr/>
      <Footer />
      <Announcement/>
    </Container>
  );
};
