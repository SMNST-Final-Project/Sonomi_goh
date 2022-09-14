import styled from 'styled-components'
import { Badge } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Diversity3Outlined, ShoppingCartOutlined} from '@mui/icons-material';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import Person3OutlinedIcon from '@mui/icons-material/Person3Outlined';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";


const Container = styled.div`
    height: 80px;
    background-color: #ebe2e2;

`
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
flex:3;
color: black;
`

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

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

export const HomeNavbar = () => {
  return (
   <>
    <Container>
       <Wrapper>
          {/**Logo */}
          <Logo>
            <Link
              to={"/home"}
              component={Link}
              style={{ color: "black", textDecoration: "none", fontSize:"40px" }}
              activeStyle={{ color: "red" }}
            >
              SMNST LOGO
            </Link>
          </Logo>


         {/**Search Bar */}
        <SearchContainer >
        <Search>Search</Search>  
            <Input />
            <SearchIcon 
            style={{ color: "gray",marginLeft:"5px", fontSize: 16 }} />
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
        <Button variant="text" 
        component={Link} 
        to={"/login"}
        style={{ color: "gray", marginLeft: "5px", fontSize: 16 }}>Log In<LoginRoundedIcon />
        </Button>

         {/**User Profile */}
        <Button 
        component={Link} 
        to={"/userprofile"} 
        variant="text" 
        style={{color: "black", 
        backgroundColor:"#cdc8c8" , 
        cursor:"pointer", 
        borderRadius:"30%"}}>User<Person3OutlinedIcon /></Button>
        <MenuItem>
            <Badge badgeContent={1}
            component={Link}
            to={"/cart"}
            color="primary">
              <ShoppingCartOutlined 
              style={{color: "gray"}}/>
            </Badge>
          </MenuItem>
        </Wrapper> 
    </Container>
  
    </> 
  )
}
