import React from "react";
import Container from "react-bootstrap/Container";
import { FaTwitterSquare, FaLinkedin, FaCopy } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { CopyToClipboard } from "react-copy-to-clipboard";
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

  return (
    <section className="contact">
      <div className="contact-text">
        <div className="contact-hero">
          <h1>Let's get in touch</h1>
          <Container className="social-link">
            <h3 onClick={() => goToEmail()} className="span-force">
              <IoIosMail />
              <span> adnan.chowdhury@outlook.com</span>
            </h3>
            <span id="copy">
              <CopyToClipboard text="adnan.chowdhury@outlook.com">
                <FaCopy />
              </CopyToClipboard>
            </span>
          </Container>
          <Container className="social-link">
            <h3 onClick={() => goToLinkedIn()}>
              <FaLinkedin />
              <span> in/adnan-chowdhury/</span>
            </h3>
          </Container>
          <Container className="social-link">
            <h3 onClick={() => goToTwitter()}>
              <FaTwitterSquare />
              <span> @AdnanCodes</span>
            </h3>
          </Container>
        </div>
      </div>
    </section>
  );
};

export default Contact;
