import React from "react";

//Importing Components

import Header from "./components/header/Header";
import Nav from "./components/navbar/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact  from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div>
      <Header></Header>
      <Nav></Nav>
      <About></About>
      <Experience></Experience>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default App;
