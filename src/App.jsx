import React from "react";
import { useSpring, animated, config } from "react-spring";
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
        <Nav />
        <header className="App-header">Let's make that website</header>
      </div>
    </animated.div>
  );
}

export default App;
