import styled from "styled-components";
import { Badge } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Diversity3Outlined, ShoppingCartOutlined } from "@mui/icons-material";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import HowToRegRoundedIcon from "@mui/icons-material/HowToRegRounded";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

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
`;

const Search = styled.div`
  flex: 1;
  color: black;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightGray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 8px;
  margin-bottom: 5px;
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
  margin-left: 25px;
`;

export const Navbar = () => {
  return (
    <>
      <Container>
        <Wrapper>
          {/**Logo */}
          <Logo>
            <Link
              to="/home"
              style={{ color: "black", textDecoration: "none", fontSize:"40px" }}
              activeStyle={{ color: "red" }}
            >
              SMNST LOGO
            </Link>
          </Logo>
          {/**Search Bar */}
          <SearchContainer>
            <Search>Search</Search>
            <Input />
            <SearchIcon
              style={{ color: "gray", marginLeft: "5px", fontSize: 16 }}
            />
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
            style={{ color: "gray", marginLeft: "5px", fontSize: 16 }}
          >
            Log In
            <LoginRoundedIcon />
          </Button>

          {/**Register button  */}
          <Button
            component={Link}
            to={"/signup"}
            variant="text"
            style={{
              color: "white",
              backgroundColor: "#cdc8c8",
              cursor: "pointer",
            }}
          >
            Register
            <HowToRegRoundedIcon />
          </Button>
          <MenuItem>
            <Badge badgeContent={1} color="primary" component={Link}
            to={"/cart"}>
              <ShoppingCartOutlined style={{ color: "gray" }} />
            </Badge>
          </MenuItem>
        </Wrapper>
      </Container>
    </>
  );
};


