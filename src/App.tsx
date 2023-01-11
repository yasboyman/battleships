import { useContext, useEffect, useState } from "react";
import "./App.css";
import { GameContext } from "./components/context";

const App = () => {
  const [count, setCount] = useState(0);

  const [state, dispatch] = useContext(GameContext);
  const { player, computer } = state;

  const shipArray = [2, 3, 4, 5, 6, 7];
  /*
  //TODO:  - refactor player/computer section into its own reusable component once logic complete
    */
  return (
    <GameContext.Provider value={[state, dispatch]}>
      <div className="App">
        <h1>React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <section className={'playerSection'}>
            <h2>{player.name}</h2>
            <div className="grid-board">{player.grid}</div>
          </section>
          <section className={'computerSection'}>
            <h2>{computer.name}</h2>
            <div className="grid-board">{computer.grid}</div>
          </section>
        </div>
      </div>
    </GameContext.Provider>
  );
};

export default App;

//  Tickets: //
/*TODO:     Ship location:
          - add array for ship length
          - add logic for user to select ship location and save to state, in context
          - once player has added/completed shipsArray, isPlayerReady should be set to true
          */


/*
//TODO:  - add logic to allow user to select ship location with only certain criteria, up down, no diagonal
        - add tests
  */

/*
//TODO:     - add logic for computer to generate ship locations
          - add tests
 */
