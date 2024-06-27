import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import digi from "../../Assets/Projects/digi.png";
import jour from "../../Assets/Projects/jour.png";

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
              imgPath={digi}
              isBlog={false}
              title="Digital Representative"
              description="it is a project that was developed using HTML,CSS,PHP for reduce the interaction between
              student representatives and faculties.it is the advanced ERP system which enables two way communication"
              ghLink="https://github.com/Novacoder-03/Digital-Representative.git"
              demoLink=""
            />
          </Col>



          
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jour}
              isBlog={false}
              title="Personal Journal"
              description="it is a project that was developed using react js and firebase to track and maintain the transaction details of the individual in the form of journal entries"
              ghLink="https://github.com/Novacoder-03/personal-journal.git"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Projects;
