import React from "react";
// add profile photo here
import profileImage from '../assets/images/head-shot.JPG';

function About() {
    return (
        <section id="about-me" className="my-5 intro">
          <div class="flex-row">
            <h1 id="about" className="section-title primary-border">
              About Me
            </h1>
          </div>
          <div className="flex-row">
            <div >
              <div >
                <img src={process.env.PUBLIC_URL + '/images/head-shot.JPG'} style={{ width: "65%" }} alt="profile" />
              </div>
              <p>
                Hi my name is Ryan. I am a fullstack developer who trained with a bootcamp through Denver University.
              </p>
            </div>
          </div>
        </section>
      );
}

export default About;