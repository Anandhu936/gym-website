import React from 'react'
import { IndianRupee ,Check,SquareCheckBig} from 'lucide-react';
const PricingSection = () => {
  return (
    <div id='pricing' className='mx-[5%] mb-[70px]'>
        <div className='flex flex-col items-center'>
        <h2 className='text-2xl lg:text-5xl text-white text-center font-mono'>OUR PRICING PLANS</h2>
        <p className='text-center text-[14px] lg:text-[16px] text-white mt-4 w-[350px] md:w-[450px] lg:w-[500px] justify-center flex'>Our pricing plan comes with various membership tiers,each tailored to cater to different preferences and fitness aspirations</p>
        </div>
        
        <div className='grid grid-col-1 md:grid-cols-3 gap-10 mt-14'>
        <div className="bg-gray-800 rounded-lg p-5 border-1 border-transparent hover:border-orange-500 transition duration-300 ease-in-out">

                <h4 className='text-white text-lg lg:text-xl mb-2'>Silver</h4>
                <h3 className=' flex items-center mb-4'> <span className='mt-1'><IndianRupee color='white' /></span> <span className='text-white lg:text-3xl text-2xl'>1000</span></h3>
                <div className='border-1 border-white'></div>
                <ul className="list-disc mt-12">
                    <li className='flex items-center gap-2'><Check color='orange'/> <span className='text-white text-[12px] lg:text-sm'>Weight Training</span></li>
                    <li className='flex items-center gap-2'><Check color='orange'/><span className='text-white text-[12px] lg:text-sm'>Group training</span></li>
                    <li className='flex items-center gap-2'><Check color='orange'/><span className='text-white text-[12px] lg:text-sm'>1 month</span></li>
                </ul>
                <div className='flex justify-center'>
                <button className='border-1 hover:border-orange-400 text-white px-6 py-2 rounded-md  cursor-pointer mt-15 '>Join Now</button>
                </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-5 border-1 border-transparent hover:border-orange-500 transition duration-300 ease-in-out">
                <h4 className='text-white text-lg mb-2'>Gold</h4>
                <h3 className=' flex items-center mb-4'> <span className='mt-1'><IndianRupee color='white' /></span> <span className='text-white lg:text-3xl text-2xl'>1200</span></h3>
                <div className='border-1 border-white'></div>
                <ul className="list-disc mt-6">
                    <li className='flex items-center gap-2'><Check color='orange'/> <span className='text-white text-[12px] lg:text-sm'>Weight Training</span></li>
                    <li className='flex items-center gap-2'><Check color='orange'/><span className='text-white text-[12px] lg:text-sm'>Group training</span></li>
                    <li className='flex items-center gap-2'><Check color='orange'/><span className='text-white text-[12px] lg:text-sm'>Cardio training</span></li>
                    <li className='flex items-center gap-2'><Check color='orange'/><span className='text-white text-[12px] lg:text-sm'>1 month</span></li>
                </ul>
                <div className='flex justify-center'>
                <button className='border-1 hover:border-orange-400 text-white px-6 py-2 rounded-md  cursor-pointer mt-15 '>Join Now</button>
                </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-5 border-1 border-transparent hover:border-orange-500 transition duration-300 ease-in-out">
                <h4 className='text-white text-lg mb-2'>Diamond</h4>
                <h3 className=' flex items-center mb-4'> <span className='mt-1'><IndianRupee color='white' /></span> <span className='text-white lg:text-3xl text-2xl'>3200</span></h3>
                <div className='border-1 border-white'></div>
                <ul className="list-disc mt-6">
                    <li className='flex items-center gap-2'><Check color='orange'/> <span className='text-white text-[12px] lg:text-sm'>Weight Training</span></li>
                    <li className='flex items-center gap-2'><Check color='orange'/><span className='text-white text-[12px] lg:text-sm'>Group training</span></li>
                    <li className='flex items-center gap-2'><Check color='orange'/><span className='text-white text-[12px] lg:text-sm'>Cardio training</span></li>
                    <li className='flex items-center gap-2'><Check color='orange'/><span className='text-white text-[12px] lg:text-sm'>3 month</span></li>
                </ul>
                <div className='flex justify-center'>
                <button className='border-1 hover:border-orange-400 text-white px-6 py-2 rounded-md  cursor-pointer mt-15 '>Join Now</button>
                </div>
            </div>
        </div>
       
    </div>
  )
}

export default PricingSection