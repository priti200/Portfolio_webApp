
// import React from "react";
// // import {
// //   workImgOne,
// //   workImgTwo,
// //   workImgThree,
// //   workImgFour,
// // } from "../../assets/Images/work";
// import workImgOne from "../../assets/Images/work/workImgOne.png"
// import workImgTwo from "../../assets/Images/work/workImgTwo.png"
// import workImgThree from "../../assets/Images/work/workImgThree.png"
// import workImgFour from "../../assets/Images/work/workImgFour.png"

// import Title from "../home/title";
// import ProjectsCard from "./ProjectsCard";

// const Projects = () => {
//   return (
//     <div>
//       <Title title="Recent" subTitle="Projects" />
//       <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
//         {/* <div className="px-6"> */}
//           <ProjectsCard
//             title="AASHA-Fundraising WebApp"
//             category="Website"
//             image={workImgOne}
//           />
//           <ProjectsCard
//             title="AI-Trip-planner"
//             category="Design"
//             image={workImgFour}
//           />
//           <ProjectsCard
//             title="BiRide-A Bike Rental Website"
//             category="Logo"
//             image={workImgThree}
//           />
//            <ProjectsCard
//             title="Sorting Vizualiser-JAVA"
//             category="OOPS"
//             image={workImgTwo}
//           />
//         {/* </div> */}
//         {/* <div className="px-6">
//           <ProjectsCard
//             title="Sorting Vizualiser-JAVA"
//             category="OOPS"
//             image={workImgFour}
//           />
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default Projects;


import React from "react";
import workImgOne from "../../assets/Images/work/workImgOne.png";
import workImgTwo from "../../assets/Images/work/workImgTwo.png";
import workImgThree from "../../assets/Images/work/workImgThree.png";
import workImgFour from "../../assets/Images/work/workImgFour.png";

import Title from "../home/title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div>
      <Title title="Recent" subTitle="Projects" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <ProjectsCard
          title="AASHA-Fundraising WebApp"
          category="Website"
          image={workImgOne}
          link="https://github.com/priti200/AASHA"  // Add your actual project link here
        />
        <ProjectsCard
          title="AI-Trip-planner"
          category="Design"
          image={workImgFour}
          link="https://github.com/priti200/AI-Trip-Planner"  
        />
        <ProjectsCard
          title="BiRide-A Bike Rental Website"
          category="Logo"
          image={workImgThree}
          link="https://github.com/priti200/BikeRental"  
        />
        <ProjectsCard
          title="Sorting Visualiser-JAVA"
          category="OOPS"
          image={workImgTwo}
          link="https://github.com/priti200/Sorting-Visualizer-in-Java"  
        />
      </div>
    </div>
  );
};

export default Projects;
