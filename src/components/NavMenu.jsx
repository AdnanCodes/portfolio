import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
const TopNav = () => {
  return (
    <Navbar bg="dark" variant="dark" sticky="top">
      <Nav fill variant="pills" defaultActiveKey="/">
        <Nav.Item>
          <LinkContainer exact to="/">
            <Nav.Link href="/">Home</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to="/projects">
            <Nav.Link href="/projects">Projects</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to="/contact">
            <Nav.Link href="/contact">Contact</Nav.Link>
          </LinkContainer>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default TopNav;
