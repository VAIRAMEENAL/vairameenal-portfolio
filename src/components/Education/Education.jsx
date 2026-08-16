import "./Education.css";

const education = [

  {
    year: "2025 - 2026",
    title: "Full Stack Python Certification",
    place: "Besant Technologies, Anna Nagar",
    details:
      "Completed Python, SQL, React and Full Stack Development."
  },

  {
    year: "2020 - 2024",
    title: "B.E Computer Science & Engineering",
    place: "Panimalar Engineering College",
    details:
      "CGPA: 8.7 / 10"
  }

];

function Education() {

  return (

    <section className="education" id="education">

      <h2 className="section-title">

        EDUCATION

      </h2>

      <div className="timeline">

        {

          education.map((item,index)=>(

            <div className="timeline-item" key={index}>

              <div className="timeline-year">

                {item.year}

              </div>

              <div className="timeline-content">

                <h3>{item.title}</h3>

                <h4>{item.place}</h4>

                <p>{item.details}</p>

              </div>

            </div>

          ))

        }

      </div>

    </section>

  )

}

export default Education;