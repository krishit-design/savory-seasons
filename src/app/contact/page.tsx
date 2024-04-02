"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { cn } from "@/utils/cn";
import Header from '../components/Header/Header';
import { PinContainer } from "../components/ui/3d-pin";
import { HoverEffect } from "../components/ui/card-hover-effect";
import "./contact.css";
import { BackgroundBeamsFooter } from "../components/Footer/footer";

const contact = () => {
  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log("Form submitted");
  // };

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    message: '',
  });

  // Function to update state on form input change
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('http://192.168.1.103:8086/api/Contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        // Handle success - maybe clear the form or show a success message
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          mobileNumber: '',
          message: '',
        });
        alert('Message sent successfully!');
      } else {
        // Handle errors - maybe show an error message
        const errorMessage = await response.text(); 
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error('Failed to send message:', error);
      // Handle errors - maybe show an error message
      alert('Failed to send message.');
    }
  };
  
  return (
    <>
    <div className="h-[100%] w-full bg-black bg-grid-black/[0] bg-grid-white/[0.025]">
      <Header />
      <div className="container contact">
        <div className="contact-content">
          <div className="w-[80%] rounded-none md:rounded-2xl p-4 md:p-8 shadow-input border border-white/[0.1] bg-black dark:bg-black">
            <h2 className="font-bold text-xl text-neutral-100 dark:text-neutral-100">
              Welcome to Savory Seasons
            </h2>
            <p className="text-neutral-100 text-md mt-2 dark:text-neutral-100">
            We're delighted to hear from you. Whether you have a question, need assistance, or just want to say hello, we're here to help. Please feel free to reach out to us by filling out the form below. Your message is important to us, and we'll do our best to respond as promptly as possible.
            </p>

            <form className="my-8" onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                <LabelInputContainer>
                  <Label htmlFor="firstname">First name</Label>
                  <Input className="bc-zinc" id="firstname" name="firstName" placeholder="First Name" type="text" required  value={formData.firstName}  onChange={handleChange} />
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="lastname">Last name</Label>
                  <Input className="bc-zinc" id="lastname" name="lastName" placeholder="Last Name" type="text" required  value={formData.lastName}  onChange={handleChange} />
                </LabelInputContainer>
              </div>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="email">Email Address</Label>
                <Input className="bc-zinc" id="email" name="email" placeholder="Mail ID" type="email" required  value={formData.email}  onChange={handleChange} />
              </LabelInputContainer>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="password">Mobile Number</Label>
                <Input className="bc-zinc" id="number" name="mobileNumber" placeholder="Your Number" type="number" required  value={formData.mobileNumber}  onChange={handleChange} />
              </LabelInputContainer>
              <LabelInputContainer className="mb-8">
                <Label htmlFor="message">Message</Label>
                <textarea className="bc-zinc rounded-md"
                  id="message" name="message" value={formData.message}  onChange={handleChange}
                />
              </LabelInputContainer>

              <button
                className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                type="submit"
              >
                Submit &rarr;
                <BottomGradient />
              </button>

              {/* <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" /> */}
            </form>
          </div>
          <AnimatedPinDemo />
        </div>
        <HoverEffect items={projects} />
      </div>
      <BackgroundBeamsFooter />
    </div>
    </>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const AnimatedPinDemo = () => {
  return (
    <div className="flex items-center justify-center ">
      <PinContainer
        title="Locate us"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Locate Us
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
            Visit us today and discover why we're a preferred destination in Ahmedabad. We look forward to welcoming you!
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 to-blue-500">
            <iframe className="rounded-md" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.7484362098!2d72.41493336470985!3d23.020474097405575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1711436691263!5m2!1sen!2sin" loading="lazy"></iframe>
          </div>
        </div>
      </PinContainer>
    </div>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export const projects = [
  {
    title: "Whatsapp",
    image: "assets/images/footer-icons/whatsapp.svg",
    description:
      "Get in touch with our team instantly via WhatsApp. Whether you have questions, need assistance, or just want to chat, we're here to help.",
    link: "/",
  },
  {
    title: "Instagram",
    image: "assets/images/footer-icons/instagram.svg",
    description:
      "Stay connected with our latest updates, behind-the-scenes glimpses, and exclusive content by following us on Instagram.",
    link: "/",
  },
  {
    title: "X ( Twitter )",
    image: "assets/images/footer-icons/x.svg",
    description:
      "Breaking News: Be the first to know about our latest product launches, promotions, and updates.",
    link: "/",
  },
];

export default contact;