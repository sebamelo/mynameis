import React, {Component} from 'react';
import Typed from 'react-typed';

import './TypeLoop.css'
 
export default class TypeLoop extends Component {
  
  constructor(props){
    super(props)
    this.state = {startDelay : 2400}
    this.makeTimer()
  }

  makeTimer(){
    setInterval(() => {
        this.setState({startDelay: 0})
    }, 2400)
  }
  
  render() {
    return (
      <div>
        <Typed
          strings={['Hi! my name is Seba and i ']}
          typeSpeed={60}
          showCursor={false}
          className="typed-text"
        />
        <Typed
          strings={[
            "'m web developer",
            "'m web designer",
            "'m freelancer"]}
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