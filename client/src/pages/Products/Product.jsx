import { Add, Remove } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Announcement } from "../../components/Announcement/Announcement";
import { Footer } from "../../components/Footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";
import { Newsletter } from "../../components/Newsletter/Newsletter";
import { mobile } from "../../responsive";
import axios from "axios";
import { addProduct } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  

  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
  
`;

const Image = styled.img`
  width: 80%;
  height: 70vh;
  object-fit: cover;
  margin-left: 90px;
  ${mobile({ height: "40vh" })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 20px 50px;
  margin-top: 30px;

  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 40px;
  color:  #696565;
`;

const Desc = styled.p`
  margin: 20px 0px;
  padding-right: 10px;
  font-size: large;
  letter-spacing: 1px;
  
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const TextContainer = styled.div`
  width: 50%;
  margin: 30px 0px;

  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;
const TextInstructions = styled.div``;
const TextIngredients = styled.div`
font-size: medium;
  letter-spacing: 1px;
  
  
`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
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
  &:hover {
    background-color: #f8f4f4;
  }
`;
const linkStyling = {textDecoration:"none", color:"black", marginLeft:"60px"}
export const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  console.log(id);
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(`https://sonomi.herokuapp.com/products/${id}`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        console.log("item id", id);
        setProduct(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  //dispatch

  const handleProductClick = () => {
    dispatch(addProduct({ ...product, quantity }));
  };

  return (
    <Container>
     
      <Link to="/products"
     style={linkStyling}
  
     > 
     <h3 style={{
      color:"#696363",
      marginLeft: "120px"
      }}>Products / New Arrivals / Gifts   </h3> 
     </Link>
     
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.description}</Desc>
          <Price> Є {product.price}</Price>
          <TextContainer>
            <TextIngredients>Ingredients: {product.ingredients}</TextIngredients>
            <TextInstructions>{product.instructions}</TextInstructions>
          </TextContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity("dec")} style={{cursor:"pointer"}} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity("inc")} style={{cursor:"pointer"}}/>
            </AmountContainer>
            <Button onClick={handleProductClick}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>

      <Newsletter />

      <Footer />
      <Announcement />
    </Container>
  );
};
