import React from 'react';
import { useContext } from 'react';
import { GameStateContext } from '../helper/context';
function Menu(props) {
	const {setGameState, setUserName} = useContext(GameStateContext)
	return (
	<div>
		Quiz App
		<h2>Enter your name:</h2>
		<input type="text" placeholder="Ex. John Smith" onChange={(event)=>{setUserName(event.target.value)}}/>
		<div>
		<button onClick={()=>{
			setGameState("playing")
		}}> Submit Name</button>
		</div>
		
	</div>
	);
}

export default Menu;