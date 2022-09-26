import { useState, useEffect} from 'react'
import styled from 'styled-components';
import axios from "axios"
import StripeCheckout from 'react-stripe-checkout';
import logo from "../../assets/videoBg/9.png"

const Stripe_Public_key= "pk_test_51LguqGDxOlCAVzm0XAuIoFZhWe4wtpAK2z1axfxmo6dQnc4uD6MSvUTxaN0kowv8fXw5AEFVzminlOPpKW4QTlSB00rUrKl9Qf"


const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1550710901-bb7411e532b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fHBsYWluJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60")
      center;
  background-size: cover;
  display: flex;
  align-items: left;
  justify-content: center;
`;

const PayButton = styled.button`
  width: 220px;
  padding: 20px;
  background-color: #ebe2e2;
  color: #000000;
  font-weight: 600;
  margin: 20px;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
`;

export const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null)
  //const history = useHistory();
  
  //onToken
  const onToken = (token) => {
    //console.log(token);
    setStripeToken(token);
  };
  
  useEffect(() => {
    const makeRequest = async () => {
      try{
        const res = await axios.post(
          "http://localhost:5500/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 5500,
          })
          console.log(res.data);
          //history.push("/success")
      }catch(err){
         console.log(err);
      }
    };
    stripeToken && makeRequest();

  },[stripeToken]);


  return (
   < Container>
    {stripeToken ? (<span>Processing. Please wait...</span> ) : (

      
      <StripeCheckout 
      name="Our Company Name" 
      image={logo}
      billingaddress
      shippingAddress
      description = "Total amount is  Є55"
      amount={5500}
      token={onToken}
      stripeKey={Stripe_Public_key}
      >

    <PayButton >
    Pay Now
    </PayButton>
    </StripeCheckout> 
    ) }
    
  
    </Container>
  );
}

