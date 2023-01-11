import React, { useContext, useState } from "react";
import './gridBox.css'
import {GameContext } from "../context";

type gridBoxPropTypes = {
    label?: string,
    color?: string,
}

const GridBox = ({label}: gridBoxPropTypes) => {
const [color, setColor] = useState('whitesmoke');

  const [state, dispatch] = useContext(GameContext);
  const { player, computer } = state;

  console.log('this si the player:', player.shipLocations)

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
     setColor('red')
      dispatch('addPlayerShipLocation', e.target.value )

   }
    return (
        <button className="grid-box" style={{ backgroundColor: color}} onClick={ (e) =>  handleClick(e)}>
            {label}
        </button>
    );
};

export default GridBox;
