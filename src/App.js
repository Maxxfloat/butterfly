import React, {Component} from 'react';
import Gallery from './components/Gallery';
import Size from './components/Gettingsize';
class App extends Component {
  render (){
    return (
      <div className="App">
        <Size/>
        {/* <Gallery/> */}
      </div>
    );
  }
}

export default App;
