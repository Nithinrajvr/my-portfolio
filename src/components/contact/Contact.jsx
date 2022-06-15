import React, { useRef, useContext } from "react";
import "./contact.css";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
// import { RiWhatsappFill } from "react-icons/ri";
import emailjs from "emailjs-com";
import { DataContext } from "../../context/Context";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Contact = () => {
  const { data } = useContext(DataContext);
  const {
    title,
    secondaryTitle,
    link,
    placeHolderName,
    placeHolderEmail,
    placeHolderMessage,
    buttonText,
  } = data.contact;
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sr5tqz8",
        "template_8sq93bi",
        form.current,
        "cz-v1w62WyJDfMka_"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>{secondaryTitle}</h5>
      <h2>{title}</h2>
      <AnimationOnScroll animateIn="animate__fadeInUp">
        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <MdEmail className="contact__option-icon" />
              <h4>Email</h4>
              <h5>nithinrajvr7@gmail.com</h5>
              <a
                href="mailto:nithinrajvr7@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                {link}
              </a>
            </article>
            <article className="contact__option">
              <BsMessenger className="contact__option-icon" />
              <h4>Messenger</h4>
              <h5>Nithinraj V R</h5>
              <a
                href="https://m.me/nithin.raj.3323"
                target="_blank"
                rel="noreferrer"
              >
                {link}
              </a>
            </article>
            {/* <article className="contact__option">
              <RiWhatsappFill className="contact__option-icon" />
              <h4>Whatsapp</h4>
              <h5>+1234567890</h5>
              <a
                href={process.env.WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
              >
                {link}
              </a>
            </article> */}
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder={placeHolderName}
              required
            />
            <input
              type="email"
              name="email"
              placeholder={placeHolderEmail}
              required
            />
            <textarea
              name="message"
              rows="10"
              placeholder={placeHolderMessage}
              required
            ></textarea>
            <button
              type="submit"
              className="btn btn-primary"
              onSubmit={sendEmail}
            >
              {buttonText}
            </button>
          </form>
        </div>
      </AnimationOnScroll>
    </section>
  );
};

export default Contact;
