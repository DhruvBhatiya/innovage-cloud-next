"use client";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import Image from "next/image";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const visionPoints = [
    "Innovation drives growth — through AI-powered automation, data-driven insights, and modern cloud infrastructures.",
    "Quality fuels progress — by delivering robust, future-ready solutions that strengthen business foundations.",
    "Trust inspires collaboration — fostering long-term relationships with clients, partners, and communities."
];

const commitmentPoints = [
    "🌿 Green Cloud Solutions — Promoting eco-conscious cloud practices to reduce carbon footprints.",
    "📚 Talent Empowerment — Investing in IT upskilling programs, encouraging diversity, and creating inclusive workspaces.",
    "🤝 Ethical Innovation — Ensuring AI, automation, and digital solutions are developed transparently and responsibly."
];




const VisionMission = () => {

    const [expanded, setExpanded] = useState<string | false>("panel0"); // Open first accordion by default

    const handleChange = (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <section className="11bg-cover 11bg-center-top" style={{ backgroundImage: "url('/img/bg/about-bg-02.jpg')" }}>
            <Container maxWidth="lg" >
                {/* Vision Section */}
                <Grid container spacing={4} alignItems="center" sx={{ mb: 6 }}>
                    <Grid item xs={12} md={12}>
                        <h2 className="text-midnight_text text-4xl sm:text-5xl font-semibold pt-5 lg:pt-0 mb-10">Our Vision</h2>

                        <Typography variant="body1" paragraph className="mb-0">
                            Our vision is to become a global leader in driving digital transformation through Cloud & AI technologies —
                            helping businesses innovate, operate efficiently, and scale sustainably.
                        </Typography>

                    </Grid>
                    <Grid item xs={12} md={4} className="!pt-0">
                        <Image
                            src="/img/about/vision.jpg"
                            alt="Our Vision"
                            width={500}
                            height={350}
                            style={{ borderRadius: "8px" }}
                        />
                    </Grid>
                    <Grid item xs={12} md={8}>

                       <Box sx={{ maxWidth: 800, mx: "auto", }}>
                            {/* Vision Accordion */}
                            <Accordion
                                expanded={expanded === "panel0"}
                                onChange={handleChange("panel0")}
                                sx={{
                                    boxShadow: 3,
                                    "&:before": { display: "none" },
                                    border: "1px solid #e0e0e0",
                                    borderRadius: "8px",
                                    mb: 1
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={
                                        expanded === "panel0"
                                            ? <RemoveIcon sx={{ color: "#fff" }} />
                                            : <AddIcon sx={{ color: "#c84736" }} />
                                    }
                                    sx={{
                                        backgroundColor: expanded === "panel0" ? "#c84736" : "#f5f5f5",
                                        color: expanded === "panel0" ? "#fff" : "#000",
                                        borderRadius: "8px 8px 0 0"
                                    }}
                                >
                                    <Typography variant="h6" fontWeight="bold">
                                        We envision a future where:
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <List>
                                        {visionPoints.map((point, index) => (
                                            <ListItem key={index}>
                                                <ListItemIcon>
                                                    <FiberManualRecordIcon fontSize="small" />
                                                </ListItemIcon>
                                                <ListItemText primary={point} />
                                            </ListItem>
                                        ))}
                                    </List>
                                </AccordionDetails>
                            </Accordion>

                            {/* Commitment Accordion */}
                            <Accordion
                                expanded={expanded === "panel1"}
                                onChange={handleChange("panel1")}
                                sx={{
                                    boxShadow: 3,
                                    "&:before": { display: "none" },
                                    border: "1px solid #e0e0e0",
                                    borderRadius: "8px",
                                    mb: 1
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={
                                        expanded === "panel1"
                                            ? <RemoveIcon sx={{ color: "#fff" }} />
                                            : <AddIcon sx={{ color: "#c84736" }} />
                                    }
                                    sx={{
                                        backgroundColor: expanded === "panel1" ? "#c84736" : "#f5f5f5",
                                        color: expanded === "panel1" ? "#fff" : "#000",
                                        borderRadius: "8px 8px 0 0"
                                    }}
                                >
                                    <Typography variant="h6" fontWeight="bold">
                                        Beyond technology, we’re committed to sustainability and social responsibility:
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <List>
                                        {commitmentPoints.map((point, index) => (
                                            <ListItem key={index}>
                                                <ListItemIcon>
                                                    <FiberManualRecordIcon fontSize="small" />
                                                </ListItemIcon>
                                                <ListItemText primary={point} />
                                            </ListItem>
                                        ))}
                                    </List>
                                </AccordionDetails>
                            </Accordion>
                        </Box>

                        {/* 
                        <Box>
                            <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
                                We envision a future where:
                            </Typography>
                            <List>
                                {visionPoints.map((point, index) => (
                                    <ListItem key={index}>
                                        <ListItemIcon>
                                            <FiberManualRecordIcon fontSize="small" />
                                        </ListItemIcon>
                                        <ListItemText primary={point} />
                                    </ListItem>
                                ))}
                            </List>

                            <Typography variant="h5" fontWeight="bold" sx={{ mt: 4, mb: 2 }}>
                                Beyond technology, we’re committed to sustainability and social responsibility:
                            </Typography>
                            <List>
                                {commitmentPoints.map((point, index) => (
                                    <ListItem key={index}>
                                        <ListItemIcon>
                                            <FiberManualRecordIcon fontSize="small" />
                                        </ListItemIcon>
                                        <ListItemText primary={point} />
                                    </ListItem>
                                ))}
                            </List>
                        </Box> */}

                    </Grid>
                </Grid>

                {/* Mission Section */}
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={8}>
                        <h2 className="text-midnight_text text-4xl sm:text-5xl font-semibold pt-5 lg:pt-0 mb-10">Our Mission</h2>
                        <Typography variant="body1" paragraph>
                            To empower businesses with innovative Cloud & AI solutions, delivering high-quality services that build trust and
                            drive sustainable growth.
                        </Typography>
                        <Typography variant="body1">
                            We strive to transform technology into a strategic asset — helping organizations unlock new opportunities,
                            streamline processes, and stay ahead in an ever-evolving digital landscape.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Image
                            src="/img/about/mission.jpg"
                            alt="Our Mission"
                            width={500}
                            height={350}
                            style={{ borderRadius: "8px" }}
                        />
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
};

export default VisionMission;
