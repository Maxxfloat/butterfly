import React, { Component } from 'react';
import './Gettingsize.css';

class Gettingsize extends Component {
  render (){
    return (
        <div className="body">
            <div class="testbox">
              <form >
                <div class="banner">
                  <h1>Write Name And Size Of Image</h1>
                </div>
                <div class="item">
                  <p>Name :</p>
                  <input type="text" name="name"/>
                </div>
                <div class="item">
                  <p>Size :</p>
                  <div class="name-item">
                    <input type="number" name="name" placeholder="Width" />
                    <input type="number" name="name" placeholder="Height" />
                  </div>
                </div>
                <div class="btn-block">
                  <button type="submit" href="/">Apply</button>
                </div>
              </form>
            </div>
          </div>
    )
  }
    
}

export default Gettingsize;