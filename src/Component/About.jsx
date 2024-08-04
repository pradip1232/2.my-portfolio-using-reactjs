import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="container about-container">
      <div className="row section">
        <div className="col-12">
          <h1 className="section-title animate__animated animate__fadeInDown">
            About Me
          </h1>
          <p className="section-content animate__animated animate__fadeInDown">
            I am a full-stack developer with a passion for creating robust and
            scalable web applications. My expertise spans both front-end and
            back-end technologies, allowing me to build complete and efficient
            solutions.
          </p>
        </div>
      </div>

      <div className="row section">
        <div className="col-12">
          <h2 className="section-title animate__animated animate__fadeInLeft">
            Skills
          </h2>
          <div className="row">
            <div className="col-md-4">
              <ul className="section-content animate__animated animate__fadeInLeft">
                <li>JavaScript</li>
                <li>React</li>
                <li>Vue.js</li>
                <li>Angular</li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul className="section-content animate__animated animate__fadeInLeft">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>GraphQL</li>
                <li>REST APIs</li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul className="section-content animate__animated animate__fadeInLeft">
                <li>HTML/CSS</li>
                <li>SASS/LESS</li>
                <li>Bootstrap</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="row section">
        <div className="col-12">
          <h2 className="section-title animate__animated animate__fadeInRight">
            Projects
          </h2>
          <div className="row">
            <div className="col-md-4">
              <div className="project animate__animated animate__fadeInRight">
                <h3>Project 1</h3>
                <p>Description of project 1...</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="project animate__animated animate__fadeInRight">
                <h3>Project 2</h3>
                <p>Description of project 2...</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="project animate__animated animate__fadeInRight">
                <h3>Project 3</h3>
                <p>Description of project 3...</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="row section">
        <div className="col-12">
          <h2 className="section-title animate__animated animate__fadeInUp">
            Contact Information
          </h2>
          <p className="section-content animate__animated animate__fadeInUp">
            You can reach me at: 
            <a href="mailto:755201pradip@gmail.com">755201pradip@gmail.com</a>
          </p>
          <p className="section-content animate__animated animate__fadeInUp">
            Follow me on LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/pradipmourya-61a387218"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div> */}
    </div>
  );
}
