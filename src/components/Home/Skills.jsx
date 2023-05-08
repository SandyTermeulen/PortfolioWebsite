import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiHtml5,
  DiCss3,
  DiReact,
  DiPhotoshop,
  DiIllustrator,
} from "react-icons/di";
import { SiAdobeindesign, SiChakraui } from "react-icons/si";

export const Skills = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <h3 className="tech-text">HTML5</h3>
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h3 className="tech-text">CSS3</h3>
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h3 className="tech-text">Javascript</h3>
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h3 className="tech-text">React</h3>
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h3 className="tech-text">Photoshop</h3>
        <DiPhotoshop />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h3 className="tech-text">Illustrator</h3>
        <DiIllustrator />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h3 className="tech-text">Indesign</h3>
        <SiAdobeindesign />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h3 className="tech-text">ChakraUI</h3>
        <SiChakraui />
      </Col>
    </Row>
  );
};

export default Skills;
