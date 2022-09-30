import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Navbar } from "../../components/Navbar/Navbar";
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
  const [sort, setSort] = useState({});
  const location = useLocation();
  const category = new URLSearchParams(location.search).get("category");
  console.log(category);

  return (
    <Container>
      <Navbar />
      
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
      <Products category={category} sort={sort} />
      <Newsletter />

      <Footer />
      <Announcement />
    </Container>
  );
};
