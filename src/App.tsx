import { useContext, useEffect, useState } from "react";
import "./App.css";
import { GameContext } from "./components/context";

const App = () => {
  const [count, setCount] = useState(0);

  const [state, dispatch] = useContext(GameContext);
  const { player, computer } = state;

  return (
    <GameContext.Provider value={{state, dispatch}}>
      <div className="App">
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <section>
            <h2>{player.name}</h2>
            <div className="grid-board">{player.grid}</div>
          </section>
          <section>
            <h2>{computer.name}</h2>
            <div className="grid-board">{computer.grid}</div>
          </section>
        </div>
      </div>
    </GameContext.Provider>
  );
};

export default App;
