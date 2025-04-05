import React from "react";
import * as LucideIcons from "lucide-react"; // Import all icons

const ExploreProgram = () => {
  const programs = [
    {
      icon: "Dumbbell",
      title: "Strengthening",
      description:
        "Embrace the essence of strength as we delve into its various dimensions: physical, mental, and emotional.",
    },
    {
      icon: "HeartPulse",
      title: "Physical Fitness",
      description:
        "It encompasses a range of activities that improve health, strength, flexibility, and overall well-being.",
    },
    {
      icon: "PersonStanding",
      title: "Fat Loss",
      description:
        "Through a combination of workout routines and expert guidance, we'll empower you to reach your goals.",
    },
    {
      icon: "ShoppingBag",
      title: "Weight Gain",
      description:
        "Designed for individuals, our program offers an effective approach to gaining weight in a sustainable manner.",
    },
    {
      icon: "Activity",
      title: "Cardio",
      description:
        "Improve endurance and boost energy levels with a variety of cardio workouts tailored to your fitness goals.",
    },
    {
      icon: "Apple",
      title: "Nutrition",
      description:
        "Gain valuable insights into healthy eating habits and personalized meal plans for long-term well-being.",
    },
    {
      icon: "ClipboardList",
      title: "Personalized Plans",
      description:
        "Get a structured plan customized to your needs, covering workouts, diet, and progress tracking for success.",
    },
    {
      icon: "Users",
      title: "Group Workouts",
      description:
        "Stay motivated with group workouts that bring a sense of community, support, and shared fitness goals.",
    },
  ];

  return (
    <div id="Program" className="mx-[5%]">
      <h3 className="text-3xl lg:text-5xl text-white flex items-center text-center justify-center mb-[20px] lg:mb-[50px] font-mono">
        EXPLORE OUR PROGRAM
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center p-6">
        {programs.map((program, index) => {
          const IconComponent = LucideIcons[program.icon];
          return (
            <div
              className="border-2 border-gray-500 hover:border-orange-500  p-5 bg-gray-800 rounded-md shadow-lg transition-transform hover:scale-105"
              key={index}
            >
              <div className="text-white flex justify-center">
                {IconComponent && <IconComponent size={24} color="green" />}
              </div>
              <h4 className="text-white mt-4 text-[16px] lg:text-lg font-semibold text-center">
                {program.title}
              </h4>
              <p className="text-gray-300 mt-2 text-[12px] lg:text-sm text-center">
                {program.description}
              </p>
              <div className="flex justify-center"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExploreProgram;
