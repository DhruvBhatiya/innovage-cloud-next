"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const stats = [
    { title: "Value Realized for Customers", percent: 100 },
    { title: "Branding", percent: 100 },
    { title: "Web Design", percent: 100 },
    { title: "WordPress", percent: 100 },
];

const Counter = () => {
    const [progress, setProgress] = useState(stats.map(() => 0));

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) =>
                prev.map((value, index) =>
                    value < stats[index].percent ? value + 1 : stats[index].percent
                )
            );
        }, 20);

        return () => clearInterval(interval);
    }, []);

    return (

        <section className="bg-deepSlate" id="mentor" >
            <div className='container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 relative'>
                {/* <h2 className="text-midnight_text text-5xl font-semibold">Counter
                </h2> */}
                <div className="flex flex-wrap justify-center text-center gap-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.title}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="w-60 flex flex-col items-center"
                        >
                            <div className="w-48 h-48 relative">
                                {/* Gradient Definition */}
                                <svg className="absolute inset-0">
                                    <defs>
                                        <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="rgb(200, 71, 54)" />
                                            <stop offset="100%" stopColor="rgb(255, 165, 0)" />
                                        </linearGradient>
                                    </defs>
                                </svg>

                                <CircularProgressbar
                                    value={progress[index]}
                                    text={`${progress[index]}%`}
                                    styles={{
                                        path: {
                                            stroke: `url(#gradient-${index})`, // Apply gradient
                                            strokeLinecap: "round",
                                            transition: "stroke-dashoffset 0.5s ease-in-out",
                                        },
                                        trail: { stroke: "#ddd" },
                                        text: { fill: "#333", fontSize: "16px" },
                                    }}
                                />
                            </div>
                            <h4 className="mt-3 text-lg font-semibold text-gray-800">{stat.title}</h4>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Counter;
