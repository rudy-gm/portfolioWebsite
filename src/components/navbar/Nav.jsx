import React from "react";
import "./nav.css";
import { BiHomeAlt, BiUserCircle, BiCode } from "react-icons/bi";
import { FiBook } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import {IoSchoolOutline} from 'react-icons/io5'
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <BiHomeAlt></BiHomeAlt>
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <BiUserCircle></BiUserCircle>
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <IoSchoolOutline></IoSchoolOutline>
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <BiCode></BiCode>
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <MdOutlineEmail></MdOutlineEmail>
      </a>
    </nav>
  );
};

export default Nav;
