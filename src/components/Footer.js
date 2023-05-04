import React from "react";
import { VscGithubInverted } from "react-icons/vsc";
import {CiLinkedin} from 'react-icons/ci';

function Footer() {
    return (
        <footer>
        <h2>Made by Ryan Smith</h2>
        <p>
          <ul>
            <a href="https://github.com/EarlofSmith">
              <li className="logo">
                <VscGithubInverted />
              </li>
            </a>
            <a href="https://www.linkedin.com/in/ryanearlsmith/">
              <li className="logo">
                <CiLinkedin />
              </li>
            </a>
          </ul>
        </p>
      </footer>
    );
  }
  
  export default Footer;