import React, { useContext } from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import ME from "../../assets/personalPhoto.png";
import { DataContext } from "../../context/Context";

const Header = () => {
  const { data } = useContext(DataContext);
  const { title, position, downloadButton, contactButton, scrollLink } =
    data.header;
  return (
    <header>
      <div id="home" className="container header__container">
        <h5>{title}</h5>
        <h1>Nithinraj Vettiyattil Rajan</h1>
        <h5 className="text-light">{position}</h5>
        <div className="animate__animated animate__fadeInUp">
          <CTA contactButton={contactButton} downloadButton={downloadButton} />
          <div className="me">
            <img src={ME} alt="me" />
          </div>
        </div>
        <a href="#contact" className="scroll__down">
          {scrollLink}
        </a>

        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
