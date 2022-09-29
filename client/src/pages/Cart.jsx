import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import { Navbar } from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer/Footer";
import { Link } from "react-router-dom";
import { mobile } from "../responsive";
import ShoppingBasket from "@mui/icons-material/ShoppingBasket";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Announcement } from "../components/Announcement/Announcement";
import {
  addProduct,
  removeProduct,
  clearCart,
  decreaseProduct,
  getTotals,
} from "../redux/cartSlice";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 250px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #ebe2e2;
  border: none;
  height: 10px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 45vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
  margin-top: 30px;
`;

const SummaryItem = styled.div`
  margin: 30px 10px;
  display: flex;
  justify-content: space-between;
  //to change the font-weight of total
  font-weight: ${(props) => props.type === "total" && "600"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 80%;
  padding: 10px;
  background-color: #ebe2e2;
  color: #000000;
  font-weight: 600;
  margin-left: 50px;
  text-align: center;
  cursor: pointer;
`;

export const Cart = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleAddProduct = (product) => {
    dispatch(addProduct(product));
  };
  const handleDecreaseProduct= (product) => {
    dispatch(decreaseProduct(product));
  };
  const handleRemoveProduct = (product) => {
    dispatch(removeProduct(product));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const onToken = (token) => {
    setStripeToken(token);
  };

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          {/**continue shopping---styled component*/}

          <Link to={"/productlist"} component={Link}>
            <TopButton>CONTINUE SHOPPING</TopButton>
          </Link>
          <TopTexts>
            <TopText>
              <ShoppingBasket />
              (2)
            </TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>

          {/**Top button */}

          <TopButton onClick={() => handleClearCart()}>CLEAR CART</TopButton>
        </Top>
        <Hr />
        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <Product>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {product.item}
                    </ProductName>
                    <ProductId>
                      <b>Categories</b> {product.categories}
                    </ProductId>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add onClick={() => handleAddProduct(product)} />
                    <ProductAmount>{product.cartQuantity}</ProductAmount>
                    <Remove onClick={() => handleDecreaseProduct(product)} />
                  </ProductAmountContainer>
                  <ProductPrice>
                    $ {product.price * product.quantity}
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}
            <Hr />
          </Info>

          {/**Order Summery */}
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>{cart.cartTotalAmount}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>Є5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>Є -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>{cart.cartTotalAmount} </SummaryItemPrice>
            </SummaryItem>

            {/**Second button */}
            <Link to={"/pay"} component={Link}>
              <Button>CHECKOUT NOW</Button>
            </Link>
          </Summary>
        </Bottom>
      </Wrapper>
      <Hr style={{ marginBottom: "150px" }} />
      <Footer />
      <Announcement />
    </Container>
  );
};
