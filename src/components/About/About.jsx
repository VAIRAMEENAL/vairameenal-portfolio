import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <h2 className="section-title">ABOUT ME</h2>

      <div className="about-container">

        <div className="about-left">
          <h3>Fresher with production-minded habits.</h3>
        </div>

        <div className="about-right">
          <p>
            Hi, I'm <strong>B Vairameenal</strong>, a budding Front-End
            Developer passionate about creating visually appealing and
            functional web projects.
          </p>

          <br />

          <p>
            My goal is to contribute meaningfully to a dynamic organization
            while continuously learning new technologies and building impactful
            user experiences.
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;
