import styled from "styled-components";
import { Badge } from "@mui/material";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { mobile } from "../../responsive.js";

const Container = styled.div`
  height: 60px;
  background-color: #ebe2e2;
  ${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
  padding: 10px 0px;
  color: snow;
  display: flex;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;
const Logo = styled.div`
  flex: 1;
  color: black;
  cursor: pointer;
`;
const Center = styled.div`
  flex: 1;
  align-items: center;
`;
const SearchContainer = styled.div`
  display: flex;
  padding: 5px;
  margin-left: 25px;
  border: 0.5px solid lightgray;
  align-items: center;
`;
const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;
const Team = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
const Right = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ justifyContent: "center" })}
`;
const MenuItem = styled.div`
  margin-left: 25px;
  font-size: 14px;
  cursor: pointer;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
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
              style={{
                color: "black",
                textDecoration: "none",
                fontSize: "20px",
              }}
              activeStyle={{ color: "red" }}
            >
              SMNST LOGO
            </Link>
          </Logo>
          <Center>
            <SearchContainer>
              <Input />
              <Search style={{ color: "gray", fontSize: 16 }} />
            </SearchContainer>
          </Center>
          <Right>
            <Link to="/team">
              <Team>TEAM</Team>
            </Link>
            <Link to="/login">
              <MenuItem>Login</MenuItem>
            </Link>
            <Link to="/register">
              <MenuItem>Register</MenuItem>
            </Link>
            <Link to="/cart">
              <Badge badgeContent='1' color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </Link>
          </Right>
        </Wrapper>
      </Container>
    </>
  );
};
