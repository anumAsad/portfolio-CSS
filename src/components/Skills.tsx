import React from "react";
import "../app/styles/skills.css"; // Import the custom CSS file

const Skills = () => {
  return (
    <div id="skills" className="skills-container">
      <div className="skills-grid">
        {/* First Column: Heading and Paragraph */}
        <div data-aos="zoom-in-up" className="skills-left">
          <h2 className="skills-heading">Technologies I work with</h2>
          <p className="skills-text">
          As a versatile web designer and developer, I create seamless digital experiences that bridge aesthetics with functionality. My approach combines creative vision with technical expertise, ensuring each project reflects both the client’s brand identity and the needs of their audience. With a strong foundation in HTML, CSS, JavaScript, and responsive design principles, I craft websites that are visually compelling, intuitive to navigate, and optimized for performance.
          </p>
        </div>

        {/* Second Column: Skills */}
        <div className="skills-right">
          <div className="skills-icons-grid">
            <div className="skills-space">
                <h2 data-aos="zoom-out-down">Typescript</h2>
                <h2 data-aos="zoom-out-down">React.js</h2>
                <h2 data-aos="zoom-out-down">Next.js</h2>
            </div>
            <div className="skills-space">
                <h2 data-aos="zoom-out-down">Tailwind</h2>
                <h2 data-aos="zoom-out-down">CSS</h2>
                <h2 data-aos="zoom-out-down">Node.js</h2>
             </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Skills

