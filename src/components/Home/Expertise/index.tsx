"use client";
import React from "react";
import { Grid, Card, CardContent, Typography, Container, Box } from "@mui/material";
import { motion } from "framer-motion"; // Import Framer Motion
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import BuildIcon from "@mui/icons-material/Build";
import SettingsIcon from "@mui/icons-material/Settings";
import CodeIcon from "@mui/icons-material/Code";
import TerminalIcon from "@mui/icons-material/Terminal";
import StorageIcon from "@mui/icons-material/Storage";

// Expertise items with labels, links, and icons
const expertiseItems = [
  { label: "OIC - Oracle Integration Cloud", href: "/expertise/#oic", icon: <CloudQueueIcon /> },
  { label: "VBCS - Visual Builder Cloud Service", href: "/expertise/#vbcs", icon: <BuildIcon /> },
  { label: "PCS - Process Cloud Service", href: "/expertise/#pcs", icon: <SettingsIcon /> },
  { label: "Apex Development", href: "/expertise/#apex-development", icon: <CodeIcon /> },
  { label: "Java Development", href: "/expertise/#java-development", icon: <TerminalIcon /> },
  { label: "Database", href: "/expertise/#database", icon: <StorageIcon /> },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const Expertise = () => {
  return (
    <div className="py-[70px] mb-16">
      <section
        className="bg-deepSlate !py-0"
        style={{ height: "calc(100% - 200px)" }}
        id="mentor"
      >
        <Container maxWidth="lg" sx={{ mt: 4 }} className="!px-3 lg:!px-0">
          <Grid container spacing={4}>
            {/* Left Side - Title & Content */}
            <Grid
              item
              xs={12}
              md={6}
              lg={4}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                minHeight: "calc(100% - 100px)",
              }}
            >
              <h2 className="text-midnight_text text-4xl lg:text-5xl font-semibold mb-8">
                Our Expertise
              </h2>
              <Typography variant="body1">
                Explore our areas of expertise, covering cloud services, application development, and database solutions.
              </Typography>
            </Grid>

            {/* Right Side - Cards with Animation */}
            <Grid item xs={12} md={6} lg={8}>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <Grid container spacing={3} className="!-mt-20 relative -bottom-[50px]">
                  {expertiseItems.map((item, index) => (
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={4}
                      key={index}
                      sx={{
                        mt: {
                          xs: 0,
                          md: index === 0 || index === 2 || index === 3 || index === 5 ? -10 : 0,
                        },
                      }}
                    >
                      <motion.div variants={itemVariants}>
                        <Card
                          className="card-expe"
                          sx={{
                            minHeight: 160,
                            textAlign: "left",
                            p: 1,
                            boxShadow: 1,
                            transition: "all 0.3s ease-in-out",
                            "&:hover": {
                              boxShadow: 6,
                              transform: "scale(1.05)", // Enhanced hover effect
                            },
                          }}
                        >
                          <CardContent>
                            <Box
                              className="card-icon mb-2"
                              sx={{
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: 50,
                                height: 50,
                                borderRadius: "50%",
                                backgroundColor: "#c84736",
                                transition: "background 0.3s ease-in-out",
                                color: "#fff",
                                "&:hover": {
                                  backgroundColor: "#000",
                                },
                              }}
                            >
                              {item.icon}
                            </Box>

                            <Typography variant="h6" sx={{ mt: 1, mb: 1 }}>
                              {item.label}
                            </Typography>

                            <Typography sx={{ mb: 1.5 }} variant="body2">
                              We specialize in {item.label}, offering tailored solutions to optimize business operations.
                            </Typography>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </section>
    </div>
  );
};

export default Expertise;
