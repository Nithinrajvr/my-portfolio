import React, { useRef } from "react";
import "./contact.css";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";
import emailjs from "emailjs-com";

const Contact = () => {
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
      <h5>Get In Touch</h5>
      <h2>Contact me</h2>
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
              Send a message
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
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiWhatsappFill className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+1234567890</h5>
            <a
              href="https://wa.me/+4915124931372"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            required
          />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea
            name="message"
            rows="10"
            placeholder="Your message"
            required
          ></textarea>
          <button
            type="submit"
            className="btn btn-primary"
            onSubmit={sendEmail}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
