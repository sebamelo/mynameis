import React, {Component} from 'react';
import ProfileImgs from '../ProfileImg/ProfileImg';
import SocialMedia from '../SocialMedia/SocialMedia';
import TypeLoop from '../TypeLoop/TypeLoop';

import './MainProfile.css'
 
export default class MainProfile extends Component {

  constructor(props){
    super(props)
  }
   
  render() {
    return (
      <div>
        
        <ProfileImgs image ={this.props.image} profileImgClassname={this.props.profileImgClassname}/>
        <h1 className="profile-title">Sebastian Fernando Melo</h1>
        <TypeLoop mynameis={["Hi! My name is Seba and i"]}></TypeLoop>
        <SocialMedia/>

          
      </div>
  );
  }
}