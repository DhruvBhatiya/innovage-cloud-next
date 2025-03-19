"use client";
import ContactEmail from "@/components/ContactEmail";
import ScheduleMeeting from "@/components/Home/ScheduleMeeting";
import { useRouter } from "next/navigation";

const GetAQuote = () => {
  const router = useRouter();

  return (
    <>
      {/* Contact Form */}
      <div className="11bg-gray-900 text-black p-6 sm:p-10 text-left">
        <h1 className="text-center text-3xl sm:text-4xl font-semibold mb-4 sm:mb-6">
          Get a <span className="text-[#c84736]">Quote</span>
        </h1>

       {/* <ContactEmail btnText="Schedule a Meeting" /> */}

       <ScheduleMeeting />

        {/* Schedule a Meeting */}

        {/* Optional: Terms */}
        {/* <p className="text-gray-400 text-sm mt-4">
          I accept the terms & conditions and understand that my data will be held securely in accordance with the privacy policy.
        </p> */}
      </div>
    </>
  );
};

export default GetAQuote;
