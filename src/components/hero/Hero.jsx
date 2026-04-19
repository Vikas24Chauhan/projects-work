import React, { useEffect, useState } from "react";
import "./Hero.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Hero() {
  const [phase, setPhase] = useState("intro");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("hold"), 320);
    const t2 = setTimeout(() => setPhase("expand"), 2600);
    return () => [t1, t2].forEach(clearTimeout);
  }, []);

  const [text] = useTypewriter({
    words: ["React Js Developer", "Frontend Developer", "Web Developer"],
    loop: {},
  });

  return (
    <section className={`hero hero--${phase}`} aria-label="Bootcamp Hero">
      <div className="hero-base" />

      <div className="hero-intro-name">
        <span className="hero-intro-doc">
          Welcome to <br /> My Portfolio
        </span>
      </div>

      <div className="hero-left-title">
        <p className="hero-name">
          Hi, I am
          <br />
          Vikas Chauhan
        </p>
        <div className="hero-title">
          I am a{" "}
          <span className="hero-typewriter">
            {text}
            <Cursor />
          </span>
        </div>
      </div>

      <div className="hero-img-wrap">
        <img
          src="https://cdn.dribbble.com/userupload/47441683/file/9f2f3f234c059eb8e4386009ebe38002.png"
          alt="Vikas Chauhan"
          className="hero-img"
        />
      </div>

      <div className="hero-right">
        <span className="hero-text">
          I am a motivated and versatile individual, always eager to take on new
          challenges. With a passion for learning, I am dedicated to delivering
          high-quality results. With a positive attitude and a growth mindset, I
          am ready to make a meaningful contribution and achieve great things.
        </span>
        <a
          href="https://drive.google.com/file/d/1T9_0AQpJiOzQn-5X4id2H69GAW2tawTA/view?usp=drive_link"
          target="_blank"
          rel="noreferrer"
          className="hero-resume"
        >
          Check Resume
        </a>
      </div>
    </section>
  );
}

export default Hero;
