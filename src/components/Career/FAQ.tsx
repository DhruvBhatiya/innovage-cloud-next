"use client";
import React, { useState } from 'react';
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

const faqs = [
    {
        question: "What are the available job roles?",
        answer: "We offer roles in development, design, marketing, and more. Check our careers page for details."
    },
    {
        question: "How can I apply for a position?",
        answer: "You can apply directly through our careers portal by submitting your resume and cover letter."
    },
    {
        question: "What is the interview process like?",
        answer: "Our interview process typically includes an initial screening, technical assessment, and final interview with team leads."
    },
    {
        question: "Do you offer remote work opportunities?",
        answer: "Yes, we have flexible remote work options depending on the role and team requirements."
    },
    {
        question: "What benefits do you offer employees?",
        answer: "We offer comprehensive benefits including health insurance, paid leave, and professional development programs."
    }
];

export const FAQSection = () => {
    const [expanded, setExpanded] = useState<string | false>("panel0"); // Open first accordion by default

    const handleChange = (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div 
        style={{ backgroundImage: "url('/img/bg/cloud-bottom-white-bg.webp')", backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom' }}
        >
            <Container maxWidth="lg" className='py-[70px]'>
                {/* Title Section */}
                <Typography
                    variant="h3"
                    className="text-4xl lg:text-5xl text-center font-bold text-primary mb-10"
                >
                    Have Questions? We've Got Answers!
                </Typography>
                <Grid container spacing={4} alignItems="center">

                    {/* Left Side - Image */}
                    <Grid item xs={12} md={5}>
                        <Image
                            src="/img/career/faq.png"
                            alt="FAQ Illustration"
                            className="w-full h-auto "
                            width={500}
                            height={0}
                        />
                    </Grid>

                    {/* Right Side - FAQs */}
                    <Grid item xs={12} md={7}>
                        <Box sx={{ maxWidth: 800, mx: "auto" }}>

                            <Typography
                                variant="h4"
                                className="text-3xl lg:text-3xl font-bold text-gray-800 mb-6"
                            >
                                Frequently Asked Questions
                            </Typography>
                            {faqs.map((faq, index) => (
                                <Accordion
                                    key={index}
                                    expanded={expanded === `panel${index}`}
                                    onChange={handleChange(`panel${index}`)}
                                    sx={{
                                        boxShadow: 3,
                                        "&:before": { display: "none" },
                                        border: "1px solid #e0e0e0",
                                        borderRadius: "8px",
                                        mb: 1,
                                    }}
                                >
                                    <AccordionSummary
                                        expandIcon={
                                            expanded === `panel${index}` ? (
                                                <RemoveIcon sx={{ color: "#fff" }} />
                                            ) : (
                                                <AddIcon sx={{ color: "#c84736" }} />
                                            )
                                        }
                                        sx={{
                                            backgroundColor: expanded === `panel${index}` ? "#c84736" : "#f5f5f5",
                                            color: expanded === `panel${index}` ? "#fff" : "#000",
                                            borderRadius: "8px 8px 0 0",
                                            my: expanded === `panel${index}` ? "0px" : 0
                                        }}
                                    >
                                        <Typography variant="h6" fontWeight="bold">
                                            {faq.question}
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>{faq.answer}</Typography>
                                    </AccordionDetails>
                                </Accordion>
                            ))}
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}