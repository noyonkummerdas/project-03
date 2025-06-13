import styled from "styled-components"

const TotalScore = ({score}) => {
  return (
    <ScoreContainer>
         <h1>
            {score}
        </h1>
         <p>Total Score</p>
    </ScoreContainer>
    
  )
}

export default TotalScore

const ScoreContainer = styled.div`
h1{
    max-width: 200px;
    margin-bottom: 0px;
    align-items: center;
    /* background-color: red; */
    font-size: 100px;
    font-weight: 900;
    line-height: 100px;
    text-align: center;

}
p{
    font-size: 24px;
    font-weight: 500px;
     max-width: 200px;
    /* background-color: red; */
    margin-top: 0px;
    text-align: center;
}
    
`