
import styled from "styled-components"

const NumberSelector = ({selectedNumber, setSelectedNumber ,}) => {
  const numberArray = [1,2,3,4,5,6];
  return (
    <NumberSelectorContainer>
    <div className="flex">
      {
        numberArray.map((value,i)=> (
          
            <Box
            isSelected={
              value == selectedNumber
            }
            onClick={()=>setSelectedNumber(value)} // anunimus function ()=>
            key={i}
            >{value}</Box>
            
        ))
       
      }
    </div>
    <p>Select Number</p>
    </NumberSelectorContainer>
  )
}

export default NumberSelector
const NumberSelectorContainer =styled.div`
display: flex;
flex-direction: column;
align-items: end;
  p{
    font-size:24px ;
  }
  .flex {
    display: flex;
    gap: 24px;
  }
`
const Box =styled.div`
height:72px;
width:72px ;
border: 1px solid black;
display: grid;
place-items: center;
font-size: 24px;
font-weight: 700;
background-color:${(props)=>props.isSelected? "black": 'white'};
color:${(props)=>!props.isSelected? "black": 'white'};
`
