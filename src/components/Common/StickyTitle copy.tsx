"use client";

import { useState, useEffect, useRef } from "react";
import { Typography, Box } from "@mui/material";

const StickyTitle = ({ title, fixedTitle }: { title: string; fixedTitle: string }) => {
    const [isFixed, setIsFixed] = useState(false);
    const headerRef = useRef<HTMLDivElement>(null);
    const initialTopOffset = useRef<number>(0); // Tracks initial position

    useEffect(() => {
        const header = headerRef.current;
        if (header) {
            initialTopOffset.current = header.offsetTop; // Save initial position
        }

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsFixed(scrollPosition >= initialTopOffset.current - 70); // Fixed after reaching header
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <Box
            ref={headerRef}
            sx={{
                position: isFixed ? "fixed" : "relative",
                top: isFixed ? "70px" : "auto",
                width: "100%",
                backgroundColor: "#fff",
                zIndex: 20,
                py: 2,
                boxShadow: isFixed ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none",
            }}
        >
            <Typography
                variant="h3"
                align="center"
                sx={{
                    color: "#c84736",
                    fontWeight: "bold",
                }}
            >
                {isFixed ? fixedTitle : title}
            </Typography>
        </Box>
    );
};

export default StickyTitle;
