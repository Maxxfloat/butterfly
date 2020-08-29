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
      applyclicked : false,
    }
  }
  handlenameValue = (event) => {
    console.log("handlenamevalue");
    this.setState({nameValue: event.target.value});
  }
  handlewidth = (event) => {
    console.log("handlewidth");
    this.setState({widthValue: event.target.value});
  }
  handleheight = (event) => {
    console.log("handleheight");
    this.setState({heightValue: event.target.value})
  }
  handleclick = () => {
    console.log("didsumbit runs")
    return this.setState({applyclicked : !this.state.applyclicked})
  }
  render (){
    if (this.state.applyclicked === true){
      return <Images applyclicked = {this.state.applyclicked}/>
    }
    return (
      <div className="App">
        <Gettingsize 
          handlenameVlue={this.handlenameValue} 
          handlewidth={this.handlewidth} 
          handleheight = {this.handleheight} 
          handleclick={this.handleclick}
        />
      </div>      
    );
  }
}

export default App;
