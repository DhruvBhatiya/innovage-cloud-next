"use client";

import { useState } from "react";
import { Box, Button, Typography, Grid } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs, { Dayjs } from "dayjs";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PublicIcon from '@mui/icons-material/Public';
import VideocamIcon from "@mui/icons-material/Videocam";
import EventIcon from "@mui/icons-material/Event";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ContactEmail from "@/components/ContactEmail";

const availableTimes = [
    "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM",
    "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM",
    "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM",
    "6:00 PM", "6:30 PM", "7:00 PM"
]

const ScheduleMeeting = () => {
    const [step, setStep] = useState(1);
    const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);

    const handleDateSelect = (date: Dayjs | null) => {
        if (date) {
            setSelectedDate(date);
            setStep(2);
        }
    };

    const handleTimeSelect = (time: string) => {
        setSelectedTime(time);
        setStep(3);
    };

    const handleBack = () => {
        if (step === 3) setStep(2);
        else if (step === 2) setStep(1);
    };

    return (
        <Box className="" sx={{ p: 0, maxWidth: 500, mx: "auto", textAlign: "center" }}>

            <Box className="mb-6">
                <Box className="flex justify-between items-center ">
                    <div>
                        {step > 1 && (
                            <ArrowBackIcon className="cursor-pointer hover:text-primary" onClick={handleBack} />
                        )}
                    </div>
                    <Typography variant="h5" fontWeight="bold" className="text-primary capitalize" >
                        Book time with our Experts
                    </Typography>
                    <div></div>
                </Box>
                <p className="text-grey text-sm">Unlock expert solutions for Oracle ERP, integrations, and AI! Book a session now and get tailored advice to drive your business forward.</p>
            </Box>

            <Box className="border-b-2 my-6">
                <Box className="flex flex-wrap justify-between items-center">
                    <Box display="flex" alignItems="center" gap={1} mb={'15px'} className="text-sm" >
                        <AccessTimeIcon sx={{ color: '#c84736' }} />
                        <Typography variant="body1" color="#c84736">30 Minutes</Typography>
                    </Box>

                    <Box display="flex" alignItems="center" gap={1} mb={'15px'} >
                        <VideocamIcon sx={{ color: '#c84736' }} />
                        <Typography variant="body1" color="#c84736">Online Meeting</Typography>
                    </Box>

                    <Box display="flex" alignItems="center" gap={1} mb={'15px'} >
                        <PublicIcon sx={{ color: '#c84736' }} />
                        <Typography variant="body1" color="#c84736">India Standard Time</Typography>
                    </Box>
                </Box>

                {step === 3 && (
                    <Box display="flex" className="text-left lg:text-center" gap={1} mb={3} >
                        <EventIcon sx={{ color: '#c84736' }} />
                        <Typography variant="body1" color="#c84736">
                            Confirm Meeting for {selectedDate!.format("DD-MM-YYYY")} at {selectedTime}
                        </Typography>
                    </Box>
                )}
            </Box>


            {step === 1 && (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar
                        value={selectedDate}
                        onChange={handleDateSelect}
                        disablePast
                        shouldDisableDate={(date: Dayjs) => date.day() === 0} // Disable Sundays
                        sx={{
                            // width: '400px', // Calendar Width

                            "& .MuiPickersDay-root": {
                                backgroundColor: "#f0f0f0",
                                color: "#000",
                                // fontSize: "1.2rem", // Bigger Font Size
                                // margin: "4px", // Add Gaps Between Dates

                                "&.Mui-disabled": {
                                    backgroundColor: "transparent",
                                    color: "#9e9e9e",
                                },
                                "&.Mui-selected": {
                                    backgroundColor: "#c84736",
                                    color: "#fff",
                                },
                                "&:hover": {
                                    backgroundColor: "#b03a2e",
                                    color: "#fff",
                                }
                            },

                            "& .MuiPickersDay-today": {
                                border: "2px solid #c84736",
                                color: "#c84736",
                            },

                            // "& .MuiDayCalendar-weekContainer": {
                            //     gap: "8px" // Space between week rows
                            // },

                            // Align day labels (Sun, Mon, Tue) correctly
                            // "& .MuiDayCalendar-weekDayLabel": {
                            //     width: "100%",
                            //     textAlign: "left", // Center the day labels
                            //     fontWeight: "bold",
                            //     color: "#333",
                            //     fontSize: "1rem"
                            // }
                        }}
                    />



                </LocalizationProvider>
            )}

            {step === 2 && (
                <>
                    <Typography variant="h6" className="text-left text-base" mb={2}>Select a Time</Typography>
                    <Grid container spacing={2}>
                        {availableTimes.map((time) => (
                            <Grid item xs={4} md={3} key={time}>
                                <Button
                                    fullWidth
                                    onClick={() => handleTimeSelect(time)}
                                    sx={{
                                        border: '2px solid #c84736', // Default border
                                        color: '#c84736',            // Text color
                                        "&:hover": {
                                            backgroundColor: '#c84736', // Primary background on hover
                                            color: '#fff'               // Text color on hover
                                        }
                                    }}
                                >
                                    {time}
                                </Button>

                            </Grid>
                        ))}
                    </Grid>
                </>
            )}

            {step === 3 && (
                <>
                    {/* <Box display="flex" alignItems="center" gap={1} mb={3} px={'50px'}>
                        <EventIcon sx={{ color: '#c84736' }} />
                        <Typography variant="body1" color="#c84736">
                            Confirm Meeting for {selectedDate!.format("DD-MM-YYYY")} at {selectedTime}
                        </Typography>
                    </Box> */}
                    {/* <Box className="text-left bg-[#111827] rounded-lg p-9">
                        <ContactEmail
                            btnText="Schedule a Meeting"
                            selectedDate={selectedDate!.format("YYYY-MM-DD")}
                            selectedTime={selectedTime!}
                        />
                    </Box> */}
                    <Box className="lightForm text-left bg-white shadow-md rounded-lg p-9 border border-gray-300">
                        <ContactEmail
                            btnText="Schedule a Meeting"
                            selectedDate={selectedDate!.format("YYYY-MM-DD")}
                            selectedTime={selectedTime!}
                            setSelectedDate={setSelectedDate}
                            setSelectedTime={setSelectedTime}
                            setStep={setStep}
                        />
                    </Box>
                </>
            )}
        </Box>
    );
};

export default ScheduleMeeting;
