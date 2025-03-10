
"use client";

import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import { Box, Container, Grid, Typography } from "@mui/material";

import Breadcrumb from "@/components/Common/Breadcrumb";

const Contact = () => {
    return (
        <div className="" >

            <Breadcrumb pageName="Contact Us" />

            <>

                {/* Contact Form Section */}
                <section className="relative overflow-hidden pb-0">
                    <div className="absolute bottom-0 left-0 w-full h-[250px] bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/demo-seo-agency-analysis-bg.png')" }}></div>

                    <div className="container mx-auto relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 shadow-lg rounded-lg overflow-hidden">

                            {/* Map */}
                            <div className="h-[400px] md:h-[600px] bg-gray-200">
                                {/* Embed your Google Map here */}

                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.2581307491932!2d72.51579287386683!3d23.05099621526961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b701695c397%3A0x37f7eac0feed6e52!2sTitanium%20Square!5e0!3m2!1sen!2sin!4v1741589479917!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />

                            </div>

                            {/* Contact Form */}
                            <div className="bg-gray-900 text-white p-10">
                                <h1 className="text-4xl font-semibold mb-6">Say <span className="text-[#c84736]">Hello!</span></h1>

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

                                    <button type="submit" className="w-full bg-[#c84736] text-white py-2 rounded-md hover:opacity-90">
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

                {/* Contact Info Section */}
                <section className="relative ">
                    <Box sx={{ position: "relative", }}>
                        <Container>
                            <Grid container spacing={4} justifyContent="center">
                                {/* Address Box */}
                                <Grid item xs={12} sm={4}>
                                    <Box
                                        sx={{
                                            textAlign: "center",
                                            p: 4,
                                            backgroundColor: "white",
                                            borderRadius: "8px",
                                            boxShadow: 3,
                                        }}
                                    >
                                        <LocationOnIcon sx={{ fontSize: 50, color: "#c84736", mb: 2 }} />
                                        <Typography variant="h6" fontWeight="bold">
                                            Office
                                        </Typography>
                                        <Typography variant="body1" color="text.secondary">
                                            A-406, Titanium Square, <br />Near, Thaltej Metro Station, <br />Thaltej, Ahmedabad- 380054
                                        </Typography>
                                    </Box>
                                </Grid>

                                {/* Phone Box */}
                                <Grid item xs={12} sm={4}>
                                    <Box
                                        sx={{
                                            textAlign: "center",
                                            p: 4,
                                            backgroundColor: "white",
                                            borderRadius: "8px",
                                            boxShadow: 3,
                                        }}
                                    >
                                        <PhoneIcon sx={{ fontSize: 50, color: "#c84736", mb: 2 }} />
                                        <Typography variant="h6" fontWeight="bold">
                                            Call Us Directly
                                        </Typography>
                                        <Typography variant="body1" color="text.secondary">
                                            Phone:{" "}
                                            <a href="tel:+919023635219" style={{ color: "#007bff" }}>
                                                +91 9023635219</a>
                                            <br />
                                            <a href="tel:+919512386103" style={{ color: "#007bff" }}>
                                                +91 9512386103
                                            </a>

                                        </Typography>
                                    </Box>
                                </Grid>

                                {/* Email Box */}
                                <Grid item xs={12} sm={4}>
                                    <Box
                                        sx={{
                                            textAlign: "center",
                                            p: 4,
                                            backgroundColor: "white",
                                            borderRadius: "8px",
                                            boxShadow: 3,
                                        }}
                                    >
                                        <EmailIcon sx={{ fontSize: 50, color: "#c84736", mb: 2 }} />
                                        <Typography variant="h6" fontWeight="bold">
                                            Send a Message
                                        </Typography>
                                        <Typography variant="body1" color="text.secondary">
                                            <a href="mailto:info@yourdomain.com" style={{ color: "#007bff" }}>
                                            info@innovagecloud.com
                                            </a>
                                        </Typography>
                                        {/* <Typography variant="body1" color="text.secondary">
                                            <a href="mailto:hr@yourdomain.com" style={{ color: "#007bff" }}>
                                                hr@yourdomain.com
                                            </a>
                                        </Typography> */}
                                    </Box>
                                </Grid>
                            </Grid>
                        </Container>
                    </Box>
                </section>

            </>
        </div>
    )
}

export default Contact;


