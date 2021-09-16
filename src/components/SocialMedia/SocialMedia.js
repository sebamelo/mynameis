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
        <a href="" className="social-icon">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="" className="social-icon">
            <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="" className="social-icon">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="" className="social-icon">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="" className="social-icon">
            <FontAwesomeIcon icon={faDiscord} size="2x" />
        </a>
        <a href="" className="social-icon">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>

      </div>
      
    );
  }