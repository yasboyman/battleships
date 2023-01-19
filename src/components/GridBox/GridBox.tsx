import React, { useContext, useState, Dispatch } from "react";
import styles from "./gridBox.module.css";
import { GameContext } from "../context";
import { ActionType, gridBoxPropTypes, PlayerType, StateType } from "../types";
import { checkNumbers } from "../utils/utils";

const GridBox = ({ label }: gridBoxPropTypes) => {
  const [color, setColor] = useState("whitesmoke");

  const [state, dispatch] = useContext<[StateType, Dispatch<ActionType>]>(GameContext);

  let player: PlayerType;
  if ("player" in state) {
    player = state.player;
  }

  const handleClick = () => {
    // @ts-ignore
    if (state.player.isPlayerReady === false) {
      const lastShip = player.shipLocations.length - 1;
      const lastNumber = player.shipLocations[lastShip];
      if (state.player.shipLocations.length === 0) {
        setColor("red");
        dispatch({
          type: "ADD_PLAYER_SHIP_LOCATION",
          payload: {
            shipName: "ship 1",
            location: [1, 4, 5, 6],
          },
        });
      } else if (checkNumbers(lastNumber, label)) {
        setColor("red");
        dispatch({
          type: "ADD_PLAYER_SHIP_LOCATION",
          payload: {
            shipName: "ship 2",
            location: [1, 2],
          },
        });
      }
    }
  };
  return (
    <button
      className={styles.Grid_box}
      style={{ backgroundColor: color }}
      onClick={handleClick}
      // onMouseOver={handleMouseHover}
    >
      {label}
    </button>
  );
};

export default GridBox;
