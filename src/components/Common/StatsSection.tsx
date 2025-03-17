"use client";
import CountUp from 'react-countup';

const StatsSection = () => {
    return (
        <section
            className="bg-center bg-cover pt-0 pb-[70px]"
            style={{ backgroundImage: "url('/img/bg/vertical-line-bg.svg')" }}
        >
            <div className="container mx-auto bg-white rounded-lg shadow-lg p-4">
                <div className="grid grid-cols-2 md:grid-cols-4 text-center gap-4">
                    {[
                        { value: 150, label: "Custom Extension" },
                        { value: 200, label: "Integration" },
                        { value: 5, label: "Team Hours" },
                        { value: 15, label: "AI Solutions" },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className={`relative ${index !== 3 ? "border-r border-gray-300" : ""} pr-4
                                transform transition-all duration-300 ease-in-out 
                                hover:-translate-y-2 hover:shadow-lg
                                rounded-md p-4 
                            `}
                        >
                            <h2 className="text-6xl mb-2 font-medium text-primary">
                                <CountUp 
                                    end={item.value} 
                                    duration={5} 
                                    separator="," 
                                />
                                {index === 2 ? "k+" : "+"}
                            </h2>
                            <p className='text-lg'>{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
