import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import Image from 'next/image';

const ContactForm = () => {
    return (
        <Container maxWidth="lg" className="pt-0 pb-12">
            <Grid container spacing={4} >

                {/* Left Side Content & Image */}
                <Grid item xs={12} md={6}>
                    <Box className="text-left">
                        <Typography variant="h3" className="font-bold text-primary mb-4">
                            Get in Touch
                        </Typography>
                        <Typography className="text-gray-600 ">
                            Whether you have a question or just want to say hi, our team is here to help. 
                            Fill out the form and we'll get back to you soon.
                        </Typography>
                        <Image
                            src="/img/home/contactus.avif"
                            alt="Contact Us Illustration"
                            className="w-full h-auto"
                            width={400}
                            height={100}
                        />
                    </Box>
                </Grid>

                {/* Right Side Contact Form */}
                <Grid item xs={12} md={6}>
                    <div className="bg-gray-900 text-white p-10 rounded-lg">
                        <h1 className="text-4xl font-semibold mb-6">Say <span className="text-[#c84736]">Hello!</span></h1>

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
                                Send Message
                            </button>
                        </form>

                        <p className="text-gray-400 text-sm mt-4">
                            I accept the terms & conditions and understand that my data will be held securely in accordance with the privacy policy.
                        </p>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ContactForm;
