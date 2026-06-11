import { useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  
  const updateCount = () => setCount(count + multiplier);


  return (
    <div className="App">
      <h1>Samosa Selector</h1>
      <h2>Count: {count}</h2>
      <img src="./src/assets/samosa.png" className="samosa" onClick={updateCount} />

    </div>
  )
}

export default App;