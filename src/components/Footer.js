import React from "react";
import { VscGithubInverted } from "react-icons/vsc";
import {CiLinkedin} from 'react-icons/ci';

function Footer() {
    return (
        <footer>
        
        <p>
          <div>
            <a href="https://github.com/EarlofSmith">
              <li className="logo">
                <VscGithubInverted />
              </li>
            </a>
            <div>Made by Ryan Smith</div>
            <a href="https://www.linkedin.com/in/ryanearlsmith/">
              <li className="logo">
                <CiLinkedin />
              </li>
            </a>
          </div>
        </p>
      </footer>
    );
  }
  
  export default Footer;