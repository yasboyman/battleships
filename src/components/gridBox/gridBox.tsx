import React, {useState} from 'react';
import './gridBox.css'
import {usePlayerContext , setContextValue} from "../context";

type gridBoxPropTypes = {
    label?: string,
    color?: string,
}

const GridBox = ({label}: gridBoxPropTypes) => {
const [color, setColor] = useState('whitesmoke');

    const { player, computer } = usePlayerContext();


    const handleClick = (e) => {
     setColor('red')
        const updatedPlayer = {
          ...player,
          isPlayerActive: !player.isPlayerActive,
          shipLocations: [...player.shipLocations, e.target.value],
        };
   }
    return (
        <button className="grid-box" style={{ backgroundColor: color}} onClick={ (e) =>  handleClick(e)}>
            {label}
        </button>
    );
};

export default GridBox;
