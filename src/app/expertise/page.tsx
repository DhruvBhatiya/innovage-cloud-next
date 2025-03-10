"use client";

import Breadcrumb from "@/components/Common/Breadcrumb";
import { Container, Grid, Typography, Box } from "@mui/material";
import Image from "next/image";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { expertisePage } from "../api/data";

// Expertise sections with titles, descriptions, images, and IDs


const Expertise = () => {
    const path = usePathname();

    useEffect(() => {
        // Smooth scroll to section when submenu link is clicked
        if (path.includes("#")) {
            const id = path.split("#")[1];
            const section = document.getElementById(id);
            if (section) {
                setTimeout(() => {
                    section.scrollIntoView({ behavior: "smooth", block: "start" });
                }, 200);
            }
        }
    }, [path]);

    return (
        <div>
            <Breadcrumb pageName="Our Expertise" />

            {expertisePage.map((section, index) => (
                <Box
                    key={section.id}
                    id={section.id}
                    sx={{
                        position: "relative",
                        width: "100%",
                        padding: "80px 0",
                        overflow: "hidden",
                        backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#fff",
                        "&::before": {
                            content: '""',
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#fff",
                            transform: "skewY(-4deg)", // Angled background effect
                            transformOrigin: "top left",
                            zIndex: -1,
                        },
                    }}
                >
                    <Container maxWidth="lg">
                        <Grid
                            container
                            spacing={4}
                            direction={index % 2 === 0 ? "row" : "row-reverse"} // Alternating layout
                        >
                            {/* Text Content */}
                            <Grid item xs={12} md={6}>
                                <Box>
                                    <Typography color="#c84736" variant="h4" fontWeight="bold" gutterBottom>
                                        {section.title}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        {section.content}
                                    </Typography>
                                </Box>
                            </Grid>

                            {/* Image */}
                            <Grid item xs={12} md={6}>
                                <Box sx={{ display: "flex", justifyContent: "center" }}>
                                    <Image
                                        src={section.image}
                                        alt={section.title}
                                        width={500}
                                        height={300}
                                        style={{ borderRadius: "8px" }}
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            ))}
        </div>
    );
};

export default Expertise;
