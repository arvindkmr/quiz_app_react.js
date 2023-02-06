import React,{useContext} from 'react'
import { GameStateContext } from "../helper/context";
import Questions from './Questions';
function Completed() {
const {score,setScore,gameState,userName, setGameState,currQuestion, setCurrQuestion} = useContext(GameStateContext)
	const reset=()=>{
		setCurrQuestion(0)
		setGameState("start")
	}
  return (
    <div>
    <h3>Hey {userName}, you scored</h3>
    <h2>{score}</h2><span>out of</span> <h2>{Questions.length}</h2>
    <button onClick={()=> reset()}> Reset Quiz</button>
    </div>
  )
}

export default Completed;