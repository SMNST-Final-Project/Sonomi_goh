import { useState, useEffect } from "react";
import styled from "styled-components";
import Product from "./Product";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  
`;

export const Products = ({ category }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const targetUrl = category
          ? `https://sonomi.herokuapp.com/products?category=${category}`
          : "https://sonomi.herokuapp.com/products";
        const res = await axios.get(targetUrl, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        console.log("my category", category);
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [category]);

  return (
    <Container>
      {category
        ? products.map((item) => <Product item={item} key={item.id} />)
        : products
            .slice(0, 5)
            .map((item) => <Product item={item} key={item.id} />)}
    </Container>
  );
};