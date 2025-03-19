"use client";
import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import ScheduleMeeting from '@/components/Home/ScheduleMeeting';
import ContactEmail from '@/components/ContactEmail';

interface ContactFormProps {
    hideTitle?: boolean; // Add this prop for conditional rendering
}

// Animation Variants
const staggeredForm = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.2 } },
};

const ContactForm = ({ hideTitle }: ContactFormProps) => {
    return (
        <Container maxWidth="lg" className="pt-0 pb-[70px]">
            <Grid container spacing={4}>

                {/* Left Side Content & Image */}
                {!hideTitle && ( // Show only if hideTitle is false
                    <Grid item xs={12} md={12}>
                        <Typography variant="h3" className="font-bold text-primary mb-4">
                            Get in Touch
                        </Typography>
                        <Typography className="text-gray-600">
                            Whether you have a question or just want to say hi, our team is here to help.
                            Fill out the form and we'll get back to you soon.
                        </Typography>
                    </Grid>
                )}

                <Grid item xs={12} md={6}>
                    <Box className="bg-white py-6 h-full lg:h-[560px] overflow-y-auto border-l-8 border-primary shadow-2xl">
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
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ContactForm;
