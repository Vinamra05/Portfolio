import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a passionate developer with a love for building real-world web
              applications using modern tech stacks.
              <br />
              <br />I’m fluent in
              <i>
                <b className="purple"> C, JavaScript, C++, Java, SQL and Python,</b>
              </i>{" "}
              and have hands-on experience with
              <i>
                <b className="purple"> MERN stack and Django. </b>
              </i>
              <br />
              <br />
              My interests lie in developing scalable&nbsp;
              <i>
                <b className="purple">Full Stack Web Applications</b>
              </i>
              , exploring{" "}
              <i>
                <b className="purple">Cloud Services, DevOps</b>
              </i>
              , and integrating AI features into web products.
              <br />
              <br />
              I’ve built and deployed projects like{" "}
              <b className="purple">DevConnect, FoodFrenzy, SpeechifyNow,</b> and
              <b className="purple"> AgriDetect</b>. Whenever possible, I love to work with{" "}
              <b className="purple">Node.js</b> and modern libraries like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>{" "}
              to create clean, responsive, and meaningful user experiences.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Vinamra05"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/VinamraSharma05"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/vinamra-sharma-84981a289/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/vinamra._.bhardwaj_"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
