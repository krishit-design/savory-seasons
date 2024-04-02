"use client";
import React from "react";
import './HomePage.css'
import { useScroll, useTransform } from "framer-motion";
import { HeroParallax } from "../components/ui/HeroParallax";
import { Spotlight } from "../components/ui/Spotlight";
import { Tabs } from "../components/ui/tabs";
import { GeminiEffect } from "../components/ui/gemini-effect";
import { BackgroundBeams } from "../components/ui/background-beams";
import Link from "next/link";


export function SpotlightName() {
  return (
    <div className="h-[100vh] pt-30 pb-30 w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Welcome to <br /> Savory Seasons
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          At Savory Seasons, we believe that every event is a unique celebration of taste, and we are here to turn your moments into memories through the art of culinary excellence. Established with a passion for creating delightful culinary experiences, Savory Seasons has been a trusted name in the catering industry.
          
        </p>
      </div>
    </div>
  );
}

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Food Dish",
    link: "",
    thumbnail:
      "/assets/images/secOne-15.jpg"
  },
  {
    title: "Indian Dish",
    link: "",
    thumbnail:
      "/assets/images/secOne-2.jpg"
  },
  {
    title: "Rice",
    link: "",
    thumbnail:
      "/assets/images/secOne-3.jpg"
  },

  {
    title: "Buffet's",
    link: "",
    thumbnail:
      "/assets/images/secOne-4.jpg"
  },
  {
    title: "Dishes",
    link: "",
    thumbnail:
      "/assets/images/secOne-5.jpg"
  },
  {
    title: "Dishes1",
    link: "",
    thumbnail:
      "/assets/images/secOne-6.jpg"
  },

  {
    title: "Beverages",
    link: "",
    thumbnail:
      "/assets/images/secOne-7.jpg"
  },
  {
    title: "Deserts",
    link: "",
    thumbnail:
      "/assets/images/secOne-8.jpg"
  },
  {
    title: "Spices Dish",
    link: "",
    thumbnail:
      "/assets/images/secOne-9.jpg"
  },
  {
    title: "Punjabi Dishes",
    link: "",
    thumbnail:
      "/assets/images/secOne-10.jpg"
  },
  {
    title: "Spices",
    link: "",
    thumbnail:
      "/assets/images/secOne-11.jpg"
  },

  {
    title: "",
    link: "",
    thumbnail:
      "/assets/images/secOne-12.jpg"
  },
  {
    title: "Food Bowl",
    link: "",
    thumbnail:
      "/assets/images/secOne-13.jpg"
  },
  {
    title: "Spices1",
    link: "",
    thumbnail:
      "/assets/images/secOne-14.jpg"
  },
  {
    title: "Gujarati Dishes",
    link: "",
    thumbnail:
      "/assets/images/secOne-1.jpg"
  },
];

export function TabsServices() {
  // const router = useRouter();
  <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
    <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
      Making Every <br /> Experience Magical
    </h1>
  </div>

  const tabs = [
    {
      title: "Corporate",
      value: "Corporate",
      content: (
        <>

          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white tab-bg">

            <p>Corporate</p>
            <div className="content">
              <img src="assets/images/services/service1.svg" alt="" />
              <div className="content-desc">
                <div className="desc">Our job is to make you look good. From office lunches to large-scale corporate events, we’ve made our business out of making your business shine.</div>
                <button className="linkWrap">
                  <Link href="/service" className="cta style-9">
                    <span>Learn More</span>
                    <svg width="20px" height="12px" viewBox="0 0 13 10">
                      <path d="M1,5 L11,5"></path>
                      <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "Social",
      value: "Social",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white tab-bg">
          <p>Social</p>
          <div className="content">
            <img src="assets/images/services/service2.svg" alt="" />
            <div className="content-desc">
              <div className="desc">We sweat the small stuff, so you don’t have to. For all of life’s special occasions, we give your anniversary, shower, or birthday party the attention it deserves, allowing you to focus on being present with your guests!</div>
              <button className="linkWrap">
                <Link href="/service" className="cta style-9">
                  <span>Learn More</span>
                  <svg width="20px" height="12px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </Link>
              </button>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Weddings",
      value: "Weddings",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white tab-bg">
          <p>Weddings</p>
          <div className="content">
            <img src="assets/images/services/service3.svg" alt="" />
            <div className="content-desc">
              <div className="desc">The most important day of your life, is ours too. Your wedding should be the ultimate celebration of your relationship, and our team of experts guide you through the process, offering peace of mind and a remarkable experience.</div>
              <button className="linkWrap">
                <Link href="/service" className="cta style-9">
                  <span>Learn More</span>
                  <svg width="20px" height="12px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </Link>
              </button>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Our Services
        </h1>
      </div>
      <Tabs tabs={tabs} />
    </div>
  );
}

export function GeminiEffectMenu() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    <div
      className="h-[400vh] bg-black w-full dark:border dark:border-white/[0.1] rounded-md relative pt-40 overflow-clip"
      ref={ref}
    >
      <GeminiEffect
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
      />
    </div>
  );
}

