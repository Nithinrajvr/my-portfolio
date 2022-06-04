import React, { useContext } from "react";
import "./experience.css";
import { BiCheckCircle } from "react-icons/bi";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { DataContext } from "../../context/Context";

const Experience = () => {
  const { data } = useContext(DataContext);
  const {
    title,
    secondaryTitle,
    subtitle1,
    subtitle2,
    frontendSkills,
    otherSkills,
  } = data.experience;
  return (
    <section id="experience">
      <h5>{secondaryTitle}</h5>
      <h2>{title}</h2>
      <AnimationOnScroll animateIn="animate__fadeInUp">
        <div className="container experience__container">
          <div className="experience__frontend">
            <h3>{subtitle1}</h3>
            <div className="experience__content">
              {frontendSkills?.map((item, index) => {
                return (
                  <article key={index} className="experience__details">
                    <BiCheckCircle className="experience__details-icon" />
                    <div>
                      <h4>{item.skill}</h4>
                      <small className="text-light">{item.exp}</small>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
          {/* Frontend Ending */}
          <div className="experience__backend">
            <h3>{subtitle2}</h3>
            <div className="experience__content">
              {otherSkills?.map((item, index) => {
                return (
                  <article key={index} className="experience__details">
                    <BiCheckCircle className="experience__details-icon" />
                    <div>
                      <h4>{item.skill}</h4>
                      <small className="text-light">{item.exp}</small>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </AnimationOnScroll>
    </section>
  );
};

export default Experience;
