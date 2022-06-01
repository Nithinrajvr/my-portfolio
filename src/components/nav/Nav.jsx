import React, { useState } from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { VscCallIncoming } from "react-icons/vsc";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        className={activeNav === "#" ? "active" : ""}
        onClick={() => {
          setActiveNav("#");
        }}
      >
        <AiOutlineHome />
      </a>
      <a
        className={activeNav === "about" ? "active" : ""}
        href="#about"
        onClick={() => {
          setActiveNav("about");
        }}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        className={activeNav === "experience" ? "active" : ""}
        onClick={() => {
          setActiveNav("experience");
        }}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        className={activeNav === "services" ? "active" : ""}
        onClick={() => {
          setActiveNav("services");
        }}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        className={activeNav === "contact" ? "active" : ""}
        onClick={() => {
          setActiveNav("contact");
        }}
      >
        <VscCallIncoming />
      </a>
    </nav>
  );
};

export default Nav;
