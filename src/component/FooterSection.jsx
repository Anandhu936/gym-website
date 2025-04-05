import React from "react";

const FooterSection = () => {
  return (
    <div className="flex flex-col justify-center items-center   ">
      <nav className="flex justify-between items-center  lg:px-20 py-4">
        <ul className=" lg:mx-24 p-2 grid grid-cols-5 font-semibold  md:mx-0  md:flex gap-1 lg:gap-10   justify-items-center">
          <a href="#Home">
            <li className="text-white hover:text-orange-400 text-[14px] lg:text-[20px] transition-all duration-300 p-0 md:p-0">
              Home
            </li>
          </a>
          <a href="#Program">
            <li className=" text-white hover:text-orange-400 text-[14px] lg:text-[20px] transition-all duration-300 p-0 md:p-0">
              Program
            </li>
          </a>
          
          <a href="#pricing">
            <li className="text-white hover:text-orange-400 text-[14px] lg:text-[20px] transition-all duration-300 p-0 md:p-0">
            Pricing
            </li>
          </a>
          
         
        </ul>
      </nav>
      <p className="mb-5 text-white text-sm">
        Copyright &#169; 2025 NewWayGym . All Right Reserved.
      </p>
    </div>
  );
};

export default FooterSection;
