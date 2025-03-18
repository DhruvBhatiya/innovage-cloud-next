// import { Snackbar, Alert } from "@mui/joy";
// import { useState } from "react";

// interface SnackbarProps {
//     message: string;
//     severity?: "success" | "error" | "warning" | "info";
//     duration?: number;
// }



// const mapSeverityToColor = (severity: string) => {
//     switch (severity) {
//         case "error":
//             return "danger";   // Correct mapping for Joy UI
//         case "info":
//             return "primary";  // Or 'neutral' for a calmer tone
//         case "success":
//             return "success";
//         case "warning":
//             return "warning";
//         default:
//             return "neutral";  // Fallback for unexpected values
//     }
// };



// const CustomSnackbar: React.FC<SnackbarProps> = ({
//     message,
//     severity = "success",
//     duration = 3000,
// }) => {
//     const [open, setOpen] = useState<boolean>(true);

//     const handleClose = () => setOpen(false);

//     return (
//         <Snackbar
//             open={open}
//             autoHideDuration={duration}
//             onClose={handleClose}
//         >
//             <Alert
//                 variant="solid"
//                 color={mapSeverityToColor(severity)} // ✅ Corrected color mapping
//                 onClose={handleClose}
//                 sx={{ width: "100%" }}
//             >
//                 {message}
//             </Alert>
//         </Snackbar>
//     );
// };

// export default CustomSnackbar;
