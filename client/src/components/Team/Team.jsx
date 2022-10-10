import videoBg from "../../assets/videoBg/videoBg.mp4";
import vid2 from "../../assets/videoBg/vid2.mp4";
import ovgvd from "../../assets/videoBg/ovgvd.ovg";
//import ovg2 from "../../assets/videoBg/vid2.ovg"
//import { HomeNavbar } from "../../components/Home/HomeNavbar";
import { Footer } from "../../components/Footer/Footer";
import styled from "styled-components";
import "./index.css";
import { Announcement } from "../Announcement/Announcement";

//images import
import figma from "../../assets/videoBg/figma.png"
import mural from "../../assets/videoBg/mural.png"




const Container = styled.div`
  background: #ebe2e2;
  overflow: hidden;
`
const TeamNav = styled.div`
display: flex;
justify-content: center;
  align-items: center;
  padding-Top:  5px;
  
`;

const Hr = styled.hr`
  background-color: #dad0d0d1;
  border: none;
  height: 10px;
`;

//Link Styles
const linkStyling = {textDecoration:"none", color:"black"}
export const Team = () => {
  return (
   <>

 
    <Container>
  
  {/**Logo */}
 
        
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
        backgroundColor: " #fad4d4fb;",
        paddingLeft: "250px",
        paddingRight:"250px",
        paddingTop: "100px"
        
      }}>
      <video autoPlay loop muted>
          <source src={vid2} type="video/mp4" />
        </video>
        </section>
        
      <Hr/>
     {/**tec section */}
            <div className='best'>
            <h1>See which technologies we've used</h1>

            <div className='container'>

             <a href="https://app.mural.co/t/dciwebdevfinalproject20226231/m/dciwebdevfinalproject20226231/1660827077913/0dd01faf6770b00bf65bd15adf06eba68290c697?sender=ubffe43a24a9837cdd8a80039"
             target="_blank" 
             style={linkStyling}
             > 
                <img src={mural} alt='mural' />
                <h2 >" Mural "</h2>
                </a>
              <a
              href="https://www.figma.com/file/3vUNctE4gwb82uO6gefGFT/Final-Project?node-id=127%3A161"
              
              target="_blank"
              style={linkStyling}
              >   <img src={figma} alt='figma' /><h2>" Figma "</h2></a> 
               
            </div>

    
            </div>
            <Hr/> 
      <Footer />
            <TeamNav/>
      <Announcement/>
    </Container>
    </> 
  );
};
