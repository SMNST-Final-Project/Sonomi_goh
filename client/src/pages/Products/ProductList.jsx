import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Navbar } from "../../components/Navbar/Navbar";
import  { Drawer } from "../../components/Drawer/Drawer"
import { Announcement } from "../../components/Announcement/Announcement";
import { Products } from "../../components/Products/Products";
import { Newsletter } from "../../components/Newsletter/Newsletter";
import { Footer } from "../../components/Footer/Footer";
import { mobile } from "../../responsive";

const Container = styled.div``;

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
  const location = useLocation();
  const category =  new URLSearchParams(location.search).get('category')
  console.log(category)
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState({});
  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <Container>
      <Navbar />
     <Drawer/> 
      <h3>This is Product List Page</h3>
      <Title>{category}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Options</FilterText>
          <Select name="Category" onChange={handleFilters}>
            <Option disabled selected></Option>
            <Option>Oils</Option>
            <Option>Teas</Option>
            <Option>Skin Care</Option>
            <Option>Hand Made</Option>
          </Select>
        </Filter>

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
      <Products category={category} filters={filters} sort={sort} />
      <Newsletter />

      <Footer />
      <Announcement />
    </Container>
  );
};
