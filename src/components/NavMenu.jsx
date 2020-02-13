import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
const TopNav = () => {
  return (
    <Navbar bg="dark" variant="dark" sticky="top">
      <Nav fill variant="pills">
        <Nav.Item>
          <Nav.Link>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>Projects</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>Contact</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default TopNav;
