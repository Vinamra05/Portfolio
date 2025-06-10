import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vinamra Sharma </span>
            from <span className="purple">Saharanpur, India.</span>
            <br />
            I have recently completed my Master of Computer Applications from the Institute of Engineering & Technology, Lucknow.
            <br />
            I’m a passionate Full Stack Web Developer who enjoys building scalable, real-world applications using modern technologies.
            <br />
            I have also completed multiple internships and worked on diverse projects involving technologies like <span className="purple">React.js, Node.js, Express.js , MongoDB, Django, Docker and AWS</span>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling & Observing New Cultures
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Vinamra</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
