import { useState } from 'react'
import { StyledContainer } from './components/styled/StyledContainer'
import { Button } from './components/Button'
import { CoolButton, StrongButton, SubmitButton } from './components/Button/Button.styled'
import { FaAppleWhole, FaCanadianMapleLeaf   } from "react-icons/fa6";
import { keyframes, styled } from 'styled-components';


const rotate = keyframes`
from {
transform: rotate(0deg);
}
to {
transform: rotate(360deg);
}
`
const CanadaStyledIcon = styled(FaCanadianMapleLeaf)`
font-size:40px;
animation: ${rotate} 3s linear infinite ;
color: ${ (props) => props.theme.colors.canada };
`

const StyledImg = styled.img`
animation: ${rotate} 10s linear infinite ;
width : 100%;
padding: 4px;
border: 1px solid blue;
border-radius:4px;
`

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <StyledContainer>
      <StyledImg src="https://picsum.photos/id/25/1200/300" />
      <hr />
      <CanadaStyledIcon />
      <FaAppleWhole style={{fontSize:"50px", height:"60px"}} />
      <FaCanadianMapleLeaf style={{fontSize:"50px"}}/>
      <h1>styled container has styled...</h1>
      <Button $primary className="btn" style={{marginBottom:"5px"}}>
        Explorer...
        <h1>button has styled...</h1>
        </Button>
        <br />
        <StrongButton $primary >
        Strong Button
        </StrongButton>
        <br />
        <CoolButton as="a" href="http://google.com" target="_blank">
          Coool Button...
        </CoolButton>
        <br />
        <SubmitButton $primary>
          Submit...
        </SubmitButton>
    </StyledContainer>
    <h1>styled out of class..</h1>

    </>
   
  )
}

export default App
