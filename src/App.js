import './App.css';
import {useState} from 'react'

function App() {
  const [name,setName] = useState('');
  return (
    <div className="app">
      <div className="mainContainer">
        <input type="text" value={name} onChange={(event)=> setName(event.target.value)} />
      </div>
    </div>
  );
}

export default App;
