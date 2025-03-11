"use client";

import Breadcrumb from "@/components/Common/Breadcrumb";
import { Container, Grid, Typography, Box } from "@mui/material";
import Image from "next/image";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Define the service sections with titles and links
const sections = [
    {
        title: "Off-shore technical support",
        content: "We provide offshore technical support to ensure smooth business operations with minimal downtime.",
        image: "/img/services/Off-shore_technical_support.png",
        id: "off-shore-technical-support",
    },
    {
        title: "Incident management",
        content: "Efficiently handling incidents to minimize impact and restore services as quickly as possible.",
        image: "/img/services/Incident_management.png",
        id: "incident-management",
    },
    {
        title: "Manual Regression Testing",
        content: "Thorough manual regression testing to maintain application stability after updates.",
        image: "/img/services/Manual_Regression_Testing.png",
        id: "manual-regression-testing",
    },
    {
        title: "Assessment as a Service",
        content: "Helping businesses evaluate their technical infrastructure and optimize performance.",
        image: "/img/services/Assesment_as_a_Service.png",
        id: "assessment-as-a-service",
    },
    {
        title: "Configure and Code Integrations",
        content: "Seamless integration of applications to enhance workflow automation and efficiency.",
        image: "/img/services/Configure_and_code_integrations.png",
        id: "configure-and-code-integrations",
    },
    {
        title: "Bespoke Application Development",
        content: "Custom application development tailored to your business needs for maximum efficiency.",
        image: "/img/services/Bespoke_Application_Development.png",
        id: "bespoke-application-development",
    },
];

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

    return (
        <div>
            <Breadcrumb pageName="Our Services" />

            {sections.map((section, index) => (
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
                            transform: "skewY(-4deg)", // Apply the angle
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
                            // alignItems="center"
                            
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

export default Services;
