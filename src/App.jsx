import React from "react";
import "./App.css";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import { Skills } from "./components/skills/Skills";

function App() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
    </>
  );
}

export default App;
