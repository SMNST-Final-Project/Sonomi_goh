import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Announcement } from "../../components/Announcement/Announcement";
import { Products } from "../../components/Products/Products";
import { Newsletter } from "../../components/Newsletter/Newsletter";
import { Footer } from "../../components/Footer/Footer";
import { mobile } from "../../responsive";
import { Navbar } from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";

const ContainerOne = styled.div``;

const ContainerTwo = styled.div`
height: 20vh;
background-color: #fcf5f5;
display: flex;
align-items: left;
justify-content: center;
flex-direction: column;
`

const Desc = styled.div`
font-size: 20px;
font-weight: 100;
margin-top: 15px;
margin-left: 60px;
color: #696363;
`
const linkStyling = {textDecoration:"none", color:"black", marginLeft:"60px"}

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 10px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.div`
  font-weight: 20px;
  font-size: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

export const ProductList = () => {
  const [sort, setSort] = useState({});
  const location = useLocation();
  const category = new URLSearchParams(location.search).get("category");
  console.log(category);
  //const productName = new URLSearchParams(location.search).get("item");

  return (
    <ContainerOne>
    
     
     
     <ContainerTwo>
      
      <Link to="/home"
      style={linkStyling}
      > 
      <h3 style={{
       color:"#696363"}}>Products / Lists / Gifts </h3> 
      </Link>
      
     <h2 style={{
       marginLeft: "60px",
       marginTop: "20px",
       color:"#7f7c7c",
       letterSpacing: "3px"
       
       }}>Whole Collection</h2> 
      
      <Desc>
       Wide variety of wholeness at one place.<br/> 
       Here you can find our whole collection of Organic, Natural Products and Gifts.
      </Desc>
 
       </ContainerTwo>

      <Title>{category}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Sort Products</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest" selected>
              Newest
            </Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>

      {/**style this Products tag */}
      <Products category={category} sort={sort} />
      <Newsletter />

      <Footer />
      <Announcement />
    </ContainerOne>
  );
};
