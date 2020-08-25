import React, {Component} from 'react';
import Images from './components/Images'

//photokink is property that get url to aply and i use it in image.js as property
class App extends Component {
  constructor (){
    super()
    this.state = {
      photolink : ''
    }
  }
  render (){
    return (
      <div className="App">
        <Images photolink={this.state.photolink}/>
      </div>
    );
  }
}

export default App;
