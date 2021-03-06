import React from "react";
import { useSpring, animated, config } from "react-spring";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/NavMenu";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./App.scss";
import Easter from "./components/EasterEgg";

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
          <Route path="/contact" component={Contact} />
          <Route path="/projects" component={Projects} />
          <Route exact path="/" component={Home} />
          <Route path="/dog" component={Easter} />
        </Switch>
        <Footer />
      </animated.div>
    </Router>
  );
}

export default App;
