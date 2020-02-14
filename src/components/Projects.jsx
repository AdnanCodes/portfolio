import React, { useState } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Sauti from "../assets/SautiDemo.gif";
const Projects = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <section className="project-page">
      <h1>Recent completed projects</h1>
      <section className="projects">
        <Jumbotron className="project">
          <Image src={Sauti} className="project-gif" />
          <h1>Sauti Africa Market Price API</h1>
          <p>
            A stakeholder from Sauti Africa asked us to build an interactive
            experience for researchers & policymakers to interact with Sauti's
            Database on Market Prices and Developer API with extensive
            documentation for any developer to build any custom application or
            pursue data retrieval.
          </p>
          <p>
            • Led pair-programming sessions to integrate external database to
            Node Server
          </p>
          <p>
            • Planned daily & weekly objectives and coordinated with team on
            task queue
          </p>
          <p>• Created end-to-end tests for API requests</p>
          <p>
            • Designed and tested custom validation middleware for handling API
            requests
          </p>
          <p>
            • Wrote comprehensive documentation for users and developers with
            GIF examples
          </p>
          <p>
            • Conducted code reviews and incorporated feedback to improve
            development
          </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Jumbotron>
        <Jumbotron className="project">
          <Image src={Sauti} className="project-gif" />
          <h1>Sauti Africa Market Price API</h1>
          <p>
            A stakeholder from Sauti Africa asked us to build an interactive
            experience for researchers & policymakers to interact with Sauti's
            Database on Market Prices and Developer API with extensive
            documentation for any developer to build any custom application or
            pursue data retrieval.
          </p>
          <p>
            • Led pair-programming sessions to integrate external database to
            Node Server
          </p>
          <p>
            • Planned daily & weekly objectives and coordinated with team on
            task queue
          </p>
          <p>• Created end-to-end tests for API requests</p>
          <p>
            • Designed and tested custom validation middleware for handling API
            requests
          </p>
          <p>
            • Wrote comprehensive documentation for users and developers with
            GIF examples
          </p>
          <p>
            • Conducted code reviews and incorporated feedback to improve
            development
          </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Jumbotron>
        <Jumbotron className="project">
          <Image src={Sauti} className="project-gif" />
          <h1>Sauti Africa Market Price API</h1>
          <p>
            A stakeholder from Sauti Africa asked us to build an interactive
            experience for researchers & policymakers to interact with Sauti's
            Database on Market Prices and Developer API with extensive
            documentation for any developer to build any custom application or
            pursue data retrieval.
          </p>
          <p>
            • Led pair-programming sessions to integrate external database to
            Node Server
          </p>
          <p>
            • Planned daily & weekly objectives and coordinated with team on
            task queue
          </p>
          <p>• Created end-to-end tests for API requests</p>
          <p>
            • Designed and tested custom validation middleware for handling API
            requests
          </p>
          <p>
            • Wrote comprehensive documentation for users and developers with
            GIF examples
          </p>
          <p>
            • Conducted code reviews and incorporated feedback to improve
            development
          </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Jumbotron>
        <Jumbotron className="project">
          <Image src={Sauti} className="project-gif" />
          <h1>Sauti Africa Market Price API</h1>
          <p>
            A stakeholder from Sauti Africa asked us to build an interactive
            experience for researchers & policymakers to interact with Sauti's
            Database on Market Prices and Developer API with extensive
            documentation for any developer to build any custom application or
            pursue data retrieval.
          </p>
          <p>
            • Led pair-programming sessions to integrate external database to
            Node Server
          </p>
          <p>
            • Planned daily & weekly objectives and coordinated with team on
            task queue
          </p>
          <p>• Created end-to-end tests for API requests</p>
          <p>
            • Designed and tested custom validation middleware for handling API
            requests
          </p>
          <p>
            • Wrote comprehensive documentation for users and developers with
            GIF examples
          </p>
          <p>
            • Conducted code reviews and incorporated feedback to improve
            development
          </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Jumbotron>
      </section>
    </section>
  );
};

export default Projects;
