"use client";

import React, { useRef, useState } from 'react';
import { motion } from "framer-motion";
import emailjs from 'emailjs-com';
import Snackbar from '@mui/joy/Snackbar';

interface ContactEmailProps {
    btnText: any;
    selectedDate?: string;
    selectedTime?: string;
    setSelectedDate?: any;
    setSelectedTime?: any;
    setStep?: any;
}

const ContactEmail: React.FC<ContactEmailProps> = ({ selectedDate, selectedTime, btnText, setSelectedDate, setSelectedTime, setStep }) => {
    const form = useRef<HTMLFormElement>(null);
    const [open, setOpen] = useState(false);

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const currentForm = form.current;
        if (!currentForm) {
            console.error("Form reference is null");
            return;
        }

        try {
            const response = await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                currentForm,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );

            if (response.status === 200) {
                console.log('SUCCESS!', response.status, response.text);
                alert("✅ Your message has been sent successfully!");
                currentForm.reset();
                setSelectedDate?.(null);
                setSelectedTime?.(null);
                setStep?.(1);
            } else {
                console.warn('Unexpected response:', response);
                alert(`❗ Unexpected response from EmailJS. Please try again.`);
            }
        } catch (error: any) {
            console.error('EmailJS Error Details:', JSON.stringify(error, null, 2));
            alert(`❌ Failed to send message. Error: ${error.text || "Unknown error"}`);
        }
    };

    return (
        <form ref={form} onSubmit={handleSubmit}>
            <input type="hidden" name="date" value={selectedDate || ""} />
            <input type="hidden" name="time" value={selectedTime || ""} />
            <input type="hidden" name="subject" value={btnText === 'Send Message' ? "Contact Page" : 'Get A Quote'} />

            <motion.div className="mb-4" variants={fadeInUp}>
                <label className="block text-gray-300 mb-2">Name</label>
                <input type="text" name="name" placeholder="Enter name" required className="w-full px-4 py-2 border border-gray-500 rounded-md bg-gray-800 text-white" />
            </motion.div>

            <motion.div className="mb-4" variants={fadeInUp}>
                <label className="block text-gray-300 mb-2">Email</label>
                <input type="email" name="email" placeholder="Enter email" required className="w-full px-4 py-2 border border-gray-500 rounded-md bg-gray-800 text-white" />
            </motion.div>

            <motion.div className="mb-4" variants={fadeInUp}>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea name="message" placeholder="Enter message" rows={4} required className="w-full px-4 py-2 border border-gray-500 rounded-md bg-gray-800 text-white"></textarea>
            </motion.div>

            <motion.button type="submit" className="w-full bg-[#c84736] text-white py-2 rounded-md hover:opacity-90" variants={fadeInUp}>
                {btnText || "Send Message"}
            </motion.button>
        </form>
    );
};

export default ContactEmail;
