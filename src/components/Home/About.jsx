import { Box, Center } from "@chakra-ui/react";
import React from "react";
import myImg from "../../Assets/about.svg";
import { Col, Row } from "react-bootstrap";

export const About = () => {
  return (
    <Center>
      <Box w={"100%"} className="meet-text">
        <Box className="home-content" w={"80%"}>
          <Row>
            <Col md={7} className="home-header">
              <h1 className="heading-name">
                Meet
                <strong className="main-name"> Sandy</strong>
              </h1>
              <p className="home-about-description">
                My name is Sandy Termeulen and I am excited to share that I am
                transitioning into a career in IT front-end development.
                <br />
                After years of working in a different field, I have decided to
                pursue my passion for coding and design, and I am eager to see
                where this journey takes me.
                <br />
                <br />
                As someone who loves to learn and grow, I am excited about the
                opportunities that the IT industry presents.
                <br />I am eager to dive into new technologies, master new
                programming languages, and develop my skills in web development.
                <br />
                <br />
                While I know that this career transition will not be easy, I am
                ready to put in the hard work and dedication required to
                succeed.
                <br /> I am confident in my ability to learn quickly, adapt to
                new challenges, and stay focused on my goals.
              </p>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={myImg} style={{ maxHeight: "350px" }} />
            </Col>
          </Row>
        </Box>
      </Box>
    </Center>
  );
};
