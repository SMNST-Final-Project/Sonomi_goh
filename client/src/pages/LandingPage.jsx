import Slider from "../components/Slider/Slider";
import { Navbar } from "../components/Navbar/Navbar";

import { Footer } from "../components/Footer/Footer";
import { Announcement } from "../components/Announcement/Announcement";
import { Newsletter } from "../components/Newsletter/Newsletter";

export const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Slider />
     <Newsletter/> 
      <Footer />
      <Announcement />
    </div>
  );
};
