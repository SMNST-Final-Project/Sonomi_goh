import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import { Announcement } from "../../components/Announcement/Announcement";
import {Footer} from "../../components/Footer/Footer";
import {Navbar} from "../../components/Navbar/Navbar";
import {Newsletter} from "../../components/Newsletter/Newsletter";
import { mobile } from "../../responsive";




const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px",flexDirection: "column"})}
  

`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "45vh"})}
  
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px"})}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%"})}
  
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%"})}
 
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: #f8f4f4;
  }
`;
export const Product = () => {
  return (
  <Container>
     <Navbar />
   <h3>Single Product page</h3> 
      
    <Wrapper>
        <ImgContainer>
          <Image src="https://images.unsplash.com/photo-1563398643312-ae05ad974668?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGhhbmRtYWRlJTIwc29hcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
        </ImgContainer>
        <InfoContainer>
          <Title>Featured Product</Title>
          <Desc>
          NEW! Tea Tree, Peppermint and Papaya organic soap with a fresh, crisp, outdoorsy scent.
          Awaken your senses and clear your head with pure essential oils and soothe your skin with organic plant butters and oils.
          </Desc>
          <Price> Є 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Quantity</FilterTitle>
              <FilterSize>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>

     <Newsletter/> 

     <Footer/>
     <Announcement/>

  </Container> 
  )
}

