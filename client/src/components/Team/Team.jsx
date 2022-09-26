import videoBg from "../../assets/videoBg/videoBg.mp4";
import ovgvd from "../../assets/videoBg/ovgvd.ovg";
//import { HomeNavbar } from "../../components/Home/HomeNavbar";
import { Footer } from "../../components/Footer/Footer";
import styled from "styled-components";
import "./index.css";
import { Announcement } from "../Announcement/Announcement";
import { Link } from "react-router-dom";
import Sonomi from "../../assets/videoBg/9.png"
import { TeamCard } from "./TeamCard";

const Container = styled.div`
  background: #ebe2e2;
`
const Logo = styled.div`
  flex: 1;
  color: black;
  cursor: pointer;
 margin-left: 20px;
 width: 100px;
  height: 120px;
 `;

const Hr = styled.hr`
  background-color: #5f5f5f;
  border: none;
  height: 10px;
`;

export const Team = () => {
  return (
    <Container>
  {/**Logo */}
  <Logo>
            <Link
              to="/home"
            >
              <img src={Sonomi} alt="" width="130px" height="130px" />
            </Link>
          </Logo>
        
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

      <section className='team padding'>
        <div className='team grid'>
          <TeamCard />
        </div>
        </section>
        
      <Hr/>
      <Footer />
      <Announcement/>
    </Container>
  );
};
