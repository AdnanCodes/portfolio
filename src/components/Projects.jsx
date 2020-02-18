import React, { useState } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { FaGithub, FaLaptop } from "react-icons/fa";
import Sauti from "../assets/SautiDemo.gif";
import Fifth from "../assets/FifthDemo.gif";
import Rentech from "../assets/RentechDemo.gif";
import Bucket from "../assets/BucketDemo.gif";
const Projects = () => {
  const [sauti, setSauti] = useState(false);
  const [fifth, setFifth] = useState(false);
  const [rentech, setRentech] = useState(false);
  const [bucket, setBucket] = useState(false);

  return (
    <section className="project-page">
      <h1>Recent Projects</h1>
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
            <Button
              variant="warning"
              onClick={() => {
                setSauti(true);
              }}
            >
              Learn more
            </Button>
            <Button
              variant="warning"
              className="project-buttons"
              onClick={() => goToSauti("proj")}
            >
              <FaLaptop className="icon-buttons" />
              Explore the Project
            </Button>
            <Button variant="warning" onClick={() => goToSauti("repo")}>
              <FaGithub className="icon-buttons" />
              Explore the Repo
            </Button>
            <SautiModal show={sauti} onHide={() => setSauti(false)} />
          </p>
        </Jumbotron>
        <Jumbotron className="project">
          <Image src={Fifth} className="project-gif" />
          <h1>Fifth Wheel</h1>
          <p>
            Fifth Wheel is a mock concept for Airbnb like app for RV owners.
            User are able to find new locations to setup their RV stays as well
            as share listings on the app.
            <br />
            <br />
          </p>
          <p>
            <Button
              variant="warning"
              onClick={() => {
                setFifth(true);
              }}
            >
              Learn more
            </Button>
            <Button
              variant="warning"
              className="project-buttons"
              onClick={() => goToFifth("proj")}
            >
              <FaLaptop className="icon-buttons" />
              Explore the Project
            </Button>
            <Button variant="warning" onClick={() => goToFifth("repo")}>
              <FaGithub className="icon-buttons" />
              Explore the Repo
            </Button>
            <FifthModal
              show={fifth}
              onHide={() => {
                setFifth(false);
              }}
            />
          </p>
        </Jumbotron>
        <Jumbotron className="project">
          <Image src={Rentech} className="project-gif" />
          <h1>Rentech</h1>
          <p>
            A concept project to create a marketplace where people can rent out
            their high-tech gear or find other great rentals. The developers on
            this project had less than month of experience with React and built
            it under 4 days.
            <br />
            <br />
          </p>
          <p>
            <Button
              variant="warning"
              onClick={() => {
                setRentech(true);
              }}
            >
              Learn more
            </Button>
            <Button
              variant="warning"
              className="project-buttons"
              onClick={() => goToRentech("proj")}
            >
              <FaLaptop className="icon-buttons" />
              Explore the Project
            </Button>
            <Button variant="warning" onClick={() => goToRentech("repo")}>
              <FaGithub className="icon-buttons" />
              Explore the Repo
            </Button>
            <RentechModal
              show={rentech}
              onHide={() => {
                setRentech(false);
              }}
            />
          </p>
        </Jumbotron>
        <Jumbotron className="project">
          <Image src={Bucket} className="project-gif" />
          <h1>BucketList API</h1>
          <p>
            A comprehensive RESTFUL API to allow developers to create their own
            bucket list app.
            <br />
            <br />
            <br />
          </p>
          <p>
            <Button
              variant="warning"
              onClick={() => {
                setBucket(true);
              }}
            >
              Learn more
            </Button>
            <Button
              variant="warning"
              onClick={() => goToBucket("proj")}
              className="project-buttons"
            >
              <FaLaptop className="icon-buttons" />
              Explore the Project
            </Button>
            <Button variant="warning" onClick={() => goToBucket("repo")}>
              <FaGithub className="icon-buttons" />
              Explore the Repo
            </Button>
          </p>
          <BucketModal
            show={bucket}
            onHide={() => {
              setBucket(false);
            }}
          />
        </Jumbotron>
      </section>
    </section>
  );
};

function goToSauti(link) {
  if (link === "repo") {
    window.open("https://github.com/price-api", "_blank");
  } else {
    window.open("https://price-api.live/", "_blank");
  }
}

function goToFifth(link) {
  if (link === "repo") {
    window.open("https://github.com/buildweek-5th-wheel/React-FE", "_blank");
  } else {
    window.open("https://5th-wheel.now.sh/", "_blank");
  }
}

