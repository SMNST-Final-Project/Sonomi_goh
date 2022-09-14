import { Copyright } from "@mui/icons-material"
import styled from "styled-components"

const Container = styled.div`
height: 30px;

background-color: #bbb5b5;
color: #00274c;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
`
const Text = styled.p`
    font-weight: 900;
    margin-bottom: 25px;
    text-align: center;
`

export const Announcement = () => {
  return (
   <Container>
   <> 
        <Text><Copyright style={{ marginTop: "15",marginRight:"5", fontSize: 20, lineHeight:"5px" }}/>2022 SMNST. All rights reserved.</Text>    
</>
   </Container> 

  )
}
