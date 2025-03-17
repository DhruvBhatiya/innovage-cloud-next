"use client";

import { useRef, useState } from 'react';
import { motion } from "framer-motion";
import emailjs from 'emailjs-com';

const ContactEmail = (btnText: any) => {
    const form = useRef<HTMLFormElement>(null);
    console.log("btnText", btnText)

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();

        const currentForm = form.current;
        if (!currentForm) {
            console.error("Form reference is null");
            return;
        }

        const formData = {
            subject: (currentForm['subject'] as unknown as HTMLInputElement)?.value,
            name: (currentForm['name'] as unknown as HTMLInputElement)?.value,
            email: (currentForm['email'] as unknown as HTMLInputElement)?.value,
            message: (currentForm['message'] as unknown as HTMLTextAreaElement)?.value,
        };


        console.log("Form Data:", formData);

        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                currentForm,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert("✅ Your message has been sent successfully!");
                currentForm.reset();
            })
            .catch((error) => {
                console.error('EmailJS Error:', error);
                alert(`❌ Failed to send message. Error: ${error.text || "Unknown error"}`);
            });
    };






    return (
        <form ref={form} onSubmit={handleSubmit}>

            <input
                type="hidden"
                name="subject"
                value={btnText ? btnText.btnText : "Contact Page"}           
                placeholder={btnText ? btnText.btnText : "Contact Page"}
                className="w-full px-4 py-2 border border-gray-500 rounded-md bg-gray-800 text-white"
                required
            />
            <motion.div className="mb-4" variants={fadeInUp}>
                <label className="block text-gray-300 mb-2">Your Name</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="w-full px-4 py-2 border border-gray-500 rounded-md bg-gray-800 text-white"
                    required
                />
            </motion.div>

            <motion.div className="mb-4" variants={fadeInUp}>
                <label className="block text-gray-300 mb-2">Your Email</label>
                <input
                    type="email"

                    name="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 border border-gray-500 rounded-md bg-gray-800 text-white"
                    required
                />
            </motion.div>

            <motion.div className="mb-4" variants={fadeInUp}>
                <label className="block text-gray-300 mb-2">Your Message</label>
                <textarea
                    name="message"

                    placeholder="Enter your message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-500 rounded-md bg-gray-800 text-white"
                    required
                ></textarea>
            </motion.div>

            <motion.button
                type="submit"
                className="w-full bg-[#c84736] text-white py-2 rounded-md hover:opacity-90"
                variants={fadeInUp}
            >
                {btnText ? btnText.btnText : "Send Message"}
            </motion.button>
        </form>
    );
};

export default ContactEmail;
