import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_9e655gl",   
      "template_qu29ykr",  
      form.current,
      "N6az7Kqn5COizJJ0a"     
    ).then(
      (result) => {
        console.log("Message sent:", result.text);
        alert("Message sent successfully!");
      },
      (error) => {
        console.log("Error:", error.text);
        alert("Failed to send message.");
      }
    );
  };

  return (
    <section className="contact" id="contact">
      <h2 className="section-title">CONTACT ME</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Let's Connect 👋</h3>
          <p>I am actively looking for Front-End / React Developer opportunities.</p>
          <div className="social-icons">
            <a href="mailto:snehabvm7@gmail.com"><FaEnvelope /></a>
            <a href="https://github.com/VAIRAMEENAL?tab=repositories" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/vairameenal-bhaskaran-81306a23b/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          </div>
        </div>

        {/* ✅ Updated form */}
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <textarea name="message" rows="6" placeholder="Your Message" required />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
