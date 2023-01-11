import { useContext, useEffect, useState } from "react";
import "./App.css";
import { GameContext } from "./components/context";
import Board from "./components/board/board";

const App = () => {
  const [count, setCount] = useState(0);

  const [state, dispatch] = useContext(GameContext);
  const { player, computer } = state;

  return (
    <GameContext.Provider value={[state, dispatch]}>
      <div className="App">
        <h1>React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <section className={"playerSection"}>
            <Board
              name={player.name}
              grid={player.grid}
              shipArray={player.shipArray}
            />
          </section>
          <section className={"computerSection"}>
            <Board
              name={computer.name}
              grid={computer.grid}
              shipArray={computer.shipArray}
            />
          </section>
        </div>
      </div>
    </GameContext.Provider>
  );
};
export default App;

//  Tickets: //
/*TODO:     Ship location:
          ✅- add array for ship length
          - add logic for user to select ship location and save to state, in context
          - once player has added/completed shipsArray, isPlayerReady should be set to true
          */

/*
 //TODO:  ✅- refactor player/computer section into its own reusable component once logic complete
   */
/*
//TODO:  - add logic to allow user to select ship location with only certain criteria, up down, no diagonal
        - add tests
  */

/*
//TODO:     - add logic for computer to generate ship locations
          - add tests
 */
