import React from "react";
import "./board.module.css";

type boardProps = {
  name: string
  grid: React.ReactNode
  shipArray: number[]
}

const Board = ({ name, grid, shipArray }: boardProps) => {
  return (
    <div>
      <h2>{name}</h2>
      <div className="grid-board">{grid}</div>
      <span>{shipArray}</span>
    </div>
  );
};

export default Board;
