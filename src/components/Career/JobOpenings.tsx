"use client";
import React, { useState } from "react";
import {
    Box,
    Container,
    Grid,
    Typography,
    Card,
    CardContent,
    Button,
    Modal,
    Backdrop,
    Fade,
    Divider,
    IconButton
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import CloseIcon from "@mui/icons-material/Close";
import ContactEmail from "../ContactEmail";

const jobOpenings = [
    {
        title: "Freshers",
        location: "Ahmedabad, Gujarat",
        vacancies: 10,
        experience: "0-2 years of experience",
        education: "Fresh passout / Pursuing final year in B.Tech / M.Tech / MCA (IT/CS Specialization)",
        skills: [
            "Proficiency in any programming language (Java / JavaScript / PHP / Python / Go / Scala / SQL / PLSQL etc.)",
            "Reasonable reasoning and logical skills are required.",
            "Fluency in verbal and written communication in English.",
            "Willingness to learn new technology, adapt to situations, and fast pace growth mindset is a plus."
        ],
        contactEmail: "careers@innovagecloud.com"
    },
    {
        title: "Technical Consultant",
        location: "Ahmedabad, Gujarat",
        vacancies: 2,
        experience: "2 to 4 years of experience",
        education: "B.Tech / M.Tech / MCA (IT/CS Specialization)",
        skills: [
            "Proficiency in any programming language (Java / JavaScript / PHP / Python / Go / Scala / SQL / PLSQL etc.)",
            "Reasonable reasoning and logical skills are required.",
            "Fluency in verbal and written communication in English.",
            "Willingness to learn new technology, adapt to situations, and fast pace growth mindset is a plus."
        ],
        contactEmail: "careers@innovagecloud.com"
    }
];

const JobOpeningsCard = () => {
    const [open, setOpen] = useState(false);
    const [selectedJob, setSelectedJob] = useState<any>(null);

    const handleOpen = (job: any) => {
        setSelectedJob(job);
        setOpen(true);
    };

    const handleClose = () => setOpen(false);

    return (
        <Container maxWidth="lg" className="pt-[70px]">
            <Grid container spacing={4}>
                {jobOpenings.map((job, index) => (
                    <Grid item xs={12} lg={6} key={index}>
                        <Card
                            sx={{
                                boxShadow: 5,
                                p: 3,
                                height: "100%",
                                borderLeft: "5px solid #c84736"
                            }}
                        >
                            <CardContent className="h-[86%]">
                                <Typography
                                    className="text-primary"
                                    variant="h5"
                                    sx={{ fontWeight: "bold", mb: 1 }}
                                >
                                    {job.title}
                                </Typography>
                                <Typography color="text.secondary" sx={{ mb: 2 }}>
                                    📍 {job.location} | Vacancies: {job.vacancies}
                                </Typography>

                                <Divider sx={{ my: 2 }} />

                                <Typography variant="body1" sx={{ mt: 1 }}>
                                    <strong>Experience:</strong> {job.experience}
                                </Typography>
                                <Typography variant="body1" sx={{ mt: 1 }}>
                                    <strong>Education:</strong> {job.education}
                                </Typography>

                                <Box sx={{ mt: 2 }}>
                                    <Typography
                                        variant="body1"
                                        fontWeight="bold"
                                        sx={{ color: "#333" }}
                                    >
                                        Required Skills:
                                    </Typography>
                                    <ul style={{ paddingLeft: "20px", marginTop: "8px" }}>
                                        {job.skills.map((skill, idx) => (
                                            <li key={idx} style={{ marginBottom: "4px" }}>
                                                {skill}
                                            </li>
                                        ))}
                                    </ul>
                                </Box>
                            </CardContent>

                            <Box sx={{ p: 2, textAlign: "right" }}>
                                <Button
                                    variant="contained"
                                    className="bg-primary"
                                    startIcon={<EmailIcon />}
                                    sx={{ mt: 1, textTransform: "none" }}
                                    onClick={() => handleOpen(job)}
                                >
                                    Apply Now
                                </Button>
                            </Box>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Modal for Job Details */}
            <Modal
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{ timeout: 500 }}
            >
                <Fade in={open}>
                    <Box
                        className="lightForm"
                        sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: 500,
                            bgcolor: "background.paper",
                            boxShadow: 24,
                            p: 4,
                            borderRadius: "8px",

                        }}
                    >
                        {/* Close Icon */}
                        <IconButton
                            sx={{
                                position: "absolute",
                                top: 8,
                                right: 8,
                                color: "#c84736"
                            }}
                            onClick={handleClose}
                        >
                            <CloseIcon />
                        </IconButton>

                        <Typography
                            variant="h5"
                            className="text-primary"
                            sx={{ fontWeight: "bold", mb: 2 }}
                        >
                            {selectedJob?.title}
                        </Typography>
                        <ContactEmail btnText="Apply Now" job={selectedJob?.title} />
                    </Box>
                </Fade>
            </Modal>
        </Container>
    );
};

export default JobOpeningsCard;
