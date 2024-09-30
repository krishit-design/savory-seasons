"use client";
import HeaderWeb from "./components/Header/Header";
import { HeroParallaxDemo } from "./HomePage/HomePage";
import { SpotlightName } from "./HomePage/HomePage";
import { TabsServices } from "./HomePage/HomePage";
import { GeminiEffectMenu } from "./HomePage/HomePage";
import InfiniteMovingCards from "./components/ui/infinite-moving-cards";
import { BackgroundBeamsFooter } from "./components/Footer/footer";
import TestimonialSlider from "./components/ui/testimonial-slider";
export default function Home() {
  return (
    <div>
      <SpotlightName />
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
