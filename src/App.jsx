import { useState } from 'react'
import { StyledContainer } from './components/styled/StyledContainer'
import { Button } from './components/Button'
import { CoolButton, StrongButton } from './components/Button/Button.styled'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <StyledContainer>
      <h1>styled container has styled...</h1>
      <Button $primary className="btn" style={{marginBottom:"5px"}}>
        Explorer...
        <h1>button has styled...</h1>
        </Button>
        <br />
        <StrongButton $primary>
        Strong Button
        </StrongButton>
        <br />
        <CoolButton>
          Coool Button...
        </CoolButton>
        <br />
    </StyledContainer>
    <h1>styled out of class..</h1>

    </>
   
  )
}

export default App
