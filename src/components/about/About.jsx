import React from "react";
import "./about.css";
import ME from "../../assets/me-about-developer.png";
import Certificate from '../../assets/Full-Stack-Certificate-Rodolfo-Gutierrez.pdf'

// ==== Icons ==== // 
import { TbCertificate } from "react-icons/tb";
import { AiOutlineMobile } from "react-icons/ai";
import { FaWordpressSimple } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <TbCertificate className="about__icon"></TbCertificate>
              <h5>Full-Stack Developer</h5>
              <small><a href={Certificate} download>My Certificate</a></small>
            </article>

            <article className="about__card">
              <AiOutlineMobile className="about__icon"></AiOutlineMobile>
              <h5>Mobile Developer</h5>
              <small>for Ios and Android Systems</small>
            </article>

            <article className="about__card">
              <FaWordpressSimple className="about__icon"></FaWordpressSimple>
              <h5>WordPress Developer</h5>
              <small>3+ Years Working Experience</small>
            </article>
          </div>

          <p>
            I'm a full-stack developer living in Orlando, FL. I enjoy building
            websites and applications using MERN tech stack.
            <br />
            <br />
            I see every challenge as an opportunity to learn, and I think
            if we stop learning, we stop growing. For me what's most exciting
            about web development and as cliche as it may sound, is that the
            possibilities are LIMITLESS. Learning stops being a duty and becomes
            a lifestyle.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
