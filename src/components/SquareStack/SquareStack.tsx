import React, { Dispatch, useContext, useState } from "react";
import styles from "./squareStack.module.css";
import { ActionType, StateType } from "../types";
import { GameContext } from "../context";

interface Props {
  count: number;
}

const SquareStack: React.FC<Props> = ({ count }) => {
  const [active, setActive] = useState(false);
  const [state, dispatch] =
    useContext<[StateType, Dispatch<ActionType>]>(GameContext);

  const handleSquareClick = () => {
    dispatch({ type: "SET_ACTIVE_SHIP", payload: count });
  };
  let boxes = [];
  for (let i = 0; i < count; i++) {
    boxes.push(
      <div key={i} className={styles.Box} onClick={handleSquareClick} />
    );
  }
  return <div className={styles.boxContainer}>{boxes}</div>;
};

export default SquareStack;
