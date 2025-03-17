"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import SocialSignIn from "../SocialSignIn";
import Logo from "@/components/Layout/Header/Logo"
import Loader from "@/components/Common/Loader";

const GetAQuote = () => {
  const router = useRouter();

  return (
    <>
      {/* Contact Form */}
      <div className="bg-gray-900 text-white p-10 text-left">
        <h1 className="text-4xl font-semibold mb-6">Get a <span className="text-[#c84736]">Quote</span></h1>

        <form action="email-templates/contact-form.php" method="post">
          <div className="mb-4">
            <label className="block text-gray-300 mb-2">Your Name</label>
            <input type="text" name="name" placeholder="Enter your name" className="w-full px-4 py-2 border border-gray-500 rounded-md bg-gray-800 text-white" required />
          </div>

          <div className="mb-4">
            <label className="block text-gray-300 mb-2">Your Email</label>
            <input type="email" name="email" placeholder="Enter your email" className="w-full px-4 py-2 border border-gray-500 rounded-md bg-gray-800 text-white" required />
          </div>

          <div className="mb-4">
            <label className="block text-gray-300 mb-2">Your Message</label>
            <textarea name="comment" placeholder="Enter your message" rows={4} className="w-full px-4 py-2 border border-gray-500 rounded-md bg-gray-800 text-white"></textarea>
          </div>

          <button type="submit" className="w-full bg-[#c84736] text-white py-2 rounded-md hover:opacity-90">
          Schedule a Meeting
          </button>
        </form>

        {/* <p className="text-gray-400 text-sm mt-4">
          I accept the terms & conditions and understand that my data will be held securely in accordance with the privacy policy.
        </p> */}
      </div>



    </>
  );
};

export default GetAQuote;