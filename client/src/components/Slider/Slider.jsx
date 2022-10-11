import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../../dataset/datasetExample";
import {Link} from "react-router-dom"
import Button from "@mui/material/Button";


const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  background-color:  #ebe2e2;
  position: relative;
  overflow: hidden;
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #ebe2e2;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  //for positioning of arrows we are using props
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

//carousal
const Wrapper = styled.div`
    height: 100%;
    margin-top: 50px;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
width: 100vw;
height: 100vh;

    display: flex;
    align-items: center;
    border-right: 35px;
    border-left: 15px;
    border-bottom: 15px;
    border-style: solid;
    border-color: #ebe2e2;
    background-color: #${(props) => props.bg};
`;
const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`;
const Image = styled.img`
    height: 80%;
    margin-left:5px;
`;

const InfoContainer = styled.div`
flex: 1;
padding: 30px;
`;

const Title = styled.h1`
 font-size: 70px;
`;

const Desc = styled.p`
margin: 50px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;
`;


const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
//handleClick
 const handleClick = (direction) => {
if(direction === "left"){
    setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2 )
}else {
    setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
}
 };

  return (
    <Container>
      <Arrow direction="left" onClick={()=>handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
    <Wrapper slideIndex={slideIndex} >
     
     {sliderItems.map((item) => (
       <Slide bg={item.bg} key={item.id}>

         <ImgContainer >
        <Image src={item.img} /> 
         </ImgContainer>

      <InfoContainer>
       <Title>{item.title}</Title> 
       <Desc>{item.desc}</Desc> 

        <Button
            variant="text"
            component={Link}
            to={"/home"}
            style={{ 
              color: "black",
              backgroundColor: "transparent",
              cursor: "pointer",
              border:"1px solid black",
              marginLeft: "5px",
              fontSize: 20 }}
          >
            Find Out More
           
          </Button>


        </InfoContainer>

        </Slide> 

     ))}
        </Wrapper> 
      <Arrow direction="right" onClick={()=>handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
