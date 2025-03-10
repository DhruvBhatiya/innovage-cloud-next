"use client";

import Breadcrumb from "@/components/Common/Breadcrumb";
import { Container, Grid, Typography, Box } from "@mui/material";
import Image from "next/image";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { expertisePage } from "../api/data";

// Expertise sections with titles, descriptions, images, and IDs


const Career = () => {
    const path = usePathname();

    useEffect(() => {
        // Smooth scroll to section when submenu link is clicked
        if (path.includes("#")) {
            const id = path.split("#")[1];
            const section = document.getElementById(id);
            if (section) {
                setTimeout(() => {
                    section.scrollIntoView({ behavior: "smooth", block: "start" });
                }, 200);
            }
        }
    }, [path]);

    return (
        <div>
            <Breadcrumb pageName="Career" />

           
        </div>
    );
};

export default Career;
