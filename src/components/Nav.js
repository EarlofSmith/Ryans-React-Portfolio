import React, { useEffect } from 'react';
import {capitalizeFirstLetter} from '../utils/helpers'

function Nav(props) {
    const {
        currentPage,
        handlePageChange,
    
      } = props;

      useEffect(() => {
        document.title = capitalizeFirstLetter(currentPage.name);
    }, [currentPage]);

    return(

        <nav>
    <ul className="nav nav-Pages" class='nav'>
      <li className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange('About')}
            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#portfolio"
            onClick={() => handlePageChange('Portfolio')}
            // Check to see if the currentPage is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#resume"
            onClick={() => handlePageChange('Resume')}
            // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </a>
        </li>
    </ul>
    </nav>

//     <nav class="navbar navbar-expand-lg bg-body-tertiary">
//   <div class="container-fluid">
//     <div class="collapse navbar-collapse" id="navbarNav">
//       <ul class="navbar-nav">
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="#about">About</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#portfolio">Portfolio</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#contact">Contact</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href='#resume'>Resume</a>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>
    );
}

export default Nav;