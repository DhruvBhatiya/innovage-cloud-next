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
        autoplay: true,
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
        <section id="courses">
            <div className='container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4'>
                <div className="sm:flex justify-between items-center mb-10">
                    <h2 className="text-midnight_text text-4xl lg:text-5xl font-semibold mb-5 sm:mb-0">Our Services</h2>
                    <Link href={'/services'} className="text-primary text-lg font-medium hover:tracking-widest duration-500">Explore Services&nbsp;&gt;&nbsp;</Link>
                </div>
                <Slider {...settings}>
                    {servicesData.map((items, i) => (
                        <div key={i} className="!h-full">
                            <div className='bg-white m-3 mb-12 px-3 pt-3 pb-3 shadow-course-shadow rounded-2xl !h-full' >
                                <div className="relative rounded-3xl">
                                    <Image src={items.imgSrc} alt="course-image" width={389} height={262} className="m-auto clipPath " style={{ borderRadius: "20px 0px 100px" }} />
                                    {/* <div className="absolute right-5 -bottom-2 bg-secondary rounded-full p-6">
                                        <h3 className="text-white uppercase text-center text-sm font-medium">best <br /> seller</h3>
                                    </div> */}
                                </div>

                                <div className="11px-3 pt-6 min-h-[90px]">
                                    <Link href={items.href} className='text-lg font-bold text-black max-w-75% inline-block '>{items.heading}</Link>
                                    {/* <h3 className='text-base font-normal pt-6 text-black/75'>{items.name}</h3> */}

                                    {/* <div className="flex justify-between items-center py-6 border-b">
                                        <div className="flex items-center gap-4">
                                            <h3 className="text-red-700 text-2xl font-medium">{items.rating}</h3>
                                            <div className="flex">
                                                {renderStars(items.rating)}
                                            </div>
                                        </div>
                                        <h3 className="text-3xl font-medium">${items.price}</h3>
                                    </div> 
                                    <div className="flex justify-between pt-6">
                                        <div className="flex gap-4">
                                            <Icon
                                                icon="solar:notebook-minimalistic-outline"
                                                className="text-primary text-xl inline-block me-2"
                                            />
                                            <h3 className="text-base font-medium text-black opacity-75">{items.classes} classes</h3>
                                        </div>
                                        <div className="flex gap-4">
                                            <Icon
                                                icon="solar:users-group-rounded-linear"
                                                className="text-primary text-xl inline-block me-2"
                                            />
                                            <h3 className="text-base font-medium text-black opacity-75">{items.students} students</h3>
                                        </div>
                                    </div>*/}
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
