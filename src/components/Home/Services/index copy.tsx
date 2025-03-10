"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import { servicesData } from "@/app/api/data";

const Services = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: true,
        autoplay: false,
        speed: 500,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }
        ]
    };

    const renderStars = (rating: number) => {
        const fullStars = Math.floor(rating);
        const halfStars = rating % 1 >= 0.5 ? 1 : 0;
        const emptyStars = 5 - fullStars - halfStars;

        return (
            <>
                {Array(fullStars).fill(<Icon icon="tabler:star-filled" className="text-yellow-500 text-xl inline-block" />)}
                {halfStars > 0 && <Icon icon="tabler:star-half-filled" className="text-yellow-500 text-xl inline-block" />}
                {Array(emptyStars).fill(<Icon icon="tabler:star-filled" className="text-gray-400 text-xl inline-block" />)}
            </>
        );
    };

    return (
        <section id="courses"
            style={{
                backgroundImage: `url('/img/bg/bg-portfolio.svg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className='container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4'>
                <div className="sm:flex justify-between items-center mb-10">
                    <div className="text-white w-1/2">
                        <h2 className="11text-midnight_text text-white text-4xl lg:text-5xl font-semibold mb-4 ">Our Services</h2>
                        <p>We provide offshore technical support to ensure smooth business operations with minimal downtime.</p>
                    </div>
                    <Link href={'/services'} className="11text-primary text-white text-lg font-medium hover:tracking-widest duration-500">Explore Services&nbsp;&gt;&nbsp;</Link>
                </div>
                <Slider {...settings}>
                    {servicesData.map((items, i) => (
                        <div key={i} className="!h-full">
                            <div
                                className="bg-white m-3 px-3 pt-3 pb-3 rounded-sm !h-full shadow-md group"
                                style={{
                                    boxShadow:
                                        "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
                                }}
                            >
                                {/* Image Wrapper */}
                                <div className="relative h-[235px] flex align-middle bg-[#c847360f] overflow-hidden rounded-lg">
                                    <Image
                                        src={items.imgSrc}
                                        alt="course-image"
                                        width={389}
                                        height={262}
                                        className="m-auto clipPath transition-transform duration-300 ease-in-out group-hover:scale-125"
                                        style={{ borderRadius: "20px 0px 100px" }}
                                    />
                                </div>

                                {/* Content */}
                                <div className="11px-3 pt-6 min-h-[90px]">
                                    <Link
                                        href={items.href}
                                        className="text-lg font-bold text-black max-w-75% inline-block hover:text-[#c84736] hover:underline"
                                    >
                                        {items.heading}
                                    </Link>
                                </div>
                            </div>
                        </div>

                    ))}
                </Slider>
            </div>
        </section>
    );
}

export default Services;
