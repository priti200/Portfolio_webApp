import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { BsCloudLightningFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import {  FiMail } from "react-icons/fi";
import { Profile } from "../../assets/Images/index";
import CV from "../../assets/Priti_Resume.pdf";

const Left = () => {
  const [text] = useTypewriter({
    words: ["MERN Stack Developer", "Full Stack Developer", "Mobile App Developer"],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 20,
    delaySpeed: 1000,
  });

  return (
    <div className="w-full lgl:w-5/12 h-full bg-bodyColor rounded-2xl shadow-testShwdow z-10">
      <div className="w-full h-3/5 rounded-3xl ">
        <img
          className="w-70% h-[91%] px-3 mt-5 object-cover rounded-2xl"
          src={Profile}
          loading="priority"
          alt="bannerImage"
        />
      </div>
      <div className="w-full h-2/5 flex flex-col justify-between border-t-0 rounded-bl-xl rounded-br-xl ">
        <div className="flex flex-col items-center gap-2 py-10">
          <h1 className="text-textColor text-4xl font-semibold">Priti Gupta</h1>
          <p className="text-base text-designColor tracking-wide">
            {text}
            <Cursor cursorBlinking="false" cursorStyle="|" />
          </p>
          <div className="flex text-[24px] justify-center gap-3 mt-2">
            <a href="https://github.com/priti200" target="_blank" rel="noopener noreferrer" className="hover:text-designColor duration-300 cursor-pointer text-[24px]">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/priti-gupta-554637255/" target="_blank" rel="noopener noreferrer" className="hover:text-designColor duration-300 cursor-pointer text-[24px]">
              <FaLinkedin />
            </a>
            <a href="https://leetcode.com/u/eyempriti/" target="_blank" rel="noopener noreferrer" className="hover:text-designColor duration-300 cursor-pointer text-[24px]">
            <SiLeetcode/>
            </a>
            <a href="mailto:geekpritigupta@gmail.com" className="hover:text-designColor duration-300 cursor-pointer text-[24px]">
              <FiMail />
            </a>
          </div>
        </div>
        <div className="mb-4 h-20">
          <a
            href={CV}
            target="_blank"
            className="w-1/2 border-t-[1px] borderRight border-t-zinc-800 text-sm tracking-wide uppercase gap-2 hover:text-designColor duration-300"
            rel="noreferrer"
          >
            <button className="w-full pt-0 text-[18px] h-full flex justify-center items-center gap-2">
              Download CV <BsCloudLightningFill />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Left;
