"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "../Header/Logo";
import { Icon } from "@iconify/react/dist/iconify.js";
import { headerData } from "../Header/Navigation/menuData";
import { motion } from "framer-motion";
import { Box } from "@mui/material";

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggeredItems = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.2 } }
};

const Footer = () => {
  return (
    <motion.footer
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-deepSlate pt-[70px] pb-10"
      style={{ backgroundImage: "url('/img/bg/vertical-line-bg.svg')" }}
    >
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <div className="grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">

          {/* Left Section */}
          <div className='col-span-4 md:col-span-12 lg:col-span-5'>
            <Logo />
            <div className='my-5'>
              <p>
              With Innovation, Quality, and Trust at our core, we deliver smart solutions for enterprise automation, seamless integrations, and AI-driven insights—empowering businesses to stay ahead.
              </p>
            </div>

            <motion.div
              variants={staggeredItems}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className='flex items-center gap-4'
            >
              {[
                { href: "https://www.linkedin.com/company/innovage-cloud/posts/?feedView=all", icon: "tabler:brand-linkedin" },
                // { href: "https://twitter.com", icon: "tabler:brand-x" },
                { href: "https://www.instagram.com/innovage_cloud?igsh=MWE3dzlqMW4xejRqOA%3D%3D&utm_source=qr", icon: "tabler:brand-instagram" }
              ].map((item, index) => (
                <motion.div key={index} variants={staggeredItems}>
                  <Link
                    href={item.href}
                    target="_blank"
                    className="hover:text-primary text-black text-3xl"
                  >
                    <Icon icon={item.icon} />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Links Section */}
          {/* <div className="col-span-2">
            <h3 className="mb-4 text-2xl font-medium">Links</h3>
            <ul>
              {headerData.map((item, index) => (
                <motion.li
                  key={index}
                  variants={staggeredItems}
                  whileHover={{ scale: 1.05 }}
                  className="mb-2 text-black/50 hover:text-primary w-fit"
                >
                  <Link href={item.href}>
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div> */}

          {/* Services Section */}
          <div className="col-span-3">
            <h3 className="mb-4 text-2xl font-medium">Services</h3>
            <ul>
              {headerData.find(item => item.label === "Services")?.submenu?.map((serviceItem, index) => (
                <div key={index} className=" mb-2 text-black/50 hover:text-primary w-fit">
                 
                    <Link className="" href={serviceItem.href}>{serviceItem.label}</Link>
                  
                  {/* {serviceItem.moresubmenu && (
                    <ul className="ml-4">
                      {serviceItem.moresubmenu.map((subItem, subIndex) => (
                        <motion.li
                          key={subIndex}
                          variants={staggeredItems}
                          whileHover={{ scale: 1.05 }}
                          className="mb-2 text-black/50 hover:text-primary w-fit"
                        >
                          <Link href={subItem.href}>{subItem.label}</Link>
                        </motion.li>
                      ))}
                    </ul>
                  )} */}
                </div>
              ))}
            </ul>
          </div>


          {/* Contact Section */}
          <div className='col-span-4 md:col-span-4 lg:col-span-4'>
            {[
              {
                icon: "tabler:brand-google-maps",
                text: "A-406, Titanium Square, Near Thaltej Metro Station, Ahmedabad- 380054"
              },
              { icon: "tabler:phone", text: "+91 9023635219 / +91 9512386103" },
              { icon: "tabler:mail", text: "info@innovagecloud.com" }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={staggeredItems}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-center gap-2 mb-6"
              >
                <Box className="w-16">
                  <Icon
                    icon={item.icon}
                    className="text-primary text-3xl inline-block me-2 w-[60px]"
                  />
                </Box>
                <h5 className="text-lg text-black/60">{item.text}</h5>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className='mt-10 lg:flex items-center justify-between'>
          <h4 className='text-black/50 text-sm text-center lg:text-start font-normal'>
            @2025. All Rights Reserved by Innovage Cloud Pvt. Ltd.
          </h4>
          {/* <div className="flex gap-5 mt-5 lg:mt-0 justify-center lg:justify-start">
            <Link href="/" target="_blank" className='text-black/50 text-sm font-normal hover:text-primary'>
              Privacy policy
            </Link>
            <Link href="/" target="_blank" className='text-black/50 text-sm font-normal hover:text-primary'>
              Terms & conditions
            </Link>
          </div> */}
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer;
