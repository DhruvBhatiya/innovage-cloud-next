"use client";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import Image from "next/image";




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



    return (
        <section className="11bg-cover 11bg-center-top" style={{ backgroundImage: "url('/img/bg/about-bg-02.jpg')" }}>
            <Container maxWidth="lg" >
                {/* Vision Section */}
                <Grid container spacing={4} alignItems="center" sx={{ mb: 6 }}>
                    <Grid item xs={12} md={4}>
                        <Image
                            src="/img/about/vision.jpg"
                            alt="Our Vision"
                            width={500}
                            height={350}
                            style={{ borderRadius: "8px" }}
                        />
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Typography variant="h4" color="#c84736" fontWeight="bold" gutterBottom>
                            Our Vision
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Our vision is to become a global leader in driving digital transformation through Cloud & AI technologies —
                            helping businesses innovate, operate efficiently, and scale sustainably.
                        </Typography>

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
                        </Box>

                    </Grid>
                </Grid>

                {/* Mission Section */}
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={8}>
                        <Typography variant="h4" color="#c84736" fontWeight="bold" gutterBottom>
                            Our Mission
                        </Typography>
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
