import React from "react";
import Button from "react-bootstrap/Button";
import { useSpring, animated } from "react-spring";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Easter = () => {
  console.log("\n You have found her\n\n");
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 }
  }));
  return (
    <section className="dog-page">
      <article className="dog-content">
        <h1>Meet Q Dog</h1>
        <p>
          Queen Elizabeth, aka Q, is my roommate’s dog.
          <br />Q has been instrumental in my journey to becoming a software
          developer.
          <br />
          She encouraged me to get off the computer and go on walks.
          <br />
          Her energy is infectious and it’s hard to say no when she wants to
          play.
          <br />I will miss her when I leave Tennessee.
        </p>
        <Button
          variant="warning"
          onClick={() => {
            window.open("https://youtu.be/wYKcDWu7sa8", "_blank");
          }}
        >
          Watch a video of her napping
        </Button>
      </article>
      <article className="dog-content">
        {" "}
        <animated.div
          className="card"
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          style={{ transform: props.xys.interpolate(trans) }}
        />
      </article>
    </section>
  );
};

export default Easter;
