import "./App.css";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Footer from "./components/footer/Footer";
import { DataContext } from "./context/Context";
import React, { useState, useEffect } from "react";
import { english, german } from "./data/data";

const App = () => {
  const [language, setLanguage] = useState(true);
  const [data, setData] = useState(english);
  const componentArray = [
    <Header />,
    <Nav />,
    <About />,
    <Experience />,
    <Services />,
    <Portfolio />,
    <Contact />,
    <Footer />,
  ];
  useEffect(() => {
    if (language) {
      setData(english);
    } else {
      setData(german);
    }
  }, [language]);
  return (
    <DataContext.Provider value={{ language, setLanguage, data }}>
      {componentArray.map((component, index) => {
        return <React.Fragment key={index}>{component}</React.Fragment>;
      })}
    </DataContext.Provider>
  );
};

export default App;