// export function BackgroundBeamsFooter() {
//   return (
//     <div className="h-[100%] pt-4 pb-4 rounded-md bg-black relative flex flex-col justify-center antialiased pointer-events-auto">
//       <div className="max-w-7xl w-full mx-auto p-4 footer">
//         <div className="logo-footer">
//           <img className="logo-img" src="assets/images/logo-ss.svg" alt="" />
//           <div className="footer-desc">Established with a passion for creating delightful culinary experiences, Savory Seasons has been a trusted name in the catering industry.</div>
//           <div className="social-media">
//             <a href="#"><img className="social-icon" src="assets/images/footer-icons/whatsapp.svg"
//               alt="" /></a>
//             <a href="#"><img className="social-icon" src="assets/images/footer-icons/instagram.svg"
//               alt="" /></a>
//             <a href="#"><img className="social-icon" src="assets/images/footer-icons/x.svg" alt="" /></a>
//           </div>
//         </div>
//         <div className="links-connect">
//           <div className="quick">
//             <h4 className="text-3xl md:text-3xl w-100 font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
//               Quick Links
//             </h4>
//             <div className="connect-content">
//               <a href="#" className="contact-footer">MENU</a>
//               <a href="#" className="contact-footer">SERVICES</a>
//               <a href="#" className="contact-footer">CUSTOMIZATION</a>
//               <a href="#" className="contact-footer">CONTACT</a>
//             </div>
//           </div>
//           <div className="lets-connect">
//             <h4 className="text-3xl md:text-3xl w-100 font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
//               Let's Connect
//             </h4>
//             <div className="connect-content">
//               <a href="mailto:savoryseasons@yopmail.com" className="contact-footer"><img
//                 src="assets/images/footer-icons/mail.svg" alt="" />savoryseasons@yopmail.com</a>
//               <a href="tel:8742425485" className="contact-footer"><img
//                 src="assets/images/footer-icons/phone.svg" alt="" />8742425485</a>
//               <a href="#" className="contact-footer"><img src="assets/images/footer-icons/location.svg"
//                 alt="" />B-701 Blue Moon Tower, Gota, Ahmedabad</a>
//             </div>
//           </div>
//         </div>
//         {/* <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  font-bold">
//           Join the waitlist
//         </h1>
//         <p></p>
//         <p className="text-neutral-500 max-w-lg my-2 text-sm relative z-10">
//           Welcome to MailJet, the best transactional email service on the web.
//           We provide reliable, scalable, and customizable email solutions for
//           your business. Whether you&apos;re sending order confirmations,
//           password reset emails, or promotional campaigns, MailJet has got you
//           covered.
//         </p>
//         <input
//           type="text"
//           placeholder="hi@manuarora.in"
//           className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
//         /> */}
//       </div>
//       <BackgroundBeams />
//     </div>
//   );
// }