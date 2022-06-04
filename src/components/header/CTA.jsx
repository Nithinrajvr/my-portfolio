import React from "react";
import CV from "../../assets/cv.pdf";

const CTA = ({ contactButton, downloadButton }) => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        {downloadButton}
      </a>
      <a href="#contact" className="btn btn-primary">
        {contactButton}
      </a>
    </div>
  );
};

export default CTA;
