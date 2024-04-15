
import React from "react";
import { BackgroundBeams } from "../ui/background-beams";
import "./footer.css"
import Link from "next/link";

export function BackgroundBeamsFooter() {
    return (
      <div className="height-100 pt-4 pb-4 bg-black relative flex flex-col justify-center antialiased pointer-events-auto">
        <div className="max-w-7xl w-full mx-auto p-4 footer">
          <div className="logo-footer">
            <img className="logo-img" src="assets/images/logo-ss.svg" alt="" />
            <div className="footer-desc">Established with a passion for creating delightful culinary experiences, Savory Seasons has been a trusted name in the catering industry.</div>
            <div className="social-media">
              <Link href="#"><img className="social-icon" src="assets/images/footer-icons/whatsapp.svg"
                alt="" /></Link>
              <Link href="#"><img className="social-icon" src="assets/images/footer-icons/instagram.svg"
                alt="" /></Link>
              <Link href="#"><img className="social-icon" src="assets/images/footer-icons/x.svg" alt="" /></Link>
            </div>
          </div>
          <div className="links-connect">
            <div className="quick">
              <h4 className="text-3xl md:text-3xl w-100 font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                Quick Links
              </h4>
              <div className="connect-content">
                <Link href="/menu" className="contact-footer">MENU</Link>
                <Link href="/service" className="contact-footer">SERVICES</Link>
                {/* <Link href="#" className="contact-footer">CUSTOMIZATION</Link> */}
                <Link href="/contact" className="contact-footer">CONTACT</Link>
              </div>
            </div>
            <div className="lets-connect">
              <h4 className="text-3xl md:text-3xl w-100 font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                Let's Connect
              </h4>
              <div className="connect-content">
                <Link href="mailto:savoryseasons@yopmail.com" className="contact-footer"><img
                  src="assets/images/footer-icons/mail.svg" alt="" />savoryseasons06@gmail.com</Link>
                <Link href="tel:8742425485" className="contact-footer"><img
                  src="assets/images/footer-icons/phone.svg" alt="" />8742425485</Link>
                <Link href="#" className="contact-footer"><img src="assets/images/footer-icons/location.svg"
                  alt="" />B-701 Blue Moon Tower, Gota, Ahmedabad</Link>
              </div>
            </div>
          </div>
          {/* <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  font-bold">
            Join the waitlist
          </h1>
          <p></p>
          <p className="text-neutral-500 max-w-lg my-2 text-sm relative z-10">
            Welcome to MailJet, the best transactional email service on the web.
            We provide reliable, scalable, and customizable email solutions for
            your business. Whether you&apos;re sending order confirmations,
            password reset emails, or promotional campaigns, MailJet has got you
            covered.
          </p>
          <input
            type="text"
            placeholder="hi@manuarora.in"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
          /> */}
        </div>
        <BackgroundBeams />
      </div>
    );
  }