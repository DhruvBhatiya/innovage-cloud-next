import { Box, Button, TextField, Typography } from "@mui/material";

interface MeetingFormProps {
    selectedDate: string;
    selectedTime: string;
}

const MeetingForm: React.FC<MeetingFormProps> = ({ selectedDate, selectedTime }) => {
    return (
        <Box sx={{ mt: 4, textAlign: "left" }}>
            <Typography variant="h6" mb={2}>
                Confirm Meeting for {selectedDate} at {selectedTime}
            </Typography>

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
    );
};

export default MeetingForm;
