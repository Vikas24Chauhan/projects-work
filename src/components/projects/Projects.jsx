import React, { useEffect, useRef } from "react";
import "./Projects.css";
import { data, NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";

function Projects() {
  const cardsContainerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200 });
  }, []);

  useEffect(() => {
    const initializeScrollEffects = () => {
      const cardsContainer = cardsContainerRef.current;
      const cards = cardsRef.current;

      if (!cardsContainer || cards.length === 0) return;

      cardsContainer.style.setProperty(
        "--cards-count",
        cards.length.toString(),
      );
      cardsContainer.style.setProperty(
        "--card-height",
        `${cards[0].clientHeight}px`,
      );

      cards.forEach((card, index) => {
        if (!card) return;

        const offsetTop = 20 + index * 20;
        card.style.paddingTop = `${offsetTop}px`;

        if (index === cards.length - 1) return;

        const toScale = 1 - (cards.length - 1 - index) * 0.1;
        const nextCard = cards[index + 1];
        const cardInner = card.querySelector(".card__inner");

        if (!nextCard || !cardInner) return;

        const handleScroll = () => {
          const nextCardRect = nextCard.getBoundingClientRect();
          const containerRect = cardsContainer.getBoundingClientRect();

          const cardHeight = card.clientHeight;
          const windowHeight = window.innerHeight;

          const offsetTopPx = offsetTop;
          const offsetBottom = windowHeight - cardHeight;

          const elementTop = nextCardRect.top - containerRect.top;
          const elementBottom = nextCardRect.bottom - containerRect.top;

          const start = offsetTopPx;
          const end = offsetBottom;

          let percentageY = 0;

          if (elementTop <= start) {
            percentageY = 100;
          } else if (elementBottom >= end) {
            percentageY = 0;
          } else {
            percentageY =
              ((start - elementTop) /
                (end - start - elementTop + elementBottom)) *
              100;
            percentageY = Math.max(0, Math.min(100, percentageY));
          }

          const scale = valueAtPercentage({
            from: 1,
            to: toScale,
            percentage: percentageY,
          });

          const brightness = valueAtPercentage({
            from: 1,
            to: 0.6,
            percentage: percentageY,
          });

          cardInner.style.transform = `scale(${scale})`;
          cardInner.style.filter = `brightness(${brightness})`;
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll);

        return () => {
          window.removeEventListener("scroll", handleScroll);
          window.removeEventListener("resize", handleScroll);
        };
      });
    };

    const valueAtPercentage = ({ from, to, percentage }) => {
      return from + (to - from) * (percentage / 100);
    };

    const cleanupFunctions = initializeScrollEffects();

    return () => {
      if (cleanupFunctions) {
        cleanupFunctions.forEach((cleanup) => cleanup && cleanup());
      }
    };
  }, []);

  const addToCardsRef = (el, index) => {
    cardsRef.current[index] = el;
  };

  const cardData = [
    {
      id: 1,
      image:
        "https://cdn.dribbble.com/userupload/46394017/file/eb15229bf4528535eeddaf219d065f1e.jpeg",
      title: "1. Concepts in Radiology - Volume I",
      description:
        "This volume lays a strong foundation in radiology by covering all major subspecialties with a balanced mix of theory and clinical application. Written by legendary faculty, it helps residents understand imaging concepts systematically while integrating practical insights, multimedia resources, and self-assessment tools for effective learning.",
      link: "https://conceptualradiology.com/concepts-in-radiology-vol-1/",
      alt: "Concepts in Radiology Book Volume 1",
    },
    {
      id: 2,
      image:
        "https://cdn.dribbble.com/userupload/46394018/file/e2ca361d6ade93b5638c2714ab27b0c6.jpeg",
      title: "2. Concepts in Radiology - Volume II",
      description:
        "Volume II focuses on conceptual clarity and diagnostic reasoning through concise lecture notes and case-based explanations. It is especially useful for early residents who want to develop a structured approach to image interpretation across multiple radiology subspecialties.",
      link: "https://conceptualradiology.com/concepts-in-radiology-vol-2/",
      alt: "Concepts in Radiology Book Volume 2",
    },
    {
      id: 3,
      image:
        "https://cdn.dribbble.com/userupload/46394011/file/f2f968f6bbef5f79f2f0b7badfe0a53b.jpeg",
      title: "3. Concepts in Radiology - Volume III",
      description:
        "Designed to sharpen higher-level diagnostic skills, this volume connects imaging findings with pathology, surgical planning, and clinical decision-making. It blends evidence-based guidelines with expert judgment, preparing learners for real-world reporting and multidisciplinary discussions.",
      link: "https://conceptualradiology.com/concepts-in-radiology-vol-3/",
      alt: "Concepts in Radiology Book Volume 3",
    },
    {
      id: 4,
      image:
        "https://cdn.dribbble.com/userupload/46394020/file/0ec80a054ae6708cbad565e900d864fb.jpeg",
      title: "4. Concepts in Radiology - Volume IV",
      description:
        "A high-yield, focused guide covering Chest Imaging, Cardiovascular Radiology, and Uro-radiology. The content progresses from basic principles to advanced applications, making it ideal for quick revision, daily reporting reference, and exam-oriented preparation.",
      link: "https://conceptualradiology.com/concepts-in-radiology-vol-4/",
      alt: "Concepts in Radiology Book Volume 4",
    },
    {
      id: 5,
      image:
        "https://cdn.dribbble.com/userupload/46394013/file/d37ddc72c73bc3d6679e90531feaeeaa.jpeg",
      title: "5. Concepts in Radiology - Volume V",
      description:
        "This volume integrates Women’s Imaging, Core Imaging Physics, and important advances in radiology. It simplifies complex physics concepts, explains safety protocols and guidelines clearly, and delivers exam-ready content for residents and fellows.",
      link: "https://conceptualradiology.com/concepts-in-radiology-vol-5/",
      alt: "Concepts in Radiology Book Volume 5",
    },
    {
      id: 6,
      image:
        "https://cdn.dribbble.com/userupload/46394009/file/765ad69ae1b8c70a42f99b6f37db78b2.jpeg",
      title: "6. Radiological Anatomy: Practice Cases",
      description:
        "A practical, image-based book designed to strengthen radiological anatomy using X-ray, CT, MRI, and ultrasound cases. It enhances recognition of normal anatomy, anatomical variants, and key landmarks essential for accurate interpretation.",
      link: "https://conceptualradiology.com/radiological-anatomy-practice-cases/",
      alt: "Radiology Anatomy Books",
    },
  ];

  return (
    <div id="projects" className="projects-container">
      <Helmet>
        <title>Conceptual Radiology Books - Dr. Zainab Vora</title>

        <meta
          name="description"
          content="Conceptual Radiology books by Dr. Zainab Vora help for radiology residents build strong basics, clear imaging concepts, & confident exam oriented clinical thinking."
        />
      </Helmet>

      <div className="projects-head">
        <p className="projects-heading">Projects</p>
        <p className="projects-desc">
          Here are some of the projects I've developed and worked on, showcasing
          my skills and creativity.
        </p>
      </div>

      <div className="projects-cards" ref={cardsContainerRef}>
        {cardData.map((card, index) => (
          <div
            key={card.id}
            className="projects-card"
            data-index={index}
            ref={(el) => addToCardsRef(el, index)}
          >
            <div className="projects-card__inner">
              <div className="projects-card__image-container">
                <img
                  className="projects-card__image"
                  src={card.image}
                  alt={card.alt}
                />
              </div>
              <div className="projects-card__content">
                <h3 className="projects-card__title">{card.title}</h3>
                <p className="projects-card__description">{card.description}</p>
                <NavLink
                  className="projects-card__btn"
                  to={card.link}
                  target="_blank"
                >
                  Check Sample Pages
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="projects-space-bottom" />
    </div>
  );
}

export default Projects;
