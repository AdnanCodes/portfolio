import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import profilePic from "../assets/me.jpg";
const Home = () => {
  return (
    <section>
      <Jumbotron className="hero">
        <Container className="container ">
          <div className="container-text text-center">
            <h1>Adnan Chowdhury</h1>
            <p>Full Stack Developer</p>
          </div>
        </Container>
      </Jumbotron>
      <div className="intro">
        <Image className="profile" src={profilePic} />
        <article>
          <p>
            I am a full-stack web developer. I specialize in developing
            front-end applications in ReactJS and building servers using Express
            and Django.
          </p>
          <p>
            My work experience has strengthened a customer-centric approach in
            software development where I make it a priority to have a quality
            user experience. In addition, I have acquired strong set of
            problem-solving, organizational, and communication skills. I excel
            in working in a team and a high-demand environment.
          </p>
          <p>
            If I am not coding, I like to play video games, read books, cooking,
            and think about improving education systems.
          </p>
          <LinkContainer to="/contact">
            <Button href="/contact" variant="warning">
              Let's Connect
            </Button>
          </LinkContainer>
        </article>
      </div>
    </section>
  );
};

export default Home;
