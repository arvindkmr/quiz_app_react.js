import './App.css';
import {useState} from 'react'
import { GameStateContext } from './helper/context';
import Quiz from './components/Quiz';
import Menu from './components/menu';
import Completed from './components/Completed';
function App() {
  const [gameState,setGameState] = useState("start");
  const [userName,setUserName] = useState("");
  const [currQuestion, setCurrQuestion]= useState(0);
	const [score,setScore] =useState(0);
	
  return (
    <div className="app">
      <div className="mainContainer">
      <GameStateContext.Provider value={{gameState, setGameState,userName,setUserName,currQuestion, setCurrQuestion, score,setScore}}>
      {gameState==="start" && <Menu/>}
      {gameState==="playing" && <Quiz/>}
      {gameState==="completed" && <Completed/>}
      </GameStateContext.Provider>
      </div>
    </div>  
  );
}

export default App;
