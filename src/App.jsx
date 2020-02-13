import React from "react";
import { useSpring, animated, config } from "react-spring";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/NavMenu";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import "./App.scss";

function App() {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: config.slow
  });
  return (
    <Router>
      <animated.div style={props}>
        <Nav />
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </animated.div>
    </Router>
  );
}

export default App;
