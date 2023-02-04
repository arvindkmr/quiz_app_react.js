import React,{useContext} from 'react'
import { GameStateContext } from "../helper/context";
import Questions from './Questions';
function Completed() {
const {score,setScore,gameState, setGameState,currQuestion, setCurrQuestion} = useContext(GameStateContext)
	const reset=()=>{
		setCurrQuestion(0)
		setGameState("start")
	}
  return (
    <div><h2>{score}</h2><span>out of</span> <h2>{Questions.length}</h2>
    <button onClick={()=> reset()}> Reset Quiz</button>
    </div>
  )
}

export default Completed;