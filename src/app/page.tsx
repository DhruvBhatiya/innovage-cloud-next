import React from "react";
import Hero from "@/components/Home/Hero";
import Companies from "@/components/Home/Companies";
import Services from "@/components/Home/Services";
import Expertise from "@/components/Home/Expertise";
import Testimonial from "@/components/Home/Testimonials";
import Newsletter from "@/components/Home/Newsletter";
import { Metadata } from "next";
import Counter from "@/components/Home/Counter";
import ContactForm from "@/components/Home/ContactForm";
import StatsSection from "@/components/Common/StatsSection";
export const metadata: Metadata = {
  title: "Innovage Cloud",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      {/* <Companies /> */}
      {/* Section 2 - Counter */}

      <div className="pt-[70px]">
        <StatsSection />
      </div>
      <Expertise />
      {/* <Testimonial /> */}
      {/* <Counter  /> */}
      {/* <Newsletter /> */}
      <ContactForm />
    </main>
  );
}