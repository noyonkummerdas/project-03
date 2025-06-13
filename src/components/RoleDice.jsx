
import styled from "styled-components"
const RoleDice = ({roleDice,setCurrentDice}) => {

  return (
    <DiceContainer>
    <div className="dice"
      onClick={roleDice}>
      <img src={`/public/images/dice/dice_${roleDice}.png`} alt="" />
    </div>
    <p>Click on Dice to roll </p>
    </DiceContainer>
  )   
}

export default RoleDice
const DiceContainer = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 48px;
.dice{
    cursor: pointer;
}
    
`
