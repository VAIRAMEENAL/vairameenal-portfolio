import "./Hero.css";
import profile from "../../assets/Images/Profile.jpg";

import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const leftVariant = {
  hidden: {
    opacity: 0,
    x: -80,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const rightVariant = {
  hidden: {
    opacity: 0,
    x: 80,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-container">

        {/* LEFT CONTENT */}
        <motion.div
          className="hero-content"
          variants={leftVariant}
          initial="hidden"
          animate="visible"
        >

          <p className="hero-greeting">
            👋 Hello, I'm
          </p>

          <h1 className="hero-name">
            B Vairameenal
          </h1>

          <TypeAnimation
            sequence={[
              "Front-End Developer", 2000,
              "React Developer", 2000,
              "Python Full Stack Learner", 2000,
              "UI Enthusiast", 2000,
            ]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
            className="typing-text"
          />

          <p className="hero-description">
            Passionate about building responsive, modern and user-friendly web applications using React, JavaScript and Python.
          </p>

          <div className="hero-buttons">

            <motion.a
              href="/Resume.pdf"
              target="_blank"
              className="btn primary-btn"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload />
              Resume
            </motion.a>

          </div>

          <div className="hero-social">

            <motion.a
              href="https://github.com/VAIRAMEENAL?tab=repositories"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.2, rotate: 8 }}
            >
              <FaGithub />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/vairameenal-bhaskaran-81306a23b/"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.2, rotate: -8 }}
            >
              <FaLinkedin />
            </motion.a>

          </div>

        </motion.div>

        {/* RIGHT IMAGE */}

        <motion.div
          className="hero-image"
          variants={rightVariant}
          initial="hidden"
          animate="visible"
        >

          <img
            src={profile}
            alt="B Vairameenal"
          />

        </motion.div>

      </div>

      <div className="scroll-indicator">
        <span></span>
      </div>

    </section>
  );
}

export default Hero;