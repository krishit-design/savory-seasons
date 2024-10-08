"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../components/ui/lamp";
import Header from "../components/Header/Header";
import { LayoutGrid  } from "../components/ui/layout-grid";
import Image from "next/image";
import { BackgroundBeamsFooter } from "../components/Footer/footer";
import { MultiStepLoader as Loader } from "../components/ui/multi-step-loader";
import { IconSquareRoundedX } from "@tabler/icons-react";

const service = () => {
  return (
    <>
        <Header/>
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Explore <br /> Our Services
      </motion.h1>
      <motion.p
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-md font-medium tracking-wider text-transparent md:text-md"
      >
        Scroll Down to know more
      </motion.p>
    </LampContainer>
    <div className="h-[100%] w-full bg-black dark:bg-grid-black/[0] bg-grid-white/[0.025] relative py-5">
        <h1 className="bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">Why Choose Us?</h1>
        <MultiStepLoaderDemo/>
    </div>
    <div className="h-[100vh] w-full bg-black dark:bg-grid-black/[0] bg-grid-white/[0.025] relative">
    <LayoutGridDemo/>
    </div>
    <BackgroundBeamsFooter/>
    
    </>
  );
}

  export function LayoutGridDemo() {
    return (
      <div className="h-screen py-20 w-full">
        <LayoutGrid cards={cards} />
      </div>
    );
  }
   
  const SkeletonOne = () => {
    return (
      <div>
        <p className="font-bold text-4xl text-white">Corporate Events</p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Our job is to make you look good. From office lunches to large-scale corporate events, our mission is to ensure that your business shines. At Savory Seasons, we've built our reputation on the commitment to making you look good. With meticulous attention to detail and a passion for excellence, we specialize in creating extraordinary culinary experiences that elevate your corporate gatherings to new heights. Let us handle the catering, so you can focus on what you do best – making an impact in your industry."
        </p>
      </div>
    );
  };
   
  const SkeletonTwo = () => {
    return (
      <div>
        <p className="font-bold text-4xl text-white">Social Events</p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        At Savory Seasons, we believe in sweating the small stuff, so you don’t have to. Whether it's an anniversary celebration, a baby shower, or a milestone birthday party, we understand the significance of life's special occasions. Our dedicated team is committed to giving your event the attention it deserves, ensuring that every detail is taken care of seamlessly. With our expertise in event planning and catering, you can relax and be fully present with your guests, knowing that your event is in capable hands. Let us handle the logistics, while you cherish moments with your loved ones and create lasting memories.
        </p>
      </div>
    );
  };
  const SkeletonThree = () => {
    return (
      <div>
        <p className="font-bold text-4xl text-white">Wedding Events</p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        We understand that your wedding day is one of the most important days of your life, and we're honored to be a part of it. Our dedicated team treats your wedding as if it were our own, ensuring that every moment is nothing short of spectacular. From the initial planning stages to the final toast, our team of experts is here to guide you through the process, offering peace of mind and a remarkable experience. Let us turn your vision into reality and create the ultimate celebration of your relationship, filled with love, joy, and unforgettable memories.
        </p>
      </div>
    );
  };
  const SkeletonFour = () => {
    return (
      <div>
        <p className="font-bold text-4xl text-white">Other Events</p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        We believe that every event, whether it's a wedding, social gathering, or corporate function, deserves the utmost attention and care. From intimate family gatherings to large-scale corporate events, our team is dedicated to ensuring that each occasion is a memorable and seamless experience for you and your guests. With our expertise and attention to detail, we take pride in bringing your vision to life and creating extraordinary moments that leave a lasting impression. Let us handle the details, so you can relax and enjoy the celebration, knowing that your event is in capable hands."
        </p>
      </div>
    );
  };
   
  const cards = [
    {
      id: 1,
      content: <SkeletonOne />,
      className: "md:col-span-2 object-cover",
      thumbnail:
        "/assets/images/services/serviceGrid1.webp",
    },
    {
      id: 2,
      content: <SkeletonTwo />,
      className: "col-span-1 object-cover",
      thumbnail:
        "/assets/images/services/serviceGrid2.webp",
    },
    {
      id: 3,
      content: <SkeletonThree />,
      className: "col-span-1 object-cover",
      thumbnail:
        "/assets/images/services/serviceGrid3.webp",
    },
    {
      id: 4,
      content: <SkeletonFour />,
      className: "md:col-span-2 object-cover",
      thumbnail:
        "/assets/images/services/serviceGrid4.webp",
    },
  ];

  const loadingStates = [
    {
      text: "Tailored Menus",
    },
    {
      text: "Professional Service",
    },
    {
      text: "Flexible Options",
    },
    {
      text: "Quality Ingredients",
    },
    {
      text: "Attention to Detail",
    },
    {
      text: "Customized Service",
    },
    {
      text: "Customer Satisfaction",
    },
    {
      text: "Peace of Mind",
    },
  ];
   
  export function MultiStepLoaderDemo() {
    const [loading, setLoading] = useState(false);
    return (
      <div className="w-full h-[25vh] flex items-center justify-center">
        {/* Core Loader Modal */}
        <Loader loadingStates={loadingStates} loading={loading} duration={2000} />
   
        {/* The buttons are for demo only, remove it in your actual code ⬇️ */}
        <button
          onClick={() => setLoading(true)}
          className="bg-[#003638] hover:bg-[#003638]/90 text-white mx-auto text-sm md:text-base transition font-medium duration-200 h-10 rounded-lg px-8 flex items-center justify-center"
          style={{
            boxShadow:
              "0px -1px 0px 0px #ffffff40 inset, 0px 1px 0px 0px #ffffff40 inset",
          }}
        >
          Click to Know
        </button>
   
        {loading && (
          <button
            className="fixed top-4 right-4 text-white dark:text-white z-[120]"
            onClick={() => setLoading(false)}
          >
            <IconSquareRoundedX className="h-10 w-10" />
          </button>
        )}
      </div>
    );
  }
export default service;