import React from "react";
import { useSpring, animated, config } from "react-spring";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/NavMenu";
import Home from "./components/Home";
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
          <Route path="/contact">{/* Add Contact page */}</Route>
          <Route path="/projects">{/* Project Page */}</Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </animated.div>
    </Router>
  );
}

export default App;
