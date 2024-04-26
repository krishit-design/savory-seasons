"use client";
import HeaderWeb from "./components/Header/Header";
import { HeroParallaxDemo } from "./HomePage/HomePage";
import { SpotlightName } from "./HomePage/HomePage";
import { TabsServices } from "./HomePage/HomePage";
import { GeminiEffectMenu } from "./HomePage/HomePage";
import InfiniteMovingCards from "./components/ui/infinite-moving-cards";
import { BackgroundBeamsFooter } from "./components/Footer/footer";
import TestimonialSlider from "./components/ui/testimonial-slider";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
export default function Home() {

  const [username, setUsername] = useState('');
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn) {
      router.push('/login');
    } else {
      // const storedUsername = localStorage.getItem('UserNameOrEmail');
      // if (storedUsername) {
      //   setUsername(storedUsername);
      // } else {
      //   // Handle case when username is not stored
      // }
    }
  }, []);

  // const handleLogout = () => {
  //   // Clear isLoggedIn and UserNameOrEmail from local storage
  //   localStorage.removeItem('isLoggedIn');
  //   localStorage.removeItem('UserNameOrEmail');
  //   // Redirect to login page
  //   router.push('/login');
  // };
  return (
    <div>
      <SpotlightName />
        {/* <div className="login_info">
          <h1>{username}</h1> 
          <button onClick={handleLogout}>Logout</button>
        </div> */}
      <div className="h-[100%] w-full dark:bg-black dark:bg-grid-black/[0] bg-grid-white/[0.025] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]"></div>
        <HeaderWeb />
        <HeroParallaxDemo />
      </div>
      <div className="h-[100%] w-full dark:bg-black dark:bg-grid-black/[0] bg-grid-white/[0.025] relative flex items-center justify-center">
        <TabsServices />
      </div>
      <div className="h-[100%] w-full dark:bg-black dark:bg-grid-black/[0] bg-grid-white/[0.025] relative flex items-center justify-center">
        <GeminiEffectMenu />
      </div>
      <div className="h-[100%] w-full dark:bg-black dark:bg-grid-black/[0] bg-grid-white/[0.025] relative flex items-center justify-center">

        <InfiniteMovingCards />

        <TestimonialSlider />
      </div>
      <BackgroundBeamsFooter />
    </div>
  );
}
