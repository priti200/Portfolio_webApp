import React from "react";
import Title from "../home/title";
import Education from "./education";
import Skills from "./Skills";

const Resume = () => {
  return (
    <section id="resume">
      <Title title="My" subTitle="Resume" />
      <Education />
      <Title title="My" subTitle="Skills" />
      <Skills />
    </section>
  );
};

export default Resume;
