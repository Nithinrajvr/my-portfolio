import React, { useContext } from "react";
import "./Language.css";
import { DataContext } from "../../context/Context";

const Language = () => {
  const { language, setLanguage } = useContext(DataContext);
  return (
    <div className="language">
      <div class="switch">
        <input
          id="cc-toggle"
          className="check-toggle check-toggle-round-flat"
          type="checkbox"
        />
        <label
          htmlFor="cc-toggle"
          onClick={(e) => {
            setLanguage(!language);
          }}
        ></label>
        <span className="on">EN</span>
        <span className="off">DE</span>
      </div>
    </div>
  );
};

export default Language;
