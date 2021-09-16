import React, {Component} from 'react';
import ProfileImgs from '../ProfileImg/ProfileImg';
import SocialMedia from '../SocialMedia/SocialMedia';
import TypeLoop from '../TypeLoop';

import './MainProfile.css'
 
export default class MainProfile extends Component {
 
  
  render() {
    return (
      <div>
        
        <ProfileImgs/>
        <h1 className="profile-title">Sebastian Fernando Melo</h1>
        <TypeLoop></TypeLoop>
        <SocialMedia/>

          
      </div>
  );
  }
}