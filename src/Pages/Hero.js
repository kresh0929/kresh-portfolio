import React, { useState, useEffect } from "react";

const Hero = () => {
  const professions = ["MERN Stack Developer", "WordPress Developer", "UI/UX Designer"];
  const [currentProfessionIndex, setCurrentProfessionIndex] = useState(0);

  useEffect(() => {
    const changeProfession = () => {
      setCurrentProfessionIndex((prevIndex) => (prevIndex + 1) % professions.length);
    };

    const intervalId = setInterval(changeProfession, 5000); // 5 seconds delay to display each word fully

    return () => clearInterval(intervalId); // Clean up on component unmount
  }, [professions.length]);

  return (
    <>
      <section id="home">
        <div className="HeroSection">
          <div className="HeroLeft">
            <div className="HeroLeftContentContainer">
              <div className="HeroHeading">
                Hi, I am Kresh 
                <br />
                <div className="container">
                  <span className="proffession">{professions[currentProfessionIndex]}</span>
                </div>
              </div>
              <div className="HeroParagraph">
                Welcome to my coding journey! 🚀 I'm excited to share my passion for tech and showcase my projects. Explore and join me on this adventure as I learn, create, and innovate in the world of technology!
              </div>
              <div className="socialmediaIcons">
                <div className="socialMediaIcon">
                  <a href="https://github.com/kresh0929" target="_blank">
                    <i className="fa-brands fa-github"></i>
                  </a>
                </div>
                <div className="socialMediaIcon">
                  <a href="https://www.linkedin.com/in/kresh-kumar-5121a3231/" target="_blank">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </div>
                <div className="socialMediaIcon">
                  <a href="https://www.youtube.com/@NextLevelFocus-k29" target="_blank">
                  <i class="fa-brands fa-youtube"></i>
                  </a>
                </div>
              </div>
              <div className="HeroBtn">
                <a href="https://drive.google.com/file/d/1RJshaVEYL1u0GXWrvRFX8XoTxlhBtlAg/view?usp=sharing" target="blank">
                  <button className="btn">
                    Resume <i className="fa-solid fa-download"></i>
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="HeroRight">
            <div>
              <div className="HeroSectionImage">
                <img src="images/coder3.png" alt="Coder illustration" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
