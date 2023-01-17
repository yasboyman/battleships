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


console.log('thios is the payer,' , state?.player)
console.log('tstate,' ,state )
  const handleClick = () => {

    if(state.player.isPlayerReady === false){
      console.log(label);
      setColor("red");
      dispatch({
        type: "addPlayerShipLocation",
        payload: label ,
      });
    }
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
