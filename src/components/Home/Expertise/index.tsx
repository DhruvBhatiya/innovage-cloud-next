"use client";
import React from "react";
import { Grid, Card, CardContent, Typography, Container, Box, Link } from "@mui/material";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter"; // Import MUI Icon

const Expertise = () => {
    return (
        <div className="py-[70px]">
            <section
                className="bg-deepSlate !py-0"
                style={{ height: "calc(100% - 200px)" }} // Dynamic height minus 100px
                id="mentor"
            >
                <Container maxWidth="lg" sx={{ mt: 4, }} className="!px-0" >
                    <Grid container spacing={4}>

                         {/* Right Side - Title & Content (Vertically Centered) */}
                         <Grid
                            item
                            xs={12}
                            md={6}
                            lg={4}
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                minHeight: "calc(100% - 100px)", // Adjust height dynamically
                            }}
                        >
                            {/* <Typography variant="h2" gutterBottom>
                            Our Services
                            </Typography> */}
                            <h2 className="text-midnight_text text-4xl lg:text-5xl font-semibold mb-8 ">Our Expertise</h2>
                            <Typography variant="body1">
                                This is the content section where you can add details, descriptions, or any relevant information. This is the content section where you can add details, descriptions, or any relevant information.
                            </Typography>
                        </Grid>

                        
                        {/* Left Side - Cards */}
                        <Grid item xs={12} md={6} lg={8}>
                            <Grid container spacing={3} className="!-mt-20 relative -bottom-[50px]">
                                {[1, 2, 3, 4, 5, 6].map((item) => (
                                    <Grid
                                        item
                                        xs={4}
                                        key={item}
                                        sx={{
                                            mt: item === 1 || item === 4 || item === 3 || item === 6 ? -10 : 0, // Move Card 1, 3, 4, 6 up
                                        }}
                                    >
                                        <Card
                                            className="card-expe"
                                            sx={{
                                                minHeight: 160,
                                                textAlign: "left",
                                                p: 1,
                                                boxShadow: 1, // Large shadow
                                                transition: "all 0.3s ease-in-out",
                                                "&:hover": {
                                                    boxShadow: 6, // Larger shadow on hover
                                                    transform: "scale(1.01)", // Slight scale effect
                                                },
                                            }}
                                        >
                                            <CardContent>
                                                {/* Icon inside a box with hover effect */}
                                                <Box
                                                    className="card-icon mb-2"
                                                    sx={{
                                                        display: "inline-flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        width: 50,
                                                        height: 50,
                                                        borderRadius: "50%",
                                                        backgroundColor: "black", // Default background black
                                                        transition: "background 0.3s ease-in-out",
                                                        "&:hover": {
                                                            backgroundColor: "red", // Change background to red on hover
                                                        },
                                                    }}
                                                >
                                                    <BusinessCenterIcon
                                                        sx={{
                                                            fontSize: 30,
                                                            color: "white",
                                                        }}
                                                    />
                                                </Box>

                                                <Typography variant="h6" sx={{ mt: 1, mb: 1 }}>
                                                    Card {item}
                                                </Typography>
                                                <Typography sx={{mb: 1.5}} variant="body2">
                                                This is the content section where you can add details, descriptions, or any relevant information This is the content section where you can add details, descriptions, or any relevant information
                                                
                                                </Typography>

                                                {/* View More Link */}
                                                <Link
                                                    href="#"
                                                    underline="hover"
                                                    sx={{
                                                        display: "inline-block",
                                                        mt: 1,
                                                        fontWeight: "medium",
                                                        color: "#c84736",
                                                        transition: "color 0.3s ease-in-out",
                                                        "&:hover": { color: "#c84736" }, // Change to red on hover
                                                    }}
                                                >
                                                    View More
                                                </Link>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>

                       
                    </Grid>
                </Container>
            </section>
        </div>
    );
};

export default Expertise;
