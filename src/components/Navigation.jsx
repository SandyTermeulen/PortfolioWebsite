// @ts-nocheck
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { VscComment } from "react-icons/vsc";

export const Navigation = () => {
  return (
    <Navbar fixed="top" className="sticky">
      <Container>
        <Navbar.Brand className="d-flex">
          <Nav.Item className="navItem-margin">
            <Link to={"/"} className="navbar-link">
              &lt;sandy/&gt;
            </Link>
          </Nav.Item>
        </Navbar.Brand>

        <Nav defaultActiveKey="#home">
          <Nav.Item className="navItem-margin">
            <Link to={"/"} className="navbar-link">
              <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
            </Link>
          </Nav.Item>

          <Nav.Item className="navItem-margin">
            <Link to={"/projects"} className="navbar-link">
              <AiOutlineUser style={{ marginBottom: "2px" }} /> Projects
            </Link>
          </Nav.Item>

          <Nav.Item className="navItem-margin">
            <Link to={"/contact"} className="navbar-link">
              <VscComment style={{ marginBottom: "2px" }} /> Contact
            </Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
