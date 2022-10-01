import React from "react";
import { Announcement } from "../Announcement/Announcement";
import { Categories } from "../Categories/Categories";
import { Footer } from "../Footer/Footer";
import { SubNav } from "../Navbar/SubNav";
import { Products } from "../Products/Products";
import { HomeNavbar } from "./HomeNavbar";

export const Home = () => {
  return (
    <>
      <HomeNavbar />
     <SubNav/> 
      <h3 style={{ textAlign: "center" }}>Home Component</h3>
      <h3 style={{ textAlign: "center", color: "green" }}>Categories</h3>
      <Categories />
      <Products />
      <Footer />

      <Announcement />
    </>
  );
};
