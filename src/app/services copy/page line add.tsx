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

            <Container maxWidth="lg" sx={{ position: "relative", padding: "50px 0" }}>
                {/* Vertical Line */}
                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "4px",
                        height: "100%",
                        backgroundColor: "#c84736",
                        zIndex: -1,
                    }}
                />

                {sections.map((section, index) => (
                    <Grid
                        container
                        key={section.id}
                        id={section.id}
                        spacing={4}
                        direction={index % 2 === 0 ? "row" : "row-reverse"} // Alternating layout
                        alignItems="center"
                        sx={{ position: "relative", padding: "40px 0" }}
                    >
                        {/* Circle Indicator */}
                        <Box
                            sx={{
                                position: "absolute",
                                left: "50%",
                                transform: "translateX(-50%)",
                                width: "20px",
                                height: "20px",
                                backgroundColor: "#fff",
                                border: "4px solid #c84736",
                                borderRadius: "50%",
                                zIndex: 1,
                            }}
                        />

                        {/* Text Content */}
                        <Grid item xs={12} md={5} sx={{ textAlign: index % 2 === 0 ? "right" : "left" }}>
                            <Typography
                                variant="h4"
                                fontWeight="bold"
                                color="#c84736"
                                gutterBottom
                                sx={{ position: "relative" }}
                            >
                                {section.title}
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                {section.content}
                            </Typography>
                        </Grid>

                        {/* Image */}
                        <Grid item xs={12} md={5}>
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
                ))}
            </Container>
        </div>
    );
};

export default Services;
