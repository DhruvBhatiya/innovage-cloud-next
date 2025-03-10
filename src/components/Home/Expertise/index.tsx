"use client";
import React from "react";
import { Grid, Card, CardContent, Typography, Container, Box, Link } from "@mui/material";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import CloudQueueIcon from "@mui/icons-material/CloudQueue"; // For OIC
import BuildIcon from "@mui/icons-material/Build"; // For VBCS
import SettingsIcon from "@mui/icons-material/Settings"; // For PCS
import CodeIcon from "@mui/icons-material/Code"; // For Apex Development
import TerminalIcon from "@mui/icons-material/Terminal"; // For Java Development
import StorageIcon from "@mui/icons-material/Storage"; // For Database

// Expertise items with labels, links, and icons
const expertiseItems = [
  { label: "OIC - Oracle Integration Cloud", href: "/expertise/#oic", icon: <CloudQueueIcon /> },
  { label: "VBCS - Visual Builder Cloud Service", href: "/expertise/#vbcs", icon: <BuildIcon /> },
  { label: "PCS - Process Cloud Service", href: "/expertise/#pcs", icon: <SettingsIcon /> },
  { label: "Apex Development", href: "/expertise/#apex-development", icon: <CodeIcon /> },
  { label: "Java Development", href: "/expertise/#java-development", icon: <TerminalIcon /> },
  { label: "Database", href: "/expertise/#database", icon: <StorageIcon /> },
];

const Expertise = () => {
  return (
    <div className="py-[70px] mb-16">
      <section
        className="bg-deepSlate !py-0"
        style={{ height: "calc(100% - 200px)" }} // Dynamic height minus 200px
        id="mentor"
      >
        <Container maxWidth="lg" sx={{ mt: 4 }} className="!px-0">
          <Grid container spacing={4}>
            {/* Left Side - Title & Content (Vertically Centered) */}
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
              <h2 className="text-midnight_text text-4xl lg:text-5xl font-semibold mb-8">
                Our Expertise
              </h2>
              <Typography variant="body1">
                Explore our areas of expertise, covering cloud services, application development, and database solutions.
              </Typography>
            </Grid>

            {/* Right Side - Cards */}
            <Grid item xs={12} md={6} lg={8}>
              <Grid container spacing={3} className="!-mt-20 relative -bottom-[50px]">
                {expertiseItems.map((item, index) => (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    key={index}
                    sx={{
                      mt: index === 0 || index === 2 || index === 3 || index === 5 ? -10 : 0, // Move some cards up for a staggered effect
                    }}
                  >
                    <Card
                      className="card-expe"
                      sx={{
                        minHeight: 160,
                        textAlign: "left",
                        p: 1,
                        boxShadow: 1, // Small shadow
                        transition: "all 0.3s ease-in-out",
                        "&:hover": {
                          boxShadow: 6, // Larger shadow on hover
                          transform: "scale(1.02)", // Slight scale effect
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
                            color: '#fff',
                            "&:hover": {
                              backgroundColor: "red", // Change background to red on hover
                            },
                          }}
                        >
                          {item.icon}
                        </Box>

                        {/* Card Title */}
                        <Typography variant="h6" sx={{ mt: 1, mb: 1 }}>
                          {item.label}
                        </Typography>

                        {/* Card Description */}
                        <Typography sx={{ mb: 1.5 }} variant="body2">
                          We specialize in {item.label}, offering tailored solutions to optimize business operations.
                        </Typography>

                        {/* View More Link */}
                        {/* <Link
                          href={item.href}
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
                        </Link> */}
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
