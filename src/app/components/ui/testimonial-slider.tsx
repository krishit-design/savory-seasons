import { useState } from 'react';
import styles from './TestimonialSlider.module.css';

const testimonials = [
  {
    quote: "Savory Seasons turned my birthday into an unforgettable feast! The curated menu showcased a perfect balance of flavors, and the presentation was nothing short of art.The team's commitment to excellence truly shone through. Thank you for making my special day so delicious!",
    author: "Ananya S.",
    position: "Birthday Host"
  },
  {
    quote: "As an IT professional juggling a hectic schedule, Savory Seasons Catering has been a lifesaver for our office events. The diverse menu options and impeccable service make every gathering a hit. It's more than just catering; it's an experience that leaves everyone craving for more.",
    author: "Priya R.",
    position: "IT Professional"
  },
  {
    quote: " Savory Seasons Catering has elevated our corporate events with their delicious spreads. As an engineer, I appreciate precision, and they deliver every time. The fusion of flavors and the attention to detail make them our go-to choice for catering excellence.",
    author: "Raj D.",
    position: "Engineer"
  }
  ,
  {
    quote: " Planning school events can be overwhelming, but Savory Seasons Catering takes the stress out of the equation. The variety in their catering menu caters perfectly to diverse tastes, making every school function a delightful experience for students and staff alike.",
    author: "Sobha S.",
    position: "Teacher"
  }
  ,
  {
    quote: "  As a business owner, impressing clients is paramount. Savory Seasons Catering consistently delivers exceptional food that reflects positively on my company. Their catering services have played a crucial role in sealing deals and creating a lasting impression on our clients.",
    author: "Karthik S.",
    position: "Karthik S"
  }
  ,
  {
    quote: " Savory Seasons Catering has transformed countless weddings into culinary masterpieces. From the initial consultation to the last bite, their commitment to excellence shines through. The flexibility of their menu  options and the ability to cater to diverse dietary preferences makethem an ideal choice for any couple's special day.",
    author: "Pooja K.",
    position: "Wedding Coordinator"
  }
  ,
  {
    quote: "Coordinating events for our nonprofit organization comes with its challenges. Savory Seasons Catering, however, has been a reliable partner in our mission. Their dedication to providing quality food forour events has not only satisfied our attendees but also contributed to the overall success of our fundraisers.",
    author: "Ravi Gupta.",
    position: "Nonprofit Organizer"
  }
];

function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className='moving-cards_sm'>
    <div className={styles.container}>
       <h1 className="text-4xl md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Our Happy Clients
          </h1>
     <div>
       <div className={styles.testimonial}>
        <h3 className={styles.quote}>"{testimonials[current].quote}"</h3>
        <p className={styles.author}>- {testimonials[current].author}, {testimonials[current].position}</p>
      </div>
      <div className={styles.buttons}>
        <button onClick={prevTestimonial}>Previous</button>
        <button onClick={nextTestimonial}>Next</button>
      </div>
     </div>
    </div>
    </div>
  );
}

export default TestimonialSlider;
