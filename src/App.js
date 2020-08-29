import React, {Component} from 'react';
import Images from './components/Images'
import Gettingsize from './components/Gettingsize';

class App extends Component {
  constructor (){
    super()
    this.state = {
      nameValue : '',
      widthValue :'',
      heightValue : '',
      path : ''
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
  handleclick = (event) => {
    console.log("handclick")
    const {nameValue,widthValue} = this.state;
    if (nameValue === '' || widthValue === ''){
      this.setState({path : ''})
    }
    else {
      return this.setState({path : `https://api.adorable.io/avatars/${widthValue}/${nameValue}`})
    }
  }
  render (){
    
    
    return (
      <div className="App">
        <Gettingsize 
          handlenameValue={this.handlenameValue} 
          handlewidth={this.handlewidth} 
          handleheight = {this.handleheight} 
          handleclick={this.handleclick}
        />
        <Images path = {this.state.path}/>
      </div>      
    );
  }
}

export default App;
