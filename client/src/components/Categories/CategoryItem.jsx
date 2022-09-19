import styled from "styled-components";
import { mobile } from "../../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
//most of the image properties are in-relation to container
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.7;
  ${mobile({ height: "30vh" })}
`;
const Info = styled.div`
  position: absolute; //absolute in relation to container
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  //background-color: teal;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  color: black;
  margin-bottom: 20px;
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: #ebe2e2;
  color: #211d1d;
  cursor: pointer;
  font-weight: 600;
`;

export const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products?category=${item.categories}`}>
        <Image src={item.img} />
        <Info>
          <Title> {item.title} </Title>
          <Button>Instant Buy</Button>
        </Info>
      </Link>
    </Container>
  );
};
