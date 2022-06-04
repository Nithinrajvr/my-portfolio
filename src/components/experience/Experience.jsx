import React from "react";
import "./experience.css";
import { BiCheckCircle } from "react-icons/bi";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <AnimationOnScroll animateIn="animate__fadeInUp">
        <div className="container experience__container">
          <div className="experience__frontend">
            <h3>Frontend Development</h3>
            <div className="experience__content">
              <article className="experience__details">
                <BiCheckCircle className="experience__details-icon" />
                <div>
                  <h4>HTML</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BiCheckCircle className="experience__details-icon" />
                <div>
                  <h4>CSS</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BiCheckCircle className="experience__details-icon" />
                <div>
                  <h4>JavaScript</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BiCheckCircle className="experience__details-icon" />
                <div>
                  <h4>React</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BiCheckCircle className="experience__details-icon" />
                <div>
                  <h4>Material UI</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
            </div>
          </div>
          {/* Frontend Ending */}
          <div className="experience__backend">
            <h3>Backend Development</h3>
            <div className="experience__content">
              <article className="experience__details">
                <BiCheckCircle className="experience__details-icon" />
                <div>
                  <h4>NodeJS</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BiCheckCircle className="experience__details-icon" />
                <div>
                  <h4>Spring Boot</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BiCheckCircle className="experience__details-icon" />
                <div>
                  <h4>MongoDB</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BiCheckCircle className="experience__details-icon" />
                <div>
                  <h4>MySQL</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BiCheckCircle className="experience__details-icon" />
                <div>
                  <h4>Express</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
            </div>
          </div>
        </div>
      </AnimationOnScroll>
    </section>
  );
};

export default Experience;
