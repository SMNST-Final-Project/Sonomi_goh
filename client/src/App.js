import {LandingPage} from "./pages/LandingPage";
import { Routes, Route } from "react-router";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { Home } from "./components/Home/Home";
import UserProfile from "./pages/UserProfile";
import {Team} from "./components/Team/Team";
import {Cart} from "./pages/Cart";
import { Product } from "./pages/Products/Product";
import { ProductList } from "./pages/Products/ProductList";
import { Pay } from "./components/Pay/Pay";
import { Success } from "./components/Pay/Success";

const App = () => {
  
  return (
 <> 
 <Routes>
       <Route path="/" element={<LandingPage/> } />
       <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register/> } />

        {/**Cart Routes */}
       <Route path="/cart" element={ <Cart/> } />
       <Route path="/pay" element={ <Pay/> } />
       <Route path="/success" element={ <Success/> } />



        {/**Products Page */}
       <Route path="/productpage" element={<Product />} />
       <Route path="/productlist" element={<ProductList />} />



        {/**Team component */}
     <Route path="/team" element={<Team/> } />       
  
        {/**User Profile component */}
       <Route path="/userprofile" element={<UserProfile />  }/> 
      </Routes> 
  </>
  )
};

export default App;
