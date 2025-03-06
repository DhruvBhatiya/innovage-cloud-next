import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";
import { servicesData } from "../api/data";
import Image from "next/image";

const Services = () => {
    return (
        <div className="" >

            <Breadcrumb pageName="Our Services" />

            <section id="courses">
                <div className='container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4'>
                    {/* <div className="sm:flex justify-between items-center mb-10">
                    <h2 className="text-midnight_text text-4xl lg:text-5xl font-semibold mb-5 sm:mb-0">Our Services</h2>
                   
                </div> */}

                    <div className="grid grid-cols-3 gap-8">

                        {servicesData.map((items, i) => (
                            <div key={i}>
                                <div className='bg-white px-3 pt-3 pb-3 shadow-course-shadow rounded-2xl h-full'>
                                    <div className="relative rounded-3xl">
                                        <Image src={items.imgSrc} alt="course-image" width={389} height={262} className="m-auto clipPath" />
                                        {/* <div className="absolute right-5 -bottom-2 bg-secondary rounded-full p-6">
                                        <h3 className="text-white uppercase text-center text-sm font-medium">best <br /> seller</h3>
                                    </div> */}
                                    </div>

                                    <div className="px-3 pt-6">
                                        <Link href={items.href} className='text-2xl font-bold text-black max-w-75% inline-block'>{items.heading + items.href}</Link>
                                        {/* <h3 className='text-base font-normal pt-6 text-black/75'>{items.name}</h3> */}

                                        {/* <div className="flex justify-between items-center py-6 border-b">
                                        <div className="flex items-center gap-4">
                                            <h3 className="text-red-700 text-2xl font-medium">{items.rating}</h3>
                                            <div className="flex">
                                                {renderStars(items.rating)}
                                            </div>
                                        </div>
                                        <h3 className="text-3xl font-medium">${items.price}</h3>
                                    </div> 
                                    <div className="flex justify-between pt-6">
                                        <div className="flex gap-4">
                                            <Icon
                                                icon="solar:notebook-minimalistic-outline"
                                                className="text-primary text-xl inline-block me-2"
                                            />
                                            <h3 className="text-base font-medium text-black opacity-75">{items.classes} classes</h3>
                                        </div>
                                        <div className="flex gap-4">
                                            <Icon
                                                icon="solar:users-group-rounded-linear"
                                                className="text-primary text-xl inline-block me-2"
                                            />
                                            <h3 className="text-base font-medium text-black opacity-75">{items.students} students</h3>
                                        </div>
                                    </div>*/}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Services;