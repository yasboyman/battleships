import React, { Dispatch, useContext } from "react";
import styles from "./squareStack.module.css";
import { ActionType, StateType } from "../types";
import { GameContext } from "../context";

interface Props {
  count: number;
}

const SquareStack: React.FC<Props> = ({ count }) => {
  const [state, dispatch] =
    useContext<[StateType, Dispatch<ActionType>]>(GameContext);

  let boxes = [];
  for (let i = 0; i < count; i++) {
    boxes.push(
      <div
        key={i}
        className={styles.Box}
        onClick={() => dispatch({ type: "SET_ACTIVE_SHIP", payload: count })}
      />
    );
  }
  return <div>{boxes}</div>;
};

export default SquareStack;
