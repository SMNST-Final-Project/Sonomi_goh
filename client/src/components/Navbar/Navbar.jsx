import styled from "styled-components";
import { Badge } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Diversity3Outlined, ShoppingCartOutlined } from "@mui/icons-material";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import HowToRegRoundedIcon from "@mui/icons-material/HowToRegRounded";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Sonomi from "../../assets/videoBg/9.png"

// redux
import { useSelector } from 'react-redux'

const Container = styled.div`
  height: 80px;
  background-color: #ebe2e2;
`;
const Wrapper = styled.div`
  padding: 20px 40px;
  color: snow;
  display: flex;
  justify-content: space-between;
`;
const Logo = styled.div`
  flex: 1;
  color: black;
  cursor: pointer;
  width: 100px;
  height: 100px;
`;


const SearchContainer = styled.div`
  border: 0.5px solid lightGray;
  display: flex;
  align-items: center;
  margin-left: 15px;
  margin-right: 25px;
  padding: 1px;
  margin-bottom: 5px;
  border: none;
  cursor: pointer;
`;
const Input = styled.input`
  border: none;
`;
/*const Team = styled.div`
  flex: 1;
  margin-left: 250px;
  color: black;
  cursor: pointer;
  font-weight: 400;
`;*/

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 15px;
`;

export const Navbar = () => {
  const quantity = useSelector(state => state.cart.quantity); 

  return (
    <>
      <Container>
        <Wrapper>
          {/**Logo */}
          <Logo>
            <Link
              to="/home"
            >
              <img src={Sonomi} alt="" width="150px" height="150px" />
            </Link>
          </Logo>
          {/**Search Bar */}
          <SearchContainer>
            
            <SearchIcon
              style={{ color: "black", marginRight: "5px", fontSize: 20 }}
            />
            <Input />
          </SearchContainer>

          {/**Team Link */}
          <Button
            variant="text"
            component={Link}
            to={"/team"}
            style={{ color: "gray", marginLeft: "5px", fontSize: 16 }}
          >
            Team
            <Diversity3Outlined />
          </Button>

          {/**Login button */}
          <Button
            variant="text"
            component={Link}
            to={"/login"}
            style={{ color: "gray", marginLeft: "5px", fontSize: 15 }}
          >
            Log In
            <LoginRoundedIcon />
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
              padding:"1px",
              margin:"1px"
            }}
          >
            Register
            <HowToRegRoundedIcon />
          </Button>
          <MenuItem>

          {/**redux added */}
            <Badge badgeContent={quantity} component={Link}
            to={"/cart"}>
              <ShoppingCartOutlined style={{ color: "gray" }} />
            </Badge>
          </MenuItem>
        </Wrapper>
      </Container>
    </>
  );
};


