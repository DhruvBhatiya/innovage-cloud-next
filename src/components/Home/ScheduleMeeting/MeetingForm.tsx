import { Box, Button, TextField, Typography } from "@mui/material";
import EventIcon from '@mui/icons-material/Event'; // Import the schedule icon


interface MeetingFormProps {
    selectedDate: string;
    selectedTime: string;
}

const MeetingForm: React.FC<MeetingFormProps> = ({ selectedDate, selectedTime }) => {
    return (
        <>
            <Box sx={{ mt: '20px', textAlign: "left", }}>
                <Box display="flex" alignItems="center" gap={1} mb={3}>
                    <EventIcon sx={{ color: '#c84736' }} />
                    <Typography variant="body1">Confirm Meeting for {selectedDate} at {selectedTime}</Typography>
                </Box>


                <TextField
                    label="Your Name"
                    fullWidth
                    sx={{ mb: 2 }}
                />
                <TextField
                    label="Your Email"
                    type="email"
                    fullWidth
                    sx={{ mb: 2 }}
                />
                <TextField
                    label="Message"
                    multiline
                    rows={3}
                    fullWidth
                    sx={{ mb: 2 }}
                />

                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Schedule Meeting
                </Button>
            </Box>

        </>
    );
};

export default MeetingForm;
