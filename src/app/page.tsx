import React from "react";
import Hero from "@/components/Home/Hero";
import Companies from "@/components/Home/Companies";
import Services from "@/components/Home/Services";
import Expertise from "@/components/Home/Expertise";
import Testimonial from "@/components/Home/Testimonials";
import Newsletter from "@/components/Home/Newsletter";
import { Metadata } from "next";
import Counter from "@/components/Home/Counter";
export const metadata: Metadata = {
  title: "Innovage Cloud",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Expertise />
      <Testimonial />
      {/* <Counter  /> */}
      <Newsletter />
      <Companies />
    </main>
  );
}