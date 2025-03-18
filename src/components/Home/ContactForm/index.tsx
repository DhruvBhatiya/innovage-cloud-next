"use client";
import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion'; // Import Framer Motion
import ScheduleMeeting from '@/components/Home/ScheduleMeeting';
import ContactEmail from '@/components/ContactEmail';

// Animation Variants
const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggeredForm = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.2 } },
};

const ContactForm = () => {
    return (
        <Container maxWidth="lg" className="pt-0 pb-[70px]">
            <Grid container spacing={4}>

                {/* Left Side Content & Image */}
                <Grid item xs={12} md={12}>
                    <Typography variant="h3" className="font-bold text-primary mb-4">
                        Get in Touch
                    </Typography>
                    <Typography className="text-gray-600 ">
                        Whether you have a question or just want to say hi, our team is here to help.
                        Fill out the form and we'll get back to you soon.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box className=" 111111 bg-white py-6 h-full lg:h-[530px] overflow-y-auto border-l-8 border-primary shadow-2xl">
                        <ScheduleMeeting />
                    </Box>
                </Grid>

                {/* Right Side Contact Form */}
                <Grid item xs={12} md={6}>
                    
                        <div className="bg-gray-900 text-white p-10 rounded-lg">
                            <h1 className="text-4xl font-semibold mb-6">
                                Say <span className="text-[#c84736]">Hello!</span>
                            </h1>

                            <ContactEmail btnText="Send Message" />

{/* 
                            <motion.form
                                variants={staggeredForm}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                action="email-templates/contact-form.php"
                                method="post"
                            >
                                <motion.div className="mb-4" variants={staggeredForm}>
                                    <label className="block text-gray-300 mb-2">Your Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Enter your name"
                                        className="w-full px-4 py-2 border border-gray-500 rounded-md bg-gray-800 text-white"
                                        required
                                    />
                                </motion.div>

                                <motion.div className="mb-4" variants={staggeredForm}>
                                    <label className="block text-gray-300 mb-2">Your Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        className="w-full px-4 py-2 border border-gray-500 rounded-md bg-gray-800 text-white"
                                        required
                                    />
                                </motion.div>

                                <motion.div className="mb-4" variants={staggeredForm}>
                                    <label className="block text-gray-300 mb-2">Your Message</label>
                                    <textarea
                                        name="comment"
                                        placeholder="Enter your message"
                                        rows={4}
                                        className="w-full px-4 py-2 border border-gray-500 rounded-md bg-gray-800 text-white"
                                    ></textarea>
                                </motion.div>

                                <motion.button
                                    type="submit"
                                    className="w-full bg-[#c84736] text-white py-2 rounded-md"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Send Message
                                </motion.button>
                            </motion.form> */}

                        </div>

                
                </Grid>
            </Grid>
        </Container>

    );
};

export default ContactForm;
