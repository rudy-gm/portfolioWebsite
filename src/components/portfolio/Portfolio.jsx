import React from "react";
import "./portfolio.css";
import { FaGithub, FaWifi } from "react-icons/fa";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const projects = [
  {
    id: 0,
    image: IMG1,
    title: "Project Name",
    github: "github.com",
    demo: "demo.com",
  },
  {
    id: 1,
    image: IMG2,
    title: "Income Tax Calculator with JavaScript and BootStrap",
    github: "https://github.com/rudy-gm/taxCal",
    demo: "https://rudy.netlify.app/",
  },
  {
    id: 2,
    image: IMG3,
    title: "Crack The Code Game with React and RESTful APIs",
    github: "https://github.com/rudy-gm/crackTheCodeApp",
    demo: "https://rudy-crack-the-code.netlify.app/",
  },
  {
    id: 3,
    image: IMG4,
    title: "To-Do List App with React Hooks and custom CSS",
    github: "https://github.com/rudy-gm/todoListApp",
    demo: "https://rudytodo.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Latest Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {projects.map((project) => {
          return (
            <article className="portfolio__item" key={project.id}>
              <div className="portfolio__item-image">
                <img src={project.image} alt={`Project #${project.id}`} />
              </div>

              <h3>{project.title}</h3>

              <div className="portfolio__item-cta">
                <a href={project.github} className="btn">
                  <FaGithub></FaGithub> Code
                </a>
                <a
                  href={project.demo}
                  className="btn btn-primary"
                  target="_blank"
                >
                  {" "}
                  <FaWifi></FaWifi> Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
