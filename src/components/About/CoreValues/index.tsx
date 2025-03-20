"use client";

import { Card, CardContent, Typography, Container, Grid, Box } from "@mui/material";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import VerifiedIcon from "@mui/icons-material/Verified";
import HandshakeIcon from "@mui/icons-material/Handshake";
import { Fade, Slide } from "react-awesome-reveal";

const values = [
    {
        title: "Innovation",
        description:
            "We push boundaries, embracing emerging technologies like AI, automation, and Oracle Cloud solutions to craft forward-thinking strategies. Our team thrives on creativity — developing custom applications, intelligent integrations, and next-gen cloud solutions tailored to your business needs.",
        icon: <LightbulbIcon fontSize="inherit" />,
    },
    {
        title: "Quality",
        description:
            "Excellence is non-negotiable. From Oracle Fusion implementations to bespoke software development, we follow industry best practices, rigorous testing, and continuous optimization — ensuring that every solution we deliver meets the highest standards.",
        icon: <VerifiedIcon fontSize="inherit" />,
    },
    {
        title: "Trust",
        description:
            "Partnerships are built on trust. We work closely with our clients, offering transparent processes, clear communication, and reliable support. With Innovage Cloud, you can count on consistent service, secure solutions, and a team that's invested in your success.",
        icon: <HandshakeIcon fontSize="inherit" />,
    },

];

const CoreValues = () => {
    return (
        <section
            className="11bg-cover 11bg-center-top"
            style={{ backgroundImage: "url('/img/bg/about-bg-02.jpg')" }}
        >
            <Container maxWidth="lg">
                <h2 className="text-midnight_text text-4xl sm:text-5xl font-semibold pt-5 lg:pt-0 mb-10">
                    Our Core Values
                </h2>

                <Grid container spacing={4}>
                    {values.map((value, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            {/* <Slide direction="right"  > */}
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
                                            width: 80,
                                            height: 80,
                                            borderRadius: "50%",
                                            backgroundColor: "#c84736",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            mx: "auto",
                                            color: "#fff",
                                            fontSize: "2rem",
                                            mb: 2,
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
                            {/* </Slide> */}
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </section>
    );
};

export default CoreValues;
