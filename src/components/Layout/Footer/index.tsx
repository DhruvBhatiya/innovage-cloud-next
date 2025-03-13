import Link from "next/link";
import Image from "next/image";
import Logo from "../Header/Logo";
import { Icon } from "@iconify/react/dist/iconify.js";
import { headerData } from "../Header/Navigation/menuData";

const footer = () => {
  return (
    <footer className="bg-deepSlate pt-[70px] pb-10" style={{ backgroundImage: "url('/img/bg/vertical-line-bg.svg')" }} >
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <div className="grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">
          <div className='col-span-4 md:col-span-12 lg:col-span-5'>
            <Logo />
            <div className=' my-5'>
              <p>At Innovage Cloud, these three words are more than just a tagline — they are the foundation of everything we do. We are not just an IT services provider; we are a strategic technology partner dedicated to helping businesses transform, grow, and thrive in a digital-first world.
              </p>
            </div>

            <div className='flex items-center gap-4'>
              <Link href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A102303794&keywords=innovage%20cloud&origin=RICH_QUERY_SUGGESTION&position=0&searchId=3a9e7be1-3687-4c07-ac60-6b62caffc406&sid=n_6&spellCorrectionEnabled=false" target="_blank" className='hover:text-primary text-black text-3xl'>
                <Icon
                  icon="tabler:brand-linkedin"
                />
              </Link>
              <Link href="https://twitter.com" target="_blank" className='hover:text-primary text-black text-3xl'>
                <Icon
                  icon="tabler:brand-x"
                />
              </Link>
              <Link href="https://instagram.com" target="_blank" className='hover:text-primary text-black text-3xl'>
                <Icon
                  icon="tabler:brand-instagram"
                />
              </Link>
            </div>
          </div>
          <div className="col-span-2">
            <h3 className="mb-4 text-2xl font-medium">Links</h3>
            <ul>
              {headerData.map((item, index) => (
                <li key={index} className="mb-2 text-black/50 hover:text-primary w-fit">
                  <Link href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* <div className="col-span-2">
            <h3 className="mb-4 text-2xl font-medium">Services</h3>
            <ul>
              <li className="mb-2 text-black/50 hover:text-primary w-fit">
                <Link href="#">
                  About Us
                </Link>
              </li>
              <li className="mb-2 text-black/50 hover:text-primary w-fit">
                <Link href="#">
                  Our Team
                </Link>
              </li>
              <li className="mb-2 text-black/50 hover:text-primary w-fit">
                <Link href="#">
                  career
                </Link>
              </li>
              <li className="mb-2 text-black/50 hover:text-primary w-fit">
                <Link href="#">
                  Services
                </Link>
              </li>
              <li className="mb-2 text-black/50 hover:text-primary w-fit">
                <Link href="#">
                  Contact
                </Link>
              </li>
            </ul>
          </div> */}
          <div className='col-span-4 md:col-span-4 lg:col-span-4'>
            <div className="flex items-center gap-2">
              <Icon
                icon="tabler:brand-google-maps"
                className="text-primary text-3xl inline-block me-2 w-[60px]"
              />
              <h5 className="text-lg text-black/60">A-406, Titanium Square, Near, Thaltej Metro Station, Thaltej, Ahmedabad- 380054</h5>
            </div>
            <div className="flex gap-2 mt-10">
              <Icon
                icon="tabler:phone"
                className="text-primary text-3xl inline-block me-2"
              />
              <h5 className="text-lg text-black/60">+91 9023635219</h5>
              <h5 className="text-lg text-black/60">+91 9512386103</h5>
            </div>
            <div className="flex gap-2 mt-10">
              <Icon
                icon="tabler:folder"
                className="text-primary text-3xl inline-block me-2"
              />
              <h5 className="text-lg text-black/60">info@innovagecloud.com</h5>
            </div>
          </div>
        </div>

        <div className='mt-10 lg:flex items-center justify-between'>
          <h4 className='text-black/50 text-sm text-center lg:text-start font-normal'>@2025. All Rights Reserved by Innovage</h4>
          <div className="flex gap-5 mt-5 lg:mt-0 justify-center lg:justify-start">
            <Link href="/" target="_blank" className='text-black/50 text-sm font-normal hover:text-primary'>Privacy policy</Link>
            <Link href="/" target="_blank" className='text-black/50 text-sm font-normal hover:text-primary'>Terms & conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default footer;
