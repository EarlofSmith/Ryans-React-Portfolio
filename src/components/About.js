import React from "react";
// add profile photo here
// import profileImage from '';

function About() {
    return (
        <section id="about-me" className="my-5 intro">
          <div class="flex-row">
            <h1 id="about" className="section-title primary-border">
              About Me
            </h1>
          </div>
          <div className="flex-row">
            <div class="intro-info">
              {/* <div class="intro-img">
                <img src={profileImage} style={{ width: "100%" }} alt="profile" />
              </div> */}
              <p>
                Hi my name is Ryan.
              </p>
            </div>
          </div>
        </section>
      );
}

export default About;