"use client";

import { useState } from "react";
import { Box, Button, Typography, Grid } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import MeetingForm from "./MeetingForm";
import dayjs, { Dayjs } from "dayjs";

const availableTimes = [
    "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"
];

const ScheduleMeeting = () => {
    const [step, setStep] = useState(1); // Step 1: Calendar | Step 2: Time | Step 3: Form
    const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);

    // Handle Date Selection
    const handleDateSelect = (date: Dayjs | null) => {
        if (date) {
            setSelectedDate(date);
            setStep(2); // Move to Step 2
        }
    };

    // Handle Time Selection
    const handleTimeSelect = (time: string) => {
        setSelectedTime(time);
        setStep(3); // Move to Step 3
    };

    return (
        <Box sx={{ p: 4, maxWidth: 500, mx: "auto", textAlign: "center" }}>
            <Typography variant="h4" fontWeight="bold" mb={3}>
                Schedule a 30-Minute Meeting
            </Typography>

            {/* Step 1: Calendar View */}
            {step === 1 && (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar
                        value={selectedDate}
                        onChange={handleDateSelect}
                        disablePast
                        sx={{
                            "& .MuiPickersDay-root": { // Custom styles for selected date
                                backgroundColor: "#c84736",
                                color: "#fff",
                                "&.Mui-selected": {
                                    backgroundColor: "#c84736",
                                    color: "#fff",
                                },
                            },
                        }}
                    />
                </LocalizationProvider>
            )}

            {/* Step 2: Time Selection */}
            {step === 2 && (
                <>
                    <Typography variant="h6" mb={2}>
                        Available Times
                    </Typography>
                    <Grid container spacing={2}>
                        {availableTimes.map((time) => (
                            <Grid item xs={6} key={time}>
                                <Button
                                    fullWidth
                                    variant="outlined"
                                    color="primary"
                                    onClick={() => handleTimeSelect(time)}
                                >
                                    {time}
                                </Button>
                            </Grid>
                        ))}
                    </Grid>
                </>
            )}

            {/* Step 3: Contact Form */}
            {step === 3 && (
                <MeetingForm
                    selectedDate={selectedDate!.format("YYYY-MM-DD")}
                    selectedTime={selectedTime!}
                />
            )}
        </Box>
    );
};

export default ScheduleMeeting;
