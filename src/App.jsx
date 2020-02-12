import React from "react";
import { useSpring, animated, config } from "react-spring";
import Button from "react-bootstrap/Button";
import "./App.scss";
import Nav from "./components/Nav/Nav";

function App() {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: config.slow
  });
  return (
    <animated.div style={props}>
      <div className="App">
        <h1>Hi! I am Adnan</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
          aliquid enim, dicta magnam ducimus harum rem accusamus maxime, eum ab
          sed inventore doloribus reiciendis atque quos quia. Fugit, doloribus
          assumenda.
        </p>
        <Button>Testing button</Button>
        <Nav />
        <header className="App-header">Let's make that website</header>
      </div>
    </animated.div>
  );
}

export default App;
