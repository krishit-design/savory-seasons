"use client"
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import { Meteors } from "../components/ui/meteors";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { cn } from "@/utils/cn";
import "./Login.css"
import Header from "../components/Header/Header";
import Link from "next/link";

interface LoginPageProps {}

const Login: React.FC<LoginPageProps> = () => {
  const router = useRouter(); // Initialize useRouter
  const [identifier, setIdentifier] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
  };

  const handleLogin = async () => {
    setLoading(true);
    try {
      const body = {
        UserNameOrEmail: identifier,
        Password: password
      };
  
      const response = await fetch('http://192.168.1.103:8081/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
  
      if (response.ok) {
        const responseData = await response.json();
        console.log('Response Data:', responseData); // Log response data to check its structure
  
        let username = responseData.username || identifier; // Try to retrieve username from response data
        if (identifier.includes('@gmail.com')) {
          username = identifier.split('@')[0];
        }
        
        const role = responseData.role || 'user'; // Default to 'user' if role is not provided in the response
        const token = responseData.token || 'user'; // Default to 'user' if role is not provided in the response
        
        // Store username and role in local storage along with isLoggedIn
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('UserNameOrEmail', username);
        localStorage.setItem('role', role);
        localStorage.setItem('token', token);
  
        // Redirect based on role
        if (role === 'Admin') {
          router.push('/admin');
        } else {
          router.push('/');
        }
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('An error occurred during login');
    } finally {
      setLoading(false);
    }
  };
  
  
  
  
  return (
    <div className="h-[100vh] login-page w-full bg-black dark:bg-grid-black/[0] bg-grid-white/[0.025]">
      <Link href={'/'} className="logo-login">
                <img src="assets/images/logo-ss.svg" alt="" />
                <p>At Savory Seasons, we believe that every event is a unique celebration of taste, and we are here to turn your moments into memories through the art of culinary excellence. Established with a passion for creating delightful culinary experiences, Savory Seasons has been a trusted name in the catering industry.</p>
            </Link>
      <div className="login-form w-full he relative max-w-md">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-black border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <h1 className="font-bold text-xl headingLogin text-white mb-1 relative z-50">
            Login to your account
          </h1>
          <form className="my-8 w-full">
            {error && <p className="text-red-600">{error}</p>}
            <div className="mb-4">
              <Label htmlFor="identifier">Username or Email</Label>
              <Input 
                id="identifier"
                placeholder="Enter your username or email"
                type="text"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                disabled={loading}
              />
            </div>

            <div className="mb-4 password-content">
              <Label htmlFor="password">Password</Label>
              <Input
                className="input_password"
                id="password"
                placeholder="••••••••" 
                type={passwordVisible ? 'text' : 'password'}  
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
              />
              <img 
                src={passwordVisible ? "assets/images/visible.svg" : "assets/images/hidden.svg"}
                id="togglePassword"
                onClick={togglePasswordVisibility}
              />
            </div>

            <button 
              onClick={handleLogin}
              disabled={loading}
              className="bg-gradient-to-br mt-8 relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="button" 
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>

            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
            <span className="text-zinc-200 w-[100%] block text-center">Don't have an account? <Link href={'/signUp'} className="text-orange-500">Sign Up</Link></span>
          </form>
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
}

export default Login;
