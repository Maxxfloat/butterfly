import React, {Component} from 'react';
import Images from './components/Images'
import Gettingsize from './components/Gettingsize';

//photokink is property that get url to aply and i use it in image.js as property
class App extends Component {
  constructor (){
    super()
    this.state = {
      nameValue : '',
      widthValue :'',
      heightValue : '',
    }
  }
  handlenameVlaue = (event) => {
    this.setState({nameValue: event.target.value})
  }
  handlewidth = (event) => {
    this.setState({widthValue: event.target.value});
  }
  handleheight = (event) => {
    this.setState({heightValue: event.target.value})
  }
  render (){
    return (
      <div className="App">
        <Gettingsize handlenameVlaue={this.handlenameVlaue} handlewidth={this.handlewidth} handleheight = {this.handleheight}/>
        <Images nameValue={this.state.nameValue} widthValue = {this.state.widthValue} heightValue = {this.state.heightValue} />
      </div>
    );
  }
}

export default App;
