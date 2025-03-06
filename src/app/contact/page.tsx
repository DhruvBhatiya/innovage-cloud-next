
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import Breadcrumb from "@/components/Common/Breadcrumb";

const Contact = () => {
    return (
        <div className="" >

            <Breadcrumb pageName="Contact Us" />

            <>
                {/* Contact Info Section */}
                <section className="relative bg-gradient-to-b from-gray-100 to-white pt-6 md:pt-10">
                    {/* <div className="absolute inset-0 bg-left-top w-full h-full z-[-1]">
                        <Image
                            src="/images/demo-seo-agency-vertical-line-bg.svg"
                            alt="Background"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div> */}

                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-3 gap-6">
                            {/* Address Box */}
                            <div className="text-center p-6 bg-white shadow-md rounded-lg">
                                <i className="bi bi-geo-alt text-4xl text-gray-700 mb-4"></i>
                                <h3 className="font-bold text-xl text-gray-800">Crafto Office</h3>
                                <p className="text-gray-600">401 Broadway, 24th floor<br /> New York, NY 10013</p>
                            </div>

                            {/* Phone Box */}
                            <div className="text-center p-6 bg-white shadow-md rounded-lg">
                                <i className="bi bi-telephone-outbound text-4xl text-gray-700 mb-4"></i>
                                <h3 className="font-bold text-xl text-gray-800">Call Us Directly</h3>
                                <p className="text-gray-600">
                                    Phone: <a href="tel:1800222000" className="text-blue-600">1-800-222-000</a><br />
                                    Fax: 1-800-222-002
                                </p>
                            </div>

                            {/* Email Box */}
                            <div className="text-center p-6 bg-white shadow-md rounded-lg">
                                <i className="bi bi-envelope-open text-4xl text-gray-700 mb-4"></i>
                                <h3 className="font-bold text-xl text-gray-800">Send a Message</h3>
                                <p className="text-gray-600">
                                    <a href="mailto:contact@example.com" className="text-blue-600">contact@example.com</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Form Section */}
                <section className="relative overflow-hidden pb-0">
                    <div className="absolute bottom-0 left-0 w-full h-[250px] bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/demo-seo-agency-analysis-bg.png')" }}></div>

                    <div className="container mx-auto relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 shadow-lg rounded-lg overflow-hidden">

                            {/* Map */}
                            <div className="h-[400px] md:h-[600px] bg-gray-200">
                                {/* Embed your Google Map here */}
                                <iframe
                                    className="w-full h-full"
                                    src="https://www.google.com/maps/embed?..."
                                    allowFullScreen
                                    loading="lazy"
                                ></iframe>
                            </div>

                            {/* Contact Form */}
                            <div className="bg-gray-900 text-white p-10">
                                <h1 className="text-4xl font-semibold mb-6">Say <span className="text-blue-400">Hello!</span></h1>

                                <form action="email-templates/contact-form.php" method="post">
                                    <div className="mb-4">
                                        <label className="block text-gray-300 mb-2">Your Name</label>
                                        <input type="text" name="name" placeholder="Enter your name" className="w-full px-4 py-2 border border-gray-500 rounded-md bg-gray-800 text-white" required />
                                    </div>

                                    <div className="mb-4">
                                        <label className="block text-gray-300 mb-2">Your Email</label>
                                        <input type="email" name="email" placeholder="Enter your email" className="w-full px-4 py-2 border border-gray-500 rounded-md bg-gray-800 text-white" required />
                                    </div>

                                    <div className="mb-4">
                                        <label className="block text-gray-300 mb-2">Your Message</label>
                                        <textarea name="comment" placeholder="Enter your message" rows={4} className="w-full px-4 py-2 border border-gray-500 rounded-md bg-gray-800 text-white"></textarea>
                                    </div>

                                    <button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-blue-500 text-white py-2 rounded-md hover:opacity-90">
                                        Send Message
                                    </button>
                                </form>

                                <p className="text-gray-400 text-sm mt-4">
                                    I accept the terms & conditions and understand that my data will be held securely in accordance with the privacy policy.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        </div>
    )
}

export default Contact;


