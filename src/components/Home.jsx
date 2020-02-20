import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import profilePic from "../assets/me.jpg";
const Home = () => {
  console.log(
    "\n\nHey, what did you think you find here?\n\nI guess you may heard about that easter egg.\n\nThere is a hidden route in this app, find the riddle, and solve it.\n\nYou may then put the answer in the route \n\nAlso no looking at source code\n\n"
  );
  return (
    <section>
      <Jumbotron className="hero">
        <div className="header">
          <div className="header-text">
            <h1>Adnan Chowdhury</h1>
            <p>Full Stack Developer</p>
          </div>
        </div>
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
            I am currently learning the Linux to super charge my development
            skills and I also started to learn Elixir, and its framework,
            Phoenix!
          </p>
          <p>
            If I am not coding, I like to play video games, read books, cook new
            recipes, fix cars, and explore car culture.
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
