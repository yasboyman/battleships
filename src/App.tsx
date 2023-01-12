import { useContext, useEffect, useState } from "react";
import "./App.css";
import { GameContext , GameProvider} from "./components/context";
import Board from "./components/board/board";

const App = () => {
  const [count, setCount] = useState(0);

   const [state, dispatch] = useContext(GameContext);

  useEffect(() => {
    console.log('state', state)
  }, []);

  // console.log('state FROM APP', state)

  return (
    <GameProvider >
      <div className="App">
        <h1>React</h1>
        <div className="card">
          <button onClick={() => {
            setCount(count + 1);
          }}>
            count is {count}
          </button>
          <section className={"playerSection"}>
            <Board
              name={state.player.name}
              grid={state.player.grid}
              shipArray={state.player.shipArray}
            />
          </section>
          <section className={"computerSection"}>
            <Board
              name={state.computer.name}
              grid={state.computer.grid}
              shipArray={state.computer.shipArray}
            />
          </section>
        </div>
      </div>
    </GameProvider >
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
