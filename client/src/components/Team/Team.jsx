import videoBg from "../../assets/videoBg/videoBg.mp4";
import ovgvd from "../../assets/videoBg/ovgvd.ovg";
import { HomeNavbar } from "../../components/Home/HomeNavbar";
import { Footer } from "../../components/Footer/Footer";
import "./index.css";
export const Team = () => {
  return (
    <>
      <HomeNavbar />
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
      <Footer />
    </>
  );
};
