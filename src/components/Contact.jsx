import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import { FaTwitterSquare } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-hero">
        <Container>
          <h1>Let's get in touch</h1>
          <h3>
            <FaTwitterSquare href="https://twitter.com/AdnanCodes" />
            <span>@AdnanCodes</span>
          </h3>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
        </Container>
      </div>
    </section>
  );
};

export default Contact;
