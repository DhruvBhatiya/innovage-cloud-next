"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { servicesData } from "@/app/api/data";

const Services = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: false,
        autoplaySpeed: 3000,
        speed: 800,
        centerMode: true,
        centerPadding: "100px",
        cssEase: "ease-in-out",
        appendArrows: (arrows: any) => (
            <div className="custom-arrows-container">{arrows}</div>
        ),
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerPadding: "60px",
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: "40px",
                }
            }
        ]
    };

    return (
        <section
            id="courses"
            style={{
                backgroundImage: `url('/img/bg/bg-portfolio.svg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className='container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4'>
                <div className="sm:flex justify-between items-center mb-10">
                    <div className="text-white w-1/2">
                        <h2 className=" text-white text-4xl lg:text-5xl font-semibold mb-4">Our Services</h2>
                        <p>We provide offshore technical support to ensure smooth business operations with minimal downtime.</p>
                    </div>
                    <Link href={'/services'} className=" text-white text-lg font-medium hover:tracking-widest duration-500">
                        Explore Services&nbsp;&gt;&nbsp;
                    </Link>
                </div>

                <Slider {...settings}>
                    {servicesData.map((items, i) => (
                        <div key={i} className="!h-full">
                            <div
                                className="bg-white m-3 px-3 pt-3 pb-3 rounded-sm !h-full shadow-md group transform transition-transform duration-300 ease-in-out hover:scale-110"
                                style={{
                                    boxShadow:
                                        "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
                                }}
                            >
                                {/* Image Wrapper */}
                                <div className="relative h-[300px] flex align-middle bg-[#c847360f] overflow-hidden rounded-lg">
                                    <Image
                                        src={items.imgSrc}
                                        alt="service-image"
                                        width={400}
                                        height={300}
                                        className="m-auto clipPath"
                                        style={{ borderRadius: "20px 0px 100px" }}
                                    />
                                </div>

                                {/* Content */}
                                <div className="px-3 pt-6 min-h-[90px] text-center">
                                    <Link
                                        href={items.href}
                                        className="text-lg font-bold text-black max-w-75% inline-block hover:text-[#c84736] "
                                    >
                                        {items.heading}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            {/* Arrow Styling for Better Visibility Below Slider */}
            <style jsx>{`
                .custom-arrows-container {
                    display: flex;
                    justify-content: center;
                    margin-top: 30px; /* Added space below slider */
                }

                .slick-prev, .slick-next {
                    position: static !important;
                    margin: 0 15px;
                    background: #c84736;
                    border-radius: 50%;
                    color: #fff;
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: transform 0.3s ease;
                }

                .slick-prev:hover, .slick-next:hover {
                    background: #9e3028;
                    transform: scale(1.1);
                }

                .slick-prev::before, .slick-next::before {
                    font-size: 20px;
                    color: #fff;
                }
            `}</style>
        </section>
    );
}

export default Services;
