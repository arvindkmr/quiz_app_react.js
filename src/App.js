import './App.css';
import {useState} from 'react'
import { GameStateContext } from './helper/context';
import Quiz from './components/Quiz';
import Menu from './components/menu';
function App() {
  const [gameState,setGameState] = useState("menu");
  const [userName,setUserName] = useState("");
  return (
    <div className="app">
      <div className="mainContainer">
      <GameStateContext.Provider value={{gameState, setGameState,userName,setUserName}}>
      {gameState==="menu" && <Menu/>}
      {gameState==="playing" && <Quiz/>}
      </GameStateContext.Provider>
      </div>
    </div>  
  );
}

export default App;
