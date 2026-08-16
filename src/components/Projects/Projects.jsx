import "./Projects.css";

import shopplus from "../../assets/Images/Shopplus.png";
import lumiscreen from "../../assets/Images/Lumiscreen.png";
import chatbot from "../../assets/Images/Chatbot Output.png";
import studentDashboard from "../../assets/Images/sql view.png";

const projects = [

    {
        title: "ShopPlus E-Commerce",
        image: shopplus,
        description:
            "A responsive e-commerce website with product browsing, cart functionality and a user-friendly interface.",
        technologies: "HTML • CSS • JavaScript",
        github: "https://github.com/VAIRAMEENAL/ShopPlus-",

    },

    {
        title: "LumiScreen Movie App",
        image: lumiscreen,
        description:
            "A React movie application using modern React concepts such as Context API, useReducer and routing.",
        technologies: "React • JavaScript • CSS",
        github: "https://github.com/VAIRAMEENAL/lumiscreen-movie-app",
        demo: "https://lumiscreen-movie-app.vercel.app/"
    },

    {
        title: "Rule-Based Chatbot",
        image: chatbot,
        description:
            "A Python-based rule chatbot runs continuously, detects keywords, responds with predefined outputs, and exits gracefully on command.",
        technologies: "Python",
        github: "https://github.com/VAIRAMEENAL/PYTHON---RULE-BASED-CHATBOT",

    },

    {
        title: "Student Performance Dashboard",
        image: studentDashboard,
        description:
            "A data dashboard designed to analyze and visualize student performance using SQL.",
        technologies: "MySQL • SQL ",
        github: "https://github.com/VAIRAMEENAL/SQL---Student-Performance-Dashboard",

    }

];

function Projects() {

    return (

        <section className="projects" id="projects">

            <h2 className="section-title">
                Projects
            </h2>

            <div className="projects-grid">

                {projects.map((project, index) => (

                    <div
                        className="project-card"
                        key={index}
                    >

                        <div className="project-image">

                            <img
                                src={project.image}
                                alt={project.title}
                            />

                            <div className="project-overlay">

                                {project.demo && (
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Live Demo
                                    </a>
                                )}

                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    GitHub
                                </a>

                            </div>

                        </div>

                        <div className="project-content">

                            <h3>
                                {project.title}
                            </h3>

                            <p>
                                {project.description}
                            </p>

                            <span>
                                {project.technologies}
                            </span>

                        </div>

                    </div>

                ))}

            </div>

        </section>

    );

}

export default Projects;