import React from "react";
// import "tw-elements-react/dist/css/tw-elements-react.min.css";

export default function Carousel(): JSX.Element {
  return (
    <>
      {/* <TECarousel showControls crossfade ride="carousel" className="carousel-container">
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        <h1 className="text-4xl pb-8 md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Our Happy Clients
          </h1>
          <TECarouselItem
            itemID={1}
            className="relative float-left -mr-[100%] hidden w-full !transform-none transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <div className="testi-box">
              <div className="testi-head">Ananya S., Birthday Host</div>
              <div className="testi-rating">
                <img src="assets/images/star.png" alt="" />
                <img src="assets/images/star.png" alt="" />
                <img src="assets/images/star.png" alt="" />
                <img src="assets/images/star.png" alt="" />
                <img src="assets/images/star.png" alt="" />
              </div>
              <div className="testi-desc">
                Savory Seasons turned my birthday into an unforgettable feast! The
                curated
                menu
                showcased a perfect balance of flavors, and the presentation was nothing
                short of
                art. The team's commitment to excellence truly shone through. Thank you
                for
                making
                my special day so delicious!
              </div>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={2}
            className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <div className="testi-box">
              <div className="testi-head">Priya R., IT Professional</div>
              <div className="testi-rating">
                <img src="assets/images/star.png" alt="" />
                <img src="assets/images/star.png" alt="" />
                <img src="assets/images/star.png" alt="" />
                <img src="assets/images/star.png" alt="" />
                <img src="assets/images/star.png" alt="" />
              </div>
              <div className="testi-desc">
                As an IT professional juggling a hectic schedule, Savory Seasons
                Catering has been a lifesaver for our office events. The diverse menu
                options and impeccable service make every gathering a hit. It's more
                than just catering; it's an experience that leaves everyone craving for
                more.
              </div>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={3}
            className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <div className="testi-box">
              <div className="testi-head">Rahul S., Conference Organizer</div>
              <div className="testi-rating">
                <img src="assets/images/star.png" alt="" />
                <img src="assets/images/star.png" alt="" />
                <img src="assets/images/star.png" alt="" />
                <img src="assets/images/star.png" alt="" />
                <img src="assets/images/star.png" alt="" />
              </div>
              <div className="testi-desc">
                "Savory Seasons Catering has consistently impressed our conference
                attendees with their culinary expertise. From breakfast meetings to gala
                dinners, their attention to detail and ability to cater to a large
                audience have made them our trusted partner. The positive feedback we
                receive about the catering always enhances the overall conference
                experience.
              </div>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={4}
            className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <div className="testi-box">
              <div className="testi-head">Sobha S., Teacher</div>
              <div className="testi-rating">
                <img src="assets/images/star.png" alt="" />
                <img src="assets/images/star.png" alt="" />
                <img src="assets/images/star.png" alt="" />
                <img src="assets/images/star.png" alt="" />
                <img src="assets/images/star.png" alt="" />
              </div>
              <div className="testi-desc">
                Planning school events can be overwhelming, but Savory Seasons Catering
                takes the stress out of the equation. The variety in their catering menu
                caters perfectly to diverse tastes, making every school function a
                delightful experience for students and staff alike.
              </div>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={5}
            className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <div className="testi-box">
              <div className="testi-head">Meera A., Fashion Designer</div>
              <div className="testi-rating">
                <img src="assets/images/star.png" alt="" />
                <img src="assets/images/star.png" alt="" />
                <img src="assets/images/star.png" alt="" />
                <img src="assets/images/star.png" alt="" />
                <img src="assets/images/star.png" alt="" />
              </div>
              <div className="testi-desc">
                Savory Seasons Catering adds a touch of flair to my fashion events. The
                presentation is as exquisite as the flavors, making it a perfect
                complement to the aesthetics of my brand. Their ability to customize
                menus ensures that every event is as unique as my designs.
              </div>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={6}
            className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <div className="testi-box">
              <div className="testi-head">Rajiv K., Tech Entrepreneur</div>
              <div className="testi-rating">
                <img src="assets/images/star.png" alt="" />
                <img src="assets/images/star.png" alt="" />
                <img src="assets/images/star.png" alt="" />
                <img src="assets/images/star.png" alt="" />
                <img src="assets/images/star.png" alt="" />
              </div>
              <div className="testi-desc">
                Savory Seasons Catering has been a crucial element in the success of our
                tech launch events. The modern and innovative approach to catering
                aligns perfectly with our brand ethos. Their team's professionalism and
                commitment to excellence shine through in every event, leaving a lasting
                impression on our tech-savvy audience.
              </div>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={7}
            className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <div className="testi-box">
              <div className="testi-head">Sonia R., Fitness Instructor</div>
              <div className="testi-rating">
                <img src="assets/images/star.png" alt="" />
                <img src="assets/images/star.png" alt="" />
                <img src="assets/images/star.png" alt="" />
                <img src="assets/images/star.png" alt="" />
                <img src="assets/images/star.png" alt="" />
              </div>
              <div className="testi-desc">
                Organizing wellness retreats requires attention to every detail,
                especially nutrition. Savory Seasons Catering understands the importance
                of healthy and flavorful options. Their catering services have been a
                key component in creating a holistic experience for our participants,
                proving that nutritious food can also be delicious.
              </div>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={8}
            className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <div className="testi-box">
              <div className="testi-head">Sonia R., Fitness Instructor</div>
              <div className="testi-rating">
                <img src="assets/images/star.png" alt="" />
                <img src="assets/images/star.png" alt="" />
                <img src="assets/images/star.png" alt="" />
                <img src="assets/images/star.png" alt="" />
                <img src="assets/images/star.png" alt="" />
              </div>
              <div className="testi-desc">
                Organizing wellness retreats requires attention to every detail,
                especially nutrition. Savory Seasons Catering understands the importance
                of healthy and flavorful options. Their catering services have been a
                key component in creating a holistic experience for our participants,
                proving that nutritious food can also be delicious.
              </div>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={9}
            className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <div className="testi-box">
              <div className="testi-head">Anita G., Art Gallery Curator</div>
              <div className="testi-rating">
                <img src="assets/images/star.png" alt="" />
                <img src="assets/images/star.png" alt="" />
                <img src="assets/images/star.png" alt="" />
                <img src="assets/images/star.png" alt="" />
                <img src="assets/images/star.png" alt="" />
              </div>
              <div className="testi-desc">
                Savory Seasons Catering adds a culinary masterpiece to our art gallery
                openings. The artistic flair in their presentation aligns seamlessly
                with our creative space. Their ability to cater to diverse tastes
                ensures that our events are enjoyed by both art enthusiasts and food
                connoisseurs alike.
              </div>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={10}
            className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <div className="testi-box">
              <div className="testi-head">Rohan M., Travel Blogger</div>
              <div className="testi-rating">
                <img src="assets/images/star.png" alt="" />
                <img src="assets/images/star.png" alt="" />
                <img src="assets/images/star.png" alt="" />
                <img src="assets/images/star.png" alt="" />
                <img src="assets/images/star.png" alt="" />
              </div>
              <div className="testi-desc">
                Exploring diverse cuisines is my passion, and Savory Seasons Catering
                brings that global flavor to my travel-themed events. Their ability to
                capture the essence of different cultures in their catering services has
                made them my go-to choice. It's like a culinary journey with each event!
              </div>
            </div>
          </TECarouselItem>
        </div>
      </TECarousel> */}
    </>
  );
}