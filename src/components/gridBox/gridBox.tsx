import React, { useContext, useState } from "react";
import "./gridBox.css";
import { GameContext } from "../context";

type gridBoxPropTypes = {
  label?: string;
  color?: string;
};

const GridBox = ({ label }: gridBoxPropTypes) => {
  const [color, setColor] = useState("whitesmoke");

  const [state, dispatch] = useContext(GameContext);
  const { player, computer } = state;

  console.log("this is the player obj", player);

  const handleClick = (e) => {
    console.log(e.target.value)
    console.log(label)
    setColor("red");
    // dispatch({ type: "addPlayerShipLocation", location: e.target.value });
  };
  return (
    <button
      className="grid-box"
      style={{ backgroundColor: color }}
      onClick={(e) => handleClick(e)}
    >
      {label}
    </button>
  );
};

export default GridBox;
