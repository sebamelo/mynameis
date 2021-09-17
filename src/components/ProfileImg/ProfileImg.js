import React, {Component} from 'react';
import './ProfileImg.css'
 
export default class ProfileImgs extends Component {

  constructor(props){
    super(props)
    // no funciona
    this.state = {meme : false}
  }

  render() {
    
    return (                      
      <img src={this.props.image} className={this.props.profileImgClassname} />
    );
  }
}