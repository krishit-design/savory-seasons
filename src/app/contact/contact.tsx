
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

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    message: '',
  });

  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate email format
    if (name === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setEmailError(emailPattern.test(value) ? '' : "Please enter a valid email address.");
    }

    // Validate phone number format
    if (name === "mobileNumber") {
      const phonePattern = /^\d{10}$/;
      setPhoneError(phonePattern.test(value) ? '' : "Phone number must be 10 digits.");
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmailError('');
    setPhoneError('');

    // Validate all fields before sending the request
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{10}$/;

    if (!formData.email || !emailPattern.test(formData.email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    if (!formData.mobileNumber || !phonePattern.test(formData.mobileNumber)) {
      setPhoneError('Phone number is not valid. Please enter a valid Phone number.');
      return;
    }

    try {
      const response = await fetch('https://localhost:7012/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          mobileNumber: '',
          message: '',
        });
        alert('Message sent successfully!');
      } else {
        const errorMessage = await response.text();
        alert(`Failed to send message: ${errorMessage}`);
      }
    } catch (error) {
      console.error('Failed to send message:', error);
      alert('Failed to send message.');
    }
  };

  return (
    <div className="h-full w-full bg-black bg-grid-black/[0] bg-grid-white/[0.025]">
      <Header />
      <div className="container contact">
        <div className="contact-content">
          <div className="form-container rounded-none md:rounded-2xl p-4 md:p-8 shadow-input border border-white/[0.1] bg-black dark:bg-black">
            <h2 className="font-bold text-xl text-neutral-100 dark:text-neutral-100">
              Welcome to Savory Seasons
            </h2>
            <p className="text-zinc-400 tracking-wider text-md mt-2 dark:text-neutral-100">
              We're delighted to hear from you. Whether you have a question, need assistance, or just want to say hello, we're here to help. Please feel free to reach out to us by filling out the form below. Your message is important to us, and we'll do our best to respond as promptly as possible.
            </p>

            <form className="my-8" onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                <LabelInputContainer>
                  <Label className="tracking-wider" htmlFor="firstname">First name</Label>
                  <Input className="bc-zinc" id="firstname" name="firstName" placeholder="First Name" type="text" required value={formData.firstName} onChange={handleChange} />
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label className="tracking-wider" htmlFor="lastname">Last name</Label>
                  <Input className="bc-zinc" id="lastname" name="lastName" placeholder="Last Name" type="text" required value={formData.lastName} onChange={handleChange} />
                </LabelInputContainer>
              </div>
              <LabelInputContainer className="mb-4">
                <Label className="tracking-wider" htmlFor="email">Email Address</Label>
                <Input className={`bc-zinc ${emailError ? 'border-red-500' : ''}`} id="email" name="email" placeholder="Mail ID" type="email" required value={formData.email} onChange={handleChange} />
                {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
              </LabelInputContainer>
              <LabelInputContainer className="mb-4">
                <Label className="tracking-wider" htmlFor="number">Mobile Number</Label>
                <Input className={`bc-zinc ${phoneError ? 'border-red-500' : ''}`} id="number" name="mobileNumber" placeholder="Your Number" type="text" required value={formData.mobileNumber} onChange={handleChange} />
                {phoneError && <p className="text-red-500 text-sm">{phoneError}</p>}
              </LabelInputContainer>
              <LabelInputContainer className="mb-8">
                <Label className="tracking-wider" htmlFor="message">Message</Label>
                <textarea className="bc-zinc rounded-md" id="message" name="message" value={formData.message} onChange={handleChange} />
              </LabelInputContainer>

              <button
                className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                type="submit"
              >
                Submit &rarr;
                <BottomGradient />
              </button>
            </form>
          </div>
          <AnimatedPinDemo />
        </div>
        <HoverEffect items={projects} />
      </div>
      <BackgroundBeamsFooter />
    </div>
  );
};

const BottomGradient = () => (
  <>
    <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
    <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
  </>
);

const AnimatedPinDemo = () => (
  <div className="flex items-center justify-center">
    <PinContainer title="Locate us" href="https://twitter.com/mannupaaji">
      <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
        <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">Locate Us</h3>
        <div className="text-base !m-0 !p-0 font-normal">
          <span className="text-zinc-400 tracking-wider">
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

const LabelInputContainer = ({ children, className }: { children: React.ReactNode; className?: string; }) => (
  <div className={cn("flex flex-col space-y-2 w-full", className)}>
    {children}
  </div>
);

export const projects = [
  {
    title: "Whatsapp",
    image: "assets/images/footer-icons/whatsapp.svg",
    description: "Get in touch with our team instantly via WhatsApp. Whether you have questions, need assistance, or just want to chat, we're here to help.",
    link: "https://web.whatsapp.com",
    id: "whatsapp",
    name: "Whatsapp"
  },
  {
    title: "Instagram",
    image: "assets/images/footer-icons/instagram.svg",
    description: "Stay connected with our latest updates, behind-the-scenes glimpses, and exclusive content by following us on Instagram.",
    link: "https://www.instagram.com/",
    id: "instagram",
    name: "Instagram"
  },
  {
    title: "X ( Twitter )",
    image: "assets/images/footer-icons/x.svg",
    description: "Breaking News: Be the first to know about our latest product launches, promotions, and updates.",
    link: "http://twitter.com/",
    id: "twitter",
    name: "X"
  },
];

export default Contact;
