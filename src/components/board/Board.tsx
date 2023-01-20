import React, { useContext, useEffect, useState } from "react";
import styles from "./board.module.css";
import { GameContext } from "../context";
import SquareStack from "../SquareStack/SquareStack";
import { boardProps } from "../types";

const Board = ({ name, grid }: boardProps) => {
  const [shipArray, setShipArray] = useState([2, 3, 4, 5, 6, 7]);
  const [state, dispatch] = useContext(GameContext);
  console.log("state", state);
  return (
    <div>
      <h2>{name}</h2>
      <div className={styles.BoardContainer}>
        <div className={styles.Grid_board}>{grid}</div>
        <section className={styles.ShipSelectionContainer}>
          {shipArray.map((count) => {
            return <SquareStack count={count} />;
          })}
        </section>
      </div>
      <span>{shipArray}</span>
    </div>
  );
};

export default Board;
