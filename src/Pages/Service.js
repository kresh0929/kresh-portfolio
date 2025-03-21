import React from "react";

const Service = () => {
  return (
    <>
      <section id="services">
        <div className="ServicesSection">
          <div className="serviceUpperContainer">
          <div className="mainSectionHeading textCenter">
              <h3>
                My <span>Services</span>
              </h3>
            </div>
            <div className="servicesParagraph HeroParagraph">
            Creating dynamic full-stack web applications, and responsive WordPress sites for seamless digital experiences.
            </div>
          </div>
          <div className="serviceLowerContainer">
            <div className="serviceCards">
              <div className="serviceCard">
                <div className="serviceCardtop">
                <i class="fa-solid fa-code"></i>
                </div>
                <div className="serviceCardMid">Web Development</div>
                <div className="serviceCardBottom">
                Crafting responsive and dynamic websites with sleek designs, optimized performance, and seamless user experience tailored to your needs.
                </div>
              </div> </div>
          <div className="serviceLowerContainer">
            <div className="serviceCards">
              <div className="serviceCard">
                <div className="serviceCardtop">
                <i class="fa-solid fa-code"></i>
                </div>
                <div className="serviceCardMid">Frontend Development</div>
                <div className="serviceCardBottom">
                Crafting responsive and dynamic websites with sleek designs, optimized performance, and seamless user experience tailored to your needs.
                </div>
                </div>
                </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
