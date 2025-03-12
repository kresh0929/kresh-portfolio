import React from "react";

const About = () => {
  return (
    <div>
      <section id="about">
        <div className="aboutSection">
          <div className="HeroRight">
            <div>
              <div className="HeroSectionImage">
                <img src="images/coder2.png" />
              </div>
            </div>
          </div>
          <div className="HeroLeft">
            <div className="aboutLeftContentContainer">
              <div className="mainSectionHeading">
                <h3>
                  About <span>Me</span>
                </h3>
              </div>
              <div className="HeroParagraph">
                I'm Kresh Kumar, As a Web Developer, I specialize in building intuitive, user-centered applications using modern technologies like
React.js and JavaScript. Recognized for my adaptability, attention to detail, and strong collaboration skills, I excel in
delivering innovative solutions that align with user needs and business goals. Driven by curiosity and a passion for
problem-solving, I am eager to contribute my expertise to projects while continuously evolving in a dynamic.
              </div>
              <div className="aboutInfoContainer">
                <div className="aboutInfoBoxes">
                  <div className="aboutInfoBox">
                    <div className="aboutInfoLeftBox">
                      <div className="AboutInfoImg">
                        {/* <img src="images/experience1.png" alt="" /> */}
                        <i class="fa-solid fa-award"></i>
                      </div>
                    </div>
                    <div className="aboutInfoRightBox">
                      <h3>5+</h3>
                      <p>Certifications</p>
                    </div>
                  </div>
                  <div className="aboutInfoBox">
                    <div className="aboutInfoLeftBox">
                      <div className="AboutInfoImg">
                        {/* <img src="images/247.png" alt="" /> */}
                        <i class="fa-solid fa-user-graduate"></i>
                      </div>
                    </div>
                    <div className="aboutInfoRightBox">
                      <h3>BE(CSE)</h3>
                      <p>Education</p>
                    </div>
                  </div>
                </div>

                <div className="aboutInfoBoxes">
                  <div className="aboutInfoBox">
                    <div className="aboutInfoLeftBox">
                      <div className="AboutInfoImg">
                        {/* <img src="images/project1.png" alt="" /> */}
                        <i class="fa-solid fa-ranking-star"></i>
                      </div>
                    </div>
                    <div className="aboutInfoRightBox">
                      <h3>10+</h3>
                      <p>Projects</p>
                    </div>
                  </div>
                  {/* <div className="aboutInfoBox"></div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
