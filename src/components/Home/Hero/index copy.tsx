import Image from 'next/image';
import { Icon } from "@iconify/react/dist/iconify.js";

const Hero = () => {

    return (
        <section id="home-section" className='bg-slateGray !pb-0'
            style={{ backgroundImage: `url('/images/bg/hero-bg.jpg')`, backgroundRepeat: 'no-repeat' }}
        >
            <div className='pb-20 relative top-[1px]' style={{ backgroundImage: `url('/img/bg/cloud-bottom-bg.png')`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center bottom', zIndex: 1, backgroundSize: '100%' }}>
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 pt-10 mb-16 "

                >
                    
                    <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1 items-center '>
                        <div className='col-span-6 flex flex-col gap-8 '>
                            {/* <div className='flex gap-2 mx-auto lg:mx-0'>
                                <Icon
                                    icon="solar:verified-check-bold"
                                    className="text-success text-xl inline-block me-2"
                                />
                                <p className='text-success text-sm font-semibold text-center lg:text-start'>Get 30% off on first enroll</p>
                            </div> */}
                            <h1 className='text-midnight_text text-4xl sm:text-5xl font-semibold pt-5 lg:pt-0'>Who We Are</h1>
                            <h3 className='text-black/70 text-lg pt-5 lg:pt-0'>We provide Consulting, Implementation and Managed Services for Oracle Cloud and specialize in Oracle PaaS services.        </h3>
                            {/* <div className="relative rounded-full pt-5 lg:pt-0">
                                <input type="Email address" name="q" className="py-6 lg:py-8 pl-8 pr-20 text-lg w-full text-black rounded-full focus:outline-none shadow-input-shadow" placeholder="search courses..." autoComplete="off" />
                                <button className="bg-secondary p-5 rounded-full absolute right-2 top-2 ">
                                    <Icon
                                        icon="solar:magnifer-linear"
                                        className="text-white text-4xl inline-block"
                                    />
                                </button>
                            </div> */}
                            {/* <div className='flex items-center justify-between pt-10 lg:pt-4'>
                                <div className='flex gap-2'>
                                    <Image src="/images/banner/check-circle.svg" alt="check-image" width={30} height={30} className='smallImage' />
                                    <p className='text-sm sm:text-lg font-normal text-black'>Flexible</p>
                                </div>
                                <div className='flex gap-2'>
                                    <Image src="/images/banner/check-circle.svg" alt="check-image" width={30} height={30} className='smallImage' />
                                    <p className='text-sm sm:text-lg font-normal text-black'>Learning path</p>
                                </div>
                                <div className='flex gap-2'>
                                    <Image src="/images/banner/check-circle.svg" alt="check-image" width={30} height={30} className='smallImage' />
                                    <p className='text-sm sm:text-lg font-normal text-black'>Community</p>
                                </div>
                            </div> */}
                        </div>
                        <div className='col-span-6 flex justify-center '>
                            <Image src="/images/banner/banner-vector.svg" alt="nothing" width={450} height={405} />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;
