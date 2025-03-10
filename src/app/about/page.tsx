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
            <section className="11bg-center 11bg-cover pb-0"  style={{ backgroundImage: "url('/img/bg/vertical-line-bg.svg')" }}>
                <div className="container mx-auto">
                    <div className="flex flex-wrap items-center justify-center">
                        <div className="w-full lg:w-1/2 text-center md:mb-12">
                            <Image src="/img/about/cloud-computing.png" alt="SEO Analysis" width={600} height={400} />
                        </div>
                        <div className="w-full lg:w-1/2 text-center lg:text-left">
                            <span className="px-4 py-2 mb-6 inline-block bg-gradient-to-r from-red-400 to-white rounded text-sm font-bold text-gray-800">Seo analysis rate</span>
                            <h2 className="text-5xl font-normal mb-8 text-gray-800 ">Get the targeted relevant traffic.</h2>
                            <p className="w-4/5 mx-auto lg:mx-0">Well-optimized sites get more and more traffic over time, and that means more leads and sales. We appreciate your trust greatly. Well-optimized sites get more and more traffic over time, and that means more leads and sales. We appreciate your trust greatly.</p>
                            {/* <div className="flex mt-4">
                                <Image src="/images/demo-seo-agency-about-04.png" alt="Icon 1" width={100} height={100} className="mr-4" />
                                <Image src="/images/demo-seo-agency-about-05.png" alt="Icon 2" width={100} height={100} />
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>

            {/* <StatsSection /> */}

            {/* Section 2 - Statistics */}
            <section className="11bg-center 11bg-cover pt-0 pb-[70px]"  style={{ backgroundImage: "url('/img/bg/vertical-line-bg.svg')" }}>
                <div className="container mx-auto bg-white rounded-lg shadow-lg p-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 text-center gap-4">
                        <div>
                            <h2 className="text-6xl mb-2 font-medium">8M+</h2>
                            <p className='text-lg text-gray-400'>Trusted user</p>
                        </div>
                        <div>
                            <h2 className="text-6xl mb-2 font-medium">64K</h2>
                            <p className='text-lg text-gray-400'>Telephonic talk</p>
                        </div>
                        <div>
                            <h2 className="text-6xl mb-2 font-medium">9M+</h2>
                            <p className='text-lg text-gray-400'>Project finished</p>
                        </div>
                        <div>
                            <h2 className="text-6xl mb-2 font-medium">225</h2>
                            <p className='text-lg text-gray-400'>Award winning</p>
                        </div>
                    </div>
                </div>
            </section>

           
            

            <section className="11bg-cover 11bg-center-top" style={{ backgroundImage: "url('/img/bg/about-bg-02.jpg')" }}>
                <div className="container mx-auto 11py-12">
                    <div className="flex flex-wrap justify-center items-center">
                        <div className="w-full lg:w-1/2 text-center ">
                            <Image src="/img/about/about-1.webp" alt="SEO Agency" width={500} height={300} />
                        </div>
                        <div className="w-full lg:w-1/2 text-center lg:text-left">
                            <span className="px-5 py-2 mb-4 text-xs uppercase text-dark-gray font-bold bg-white inline-block rounded">OPTIMIZE YOUR WEBSITE</span>
                            <h2 className="text-dark-gray text-5xl font-normal mb-8 text-gray-800 ">How do you get top ranks in SEO?</h2>
                            <p className="mb-4">We are committed to delivering unique digital media solutions from web development to eCommerce solutions for our happy clients by using our knowledge and expertise.</p>
                            <a href="/demo-seo-agency-process" className="text-dark-gray font-bold hover:text-blue-500 transition">Learn More →</a>
                        </div>
                    </div>


                </div>
            </section>

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


        </div>
    );
}

