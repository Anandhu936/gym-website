import React from 'react'

const HeroSection = () => {
  return (
    <div id="Home" className='mx-[5%] mb-10'>
        <div className='grid lg:grid-cols-[1fr_1.5fr] gap-6 mt-[20px] lg:mt-[100px]'>
          
           <div className='lg:order-2'>
            <img src="/images/hero-img-gym.png" alt="" />
           </div>
           <div className='text-white lg:order-1 ml-[25px] lg:ml-0'>
              <h4 className='text-sm  lg:text-xl text-orange-300'>BEST FITNESS IN THE TOWN</h4>
              <h1 className='text-white  text-3xl lg:text-7xl pt-5 font-extrabold font-serif'><span className='font-medium text-green-500 text-3xl lg:text-7xl'>MAKE</span> YOUR BODY SHAPE</h1>
               <p className='mt-8 text-sm lg:text-[16px]'>Unleash your potential and embark on a journey towards stronger,fitter, and more confident you .sign up for 'Make Your Body Shape' now and witness the incredible transformation your body is capable of!</p>
               <button className= 'border-1 hover:border-orange-400 transition duration-300 ease-in-out text-white px-6 py-2 rounded-md mt-10 cursor-pointer'>Get Started</button>
           </div>
        </div>
    </div>
  )
}

export default HeroSection