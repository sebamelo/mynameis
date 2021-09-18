import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
    faGithub,
    faDiscord,
    
  } from "@fortawesome/free-brands-svg-icons";

import './SocialMedia.css'

export default function SocialMedia() {
    return (
      <div class="social-container">
        <a href="https://www.instagram.com/seba.melo/" className="social-icon" target='_blank'>
            <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://github.com/sebamelo" className="social-icon" target='_blank'>
            <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://twitter.com/SebaaMelo" className="social-icon" target='_blank'>
            <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        {/* <a href="" className="social-icon">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a> */}
        <a href="https://discord.gg/dtYp6swk" className="social-icon" target='_blank'>
            <FontAwesomeIcon icon={faDiscord} size="2x" />
        </a>
        <a href="https://www.youtube.com/channel/UCHdW8pAUYVxzed6ea2LK4fA" className="social-icon" target='_blank'>
            <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>

      </div>
      
    );
  }