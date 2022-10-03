import styled from "styled-components";
import { Badge } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Diversity3Outlined, ShoppingCartOutlined } from "@mui/icons-material";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import HowToRegRoundedIcon from "@mui/icons-material/HowToRegRounded";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { mobile} from "../../responsive.js";
import Sonomi from "../../assets/videoBg/9.png";
import { SubNav } from "./SubNav.jsx";

// redux
import { useSelector } from "react-redux";

const Container = styled.div`
  height: 80px;
  background-color: #ebe2e2;
  ${mobile({ height: "40px" })}
`;
const Wrapper = styled.div`
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;
const Logo = styled.div`
  flex: 1;
  cursor: pointer;
  width: 100px;
  height: 100px;
  z-index: 1;
  ${mobile({ display: "none"})}
  //${mobile({ height: "20px", width:"20px"})}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightGray;
  display: flex;
  align-items: center;
  margin-left: 15px;
  margin-right: 25px;
  padding: 10px;
  margin-bottom: 5px;
  border: none;
  cursor: pointer;

`;
const Input = styled.input`
  border: none;
  padding: 8px;
  width:300px;

  ${mobile({ width: "50px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 15px;
  ${mobile({ fontSize: "12px", marginLeft: "10px"})}
`;

export const Navbar = () => {
  const quantity = useSelector((state) => state.cart.cartTotalQuantity);

  return (
    <>
      <Container>
        <Wrapper>
          {/**Logo */}
          <Logo>
            <Link to="/home">
              <img src={Sonomi} alt="" width="150px" height="150px" />
            </Link>
          </Logo>
          {/**Search Bar */}
          <SearchContainer >
            <SearchIcon
              style={{ color: "black", marginRight: "5px", fontSize: 20 }}
            />
            <Input placeholder="search" />
          </SearchContainer>
          <Right>
          {/**Team Link */}
          <Button
            variant="text"
            component={Link}
            to={"/team"}
            style={{ color: "gray", marginLeft: "5px", fontSize: 16 }}
          >
            Team
            <Diversity3Outlined fontSize="small" />
          </Button>

          {/**Login button */}
          <Button
            variant="text"
            component={Link}
            to={"/login"}
            style={{ color: "gray", marginLeft: "5px", fontSize: 15 }}
          >
            Log In
            <LoginRoundedIcon fontSize="small" />
          </Button>

          {/**Register button---MUI component  */}
          <Button
            size="small"
            component={Link}
            to={"/signup"}
            variant="text"
            style={{
              color: "gray",
              cursor: "pointer",
              padding: "1px",
              margin: "1px",
            }}
          >
            Register
            <HowToRegRoundedIcon fontSize="small"/>
          </Button>
          <MenuItem>
            {/**redux added */}
            <Badge badgeContent={quantity} component={Link} to={"/cart"}>
              <ShoppingCartOutlined style={{ color: "gray" }} />
            </Badge>
          </MenuItem>
          </Right>
        </Wrapper>
      </Container>
      <SubNav/>
    </>
  );
};
