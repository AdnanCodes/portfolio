import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
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
import { CopyToClipboard } from "react-copy-to-clipboard";
import Button from "react-bootstrap/Button";
const Contact = () => {
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
            <OverlayTrigger
              delay={{ show: 150, hide: 400 }}
              overlay={<Tooltip>Click to Copy</Tooltip>}
            >
              <span id="copy">
                <CopyToClipboard text="adnan.chowdhury@outlook.com">
                  <FaCopy />
                </CopyToClipboard>
              </span>
            </OverlayTrigger>
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
