"use client";

import { motion } from "framer-motion";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import { Box, Container, Grid, Typography } from "@mui/material";
import Breadcrumb from "@/components/Common/Breadcrumb";
import ContactEmail from "@/components/ContactEmail";
import ContactForm from "@/components/Home/ContactForm";

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Contact = () => {
    return (
        <div>
            <Breadcrumb pageName="Contact Us" />

            <section className="bg-white pb-0">
                <ContactForm hideTitle={true} />
            </section>
            {/* <motion.section
                className="relative overflow-hidden pb-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
            >
                <div
                    className="absolute bottom-0 left-0 w-full h-[250px] bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('/')" }}
                ></div>

                <div className="container mx-auto relative z-10">
                    <motion.div
                        className="grid grid-cols-1 lg:grid-cols-2 shadow-lg rounded-lg overflow-hidden"
                        variants={fadeInUp}
                    >
                        <div className="h-[400px] md:h-[600px] bg-gray-200">
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

                        <div className="bg-gray-900 text-white p-10">
                            <h1 className="text-4xl font-semibold mb-6">
                                Say <span className="text-[#c84736]">Hello!</span>
                            </h1>

                            <ContactEmail btnText="Contact Page" />
                        </div>
                    </motion.div>
                </div>
            </motion.section> */}

            <section className="relative " style={{ backgroundImage: "url('/img/bg/cloud-bottom-white-bg.webp')", backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom' }}>
                <Container>
                    <Grid container spacing={4} justifyContent="center">
                        {[{
                            Icon: LocationOnIcon,
                            title: "Office",
                            content: "A-406, Titanium Square, Near Thaltej Metro Station, Thaltej, Ahmedabad- 380054"
                        },
                        {
                            Icon: PhoneIcon,
                            title: "Call Us Directly",
                            content:
                                `<a href="tel:+919023635219">+91 9023635219</a><br/>
                                 <a href="tel:+919512386103">+91 9512386103</a>`
                        },
                        {
                            Icon: EmailIcon,
                            title: "Send a Message",
                            content: `<a href="mailto:info@innovagecloud.com">info@innovagecloud.com</a>`
                        }].map((item, index) => (
                            <Grid item xs={12} sm={4} key={index} className="">
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeInUp}
                                >
                                    <Box
                                        sx={{ textAlign: "center", p: 4, backgroundColor: "white", borderRadius: "8px", boxShadow: 3, minHeight: '234px' }}
                                    >
                                        <item.Icon sx={{ fontSize: 50, color: "#c84736", mb: 2 }} />
                                        <Typography variant="h6" fontWeight="bold">{item.title}</Typography>
                                        <Typography variant="body1" color="text.secondary" dangerouslySetInnerHTML={{ __html: item.content }} />
                                    </Box>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </section>
        </div>
    );
};

export default Contact;
