import Slider from "../components/Slider/Slider";
import { Navbar } from "../components/Navbar/Navbar";

import { Footer } from "../components/Footer/Footer";
import { Announcement } from "../components/Announcement/Announcement";

export const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Footer />
      <Announcement />
    </div>
  );
};