function goToRentech(link) {
  if (link === "repo") {
    window.open(
      "https://github.com/build-week-use-my-tech-stuff-umts/umts-frontend",
      "_blank"
    );
  } else {
    window.open("https://rentech.netlify.com/login", "_blank");
  }
}
function goToBucket(link) {
  if (link === "repo") {
    window.open("https://github.com/BW-Bucket-List/back-end", "_blank");
  } else {
    window.open(
      "https://documenter.getpostman.com/view/8666055/SVn3ra65?version=latest",
      "_blank"
    );
  }
}

function SautiModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Sauti Africa Market Price API
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          This was a Lambda School Labs Project where developers are tasked with
          building a high-quality production-grade application in 8 weeks. We
          worked with Sauti Africa, a non-profit organization helping East
          African Countries' Cross Border Traders by supplying traders with
          up-to-date market prices.
        </p>
        <h4>Contributions</h4>
        <p>
          • Led pair-programming sessions to integrate external database to Node
          Server
        </p>
        <p>
          • Planned daily & weekly objectives and coordinated with team on task
          queue
        </p>
        <p>• Created end-to-end tests for API requests</p>
        <p>
          • Designed and tested custom validation middleware for handling API
          requests
        </p>
        <p>
          • Wrote comprehensive documentation for users and developers with GIF
          examples
        </p>
        <p>
          • Conducted code reviews and incorporated feedback to improve
          development
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="warning" onClick={() => goToSauti("proj")}>
          <FaLaptop className="icon-buttons" />
          Explore the Project
        </Button>
        <Button variant="warning" onClick={() => goToSauti("repo")}>
          <FaGithub className="icon-buttons" />
          Explore the Repo
        </Button>
        <Button variant="warning" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function FifthModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Fifth Wheel - RV Camping Solution
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          This project was built under 4 days using React, SASS, Redux, Express,
          JWT, and PostgreSQL by 4 front-end developers and a back-end
          developer.
        </p>
        <h4>Contributions</h4>
        <p>
          • Lead two React developers to build and design user interface
          components
        </p>
        <p>• Pair-programmed to developed global state management via Redux</p>
        <p>• Integration of CRUD operations within Redux</p>
        <p>• Assisted in usage of Semantic UI React library with SCSS</p>
        <p>
          • Features of the App: Onboarding of users and usage of RV Marketplace
        </p>
        <p>
          Features:
          <br /> - Onboarding process for a user
          <br /> - Ability to post new listings for land available for RV space
          <br /> - Ability to book available listings
          <br /> - Customize profile and listings
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="warning" onClick={() => goToFifth("proj")}>
          <FaLaptop className="icon-buttons" />
          Explore the Project
        </Button>
        <Button variant="warning" onClick={() => goToFifth("repo")}>
          <FaGithub className="icon-buttons" />
          Explore the Repo
        </Button>
        <Button variant="warning" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function RentechModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Rentech - High Tech Marketplace
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          This project was built under 4 days using React, SASS, Redux, Express,
          JWT, and PostgreSQL by 4 front-end developers and a back-end
          developer.
        </p>
        <h4>Contributions</h4>
        <p>
          • Pair-programmed to design and developer easy to navigate user
          interface
        </p>
        <p>• Built numerous reusable React components</p>
        <p>
          Features:
          <br />- Onboarding process for a user to sign up
          <br />- Ability to make a post for a device
          <br />- Post can be edited and deleted
          <br />- Ability to view all post available for renting
          <br />- Profile can be updated
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="warning" onClick={() => goToRentech("proj")}>
          <FaLaptop className="icon-buttons" />
          Explore the Project
        </Button>
        <Button variant="warning" onClick={() => goToRentech("repo")}>
          <FaGithub className="icon-buttons" />
          Explore The Repo
        </Button>
        <Button variant="warning" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
function BucketModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          BucketList API
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          RESTFUL API powered by Node/Express Server with PostgreSQL.
          Authentication provided with JWT and BCrypt.
        </p>
        <h4>Contributions</h4>
        <p>
          • Designed the database using DB Designer to ensure proper data
          integrity
        </p>
        <p>
          • Built numerous data validations to allow front-end developers to
          easily understand their API calls
        </p>
        <p>• Built end-to-end tests using Supertest and Jest</p>
        <p>• Deployed in a production environment on Heroku</p>
        <p>
          • API Docs features all endpoint requests and responses information
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="warning" onClick={() => goToBucket("proj")}>
          <FaLaptop className="icon-buttons" />
          Explore the Project
        </Button>
        <Button variant="warning" onClick={() => goToBucket("repo")}>
          <FaGithub className="icon-buttons" />
          Explore the Repo
        </Button>
        <Button variant="warning" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default Projects;
