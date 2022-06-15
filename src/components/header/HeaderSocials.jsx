import React from "react";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";
import { ImXing } from "react-icons/im";

const HeaderSocials = () => {
  return (
    <div className="header__socials  animate__animated animate__bounceInDown">
      <a
        href="https://www.linkedin.com/in/nithinrajvr7"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://www.github.com/Nithinrajvr"
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub />
      </a>
      <a
        href="https://www.twitter.com/nitihnraj"
        target="_blank"
        rel="noreferrer"
      >
        <BsTwitter />
      </a>
      <a
        href="https://www.xing.com/profile/Nithinraj_VettiyattilRajan"
        target="_blank"
        rel="noreferrer"
      >
        <ImXing />
      </a>
    </div>
  );
};

export default HeaderSocials;
