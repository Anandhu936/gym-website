import * as React from "react"
import { Card, CardContent } from "../components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel"
import RatingStars from "./RatingStars"

const items = [
    {
      title: "Samantha",
      img: "https://anandhu936.github.io/gym-website/images/samantha.jpeg",
      content:
        "Absolutely love this place! The trainers are super friendly and make everyone feel welcome — whether you're a beginner or a pro. The vibe is always upbeat, and the music gets you in the zone. 10/10 recommend!",
    },
    {
      title: "Rashmika",
      img: "https://anandhu936.github.io/gym-website/images/rashmika.jpeg",
      content:
        "Hands down the cleanest gym I’ve ever been to. All equipment is well-maintained, and there's rarely a wait. Great variety of machines, free weights, and functional training zones.",
    },
    {
      title: "Malavika Mohan",
      img: "https://anandhu936.github.io/gym-website/images/malavika.jpeg",
      content:
        "This gym isn’t just about lifting — it’s a whole wellness space. I enjoy the yoga and mobility classes. They've really helped with my posture and stress levels.",
    },
    {
      title: "Mamitha Baiju",
      img: "https://anandhu936.github.io/gym-website/images/mamitha.jpeg",
      content:
        "If you're looking for serious results, this is the place. Personal trainers here pushed me harder than I thought possible — I’m down 8kg in 2 months and feel amazing",
    },
    {
      title: "Naslen",
      img: "https://anandhu936.github.io/gym-website/images/nasleen.jpeg",
      content:
        "Affordable membership plans, and the 24/7 access makes it super convenient for my night shifts. No nonsense, just solid workouts whenever I want.",
    },
    {
      title: "Aishwarya Lekshmi",
      img: "https://anandhu936.github.io/gym-website/images/aishwarya.jpeg",
      content:
        "Joining this gym was the best decision! The group classes are high-energy and fun. Plus, the atmosphere is so motivating — it keeps me coming back every day.",
    },
    {
      title: "Anupama",
      img: "https://anandhu936.github.io/gym-website/images/anupama.jpeg",
      content:
        "Love the holistic approach here — fitness, nutrition, and mindset. The coaches take time to guide you personally, and it’s helped me make long-term changes.",
    },
    {
      title: "Naynthara",
      img: "https://anandhu936.github.io/gym-website/images/nayanthara.jpeg",
      content:
        "From the moment I walked in, I felt inspired. It's not just a gym, it's a community. Super grateful for the support and positive energy here!",
    },
    {
      title: "Madonna sebastian",
      img: "https://anandhu936.github.io/gym-website/images/madonna.jpeg",
      content:
        "The vibe here is unbeatable. Amazing playlist, great people, and an environment that makes you want to work harder and grow stronger every day.",
    },
    {
      title: "Samyuktha Menon",
      img: "https://anandhu936.github.io/gym-website/images/samyuktha.jpeg",
      content:
        "The attention to detail here is top-notch. From personal training to recovery tools like foam rolling and stretching zones — they’ve got everything covered.",
    },
  ];
  



export function ReviewSection() {
    
  return (
    <div className="flex justify-center mx-[5%] lg:mx-0 bg-gray-800 p-4 lg:p-10 ">
 <Carousel className="w-full max-w-md">
      <CarouselContent >
        {items.map((item, index) => (
          <CarouselItem key={index} >
            <div className="p-2">
              <Card className="h-full bg-black ">
                <CardContent className="flex flex-col items-center text-center p-4 gap-4">
                  <div className="w-50 h-50 rounded-full overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-white text-[14px] lg:text-lg font-bold">{item.title}</h3>
                  <p className=" text-[12px] lg:text-sm text-white/80">{item.content}</p>
                  <div>
                  <RatingStars rating={4.5}/>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
   
  )
}
