import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import weather from "../../Assets/Projects/weather.png";
import myntra from "../../Assets/Projects/myntra.png";
import music from "../../Assets/Projects/music.png";
import foodfrenzy from "../../Assets/Projects/foodfrenzy.png";
import netflix from "../../Assets/Projects/netflix.png";
import twitter from "../../Assets/Projects/twitter.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodfrenzy}
              isBlog={false}
              title="FoodFrenzy"
              description="Developed a food delivery app using React, Tailwind CSS, and Redux. Planning to enhance the app with Node.js and MongoDB for additional features"
              ghLink="https://github.com/Vinamra05/FoodFrenzy-Online-Food-Delievery-"
              demoLink="https://foodfrenzy.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={twitter}
              isBlog={false}
              title="Twitter UI Design"
              description="Created a responsive Twitter UI clone using HTML and Tailwind CSS, focusing on adaptive design for various screen sizes."
              ghLink="https://github.com/Vinamra05/"
              demoLink="https://twitteruiclone.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={music}
              isBlog={false}
              title="Music Streaming App"
              description="Developed a responsive music streaming app using JavaScript, CSS, and HTML, featuring playlists and next/previous song functionality for seamless user experience."
              ghLink="https://github.com/Vinamra05/Spotify-Clone"
              demoLink="https://vinamrasharma.freewebhostmost.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weathericon}
              isBlog={false}
              title="Weather App"
              description="Built a responsive weather app that utilizes an API to display live weather information, providing real-time updates for a seamless user experience."
              ghLink="https://github.com/Vinamra05/weather-update"
              demoLink="weather-update-quick.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="Netflix UI"
              description="Created a responsive Netflix clone using HTML and CSS, showcasing the capabilities of CSS for designing adaptive layouts across different devices."
              ghLink="https://github.com/Vinamra05/Netflix-Clone"
              demoLink="https://vinamraflix.vercel.app/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myntra}
              isBlog={false}
              title="Myntra Functional Clone"
              description="Developed a responsive Myntra clone using HTML, CSS, and JavaScript, featuring a functional shopping cart, dynamic price calculations, discount handling, and order summary. The project demonstrates frontend responsiveness and backend calculations for a seamless user experience."
              ghLink="https://github.com/Vinamra05/Myntra-Clone"
              demoLink="https://vinamra-myntra.vercel.app/"     
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
