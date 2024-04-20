import { styled } from "styled-components"

export const StyledButton = styled.button`
padding: 8px 12px;
border: 1px solid #3498db;
border-radius:6px;
background-color: ${ (props) => {
    console.log(props)
    return props?.$primary ? "#3498db":"transparent"
} };
color:${ ({$primary}) => $primary ? "white":"black" };

&:hover {
    background-color: ${(props) => props?.$primary ? "#1abc9c" : "#e67e22"};
}
`
// const name = "Bora"
// const info = `${() => "Ferit"}`




//Extend yapısı uygulandı...

export const StrongButton = styled(StyledButton)`
border-width: 5px;
`

export const CoolButton = styled(StyledButton)`
  background-image: linear-gradient(to right, #003973 0%, #E5E5BE  51%, #003973  100%);
  margin: 10px;
  padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;            
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;

 &:hover {
 background-position: right center; /* change the direction of the change here */
 color: #fff;
 text-decoration: none;
          }`
