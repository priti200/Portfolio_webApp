import React from "react";
import { BsTrophyFill } from "react-icons/bs";
import { SiAntdesign } from "react-icons/si";
import { BiCertification, BiCodeAlt } from "react-icons/bi";

import FunFactCard from "./FunFactCard";

const FunFact = () => {
  return (
    <div className="px-0 grid grid-cols-2 md:grid-cols-4 pb-10">
      <FunFactCard icon={<BsTrophyFill />} des="Full Scholarship for Btech" />
      <FunFactCard icon={<SiAntdesign />} des="5+ Finished Projects" />
      <FunFactCard icon={<BiCodeAlt />} des="100 hours of coding" />
      <FunFactCard icon={<BiCertification />} des="5+ Certifications" />

    </div>
  );
};

export default FunFact;
