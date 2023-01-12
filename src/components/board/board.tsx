import React, { useContext, useEffect } from "react";
import "./board.module.css";
import { GameContext } from "../context";

type boardProps = {
  name: string
  grid: React.ReactNode
  shipArray: number[]
}

const Board = ({ name, grid, shipArray }: boardProps) => {
  const [state, dispatch] = useContext(GameContext);

  console.log('state', state)

  return (
    <div>
      <h2>{name}</h2>
      <div className="grid-board">
        {grid}
      </div>
      <span>{shipArray}</span>
    </div>
  );
};

export default Board;
