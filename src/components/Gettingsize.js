import React from 'react';
import './Gettingsize.css';

const Gettingsize = ({handlenameVlue,handlewidth,handleheight,handleclick}) => {
  return (
    <div className="body">
        <div className="testbox">
          <form>
            <div className="banner">
              <h1>Write Name And Size Of Image</h1>
            </div>
            <div className="item">
              <p>Name :</p>
              <input type="text" name="name" onChange={handlenameVlue}/>
            </div>
            <div className="item">
              <p>Size :</p>
              <div className="name-item">
                <input type="number" name="name" placeholder="Width" onChange={handlewidth}/>
                <input type="number" name="name" placeholder="Height" onChange={handleheight}/>
              </div>
            </div>
            <div className="btn-block">
              <button type="button" onClick={handleclick}>Apply</button>
            </div>
          </form>
        </div>
      </div>
  )
}


export default Gettingsize;