import React, { useContext, useEffect, useState } from "react";
import "./gridBox.css";
import { GameContext } from "../context";

type gridBoxPropTypes = {
  label?: string;
  color?: string;
};

const GridBox = ({ label }: gridBoxPropTypes) => {
  const [color, setColor] = useState("whitesmoke");

  const [state, dispatch] = useContext(GameContext);

  const handleClick = () => {
    console.log(label);
    setColor("red");
    dispatch({
      type: "addPlayerShipLocation",
      payload: { shipLocations: label },
    });
  };
  return (
    <button
      className="grid-box"
      style={{ backgroundColor: color }}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default GridBox;
