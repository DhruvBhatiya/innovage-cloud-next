"use client";

import { Card, CardContent, Typography, Container, Grid, Box } from "@mui/material";
import LightbulbIcon from "@mui/icons-material/Lightbulb"; // For Innovation
import VerifiedIcon from "@mui/icons-material/Verified"; // For Quality
import HandshakeIcon from "@mui/icons-material/Handshake"; // For Trust

const values = [
    {
        title: "Innovation",
        description:
            "We push boundaries, embracing emerging technologies like AI, automation, and Oracle Cloud solutions to craft forward-thinking strategies. Our team thrives on creativity — developing custom applications, intelligent integrations, and next-gen cloud solutions tailored to your business needs.",
        icon: <LightbulbIcon fontSize="large" />,
    },
    {
        title: "Quality",
        description:
            "Excellence is non-negotiable. From Oracle Fusion implementations to bespoke software development, we follow industry best practices, rigorous testing, and continuous optimization — ensuring that every solution we deliver meets the highest standards.",
        icon: <VerifiedIcon fontSize="large" />,
    },
    {
        title: "Trust",
        description:
            "Partnerships are built on trust. We work closely with our clients, offering transparent processes, clear communication, and reliable support. With Innovage Cloud, you can count on consistent service, secure solutions, and a team that's invested in your success.",
        icon: <HandshakeIcon fontSize="large" />,
    },
];

const CoreValues = () => {
    return (
        <section className="11bg-cover 11bg-center-top" style={{ backgroundImage: "url('/img/bg/about-bg-02.jpg')" }}>
            <Container maxWidth="lg" >

            <h2 className="text-dark-gray text-5xl font-normal mb-8 text-primary ">Our Core Values</h2>
                <Grid container spacing={4}>
                    {values.map((value, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <Card
                                sx={{
                                    height: "100%",
                                    textAlign: "center",
                                    p: 3,
                                    boxShadow: 0,
                                    transition: "all 0.3s ease-in-out",
                                    "&:hover": {
                                        boxShadow: 6,
                                        transform: "scale(1.05)",
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        mb: 2,
                                        color: "#c84736",
                                    }}
                                >
                                    {value.icon}
                                </Box>
                                <CardContent>
                                    <Typography
                                        variant="h5"
                                        sx={{ fontWeight: "bold", mb: 2 }}
                                    >
                                        {value.title}
                                    </Typography>
                                    <Typography variant="body2">{value.description}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </section>
    );
};

export default CoreValues;
