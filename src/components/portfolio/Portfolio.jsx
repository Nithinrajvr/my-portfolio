import React from "react";
import "./portfolio.css";
import WeatherImg from "../../assets/weather.jpg";
import QuizImg from "../../assets/quizimage.jpg";
import CovidImg from "../../assets/CovidTracker.jpg";
import Ontology from "../../assets/ontology.JPG";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>
      <AnimationOnScroll animateIn="animate__fadeInUp">
        <div className="container portfolio__container">
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={QuizImg} alt="portfolio" />
              <div className="filter"></div>
            </div>
            <h3>Quiz App in React</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/Nithinrajvr/quizApp"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <a
                href="https://nithinraj-quiz-app.netlify.app"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={CovidImg} alt="portfolio" />
              <div className="filter"></div>
            </div>
            <h3>Covid Tracker</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/Nithinrajvr/CovidKarlsruhe"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <a
                href="https://nithin-covid-karlsruhe.netlify.app"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={WeatherImg} alt="portfolio" />
              <div className="filter"></div>
            </div>
            <h3>Weather App</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/Nithinrajvr/weather-app"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <a
                href="https://nithin-weather-app.netlify.app"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={Ontology} alt="portfolio" />
              <div className="filter"></div>
            </div>
            <h3>Ontology visualizer</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/Nithinrajvr/ontology-visualization"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <a
                href="https://ontology-visualizer.netlify.app"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        </div>
      </AnimationOnScroll>
    </section>
  );
};

export default Portfolio;
