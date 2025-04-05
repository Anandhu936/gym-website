import React from "react";
import { PersonStanding ,SquareActivity ,Webhook} from 'lucide-react';
const InfoSection = () => {
  return (
    <div>
    <div className="mx-[5%] ">
        <div className="flex flex-col items-center"><h2 className="text-center text-2xl lg:text-5xl text-white mb-8 font-mono">WHY JOIN US ?</h2>
      <p className="text-center text-sm lg:text-lg text-white max-w-2xl">
        Our diverse membership base create a friendly and supportive atmosphere
        , where you can make friends and stay motivated .
      </p></div>
      
      <div className=" mt-[70px]">
        <img className="rounded-lg h-[400px] lg:h-[600px] w-full" src="/images/gym-bg.jpg" alt="" srcset="" />
      </div>
      <div className="bg-gray-700 rounded-lg p-5 mx-[8%] relative top-[-40px]">
        <div className=" grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="flex gap-5 items-center ">
            <div>
              <PersonStanding size={36} color="green"/>
            </div>
            <div>
              <h6 className="text-white lg:text-lg text-sm">Personal Trainer</h6>
              <p className="text-white text-[12px] lg:text-sm">Unlock your potential with our expert personal trainers</p>
            </div>
          </div>
          <div className="flex gap-5 items-center ">
            <div>
            <SquareActivity color="green" size={36} />
            </div>
            <div>
              <h6 className="text-white lg:text-lg text-sm">Practice Sections</h6>
              <p className="text-white text-[12px] lg:text-sm">Elevate your fitness with practice section</p>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <div>
              <Webhook color="green" size={36}/>
            </div>
            <div>
              <h6 className="text-white lg:text-lg text-sm">Good Management</h6>
              <p className="text-white text-[12px] lg:text-sm">Supportive Management for your fitness success</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default InfoSection;
