import React, { useRef, useState } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";
import Resume from "../assets/resume2020.pdf";
import Container from "react-bootstrap/Container";

import {
  FaTwitterSquare,
  FaLinkedin,
  FaCopy,
  FaGithub,
  FaFilePdf
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Button from "react-bootstrap/Button";
const Contact = () => {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  function goToTwitter() {
    window.open("https://twitter.com/AdnanCodes", "_blank");
  }
  function goToLinkedIn() {
    window.open("https://www.linkedin.com/in/adnan-chowdhury/", "_blank");
  }
  function goToEmail() {
    window.open("mailto:adnan.chowdhury@outlook.com", "_blank");
  }
  function goToGithub() {
    window.open("https://github.com/AdnanCodes", "_blank");
  }
  function goToResume() {
    window.open(Resume, "_blank");
  }
  return (
    <Jumbotron className="contact">
      <div className="contact-text">
        <div className="contact-hero">
          <h1>Let's get in touch</h1>
          <Container className="social-link">
            <Button variant="warning" onClick={() => goToEmail()}>
              <IoIosMail className="icon-buttons" />
              adnan.chowdhury@outlook.com
            </Button>
            <span>
              <Button
                variant="warning"
                className="copy-email"
                ref={target}
                onClick={() => {
                  setShow(!show);
                  navigator.clipboard.writeText("adnan.chowdhury@outlook.com");
                }}
              >
                <FaCopy className="icon-buttons" />
                Copy E-mail
              </Button>
              <Overlay target={target.current} show={show} placement="right">
                {props => (
                  <Tooltip id="overlay-example" {...props}>
                    Copied
                  </Tooltip>
                )}
              </Overlay>
            </span>
          </Container>
          <Container className="social-link">
            <Button variant="warning" onClick={() => goToResume()}>
              <FaFilePdf className="icon-buttons" />
              Download my Resume
            </Button>
          </Container>
          <Container className="social-link">
            <Button variant="warning" onClick={() => goToLinkedIn()}>
              <FaLinkedin className="icon-buttons" />
              adnan-chowdhury
            </Button>
          </Container>
          <Container className="social-link">
            <Button variant="warning" onClick={() => goToGithub()}>
              <FaGithub className="icon-buttons" />
              AdnanCodes
            </Button>
          </Container>
          <Container className="social-link">
            <Button variant="warning" onClick={() => goToTwitter()}>
              <FaTwitterSquare className="icon-buttons" />
              AdnanCodes
            </Button>
          </Container>
        </div>
      </div>
    </Jumbotron>
  );
};

export default Contact;
