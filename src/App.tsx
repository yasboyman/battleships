import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import GridBox from "./components/gridBox/gridBox";
import gridBox from "./components/gridBox/gridBox";
import { createGrid } from "./components/utils/utils";

const App = () => {
  const [count, setCount] = useState(0);
  const [player1, setPlayer1] = useState({
    name: "player 1",
    grid: createGrid(),
    isPlayerActive: false,
    shipLocations: [],
  });
  const [computer, setComputer] = useState({
    name: "computer",
    grid: createGrid(),
    isPlayerActive: false,
    shipLocations: [],
  });

  useEffect(() => {
    console.log("rendered");
  }, []);

  return (
    <div className="App">
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <section>
          <h2>{player1.name}</h2>
          <div className="grid-board">{player1.grid}</div>
        </section>
        <section>
          <h2>{computer.name}</h2>
          <div className="grid-board">{computer.grid}</div>
        </section>
      </div>
    </div>
  );
};

export default App;
