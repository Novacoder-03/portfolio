import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Bawa Sakthi Harish S </span>
            from <span className="purple"> Tamilnadu, India.</span>
            <br />
            I am currently pursuing my B.tech.computer science and business system student at kalaignarkarunanidhi institute of technology coimbatore.
            <br />
           
            <br />
            Apart from coding, i hava soft skills like
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Leadership qualities
            </li>
            <li className="about-activity">
              <ImPointRight /> Team worker
            </li>
            <li className="about-activity">
              <ImPointRight /> Open to learn
            </li>
          </ul>


          <footer className="blockquote-footer">Bawa Sakthi Harish S</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
