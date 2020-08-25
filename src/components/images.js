import React from 'react';

//photolink is property (destructur as prop.photolink) that set image url
const Images = ({photolink}) => {
    return (
        <img alt='dos' src={photolink}/>
    ) 
}

export default Images;