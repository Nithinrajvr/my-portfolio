import React, { useContext } from "react";
import "./about.css";
import ME from "../../assets/about.jpg";
import { DataContext } from "../../context/Context";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { FaUniversity } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { ImBooks } from "react-icons/im";
import "animate.css/animate.min.css";

const About = () => {
  const icons = [
    <FaUniversity className="about__icon" />,
    <MdWork className="about__icon" />,
    <ImBooks className="about__icon" />,
  ];
  const { data } = useContext(DataContext);
  const { title, secondaryTitle, buttonText, paragraphText, experiences } =
    data.about;
  return (
    <section id="about">
      <h5>{secondaryTitle}</h5>
      <h2>{title}</h2>
      <AnimationOnScroll animateIn="animate__fadeInUp">
        <div className="container about__container">
          <AnimationOnScroll animateIn="animate__fadeInUp">
            <div className="about__me">
              <div className="about__me-image">
                <img src={ME} alt="me" />
              </div>
            </div>
          </AnimationOnScroll>
          <div className="about__content">
            <div className="about__cards">
              {experiences.map((item, index) => {
                return (
                  <article className="about__card" key={index}>
                    {icons[index]}
                    <h5>{item.title}</h5>
                    <small>{item.description}</small>
                  </article>
                );
              })}
            </div>

            <p>{paragraphText}</p>

            <a href="#contact" className="btn btn-primary">
              {buttonText}
            </a>
          </div>
        </div>
      </AnimationOnScroll>
    </section>
  );
};

export default About;
