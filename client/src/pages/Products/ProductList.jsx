import styled from "styled-components"
import {Navbar} from "../../components/Navbar/Navbar"
import { Announcement} from "../../components/Announcement/Announcement"
import {Products} from "../../components/Products/Products"
import {Newsletter} from "../../components/Newsletter/Newsletter"
import { Footer } from "../../components/Footer/Footer"
import { mobile } from "../../responsive"


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
${mobile({ width: "0px 10px",display: "flex", flexDirection:"column"})}
`;


const FilterText = styled.div`
    font-weight: 20px;
    font-size: 600;
    margin-right: 20px;
    ${mobile({ marginRight: "0px"})}
    
`
const Select = styled.select`
 padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px"})}
  
  `;
const Option = styled.option`
   
`;

export const ProductList = () => {
  return (
  <Container>
    <Navbar/> 
  <h3>This is Product List Page</h3> 
  <Title>Filters :</Title>
 <FilterContainer>
   <Filter>
    <FilterText>Options</FilterText>
    
    <Select>
            <Option disabled selected>
              
            </Option>
            <Option>Oils</Option>
            <Option>Teas</Option>
            <Option>Skin Care</Option>
            <Option>Hand Made</Option>
      
          </Select>
          <Select>
            <Option disabled selected>
              Quantity
            </Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
          </Select>
          </Filter>

   <Filter>
    <FilterText>filter Products</FilterText>
    <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
    </Filter> 

    </FilterContainer>
   <Products/>
  <Newsletter/>

 <Footer/>  
 <Announcement/>
  </Container> 
  )
}


 