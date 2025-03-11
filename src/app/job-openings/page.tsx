"use client";

import { Accordion, AccordionSummary, AccordionDetails, Button, Card, CardContent, Typography, Grid, Box, Container, Paper, IconButton } from "@mui/material";
import { Add as AddIcon, Remove as RemoveIcon } from "@mui/icons-material";
import { useState, useEffect } from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Image from "next/image";

const JobOpenings = () => {
    const [expanded, setExpanded] = useState<number | false>(false);
    const [isClient, setIsClient] = useState(false); // Add this to ensure client-side logic

    useEffect(() => {
        setIsClient(true); // Ensures the content is hydrated properly
    }, []);

    const handleChange = (panel: number) => (_: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    const plans = [
        { title: "Standard", price: 22, features: ["Marketing strategy", "Competitive work analysis"], unavailable: ["Social media share audit", "Monthly management"] },
        { title: "Business", price: 33, features: ["Marketing strategy", "Competitive work analysis", "Social media share audit"], unavailable: ["Monthly management"] },
        { title: "Ultimate", price: 44, features: ["Marketing strategy", "Competitive work analysis", "Social media share audit", "Monthly management"], unavailable: [] },
    ];

    const faqs = [
        { question: "What are the available job roles?", answer: "We offer roles in development, design, marketing, and more. Check our careers page for details." },
        { question: "How can I apply for a position?", answer: "You can apply directly through our careers portal by submitting your resume and cover letter." },
        { question: "What is the interview process like?", answer: "Our interview process typically includes an initial screening, technical assessment, and final interview with team leads." },
        { question: "Do you offer remote work opportunities?", answer: "Yes, we have flexible remote work options depending on the role and team requirements." },
        { question: "What benefits do you offer employees?", answer: "We offer comprehensive benefits including health insurance, paid leave, and professional development programs." }
    ];
    

    return (
        <>
            <Breadcrumb pageName="Job Openings" />

            <section className="relative bg-gradient-to-t from-gray-100 to-white pb-20"
                style={{ backgroundImage: "url('/img/bg/vertical-line-bg.svg')" }}
            >
                {/* Background Images */}
                <div
                    className="absolute top-0 left-0 w-full h-full z-[-1]"
                    style={{ backgroundImage: "url('/img/bg/vertical-line-bg.svg')" }}
                />
                <div
                    className="absolute bottom-0 left-0 w-full h-[250px] z-[-1] bg-cover"
                    style={{ backgroundImage: "url('/img/bg/cloud-bottom-white-bg.webp')" }}
                />

                <Container maxWidth="xl" className="relative z-[1]">
                    <Grid className="pb-[70px]" container spacing={4} justifyContent="center" alignItems="center">
                        {plans.map((plan, index) => (
                            <Grid
                                item
                                lg={4}
                                md={8}
                                key={plan.title}
                                className={isClient && index === 1 ? "scale-105 transform" : ""} // Enlarge center card (only on client side)
                            >
                                <Paper
                                    elevation={index === 1 ? 6 : 4}
                                    className={`p-8 text-center rounded-lg shadow-lg `}
                                >
                                    <Typography variant="h6" className="text-gray-800 font-semibold">
                                        {plan.title}
                                    </Typography>
                                    <Typography>Unlimited users</Typography>
                                    <Typography variant="h3" className="text-gray-800 font-bold">
                                        ${plan.price}
                                    </Typography>
                                    <Typography>per user/month billed annually</Typography>
                                    <ul className="text-left mt-4">
                                        {plan.features.map((feature, idx) => (
                                            <li key={idx}>{feature}</li>
                                        ))}
                                        {plan.unavailable.map((item, idx) => (
                                            <li key={idx} className="text-gray-400">{item}</li>
                                        ))}
                                    </ul>
                                    <Button variant="contained" fullWidth className="mt-4">
                                        Apply Job
                                    </Button>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Container>

                {/* FAQ Section */}
                <Container maxWidth="lg" className="relative z-[1] pt-2">
                    {/* Title Section */}
                    <Typography
                        variant="h3"
                        className="text-center font-bold text-primary mb-10"
                    >
                        Have Questions? We've Got Answers!
                    </Typography>

                    <Grid container spacing={4} alignItems="center">
                        {/* Left Side Image */}
                        <Grid item xs={12} md={6}>
                            <Image
                                src="/img/career/faq.webp"
                                alt="FAQ Illustration"
                                className="w-full h-auto "
                                width={500}
                                height={0}
                            />
                        </Grid>

                        {/* Right Side FAQ Content */}
                        <Grid item xs={12} md={6}>
                            <div className="text-left">
                                <Typography
                                    variant="h4"
                                    className="font-bold text-gray-800 mb-6"
                                >
                                    Frequently Asked Questions
                                </Typography>

                                {faqs.map((faq, index) => (
                                    <Accordion
                                        key={index}
                                        expanded={expanded === index}
                                        onChange={handleChange(index)}
                                        className="mb-2 border border-gray-300 rounded-lg shadow-none"
                                    >
                                        <AccordionSummary
                                            expandIcon={
                                                <div role="button" className="flex items-center">
                                                    {expanded === index ? (
                                                        <RemoveIcon className="text-primary" />
                                                    ) : (
                                                        <AddIcon className="text-primary" />
                                                    )}
                                                </div>
                                            }
                                        >
                                            <Typography className="font-medium">{faq.question}</Typography>
                                        </AccordionSummary>

                                        <AccordionDetails>
                                            <Typography>{faq.answer}</Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                ))}
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </>
    );
};

export default JobOpenings;
