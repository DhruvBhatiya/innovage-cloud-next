"use client";
import React from "react";
import { Box, Container, Grid, Typography, Card, CardContent, Button } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

const jobOpenings = [
    // {
    //     title: "Associate Technical Consultant",
    //     location: "Ahmedabad, Gujarat",
    //     vacancies: 10,
    //     experience: "0-2 years of experience",
    //     education: "Fresh passout / Pursuing final year in B.Tech / M.Tech / MCA (IT/CS Specialization)",
    //     skills: [
    //         "Proficiency in any programming language (Java/JavaScript/PHP/Python/Go/Scala/SQL/PLSQL etc.)",
    //         "Reasonable reasoning and logical skills are required.",
    //         "Fluency in verbal and written communication in English.",
    //         "Willingness to learn new technology, adapt to situations, and fast pace growth mindset is a plus."
    //     ],
    //     contactEmail: "careers@innovagecloud.com"
    // },
    {
        title: "Freshers",
        location: "Ahmedabad, Gujarat",
        vacancies: 10,
        experience: "0-2 years of experience",
        education: "Fresh passout / Pursuing final year in B.Tech / M.Tech / MCA (IT/CS Specialization)",
        skills: [
            "Proficiency in any programming language (Java / JavaScript / PHP / Python / Go / Scala /SQL / PLSQL etc.)",
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
            "Proficiency in any programming language (Java / JavaScript / PHP / Python / Go / Scala /SQL / PLSQL etc.)",
            "Reasonable reasoning and logical skills are required.",
            "Fluency in verbal and written communication in English.",
            "Willingness to learn new technology, adapt to situations, and fast pace growth mindset is a plus."
        ],
        contactEmail: "careers@innovagecloud.com"
    },
];

const JobOpeningsCard = () => {
    return (
        <Container maxWidth="lg" className="py-10">
            <Typography variant="h4" gutterBottom textAlign="center" sx={{ fontWeight: "bold", mb: 4 }}>
                Current Job Openings
            </Typography>
            <Grid container spacing={4}>
                {jobOpenings.map((job, index) => (
                    <Grid item xs={12} lg={6} key={index}>
                        <Card sx={{ boxShadow: 3, p: 3, height: '100%' }} >
                            <CardContent>
                                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
                                    {job.title}
                                </Typography>
                                <Typography color="text.secondary" gutterBottom>
                                    {job.location} | Vacancies: {job.vacancies}
                                </Typography>
                                <Typography variant="body1" sx={{ mt: 2 }}>
                                    <strong>Experience:</strong> {job.experience}
                                </Typography>
                                <Typography variant="body1" sx={{ mt: 1 }}>
                                    <strong>Education:</strong> {job.education}
                                </Typography>
                                <Box sx={{ mt: 2 }}>
                                    <Typography variant="body1" fontWeight="bold">Required Skills:</Typography>
                                    <ul>
                                        {job.skills.map((skill, idx) => (
                                            <li key={idx}>{skill}</li>
                                        ))}
                                    </ul>
                                </Box>
                                <Button
                                className="bg-primary"
                                    variant="contained"
                                    color="primary"
                                    startIcon={<EmailIcon />}
                                    sx={{ mt: 2 }}
                                    href={`mailto:${job.contactEmail}`}
                                >
                                    Apply Now
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default JobOpeningsCard;
