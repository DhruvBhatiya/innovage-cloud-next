"use client";

import { motion } from "framer-motion";
import React from "react";

const StatsSection = () => {
    return (
        <section
            className="relative bg-center-top overflow-hidden"
            style={{ backgroundImage: "url('/images/vertical-line-bg-medium-gray.svg')" }}
        >
            <div className="absolute top-0 left-0 w-full h-full z-[-1]">
                <img
                    src="/images/demo-seo-agency-particles-img.png"
                    alt="Particles"
                    className="w-[220px] h-[134px] opacity-50 animate-moveRight"
                />
            </div>

            <motion.div
                className="container bg-white rounded-md shadow-2xl p-4 md:p-[25px]"
                initial={{ scale: 1, x: 0 }}
                whileInView={{ scale: 1, x: -30 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
            >
                <div className="grid grid-cols-2 md:grid-cols-4 text-center gap-y-6">
                    {/** Item 1 */}
                    <div className="col">
                        <h2 className="font-bold text-4xl text-dark-gray m-0">8M+</h2>
                        <p>Trusted user</p>
                    </div>

                    {/** Item 2 */}
                    <div className="col">
                        <h2 className="font-bold text-4xl text-dark-gray m-0">64K</h2>
                        <p>Telephonic talk</p>
                    </div>

                    {/** Item 3 */}
                    <div className="col">
                        <h2 className="font-bold text-4xl text-dark-gray m-0">9M+</h2>
                        <p>Project finished</p>
                    </div>

                    {/** Item 4 */}
                    <div className="col">
                        <h2 className="font-bold text-4xl text-dark-gray m-0">225</h2>
                        <p>Award winning</p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default StatsSection;
