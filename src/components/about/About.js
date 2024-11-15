import React from "react";
import Title from "../home/title";
import AboutMe from "./AboutMe";
import FunFact from "./FunFact";
import Skills from '../resume/Skills'

const About = () => {
  return (
    <section id="about" className="w-full">
      <Title title="About" subTitle="Me" />
      <AboutMe />
      {/* <Title title="My" subTitle="Services" />
      <MyServices /> */}
      
      <Title title="Fun" subTitle="Fact" />
      <FunFact />
      <Title title="My" subTitle="Skills" />
      <Skills />
    </section>
  );
};

export default About;
