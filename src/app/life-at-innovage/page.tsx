"use client";
import React from 'react';
import { Box, Grid, Typography, IconButton } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ImageData = [
    { image: '/img/career/innovageLife/2.jpg' },
    { image: '/img/career/innovageLife/3.jpg' },
    { image: '/img/career/innovageLife/4.jpg' },
    { image: '/img/career/innovageLife/5.jpg' },
    { image: '/img/career/innovageLife/6.jpg' },
    { image: '/img/career/innovageLife/7.jpg' },
    { image: '/img/career/innovageLife/8.jpg' },
    { image: '/img/career/innovageLife/9.jpg' },
    { image: '/img/career/innovageLife/10.jpg' },
    { image: '/img/career/innovageLife/11.jpg' },
];

const VerticalSlider = () => {
    return (
        <Grid container sx={{ height: '100vh' }}>
            {/* Content Section */}
            <Grid
                item
                xs={12}
                md={4}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#f5f5f5',
                    p: 4,
                }}
            >
                <Box>
                    <Typography variant="h3" color="#c84736" fontWeight="bold" gutterBottom>
                        Life at Innovage Cloud
                    </Typography>
                    <Typography variant="body1" color="#555">
                        Experience a culture of innovation, collaboration, and growth at Innovage Cloud.
                        Our journey thrives on creativity, teamwork, and embracing future technologies.
                    </Typography>
                </Box>
            </Grid>

            {/* Vertical Slider Section */}
            <Grid item xs={12} md={8}>
                <Box sx={{ height: '100vh', width: '100%', position: 'relative' }}>
                    <Swiper
                        direction="vertical"
                        slidesPerView={1}
                        spaceBetween={10}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        mousewheel
                        autoplay={{
                            delay: 3000, // Auto scroll every 3 seconds
                            disableOnInteraction: false, // Continue autoplay after user interaction
                            pauseOnMouseEnter: true, // Pause autoplay on hover
                        }}
                        modules={[Navigation, Mousewheel, Autoplay]}
                        style={{ height: '100%', width: '100%' }}
                    >
                        {ImageData.map((item, index) => (
                            <SwiperSlide key={index}>
                                <Box
                                    sx={{
                                        position: 'relative',
                                        height: '100vh',
                                        width: '100%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <Image
                                        src={item.image}
                                        alt={`Image ${index + 1}`}
                                        layout="fill"
                                        objectFit="contain" // Ensures no cropping
                                        
                                    />
                                </Box>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Navigation Buttons */}
                    <IconButton
                        className="swiper-button-prev"
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: 20,
                            transform: 'translateY(-50%)',
                            backgroundColor: '#c84736',
                            color: '#fff',
                            '&:hover': { backgroundColor: '#000' },
                            width: 40,
                            height: 40,
                            borderRadius: '50%',
                            
                        }}
                    >
                        <ArrowBackIosNewIcon fontSize="small" />
                    </IconButton>

                    <IconButton
                        className="swiper-button-next"
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            right: 20,
                            transform: 'translateY(-50%)',
                            backgroundColor: '#000',
                            color: '#fff',
                            '&:hover': { backgroundColor: '#c84736' },
                            width: 40,
                            height: 40,
                            borderRadius: '50%',
                        }}
                    >
                        <ArrowForwardIosIcon fontSize="small" />
                    </IconButton>
                </Box>
            </Grid>
        </Grid>
    );
};

export default VerticalSlider;
