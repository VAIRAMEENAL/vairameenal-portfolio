import "./Navbar.css";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../../Context/ThemeContext";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { theme, toggleTheme } = useTheme();

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (

    <nav className={scrolled ? "navbar scrolled" : "navbar"}>

      <div className="nav-container">

        <div className="logo">
          B VAIRAMEENAL
        </div>

        <ul className={menuOpen ? "nav-links active" : "nav-links"}>

          <li>
            <Link
              to="home"
              smooth={true}
              duration={600}
              spy={true}
              offset={-70}
              activeClass="active"
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="about"
              smooth
              duration={600}
              spy
              offset={-70}
              activeClass="active"
              onClick={closeMenu}
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="skills"
              smooth
              duration={600}
              spy
              offset={-70}
              activeClass="active"
              onClick={closeMenu}
            >
              Skills
            </Link>
          </li>

          <li>
            <Link
              to="projects"
              smooth
              duration={600}
              spy
              offset={-70}
              activeClass="active"
              onClick={closeMenu}
            >
              Projects
            </Link>
          </li>

          <li>
            <Link
              to="education"
              smooth
              duration={600}
              spy
              offset={-70}
              activeClass="active"
              onClick={closeMenu}
            >
              Education
            </Link>
          </li>

          <li>
            <Link
              to="contact"
              smooth
              duration={600}
              spy
              offset={-70}
              activeClass="active"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>

        </ul>

        <div className="nav-right">

          <button
            className="theme-btn"
            onClick={toggleTheme}
          >
            {theme === "dark"
              ? <FaSun />
              : <FaMoon />}
          </button>

          <div
            className="menu-icon"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen
              ? <FaTimes />
              : <FaBars />}
          </div>

        </div>

      </div>

    </nav>

  );

}

export default Navbar;