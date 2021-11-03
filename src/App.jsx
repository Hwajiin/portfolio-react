import React from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import Home from "./router/home";
import Skills from "./router/skills";
import Projects from "./router/projects";
import AboutMe from "./router/aboutMe";
import Contact from "./router/contact";
import NavBar from "./components/navbar";
import styled from "styled-components";
import Footer from "./components/footer";

const SApp = styled.div``;

// react-spring으로 라우터 간 스위치 애니메이션 넣기
// Navbar 넣기
const App = () => {
  return (
    <SApp>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/skills" render={() => <Skills />} />
          <Route path="/projects" render={() => <Projects />} />
          <Route path="/aboutme" render={() => <AboutMe />} />
          <Route path="/contact" render={() => <Contact />} />
          <Redirect from="*" to="/" />
        </Switch>
      </BrowserRouter>
      <Footer />
    </SApp>
  );
};

export default App;
