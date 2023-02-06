import "../App.css";
import React, { useContext } from 'react'	
import Questions from "./Questions";
import { GameStateContext } from "../helper/context";

function Quiz() {
	const {currQuestion, setCurrQuestion,setScore, setGameState} = useContext(GameStateContext)
	const answerClick = (props)=>{
		if(Questions[currQuestion].answer===props){
			setScore((curr)=> curr+1)
		}
		if(currQuestion===Questions.length-1){
			setGameState("completed")
		}else{
			setCurrQuestion(curr=>{
				return curr+1
			})
		}
	}
  	return (
  	  <div>
		<h2>
		Playing mode
		</h2>
		<h3>
		{Questions[currQuestion].prompt}
		</h3>
	<div className="question">
		<button className="quesButton" onClick={()=>answerClick("optionA")}>{Questions[currQuestion].optionA}</button>
		<button className="quesButton" onClick={()=>answerClick("optionB")}>{Questions[currQuestion].optionB}</button>
		<button className="quesButton" onClick={()=>answerClick("optionC")}>{Questions[currQuestion].optionC}</button>
		<button className="quesButton" onClick={()=>answerClick("optionD")}>{Questions[currQuestion].optionD}</button>
	</div>
	
		<button className="quesButton" onClick={()=> setCurrQuestion((curr)=>curr+1)}>Skip Question</button>
    </div>
  )
}

export default Quiz