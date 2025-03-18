import CoreValues from '@/components/About/CoreValues';
import VisionMission from '@/components/About/VisionMission';
import { WhyChoose } from '@/components/About/WhyChoose';
import Breadcrumb from '@/components/Common/Breadcrumb';
import StatsSection from '@/components/Common/StatsSection';
import Image from 'next/image';

export default function About() {


    const timelineData = [
        { year: '2010', title: 'Business founded', description: 'Lorem ipsum dolor elit consectetur eiusmod tempor incididunt labor.' },
        { year: '2012', title: 'Build new office', description: 'Lorem ipsum dolor elit consectetur eiusmod tempor incididunt labor.' },
        { year: '2014', title: 'Relocates headquarter', description: 'Lorem ipsum dolor elit consectetur eiusmod tempor incididunt labor.' },
        { year: '2018', title: 'Revenue of 50 millions', description: 'Lorem ipsum dolor elit consectetur eiusmod tempor incididunt labor.' },
    ];



    return (
        <div>

            <Breadcrumb pageName="About Us" />

            {/* Section 1 */}
            <section className="11bg-center 11bg-cover pb-0" style={{ backgroundImage: "url('/img/bg/vertical-line-bg.svg')" }}>
                <div className="container mx-auto">
                    <div className="flex flex-wrap 11items-center justify-center">
                        <div className="w-full lg:w-1/2 text-center md:mb-12">
                            <Image src="/img/about/about.jpg" alt="" width={600} height={400} />
                        </div>
                        <div className="w-full lg:w-1/2 text-center lg:text-left ">
                            <div className='mb-8'>
                                <span className="px-4 py-2 mb-4 inline-block bg-gradient-to-r from-red-400 to-white rounded text-sm font-bold text-gray-800">Innovation | Trust | Quality </span>
                                <h2 className="text-2xl font-normal mb-3 text-primary ">About Innovage Cloud</h2>
                                <p className="w-4/5 mx-auto lg:mx-0 text-justify">At Innovage Cloud, these three words are more than just a tagline — they are the foundation of everything we do. We are not just an IT services provider; we are a strategic technology partner dedicated to helping businesses transform, grow, and thrive in a digital-first world.</p>
                            </div>

                            <div className="">
                                <h2 className="text-2xl font-normal mb-3 text-primary ">Who We Are</h2>
                                <p className="w-4/5 mx-auto lg:mx-0 text-justify">Founded with a vision to bridge the gap between technology and business success, Innovage Cloud combines cutting-edge solutions with a client-first approach. Specializing in Cloud technologies, AI-driven solutions, custom development, and seamless integrations, we empower businesses to modernize operations, harness innovation, and achieve sustainable growth.</p>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Section 2 - Counter */}
            <StatsSection />

        
            <CoreValues />


            <section
                className="pt-[70px] pb-[50px] bg-center-top"
                style={{ backgroundImage: "url('/img/bg/vertical-line-bg.svg')" }}
            >
                <div className="container mx-auto">
                    <div className="flex flex-wrap justify-center">
                        <div className="lg:w-11/12">
                            <div className="flex flex-wrap justify-around gap-y-[40px]">
                                {timelineData.map((item, index) => (
                                    <div

                                        key={index}
                                        className="lg:w-[45%] md:w-1/2 sm:mb-[30px] relative"
                                        data-anime='{"el": "childs", "translateY": [30, 0], "translateX": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad"}'
                                    >
                                        {/* <Image src={'/img/bg/cloud-1.webp'} alt={''} width={600} height={0} className='' /> */}
                                        <div className="11p-6 11bg-white 11shadow-md 11rounded-lg flex items-start 11absolute 11bottom-[90px]"
                                        >


                                            <div className="mr-4">
                                                <h3 className="text-[45px] leading-[50px] font-medium text-dark-gray m-0">{item.year}</h3>
                                            </div>
                                            <div>
                                                <span className="block text-xl font-semibold text-dark-gray mb-2">{item.title}</span>
                                                <p className="text-gray-500 leading-7 w-11/12 sm:w-full">{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vission Mission  */}

            <VisionMission />
            <WhyChoose />




        </div>
    );
}

