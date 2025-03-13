"use client";

import Breadcrumb from "@/components/Common/Breadcrumb";
import { Container, Grid, Typography, Box } from "@mui/material";
import Image from "next/image";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { ServiceData } from "./dataServices";

// Define the service sections with titles and links



const Services = () => {
    const path = usePathname();

    useEffect(() => {
        // Smooth scroll to section on submenu click
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


    console.log("ServiceData", ServiceData)
    return (
        <div className="pt-[70px]">
            {/* <Breadcrumb pageName="Our Services" /> */}

            {ServiceData.map((section, index) => (
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
                            transform: "skewY(-4deg)",
                            transformOrigin: "top left",
                            zIndex: -1,
                        },
                    }}
                >
                    <Container maxWidth="lg">
                        <Grid
                            container
                            spacing={4}
                            direction={
                                section.content.services && section.content.services.length > 0
                                    ? index % 2 === 0
                                        ? "row"
                                        : "row-reverse"
                                    : "row"
                            } // Align title and description on left or right
                        >
                            {/* Title & Description */}
                            <Grid
                                item
                                xs={12}
                                md={
                                    section.content.services && section.content.services.length > 0
                                        ? 12
                                        : 6
                                }
                            >
                                <Box
                                    sx={{
                                        textAlign:
                                            section.content.services && section.content.services.length > 0
                                                ? "left"
                                                : index % 2 === 0
                                                    ? "left"
                                                    : "right",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems:
                                            section.content.services && section.content.services.length > 0
                                                ? "left"
                                                : index % 2 === 0
                                                    ? "flex-start"
                                                    : "flex-end",
                                    }}
                                >
                                    <Typography color="#c84736" variant="h4" fontWeight="bold" gutterBottom>
                                        {section.title}
                                    </Typography>

                                    <Typography variant="body1" color="text.secondary" paragraph>
                                        {section.content.description}
                                    </Typography>
                                </Box>
                            </Grid>

                            {/* Services List */}
                            {section.content.services && section.content.services.length > 0 && (
                                <Grid item xs={12} md={6}>
                                    <Box
                                        sx={{
                                            textAlign: "center",
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Box component="ul" sx={{ pl: 3, textAlign: "left" }}>
                                            {section.content.services.map((service) => (
                                                <Box component="li" key={service.title} sx={{ mb: 1 }}>
                                                    <Typography variant="subtitle1" fontWeight="bold">
                                                        {service.title}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        {service.detail}
                                                    </Typography>

                                                    {service.moredata && (
                                                        <Box
                                                            component="ul"
                                                            sx={{ pl: 3, listStyleType: "disc" }}
                                                        >
                                                            {service.moredata.map((dt, index) => (
                                                                <Box component="li" key={index} sx={{ mb: 1 }}>
                                                                    <Typography variant="body2" color="text.secondary">
                                                                        {dt}
                                                                    </Typography>
                                                                </Box>
                                                            ))}
                                                        </Box>
                                                    )}
                                                </Box>
                                            ))}
                                        </Box>

                                        <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
                                            {section.content.closingNote}
                                        </Typography>
                                    </Box>
                                </Grid>
                            )}

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

export default Services;
