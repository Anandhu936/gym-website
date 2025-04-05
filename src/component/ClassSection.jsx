import React from "react";

function ClassSection() {
  return (
    <div className="mx-[5%] flex justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="lg:order-2 content-center ml-[25px] lg:ml-0">
          <h3 className="text-white text-2xl lg:text-4xl max-w-[360px] font-mono">THE CLASS YOU WILL GET THERE</h3>
          <p className="text-white text-[12px] lg:text-sm mt-8">
            Lead by our team of expert and motivational instructors, "The Class
            You Will Get Here" is a high-energy ,results-driven session that
            combines a perfect blend of cardio,strength training, and functional
            exercises. Each class is carefully curated to keep you engaged and
            challenged,ensuring you never hit a plateau in your fitness
            endeavors.
          </p>
          <button className='border-1 hover:border-orange-400 transition duration-300 ease-in-out text-white px-6 py-2 rounded-md  cursor-pointer mt-15 '>Join Now</button>
        </div>
        <div className="lg:order-1">
           <img className="rounded-lg" src="/images/gym-7.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default ClassSection;
