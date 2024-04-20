import { useState } from 'react'
import { StyledContainer } from './components/styled/StyledContainer'




function App() {
  const [count, setCount] = useState(0)

  return (
    <StyledContainer>
      <h1>styled container has conducted...</h1>
    </StyledContainer>
  )
}

export default App
