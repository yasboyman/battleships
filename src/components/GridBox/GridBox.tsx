import React, { useContext, useState, Dispatch } from "react";
import styles from "./gridBox.module.css";
import { GameContext } from "../context";
import { ActionType, gridBoxPropTypes, PlayerType, StateType } from "../types";
import { checkNumbers } from "../utils/utils";

const GridBox = ({ label }: gridBoxPropTypes) => {
  const [color, setColor] = useState("whitesmoke");
  const [shipArray, setShipArray] = useState([2,3,4,5,6]);
  const [hovering, setHovering] = useState(false);
  const [highlighted, setHighlighted] = useState([]);

  const [state, dispatch] =
    useContext<[StateType, Dispatch<ActionType>]>(GameContext);

  let player: PlayerType;
  if ("player" in state) {
    player = state.player;
  }
  console.log(highlighted);
  console.log('hovering', hovering);

  const handleClick = () => {
    // @ts-ignore
    if (state.player.isPlayerReady === false) {
      const lastShip = player.shipLocations.length - 1;
      const lastNumber = player.shipLocations[lastShip];
      if (state.player.shipLocations.length === 0) {
        setColor("red");
        setHighlighted([1, 4, 5, 6]);
        dispatch({
          type: "ADD_PLAYER_SHIP_LOCATION",
          payload: {
            shipName: "ship 1",
            location: [1, 4, 5, 6],
          },
        });
      } else if (checkNumbers(lastNumber, label)) {
        setColor("red");
        setHighlighted([1, 2]);
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

  const handleMouseHover = () => {
    setHovering(!hovering);
    if (!hovering) {
      let newHighlighted = [label];
      for (let i = 1; i < shipArray[0]; i++) {
        newHighlighted.push(label + i);
      }
      setHighlighted(newHighlighted);
    } else {
      setHighlighted([]);
    }
  }

  return (
    <button
      className={styles.Grid_box}
      style={{ backgroundColor: color, color: highlighted.includes(label) ? 'blue': 'black'}}
      onClick={handleClick}
      //   onMouseOver={handleMouseHover}
      // onMouseLeave={handleMouseHover}
    >
      {label}
    </button>
  );
};

