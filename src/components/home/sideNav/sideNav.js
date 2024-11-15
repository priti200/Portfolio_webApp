import React from 'react'
import SidenavTitle from './SidenavTitle';

const Sidenav = () => {
  return (
    <div className="px-7 py-4">
      <SidenavTitle title="M" subTitle="enu" />
      <ul>
        <li className="sidenavLi">Portfolio Page</li>
      </ul>
      <SidenavTitle title="P" subTitle="rojects" />
      <ul>
        <li className="sidenavLi">Web Development</li>
        <li className="sidenavLi">AASHA-Fundraising WebApp</li>
        <li className="sidenavLi">Sorting Vizualiser-JAVA</li>
        <li className="sidenavLi">Portfolio Websites</li>
        <li className="sidenavLi">BiRide-A Bike Rental Website</li>
        <li className="sidenavLi">AI-Trip-planner</li>
      </ul>
      <ul>
        <li className="sidenavLi">+91-7068899164</li>
        <li className="sidenavLi">geekpritigupta@gmail.com</li>
      </ul>
    </div>
  );
}

export default Sidenav