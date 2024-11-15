import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-row md:flex-row pb-6">
      <div className="w-full md:w-1/2 text-[18px] text-zinc-200 px-6 border-r-[1px] border-r-zinc-800 flex items-center">
        <div className="text-[19px] py-6">
          <h2 className="font-semibold mb-1">Hola World! I'm Priti Gupta</h2>
          <p className="text-base leading-6 ">
          Enthusiastic Computer Science student crafting innovative software
           and web solutions. Driven by a passion for problem-solving and collaboration to shape impactful technology.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6">
        <ul className="flex flex-col gap-1">
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Email:</span>
            geekpritigupta@gmail.com
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Mobile:</span>
            +91-7068899164
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Freelance:</span>
            Available
          </li>
        
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
    