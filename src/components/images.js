import React , {Component} from 'react';

let wsize ="200";
let hsize ="200"
let images = `https://picsum.photos/${hsize}/${wsize}`;

class Images extends Component {
    

    render (){
        return (
            <div>
                <img src={ images } alt ="dog"></img>
            </div>
        )
    }
    
}

export default Images;