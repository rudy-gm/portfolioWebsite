import React from "react";
import "./portfolio.css";
import { FaGithub, FaWifi } from "react-icons/fa";

//Images 

import IncomeTax from '../../assets/Tax-Calculator-Image.png';
import CrackTheCode from '../../assets/Crack-The-Code-Image.png';
import ToDoApp from '../../assets/To-Do-App-Image.png';

const projects = [
  
  {
    id: 1,
    image: IncomeTax,
    title: "Income Tax Calculator with JavaScript and BootStrap",
    github: "https://github.com/rudy-gm/taxCal",
    demo: "https://rudy.netlify.app/",
  },
  {
    id: 2,
    image: CrackTheCode,
    title: "Crack The Code Game with React and RESTful APIs",
    github: "https://github.com/rudy-gm/crack-the-code",
    demo: "https://rudy-crack-the-code.netlify.app/",
  },
  {
    id: 3,
    image: ToDoApp,
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
                <a href={project.github} className="btn" target='_blank'>
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
