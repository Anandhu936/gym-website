import { useState } from "react";
import { Menu, X,Dumbbell } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);



  return (
    <div className="">
      <nav className="flex justify-between items-center px-10 md:px-20 py-4">
        <div className="flex items-center gap-2"> <Dumbbell color="orange"/><span className="lg:text-[28px] text-[14px] text-white hover:text-orange-400 font-bold tracking-wide cursor-pointer transition-all duration-300">
          NewWayGym
        </span></div>
       
       
        <ul className="mx-24 p-4  font-semibold  md:mx-0 hidden md:flex gap-8">
          <a href="#Home">
            <li className="text-white hover:text-orange-400 lg:text-[20px] text-[14px] transition-all duration-300 p-1 md:p-0">
              Home
            </li>
          </a>
          <a href="#Program">
            <li className=" text-white hover:text-orange-400 lg:text-[20px] text-[14px] transition-all duration-300 p-1 md:p-0">
              Program
            </li>
          </a>
          
          <a href="#pricing">
            <li className="text-white hover:text-orange-400 lg:text-[20px] text-[14px] transition-all duration-300 p-1 md:p-0">
             Pricing
            </li>
          </a>
          
        </ul>
        <div className="  md:mx-0 hidden md:flex"> 
        <button className= 'border-1 hover:border-orange-400 transition duration-300 ease-in-out text-white px-6 py-2 rounded-md  cursor-pointer'>Join Now</button>
        </div>
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </nav>
      
      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-[#1f242d] transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden w-full h-full`}
      >
        <div className="border-2 border-black m-4 rounded-b-2xl rounded-l-2xl rounded-r-2xl bg-gray-600">
          <nav className="flex justify-between items-center px-10 md:px-20 py-4">
            <span className="lg:text-[20px] text-[14px] text-white hover:text-orange-400 font-bold tracking-wide cursor-pointer">
              NewWayGym
            </span>
            <button className="cursor-pointer text-white" onClick={() => setIsOpen(false)}>
              <X size={30} />
            </button>
          </nav>
        </div>
        <ul className="flex flex-col gap-6 text-lg font-semibold p-8">
          <a href="/#Home">
            <li className="text-white hover:text-orange-400 text-md transition-all duration-300 p-1 md:p-0">
              Home
            </li>
          </a>
          <a href="/#Program">
            <li className=" text-white hover:text-orange-400 text-md transition-all duration-300 p-1 md:p-0">
              Program
            </li>
          </a>
         
          <a href="/#pricing">
            <li className="text-white hover:text-orange-400 text-md transition-all duration-300 p-1 md:p-0">
              Pricing
            </li>
          </a>
          
          <div className=" "> 
          <button className= 'border-1 hover:border-orange-400 transition duration-300 ease-in-out text-white px-6 py-2 rounded-md  cursor-pointer'>Join Now</button>
        </div>
        </ul>
       
      </div>
    </div>
  );
};

export default Navbar;
