import React, {Component} from 'react';
import Typist from 'react-typist';
 
export default class Typing extends Component {

  render() {
    return (
      <Typist  className="asdasd" cursor={{ hideWhenDone: true,
                                            hideWhenDoneDelay: 1, } }>
        
      </Typist>
      
    );
  }
}