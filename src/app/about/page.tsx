import Breadcrumb from "@/components/Common/Breadcrumb";

const About = () => {
    return (
        <div className="" >

            <Breadcrumb pageName="About Us" />

            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md p-6 lg:pt-44 pt-16">
                <div className="grid grid-cols-12 gap-6">
                    <div className="lg:col-span-3 col-span-12 lg:block hidden">
                        About page
                    </div>
                    <div className="lg:col-span-9 col-span-12">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;