import React from "react";
import { GrYoga } from "react-icons/gr";
import { FaDumbbell } from "react-icons/fa6";
import { GiGymBag } from "react-icons/gi";
import { motion } from "framer-motion";
import { SlideLeft } from "../../utility/animation";

const WhyChooseData = [
  {
    id: 1,
    title: "Personalized Freelancing",
    desc: "Hire freelancers with specialized skills tailored to your project's unique needs.",
    icon: <GiGymBag />,
    bgColor: "#0063ff",
    delay: 0.3,
  },
  {
    id: 2,
    title: "24/7 Freelancer Support",
    desc: "Freelancers available around the clock to respond and work on your urgent projects.",
    link: "/",
    icon: <GiGymBag />,
    bgColor: "#73bc00",
    delay: 0.6,
  },
  {
    id: 3,
    title: "Real-time Collaboration",
    desc: "Our platform offers real-time communication and collaboration tools, ensuring smooth project management.",
    link: "/",
    icon: <GiGymBag />,
    bgColor: "#fa6400",
    delay: 0.9,
  },
  {
    id: 4,
    title: "Competitive Rates",
    desc: "Choose a freelancer that fits your budget with transparent pricing and no hidden fees.",
    link: "/",
    icon: <GiGymBag />,
    bgColor: "#fe6baa",
    delay: 0.9,
  },
];
const WhyChooseUs = () => {
  return (
    <div className="bg-[#f9fafc]">
      <div className="container py-24">
        {/* header section */}
        <div className="space-y-4 p-6 text-center max-w-[1000px] mx-auto mb-5">
          <h1 className="uppercase font-bold text-4xl text-orange-600">
            Why Choose Us
          </h1>
          <p className="font-semibold text-2xl">
          Why Choose Us for Your Freelancing Needs
          </p>
        </div>
        {/* cards section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {WhyChooseData.map((item) => {
            return (
              <motion.div
                variants={SlideLeft(item.delay)}
                initial="hidden"
                whileInView={"visible"}
                className="space-y-4 p-6 rounded-xl shadow-[0_0_22px_rgba(0,0,0,0.15)]"
              >
                {/* icon section */}
                <div
                  style={{ backgroundColor: item.bgColor }}
                  className="w-10 h-10 rounded-lg flex justify-center items-center text-white"
                >
                  <div className="text-2xl">{item.icon}</div>
                </div>
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
