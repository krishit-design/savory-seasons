"use client"
import React, { ChangeEvent, FormEvent, useState } from "react";
import { Meteors } from "../components/ui/meteors";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { cn } from "@/utils/cn";
import "./signup.css"
import Header from "../components/Header/Header";
import Link from "next/link";



      
  const Signup: React.FC = () => {

    const [error, setError] = useState<string>('');

    interface FormData {
        name: string;
        username: string;
        email: string;
        mobile: string;
        password: string;
      }
      
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        name: "",
        username: "",
        email: "",
        mobile: "",
        password: ""
      });
    
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleSubmit = async (e: FormEvent) => {
      // console.log('Form data:', formData);
      e.preventDefault();
      console.log("Submitting form...");
      try {
          const response = await fetch("http://192.168.1.103:8081/api/register", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify(formData)
          });
          
          if (response.ok) {
            alert("Registered successfully!"); 
          } else {
            setError('Error Occured');
          }
        } catch (error) {
          // console.error('Login error:', error);
          setError('An error occurred during registration');
       
        clearFormFields();
        }
  };
  
  // Function to clear all form fields
  const clearFormFields = () => {
      // Assuming formData is an object with form field values
      // Reset each field to its initial value or empty string
      // For example:
      formData.name = '';
      formData.username = '';
      formData.email = '';
      formData.mobile = '';
      formData.password = '';
      // Repeat for all form fields
  };
  
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log("Changing input...");
    const { name, value } = e.target;
    // console.log("Name:", name, "Value:", value);
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  return (
    <div className="h-[100vh] signup-page w-full bg-black dark:bg-grid-black/[0] bg-grid-white/[0.025]">
       <Link href={'/'} className="logo-signup">
                <img src="assets/images/logo-ss.svg" alt="" />
                <p>At Savory Seasons, we believe that every event is a unique celebration of taste, and we are here to turn your moments into memories through the art of culinary excellence. Established with a passion for creating delightful culinary experiences, Savory Seasons has been a trusted name in the catering industry.</p>
            </Link>
      <div className="signup-form w-full he relative max-w-md">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-black border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">

          <h1 className="font-bold text-xl headingsignup text-white mb-1 relative z-50">
          Register
          </h1>
          <form className="my-8 w-full" onSubmit={handleSubmit}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" placeholder="Enter your name" type="text"  value={formData.name} onChange={handleChange}  />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="username">User Name</Label>
            <Input id="username" name="username" placeholder="Enter Username" type="text"  value={formData.username} onChange={handleChange}  />
          </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" name="email" placeholder="yourmail@gmail.com" type="email"  value={formData.email} onChange={handleChange}  />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="number">Phone Number</Label>
          <Input id="number" name="mobile" placeholder="8545784510" type="text"  value={formData.mobile} onChange={handleChange}  />
        </LabelInputContainer>
       
        <LabelInputContainer className="mb-4 password-content">
          <Label htmlFor="password">Password</Label>
          <Input id="id_password" name="password" placeholder="" type={passwordVisible ? 'text' : 'password'}   value={formData.password} onChange={handleChange} />
          <img src= {passwordVisible ? "assets/images/visible.svg" : "assets/images/hidden.svg"}
                     id="togglePassword"
                     onClick={togglePasswordVisibility}
                     />
        </LabelInputContainer>
 
        <button
          className="bg-gradient-to-br mt-8 relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Signup &rarr;
          <BottomGradient />
        </button>
 
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        <span className="text-zinc-200 w-[100%] block text-center">Already have an account?  <Link href={'/login'} className="text-red-500"> Login</Link></span>
      </form>
          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
     </div>
  );
}

export default Signup;

const BottomGradient = () => {
    return (
      <>
        <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
      </>
    );
  };

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