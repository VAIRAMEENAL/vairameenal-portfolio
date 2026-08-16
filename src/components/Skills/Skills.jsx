import "./Skills.css";

const skills = [

    {
        name:"HTML5",
        percent:80
    },

    {
        name:"CSS3",
        percent:80
    },

    {
        name:"Bootstrap",
        percent:75
    },

    {
        name:"JavaScript",
        percent:70
    },

    {
        name:"React.js",
        percent:75
    },

    {
        name:"SQL",
        percent:80
    },

    {
        name:"Python",
        percent:65
    },

    {
        name:"Figma",
        percent:70
    }

];

function Skills(){

return(

<section className="skills" id="skills">

<h2 className="section-title">

SKILLS

</h2>

<div className="skills-grid">

{

skills.map((skill,index)=>(

<div className="skill-card" key={index}>

<div className="skill-title">

<span>{skill.name}</span>

<span>{skill.percent}%</span>

</div>

<div className="progress">

<div
className="progress-fill"

style={{width:`${skill.percent}%`}}

></div>

</div>

</div>

))

}

</div>

</section>

)

}

export default Skills;
