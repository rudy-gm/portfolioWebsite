import React from "react";
import "./footer.css";
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
  <footer>
    <a href="#" className="footer__logo">Rudy Gutierrez</a>

    <ul className="permalinks">
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>

    <div className="footer__socials">
      <a href="https://www.linkedin.com/in/rodolfo-gutierrez-3b9113167/" target="_blank"><BsLinkedin></BsLinkedin></a>
      <a href="https://github.com/rudy-gm" target='_blank'><FaGithub></FaGithub></a>
    </div>

    <div className="footer__copyright">
      <small>&copy; Rudy Gutierrez. All rights reserved.</small>
      <br></br>
      <small><a href="https://storyset.com/web" target='_blank'>Web illustrations by Storyset</a></small>
    </div>
  </footer>
  )
};

export default Footer;
