import React from "react";
import "./experience.css";
import {
  BsBookmarkCheckFill,
  BsFillBootstrapFill,
  BsWordpress,
} from "react-icons/bs";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiReact, DiJqueryLogo } from "react-icons/di";
import { IoLogoPython } from "react-icons/io";
import { TbBrandReactNative } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiJavascript, SiCss3 } from "react-icons/si";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        {/*========= Front-End ==========*/}
        <div className="experience__frontend">
          <h3>Front-End Development</h3>

          <div className="experience__content">
            <div>
              <article className="experience__details">
                <AiFillHtml5 className="experience__details-icon"></AiFillHtml5>
                <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
                </div>
              </article>
            </div>

            <article className="experience__details">
              <SiCss3 className="experience__details-icon"></SiCss3>
              <div>
                <h4>CSS / SCSS / SASS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <SiJavascript className="experience__details-icon"></SiJavascript>
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <DiReact className="experience__details-icon"></DiReact>
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <TbBrandReactNative className="experience__details-icon"></TbBrandReactNative>
              <div>
              <h4>React Native</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillBootstrapFill className="experience__details-icon"></BsFillBootstrapFill>
              <div>
              <h4>BootStrap</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <DiJqueryLogo className="experience__details-icon"></DiJqueryLogo>
              <div>
              <h4>JQuery</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsWordpress className="experience__details-icon"></BsWordpress>
              <div>
              <h4>WordPress</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>

        {/* ======= End Of Front-End ===========*/}

        {/* ======= Back-End ===========*/}

        <div className="experience__backend">
          <h3>Back-End Development</h3>
          <article className="experience__details">
            <FaNodeJs className="experience__details-icon"></FaNodeJs>
            <div>
            <h4>Node.js</h4>
            <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="experience__details">
            <SiMongodb className="experience__details-icon"></SiMongodb>
            <div>
            <h4>MongoDB</h4>
            <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="experience__details">
            <IoLogoPython className="experience__details-icon"></IoLogoPython>
            <div>
            <h4>Python</h4>
            <small className="text-light">Basic</small>
            </div>
          </article>
        </div>

        {/* ======= End Of Back-End ===========*/}
      </div>
    </section>
  );
};

export default Experience;
