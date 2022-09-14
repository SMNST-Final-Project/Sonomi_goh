
import Slider from '../components/Slider/Slider'
import {Navbar} from '../components/Navbar/Navbar'
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { Footer } from '../components/Footer/Footer';
import {Announcement} from '../components/Announcement/Announcement';
import { Drawer } from '../components/Drawer/Drawer';


export  const LandingPage = () => {
  return (
    <div>
       <Navbar/>

      <Drawer/> 
       
       {/**Home */}
       <Button variant="text"
       component={Link} 
       to={"/home"}
       style={{color:"brown"}}
       >Temporary Home Link</Button>

       {/**Products Page */}
       <Button variant="text" style={{color:"brown"}}
       component={Link} 
       to={"/productpage"}
       >Temporary product Page Link</Button>

       {/**ProductsList Page */}
       <Button variant="text" style={{color:"brown"}}
       component={Link} 
       to={"/productlist"}
       >Temporary product List Link</Button>
      <Slider/> 
     <Footer/> 
  <Announcement/>   
    </div>
  )
}

