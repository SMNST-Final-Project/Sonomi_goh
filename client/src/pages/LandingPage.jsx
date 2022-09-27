import Slider from "../components/Slider/Slider";
import { Navbar } from "../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { Footer } from "../components/Footer/Footer";
import { Announcement } from "../components/Announcement/Announcement";

export const LandingPage = () => {
  return (
    <div>
      <Navbar />

      {/**Home */}
      <Button
        variant="text"
        component={Link}
        to={"/home"}
        style={{ color: "brown" }}
      >
        Temporary Home Link
      </Button>

      {/**Products Page */}
      <Button
        variant="text"
        style={{ color: "brown" }}
        component={Link}
        to={"/products/:id"}
      >
        Temporary product Page Link
      </Button>

      {/**ProductsList Page */}
      <Button
        variant="text"
        style={{ color: "brown" }}
        component={Link}
        to={"/products"}
      >
        Temporary product List Link
      </Button>
      <Slider />
      <Footer />
      <Announcement />
    </div>
  );
};
