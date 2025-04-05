import ClassSection from "./component/ClassSection"
import ExploreProgram from "./component/ExploreProgram"
import FooterSection from "./component/FooterSection"
import HeroSection from "./component/HeroSection"
import InfoSection from "./component/InfoSection"
import Navbar from "./component/Navbar"
import PricingSection from "./component/PricingSection"
import { ReviewSection } from "./component/ReviewSection"




function App() {
  

  return (
    <>
     <div>
     <Navbar></Navbar>
      <div className=" ">
      <HeroSection className="bg-white"></HeroSection>
      <div className="mt-[40px] lg:mt-[80px] mb-[40px] lg:mb-[80px]">
      <ExploreProgram></ExploreProgram>
      </div>
      <div className="mt-[20px] mb-[40px] lg:mb-[100px]">
        <ClassSection></ClassSection>
      </div>
      
      <InfoSection></InfoSection>
      </div>
      
      <div className="mt-[40px]] lg:mt-[100px]">
      <PricingSection></PricingSection>
      </div>
      <ReviewSection></ReviewSection>
      <div >
      <FooterSection></FooterSection>
      </div>
     
     </div>
    </>
  )
}

export default App
