"use client";

import React, { useRef, useState } from 'react';
import { motion } from "framer-motion";
import emailjs from 'emailjs-com';
import Snackbar from '@mui/joy/Snackbar';
import CircularProgress from '@mui/material/CircularProgress';

interface JobContactEmailProps {
    btnText: any;
    job?: any;
}

const JobContactEmail: React.FC<JobContactEmailProps> = ({ btnText, job }) => {
    const form = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const [snackbar, setSnackbar] = useState<{ open: boolean; message: string; type: 'success' | 'error' }>({
        open: false,
        message: '',
        type: 'success',
    });

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const currentForm = form.current;

        console.log("currentForm", currentForm)
        if (!currentForm) {
            console.error("Form reference is null");
            setLoading(false);
            return;
        }

        try {
            const response = await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_HR_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_HR_TEMPLATE_ID!,
                currentForm,
                process.env.NEXT_PUBLIC_EMAILJS_HR_PUBLIC_KEY!
            );

            if (response.status === 200) {
                setSnackbar({ open: true, message: "✅ Your message has been sent successfully!", type: 'success' });
                currentForm.reset();

            } else {
                setSnackbar({ open: true, message: "❗ Unexpected response from EmailJS. Please try again.", type: 'error' });
            }
        } catch (error: any) {
            console.error('EmailJS Error Details:', JSON.stringify(error, null, 2));
            setSnackbar({ open: true, message: `❌ Failed to send message. Error: ${error.text || "Unknown error"}`, type: 'error' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <form ref={form} onSubmit={handleSubmit} encType="multipart/form-data">

                <input type="hidden" name="job" value={job || undefined} />

                {/* Name */}
                <motion.div className="mb-4" variants={fadeInUp}>
                    <label className="block text-gray-300 mb-2">Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter name"
                        required
                        className="w-full px-4 py-2 border border-gray-500 rounded-md bg-gray-800 text-white"
                    />
                </motion.div>

                {/* Email */}
                <motion.div className="mb-4" variants={fadeInUp}>
                    <label className="block text-gray-300 mb-2">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        required
                        className="w-full px-4 py-2 border border-gray-500 rounded-md bg-gray-800 text-white"
                    />
                </motion.div>

                {/* Phone */}
                <motion.div className="mb-4" variants={fadeInUp}>
                    <label className="block text-gray-300 mb-2">Phone</label>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Enter phone number"
                        required
                        className="w-full px-4 py-2 border border-gray-500 rounded-md bg-gray-800 text-white"
                    />
                </motion.div>

                {/* Cover Letter */}
                <motion.div className="mb-4" variants={fadeInUp}>
                    <label className="block text-gray-300 mb-2">Cover Letter</label>
                    <textarea
                        name="cover_letter"
                        placeholder="Enter your cover letter"
                        rows={4}
                        required
                        className="w-full px-4 py-2 border border-gray-500 rounded-md bg-gray-800 text-white"
                    />
                </motion.div>

                {/* Resume Attachment */}
                {/* <motion.div className="mb-4" variants={fadeInUp}>
                    <label className="block text-gray-300 mb-2">Resume (PDF only)</label>
                    <input
                        type="file"
                        name="resume"
                        accept=".pdf"
                        required
                        className="w-full px-4 py-2 border border-gray-500 rounded-md bg-gray-800 text-white"
                    />
                </motion.div> */}

                {/* Submit Button */}
                <motion.button
                    type="submit"
                    className="w-full bg-[#c84736] text-white py-2 rounded-md hover:opacity-90 flex justify-center items-center"
                    variants={fadeInUp}
                    disabled={loading}
                >
                    {loading ? <CircularProgress size={24} color="inherit" /> : btnText || "Send Message"}
                </motion.button>
            </form>

            <Snackbar
                open={snackbar.open}
                autoHideDuration={4000}
                onClose={() => setSnackbar({ ...snackbar, open: false })}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                color={snackbar.type === 'success' ? 'success' : 'danger'}
            >
                {snackbar.message}
            </Snackbar>
        </>
    );
};

export default JobContactEmail;
