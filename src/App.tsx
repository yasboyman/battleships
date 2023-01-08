import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import GridBox from "./components/gridBox/gridBox";
import gridBox from "./components/gridBox/gridBox";

const App = () => {
  const [count, setCount] = useState(0);

      const grid = []
      for (let row = 0; row < 1; row++) {
          grid.push([])
          for (let col = 1; col <= 90; col++) {
              grid[row].push(<GridBox key={`${col}`} color="whitesmoke" label={col}/>)
          }
      }
      console.log(grid)




  return (
    <div className="App">
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <div className="grid-board">{grid}</div>
      </div>
    </div>
  );
};

export default App;
