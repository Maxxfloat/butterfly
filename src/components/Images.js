import React from 'react';
import 'tachyons';
import './Images.css';

const Images = ({path}) => {
    if (path === ''){
        return (
            <h1 className="tc">ENTER PROPERTY</h1>
        )
    }    
    else {
        return (
            <div className='tc'>
                <img alt='dos' src={path} />
            </div>
        )
    }
}

export default Images;
