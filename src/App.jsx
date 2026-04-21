import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import { Skills } from "./components/skills/Skills";
import { Experiences } from "./components/experiences/Experiences";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Hero />
        <About />
        <Skills />
        <Experiences />
        <Projects />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
