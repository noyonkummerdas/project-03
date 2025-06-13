import styled from "styled-components"

const StartGame = ({toggle}) => {
  return (
    <Container>
       <div>
        <img src="/public/images/dices 1.png" alt="" />
       </div>
       <ContainerInfo >
        <h1>
            DINAMIC LUDO
        </h1>
        <Button onClick={toggle} >Play Now</Button>
       </ContainerInfo>
    </Container>
  )
}

export default StartGame
const Container = styled.div`
max-width: 1180px;
margin: 0 auto;
display: flex;
align-items: center;
justify-content: space-around;  
`

const ContainerInfo = styled.div`
h1{
    font-size: 43px;
    width: 522px;
    white-space: nowrap;
    font-weight:900;
}
    
`
const Button = styled.button`
    font-size: 16px;
    font-weight: 600;
    padding: 10px 10px;
    border:none;
    border-radius: 5px;
    background-color: black;
    color: white;
    min-width: 220px;
    cursor: pointer;
    &:hover{
        background-color: white;
        color: black;
        border: 1px solid black;
        font-weight: 600;

    }
`


