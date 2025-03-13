"use client";
import React, { useState } from 'react';
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

const expertiseData = [
    {
        title: "Oracle-Centric Expertise",
        description: "We specialize in Oracle ERP, HCM, SCM, and Cloud Infrastructure — ensuring deep knowledge and seamless implementation."
    },
    {
        title: "AI-Driven Innovation",
        description: "At Innovage Cloud, AI is not the future — it's the present. Our AI services boost operational efficiency, customer experience, and data-driven decision-making."
    },
    {
        title: "Tailored Solutions",
        description: "Every business is unique. We design custom applications using Oracle APEX, VBCS, and JET to match your goals."
    },
    {
        title: "Seamless Integrations",
        description: "From Oracle Integration Cloud (OIC) to REST/SOAP APIs, we streamline your tech ecosystem for smooth data flow."
    },
    {
        title: "Scalable Talent Pool",
        description: "Our Resource Augmentation services provide on-demand access to Oracle consultants, developers, and cloud specialists."
    }
];

export const WhyChoose = () => {
    const [expanded, setExpanded] = useState<string | false>("panel0"); // Open first accordion by default

    const handleChange = (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
            <Container maxWidth="lg" className='py-[70px]'>
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={4}>
                        <Image
                            src="/images/vision.jpg"
                            alt="Our Vision"
                            width={500}
                            height={350}
                            style={{ borderRadius: "8px" }}
                        />
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Typography variant="h4" color="#c84736" fontWeight="bold" className='mb-8' gutterBottom>
                            Why Choose Innovage Cloud?
                        </Typography>

                        <Box sx={{ maxWidth: 800, mx: "auto" }}>
                            {expertiseData.map((item, index) => (
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
                                                <RemoveIcon sx={{ color: "#c84736" }} />
                                            ) : (
                                                <AddIcon sx={{ color: "#c84736" }} />
                                            )
                                        }
                                        sx={{
                                            backgroundColor: expanded === `panel${index}` ? "#c84736" : "#f5f5f5",
                                            color: expanded === `panel${index}` ? "#fff" : "#000",
                                            borderRadius: "8px 8px 0 0",
                                            my: expanded === `panel${index}` ? "0px" : 0  // Add margin for active item
                                        }}
                                    >
                                        <Typography variant="h6" fontWeight="bold">
                                            {item.title}
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>{item.description}</Typography>
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
