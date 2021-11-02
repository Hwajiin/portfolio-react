import React from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import Home from "./router/home";
import Skills from "./router/skills";
import Projects from "./router/projects";
import AboutMe from "./router/aboutMe";
import Contact from "./router/contact";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route path="/skills" render={() => <Skills />} />
        <Route path="/projects" render={() => <Projects />} />
        <Route path="/aboutme" render={() => <AboutMe />} />
        <Route path="/contact" render={() => <Contact />} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
