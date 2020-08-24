import react from 'react';

const images = () => {
    let size = "";
    let images = "https://picsum.photos/" + size;
    return (
        <div>
            <img src={ images }></img>
        </div>
    )
}

export default images;