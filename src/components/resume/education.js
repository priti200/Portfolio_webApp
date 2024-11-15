import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Experience" icon={<MdWork />} />
        <ResumeCard
          badge=""
          title="Software Development Engineer Intern"
          subTitle="Amrita Centre for Flexible Electronics & Advanced Materials"
          des="Researching & Developing a fully fledged Sensor based Mobile Application."
        />
        <ResumeCard
          badge="2022"
          title="Java-Freelance Developer"
          subTitle="Remote"
          des="Developed a Car parking Java Command Line Application based Object Oriented Programming Concepts."
        />
       
      </div>
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />
        <ResumeCard
          badge="2022-2026"
          title="Amrita Vishwa Vidyapeetham, Amritapuri"
          subTitle="India"
          des="Currently Pursuing BTech in Computer Science & Engineering."
        />
        <ResumeCard
          badge="2021-2022"
          title="IBM Computer Instiute, Nepal"
          subTitle="Nepal"
          des="Diploma of Computer Application"
        />
      </div>
    </div>
  );
};

export default Education;
