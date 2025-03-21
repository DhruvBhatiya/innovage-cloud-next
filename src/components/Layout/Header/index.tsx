"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { headerData } from "../Header/Navigation/menuData";
import Logo from "./Logo";

import Image from "next/image";
import HeaderLink from "../Header/Navigation/HeaderLink";
import MobileHeaderLink from "../Header/Navigation/MobileHeaderLink";
import Signin from "@/components/Auth/SignIn";
import SignUp from "@/components/Auth/SignUp";
import { useTheme } from "next-themes";
import { Icon } from "@iconify/react/dist/iconify.js";
import CloseIcon from '@mui/icons-material/Close';
import GetAQuote from "@/components/Auth/GetAQuote";

const Header: React.FC = () => {
  const pathUrl = usePathname();
  const { theme, setTheme } = useTheme();

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [isQuoteOpen, setIsQuoteInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const navbarRef = useRef<HTMLDivElement>(null);
  const signInRef = useRef<HTMLDivElement>(null);
  const signUpRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    setSticky(window.scrollY >= 100);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      signInRef.current &&
      !signInRef.current.contains(event.target as Node)
    ) {
      setIsQuoteInOpen(false);
    }
    if (
      signUpRef.current &&
      !signUpRef.current.contains(event.target as Node)
    ) {
      setIsSignUpOpen(false);
    }
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      navbarOpen
    ) {
      setNavbarOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarOpen, isQuoteOpen, isSignUpOpen]);

  useEffect(() => {
    if (isQuoteOpen || isSignUpOpen || navbarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isQuoteOpen, isSignUpOpen, navbarOpen]);

  const handleCloseDrawer = () => setDrawerOpen(false);


  return (
    <>
      <header
        className={`fixed top-0 z-40 w-full  transition-all duration-300 11bg-[#ffffffe8] ${sticky ? " shadow-lg py-0 bg-[#000000c2] !text-white" : "bg-[#ffffffe8] shadow-none py-0"
          }`}
      >

        <div className="py-0 lg:py-0">
          <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md flex items-center justify-between px-4">
            {sticky ?
              <Link href="/">
                <Image
                  src="/img/logo/logo-text.svg"
                  alt="logo"
                  width={160}
                  height={50}
                  style={{ width: "auto", height: "auto" }}
                  quality={100}
                />
              </Link>
              :
              <Logo />
            }

            <nav className="hidden lg:flex flex-grow items-center gap-8 justify-center">
              {headerData.map((item, index) => (
                <HeaderLink key={index} item={item} sticky={sticky} />
              ))}
            </nav>
            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="hidden lg:block bg-primary text-white hover:bg-primary/15 11hover:text-primary hover:opacity-90 px-8 py-2 rounded-full text-lg font-medium"
                onClick={() => {
                  setIsQuoteInOpen(true);
                }}
              >
                Get a Quote
              </Link>
              {isQuoteOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50">
                  <div
                    ref={signInRef}
                    className="relative mx-auto w-full max-w-xl overflow-hidden rounded-lg 11px-8 11pt-14 11pb-8 text-center bg-white h-[90%] overflow-y-scroll"
                  >
                    <button
                      onClick={() => setIsQuoteInOpen(false)}
                      className="absolute top-0 right-0 mr-8 mt-8 dark:invert"
                      aria-label="Close Get a quote Modal"
                    >
                      <Icon
                        icon="tabler:currency-xrp"
                        className="text-black hover:text-primary text-24 inline-block me-2"
                      />
                    </button>
                    <GetAQuote />
                  </div>
                </div>
              )}
              {/* <Link
              href="#"
              className="hidden lg:block bg-primary/15 hover:bg-primary text-primary hover:text-white px-16 py-5 rounded-full text-lg font-medium"
              onClick={() => {
                setIsSignUpOpen(true);
              }}
            >
              Sign Up
            </Link> */}
              {isSignUpOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50">
                  <div
                    ref={signUpRef}
                    className="relative mx-auto w-full max-w-md overflow-hidden rounded-lg bg-white backdrop-blur-md px-8 pt-14 pb-8 text-center"
                  >
                    <button
                      onClick={() => setIsSignUpOpen(false)}
                      className="absolute top-0 right-0 mr-8 mt-8 dark:invert"
                      aria-label="Close Sign Up Modal"
                    >
                      <Icon
                        icon="tabler:currency-xrp"
                        className="text-black hover:text-primary text-24 inline-block me-2"
                      />
                    </button>
                    <SignUp />
                  </div>
                </div>
              )}
              <button
                onClick={() => setNavbarOpen(!navbarOpen)}
                className={`block lg:hidden p-2 rounded-lg ${sticky ? 'bg-white' : 'bg-black'}`}
                aria-label="Toggle mobile menu"
              >
                <span className={`block w-6 h-0.5 ${sticky ? 'bg-black' : 'bg-white'}`}></span>
                <span className={`block w-6 h-0.5 mt-1.5 ${sticky ? 'bg-black' : 'bg-white'}`}></span>
                <span className={`block w-6 h-0.5 mt-1.5 ${sticky ? 'bg-black' : 'bg-white'}`}></span>
              </button>

            </div>
          </div>
          {navbarOpen && (
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40" />
          )}
          <div
            ref={mobileMenuRef}
            className={`lg:hidden bg-white fixed top-0 right-0 h-full w-full bg-darkmode shadow-lg transform transition-transform duration-300 max-w-xs ${navbarOpen ? "translate-x-0" : "translate-x-full"
              } z-50`}
          >
            <div className="flex items-center justify-between p-4">
              <h2 className="text-lg font-bold text-midnight_text dark:text-midnight_text">
                <Logo />

              </h2>
              {/*  */}
              <button
                onClick={() => setNavbarOpen(false)}
                className="11bg-[url('/images/closed.svg')] bg-no-repeat bg-contain w-5 h-5 absolute top-0 right-0 mr-8 mt-8 dark:invert text-black"
                aria-label="Close menu Modal"
              ><CloseIcon /></button>
            </div>
            <nav className="flex flex-col items-start p-4 !text-black">
              {headerData.map((item, index) => (
                <MobileHeaderLink item={item} closeDrawer={handleCloseDrawer} />

              ))}
              <div className="mt-4 flex flex-col space-y-4 w-full">
                {/* <Link
                  href="#"
                  className="bg-transparent border border-primary text-primary px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white"
                  onClick={() => {
                    setIsQuoteInOpen(true);
                    setNavbarOpen(false);
                  }}
                >
                  Sign In
                </Link> */}
                <Link
                  href="#"
                  className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                  onClick={() => {
                    setIsQuoteInOpen(true);
                    setNavbarOpen(false);
                  }}
                >
                  Get A Quote
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
function setDrawerOpen(arg0: boolean) {
  throw new Error("Function not implemented.");
}

