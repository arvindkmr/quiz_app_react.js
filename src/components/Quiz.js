import "../App.css";
import React from 'react'	
import { useState } from "react";
import Questions from "./Questions";
function Quiz() {

	const [currQuestion, setCurrQuestion]= useState(0);
	const [option,setOption] =useState("");

	const answerClick = (props)=>{
		setOption(props);
		setCurrQuestion(curr=>{
			return curr+1
		})git 
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
	{option}
    </div>
  )
}

export default Quiz