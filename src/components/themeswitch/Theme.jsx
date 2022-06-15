import React, { useEffect } from "react";
import "./theme.css";

const Theme = () => {
  const [theme, setTheme] = React.useState(false);
  let root = document.documentElement;
  const dark = [
    { "--color-bg": "rgb(238, 224, 224)" },
    { "--color-bg-variant": "rgb(196, 173, 173)" },
    { "--color-primary": "black" },
    { "--color-primary-variant": "rgba(115, 115, 115, 0.4)" },
    { "--color-white": "black" },
    { "--color-light": "rgb(59, 56, 56)" },
    { "--color-nav-button": "rgba(8, 8, 7, 0.5)" },
  ];
  const light = [
    { "--color-bg": "#000029" },
    { "--color-bg-variant": "#201e20" },
    { "--color-primary": "#e0a96d" },
    { "--color-primary-variant": "#ddc3a5" },
    { "--color-white": " #fff" },
    { "--color-light": " rgba(255, 255, 255, 0.6)" },
    { "--color-nav-button": "rgba(224, 169, 109, 0.5)" },
  ];
  const themeSetter = (themeType) => {
    themeType.forEach((color) => {
      for (let key in color) {
        root.style.setProperty(key, color[key]);
      }
    });
  };

  useEffect(() => {
    if (theme) {
      themeSetter(dark);
    } else {
      themeSetter(light);
    }
  }, [theme]);
  return (
    <div className="theme">
      <div className="switch">
        <input
          id="cc-toggle"
          className="check-toggle check-toggle-round-flat"
          type="checkbox"
        />
        <label
          htmlFor="cc-toggle"
          onClick={(e) => {
            setTheme(!theme);
          }}
        ></label>
        <span className="on">Dark</span>
        <span className="off">Light</span>
      </div>
    </div>
  );
};

export default Theme;
