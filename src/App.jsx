import React from "react";
import "./App.css";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import { Skills } from "./components/skills/Skills";
import { Experiences } from "./components/experiences/Experiences";

function App() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experiences />
    </>
  );
}

export default App;
