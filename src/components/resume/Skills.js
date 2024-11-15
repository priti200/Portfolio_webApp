import React from "react";
import { SiArtstation } from "react-icons/si";
import { FaFlag } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { IoIosPaper } from "react-icons/io";
import { GiCheckMark } from "react-icons/gi";
import ResumeTitle from "./ResumeTitle";

const Skills = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 px-4 lg:px-6">

      {/* =============== Coding Start here ==================== */}
      <div className="col-span-1 md:col-span-1">
        <ResumeTitle title="Coding" icon={<BiCodeAlt />} />
        {/* Skill bars for coding */}
        <div className="py-4">
          {/* JavaScript Skill */}
          <SkillBar title="JavaScript" percentage={95} />
          {/* Node.js Skill */}
          <SkillBar title="Node.js" percentage={90} />
          {/* React Skill */}
          <SkillBar title="React.js" percentage={85} />
          {/* Django Skill */}
          <SkillBar title="Django" percentage={80} />
        </div>
      </div>
    
      {/* =============== Knowledge Start here ==================== */}
      <div className="col-span-1 md:col-span-1">
        <ResumeTitle title="Knowledge" icon={<IoIosPaper />} />
        <ul className="py-4 flex flex-col gap-2">
          <KnowledgeItem text="Website hosting" />
          <KnowledgeItem text="Object Oriented Programming" />
          <KnowledgeItem text="Operating System" />
          <KnowledgeItem text="Computer Networks" />
          <KnowledgeItem text="Machine Learning" />
          <KnowledgeItem text="Problem Solving" />
          <KnowledgeItem text="Data Structures & Algorithm" />
          <KnowledgeItem text="Artificial Intelligence" />
        </ul>
      </div>

      {/* =============== Design Start here ==================== */}
      <div className="col-span-1 md:col-span-1">
        <ResumeTitle title="Design" icon={<SiArtstation />} />
        <div className="py-4">
          <SkillBar title="Web Development" percentage={95} />
          <SkillBar title="Full Stack Development" percentage={90} />
          <SkillBar title="Mobile Application" percentage={85} />
          <SkillBar title="Android Development" percentage={80} />
        </div>
      </div>
    
      {/* =============== Languages Start here ==================== */}
      <div className="col-span-1 md:col-span-1">
        <ResumeTitle title="Languages" icon={<FaFlag />} />
        <div className="py-4">
          <LanguageBar title="English" percentage={100} />
          <LanguageBar title="Hindi" percentage={90} />
          <LanguageBar title="Nepali" percentage={70} />
          <LanguageBar title="Awadhi" percentage={60} />
        </div>
      </div>
    </div>
  );
};

// SkillBar Component for coding and design skills
const SkillBar = ({ title, percentage }) => (
  <div className="py-3 border-b border-zinc-800">
    <p className="text-base text-textColor -mb-1">{title}</p>
    <span className="w-full bg-zinc-600 h-1 inline-flex relative">
      <span className={`w-[${percentage}%] h-full absolute top-0 left-0 bg-designColor`} />
    </span>
  </div>
);

// KnowledgeItem component for the knowledge section
const KnowledgeItem = ({ text }) => (
  <li className="flex items-center gap-4 text-textColor">
    <span className="text-designColor text-lg"><GiCheckMark /></span>
    {text}
  </li>
);

// LanguageBar component for language proficiency
const LanguageBar = ({ title, percentage }) => (
  <div className="py-3 border-b border-zinc-800">
    <p className="text-base text-textColor -mb-1">{title}</p>
    <span className="w-full bg-zinc-600 h-1 inline-flex relative">
      <span className={`w-[${percentage}%] h-full absolute top-0 left-0 bg-designColor`} />
    </span>
  </div>
);

export default Skills;
