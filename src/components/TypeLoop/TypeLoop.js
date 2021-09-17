import React, {Component} from 'react';
import Typed from 'react-typed';

import './TypeLoop.css'
 
export default class TypeLoop extends Component {
  
  constructor(props){
    super(props)
    this.state = {startDelay : 2100}
    this.makeTimer()
  }

  makeTimer(){
    setInterval(() => {
        this.setState({startDelay: 0})
    }, 2500)
  }
  
  render() {
    return (
      <div className="type-loop-wrapper">
        <Typed
        // recive array
          strings={this.props.mynameis}
          typeSpeed={60}
          showCursor={false}
          className="typed-text"
        />
        <Typed
          strings={[
            "'m a web developer",
            "'m a web designer",
            "'m a freelancer"]}
          typeSpeed={60}
          backSpeed={50}
          startDelay={this.state.startDelay}
          className="typed-text"
          loop
        />
          
      </div>
  );
  }
}