import styled from "styled-components"
import TotalScore  from "./TotalScore"
import NumberSelector from "./NumberSelector"
import RoleDice from './RoleDice'
import { useState } from "react"
const GamePlay = () => {
  const [selectedNumber, setSelectedNumber]= useState(1 )
  const [score, steScore]= useState(0);
  const [currentDice,setCurrentDice]=useState(1);

  const generateRandomNumber= (min,max)=> {
    return Math.floor(Math.random()
  *(max-min) + min)
  };
  const roleDice =() => {
    const randomNumber = generateRandomNumber(1,7);
    setCurrentDice ((prev)=> randomNumber);
    if(selectedNumber == randomNumber){
      steScore((prev)=> prev+randomNumber);

    }
    else{
      steScore ((prev)=> prev-2 )
    }
  }
  return (
    <MainContainer>
        <div className="top-section">
          <TotalScore score={score}/>
          <NumberSelector 
          selectedNumber={selectedNumber}
          setSelectedNumber ={setSelectedNumber}
          />
        </div>
        <RoleDice  currentDice ={currentDice} roleDice={roleDice}/>
    </MainContainer>
  )
}

export default GamePlay
const MainContainer =styled.main`
padding-top: 70px;
.top-section{
  display: flex;
  border:1px solid red;
  justify-content: space-between;
  align-items: center;
  
}
  
`
