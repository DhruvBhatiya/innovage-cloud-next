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
                left: 0,
                width: isFixed ? "fit-content" : '100%',
                backgroundColor: isFixed
                    ? fixedTitle === "Cutting-Edge Advanced Solutions"
                        ? '#d0fa74'
                        : '#fef282'
                    : '#fff',
                zIndex: 20,
                p: 1,
                boxShadow: isFixed ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none",
            }}
        >
            <Typography
                variant={isFixed ? 'h6' : 'h3'}
                align={isFixed ? "left" : "center"}
                sx={{
                    color: "#000",
                    fontWeight: "bold",
                    fontSize: isFixed
                        ? '14px'
                        : { xs: '24px', sm: '30px', md: '30px', lg: '40px' }, // Responsive font size
                }}
            >
                {isFixed ? fixedTitle : title}
            </Typography>
        </Box>
    );
};

export default StickyTitle;
