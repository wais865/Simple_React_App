import './App.css';
import { useState } from 'react';

function App() {
const [welcome,setWelcome] = useState("welcome Wais Alizada");
const handleWelcome = () => {
  setWelcome("after welcome you did it!");
};

  return (
    <div className="App">
      <h1>{welcome}</h1>
      <button onClick={handleWelcome}>click me</button>
    </div>
    
  );
}

export default App;
