import React from 'react';

import './ColorSquare.css';

export const ColorSquare = ({width,color}) => {
    color = color || 'red';
    let height = width;
    let style = {backgroundColor:color, width, height};

    return <span className='colorSquare' style={style} />;
}