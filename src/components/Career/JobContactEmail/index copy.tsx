"use client";

import { motion } from "framer-motion";
import React, { useRef } from 'react';

interface JobContactEmailProps {
    btnText: any;
    job?: any;
}

const JobContactEmail: React.FC<JobContactEmailProps> = ({
    btnText,
    job
}) => {
    const form = useRef<HTMLFormElement>(null);
    const [open, setOpen] = React.useState(false);

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        const currentForm = form.current;
        if (!currentForm) return;
    
        const formData = new FormData(currentForm);
    
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                body: formData,
            });
    
            const data = await response.json();
    
            if (response.ok) {
                alert('✅ Your message has been sent successfully!');
                currentForm.reset();
            } else {
                alert(`❌ Error: ${data.error}`);
            }
        } catch (error) {
            console.error('Submission Error:', error);
            alert('❌ An error occurred while submitting the form.');
        }
    };
    
    

    return (
        <form ref={form} onSubmit={handleSubmit} encType="multipart/form-data">
            
            <input
                type="hidden"
                name="job"
                value={job || "Contact Page"}
            />

            {/* Name */}
            <motion.div className="mb-4" variants={fadeInUp}>
                <label className="block text-gray-300 mb-2">Name</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter name"
                    className="w-full px-4 py-2 border border-gray-500 rounded-md bg-gray-800 text-white"
                    required
                />
            </motion.div>

            {/* Email */}
            <motion.div className="mb-4" variants={fadeInUp}>
                <label className="block text-gray-300 mb-2">Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    className="w-full px-4 py-2 border border-gray-500 rounded-md bg-gray-800 text-white"
                    required
                />
            </motion.div>

            {/* Phone */}
            <motion.div className="mb-4" variants={fadeInUp}>
                <label className="block text-gray-300 mb-2">Phone Number</label>
                <input
                    type="tel"
                    name="phone"
                    placeholder="Enter phone number"
                    className="w-full px-4 py-2 border border-gray-500 rounded-md bg-gray-800 text-white"
                    required
                />
            </motion.div>

            {/* Cover Letter */}
            <motion.div className="mb-4" variants={fadeInUp}>
                <label className="block text-gray-300 mb-2">Cover Letter</label>
                <textarea
                    name="coverletter"
                    placeholder="Cover Letter"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-500 rounded-md bg-gray-800 text-white"
                    required
                ></textarea>
            </motion.div>

            {/* Resume Attachment */}
            <motion.div className="mb-4" variants={fadeInUp}>
                <label className="block text-gray-300 mb-2">Upload Resume (PDF/DOC)</label>
                <input
                    type="file"
                    name="resume"
                    accept=".pdf, .doc, .docx"
                    className="w-full px-4 py-2 border border-gray-500 rounded-md bg-gray-800 text-white"
                    required
                />
            </motion.div>

            {/* Submit Button */}
            <motion.button
                type="submit"
                className="w-full bg-[#c84736] text-white py-2 rounded-md hover:opacity-90"
                variants={fadeInUp}
            >
                {btnText || "Send Message"}
            </motion.button>
        </form>
    );
};

export default JobContactEmail;
