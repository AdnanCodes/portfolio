import React from "react";
import Nav from "react-bootstrap/Nav";
import {
  FaReact,
  FaFontAwesome,
  FaSass,
  FaBootstrap,
  FaJs
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <Nav className="justify-content-center">
        <Nav.Item>
          {new Date().getFullYear()} Copyright: Adnan Chowdhury
        </Nav.Item>
        <Nav.Item>
          - Built with <FaReact /> - <FaFontAwesome /> - <FaSass /> -
          <FaBootstrap /> - <FaJs />
        </Nav.Item>
      </Nav>
    </footer>
  );
};

export default Footer;
