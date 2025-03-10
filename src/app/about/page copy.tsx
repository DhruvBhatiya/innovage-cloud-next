import Breadcrumb from "@/components/Common/Breadcrumb";
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, Container, Card, CardContent, CardMedia } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";

export default function AboutUs() {
    return (
        <>
            <Breadcrumb pageName="About Us" />
            <Container maxWidth="lg" sx={{ bgcolor: "#f0f4f8" }}>

                {/* Quality Consulting Section */}
                <Box sx={{ display: "flex", p: 4 }}>
                    <Box flex={1}>
                        <Typography variant="h4">Quality Consulting, Delivered Consistently</Typography>
                    </Box>
                    <Box flex={1}>
                        <Image src="/quality-consulting.jpg" alt="Quality Consulting" width={500} height={300} />
                    </Box>
                </Box>

                {/* Our Journey */}
                <Box sx={{ display: "flex", bgcolor: "#e3f2fd", p: 4 }}>
                    <Box flex={1}>
                        <Typography variant="h5">Our Journey So Far</Typography>
                        <Typography>We have grown from a small team to a trusted Oracle Cloud partner...</Typography>
                    </Box>
                    <Box flex={1}>
                        <Image src="/journey-image.jpg" alt="Our Journey" width={500} height={300} />
                    </Box>
                </Box>

                {/* Our Mission */}
                <Box sx={{ display: "flex", flexDirection: "row-reverse", p: 4 }}>
                    <Box flex={1}>
                        <Typography variant="h5">Our Mission</Typography>
                        <Typography>Empowering businesses through Oracle Cloud solutions...</Typography>
                    </Box>
                    <Box flex={1}>
                        <Image src="/mission-image.jpg" alt="Our Mission" width={500} height={300} />
                    </Box>
                </Box>

                {/* Our Vision */}
                <Box sx={{ display: "flex", bgcolor: "#f0f4f8", p: 4 }}>
                    <Box flex={1}>
                        <Typography variant="h5">Our Vision</Typography>
                        <Typography>To be the leading Oracle Cloud consulting provider...</Typography>
                    </Box>
                    <Box flex={1}>
                        <Image src="/vision-image.jpg" alt="Our Vision" width={500} height={300} />
                    </Box>
                </Box>

                {/* Our Promise */}
                <Box sx={{ p: 4 }}>
                    <Typography variant="h5" sx={{ mb: 2 }}>Our Promise</Typography>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>Reliability</AccordionSummary>
                        <AccordionDetails>We ensure timely and consistent delivery of solutions.</AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>Innovation</AccordionSummary>
                        <AccordionDetails>We leverage the latest Oracle Cloud technologies to deliver innovative solutions.</AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>Customer Focus</AccordionSummary>
                        <AccordionDetails>Your success is our priority, and we tailor solutions to your needs.</AccordionDetails>
                    </Accordion>
                </Box>

                {/* Our Team */}
                <Box sx={{ p: 4, bgcolor: "#e3f2fd", display: "flex", gap: 2 }}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="200"
                            image="/team-member1.jpg"
                            alt="Team Member 1"
                        />
                        <CardContent>
                            <Typography variant="h6">John Doe</Typography>
                            <Typography>Oracle Cloud Architect</Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="200"
                            image="/team-member2.jpg"
                            alt="Team Member 2"
                        />
                        <CardContent>
                            <Typography variant="h6">Jane Smith</Typography>
                            <Typography>Cloud Integration Specialist</Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="200"
                            image="/team-member3.jpg"
                            alt="Team Member 3"
                        />
                        <CardContent>
                            <Typography variant="h6">Sam Wilson</Typography>
                            <Typography>Database Administrator</Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Container>
        </>
    );
}