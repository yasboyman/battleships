import React from 'react';
import './gridBox.css'

type gridBoxPropTypes = {
    label?: string,
    color?: string,
}

const GridBox = ({label, color}: gridBoxPropTypes) => {
    return (
        <button className="grid-box" style={{ backgroundColor: color}}>
            {label}
        </button>
    );
};

export default GridBox;
