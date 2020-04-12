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
  FaFilePdf,
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Button from "react-bootstrap/Button";
const Contact = () => {
  console.log(
    "\n\nOne of my favorite things\nIs to run around the park\nIf I am unhappy\nThen you might hear me bark\n\n"
  );
  const [show, setShow] = useState(false);
  const target = useRef(null);

  const goToMediaLinks = (links) => {
    switch (links) {
      case "twitter":
        window.open("https://twitter.com/AdnanCodes", "_blank");
        break;
      case "email":
        window.open("mailto:adnan.chowdhury@outlook.com", "_blank");
        break;
      case "linkedin":
        window.open("https://www.linkedin.com/in/adnan-chowdhury/", "_blank");
        break;
      case "resume":
        window.open(Resume, "_blank");
        break;
      case "github":
        window.open("https://github.com/AdnanCodes", "_blank");
        break;
      default:
        break;
    }
  };
  return (
    <Jumbotron className="contact">
      <div className="contact-text">
        <div className="contact-hero">
          <h1>Let's get in touch</h1>
          <Container className="social-link">
            <Button variant="warning" onClick={() => goToMediaLinks("email")}>
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
                {(props) => (
                  <Tooltip id="overlay-example" {...props}>
                    Copied
                  </Tooltip>
                )}
              </Overlay>
            </span>
          </Container>
          <Container className="social-link">
            <Button variant="warning" onClick={() => goToMediaLinks("resume")}>
              <FaFilePdf className="icon-buttons" />
              Download my Resume
            </Button>
          </Container>
          <Container className="social-link">
            <Button
              variant="warning"
              onClick={() => goToMediaLinks("linkedin")}
            >
              <FaLinkedin className="icon-buttons" />
              adnan-chowdhury
            </Button>
          </Container>
          <Container className="social-link">
            <Button variant="warning" onClick={() => goToMediaLinks("github")}>
              <FaGithub className="icon-buttons" />
              AdnanCodes
            </Button>
          </Container>
          <Container className="social-link">
            <Button variant="warning" onClick={() => goToMediaLinks("twitter")}>
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
