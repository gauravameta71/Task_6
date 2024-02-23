"use client";
import React, { useState } from "react";
import Link from "next/link";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser } from "@fortawesome/free-solid-svg-icons";
// import { faTruckFast } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isClick, setisClick] = useState(false);

  const toggleNavbar = (): void => {
    setisClick(!isClick);
  };

  return (
    <>
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 p-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 font-bold text-2xl text-center pb-2 sm:pb-0 text-blackish text-black">
                <Link href="/"><img src="/assets/logo.jpg" alt="" className="w-full h-[108px]" /></Link>

                
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4 font-sarif">
                <Link
                  href="/"
                  className="text-black hover:bg-orange-600 hover:text-black font-bold rounded-lg p-2"
                >
                  Overview
                </Link>
                <Link
                  href="/about"
                  className="text-black hover:bg-orange-600 hover:text-black font-bold rounded-lg p-2"
                >
                  Gallery
                </Link>
                <Link
                  href="/products"
                  className="text-black hover:bg-orange-600 hover:text-black font-bold rounded-lg p-2"
                >
                  Floor Plan
                </Link>{" "}
                <Link
                  href="/contact"
                  className="text-black hover:bg-orange-600 hover:text-black font-bold rounded-lg p-2"
                >
                  Location
                </Link>
                <Link
                  href="/contact"
                  className="text-black hover:bg-orange-600 hover:text-black font-bold rounded-lg p-2"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="text-black hover:bg-orange-600 hover:text-black font-bold rounded-lg p-2"
                >
                  +91 86457XXXX
                </Link>
                {/* <a href="/signup">
                  <button>
                    <FontAwesomeIcon
                      icon={faUser}
                      style={{ color: "#f42a2a" }}
                    />
                  </button>
                </a>
                <button>
                  <a href="/about">
                    <FontAwesomeIcon
                      icon={faTruckFast}
                      style={{ color: "#ff6600" }}
                    />
                  </a>
                </button> */}
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <div className="flex m-4 h-10">
                {/* <Link href="/signup">
                  <button className="p-2">
                    <FontAwesomeIcon
                      icon={faUser}
                      style={{ color: "#ff6600" }}
                    />
                  </button>
                </Link>

                <Link href="/about">
                  <button className="p-2 ">
                    <FontAwesomeIcon
                      icon={faTruckFast}
                      style={{ color: "#ff6600" }}
                    />
                  </button>
                </Link> */}
              </div>
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-white   hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={toggleNavbar}
              >
                {isClick ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6 text-white bg-green-800 rounded-sm"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {isClick && (
          <div>
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-0 space-y-1 sm:px-3 fixed bg-white ">
                <a
                  href="/"
                  className="text-black block hover:bg-orange-600 hover:text-black font-bold rounded-lg p-2 flex justify-center"
                >
                  Overview
                </a>
                <a
                  href="/about"
                  className="text-black block hover:bg-orange-600 hover:text-black font-bold rounded-lg p-2 flex justify-center"
                >
                  Gallery
                </a>
                <a
                  href="/products"
                  className="text-black block hover:bg-orange-600 hover:text-black font-bold rounded-lg p-2 flex justify-center"
                >
                  Floor Plan
                </a>{" "}
                <a
                  href="/contact"
                  className="text-black block hover:bg-orange-600 hover:text-black font-bold rounded-lg p-2 flex justify-center"
                >
                  Location
                </a>
                <a
                  href="/contact"
                  className="text-black block hover:bg-orange-600 hover:text-black font-bold rounded-lg p-2 flex justify-center"
                >
                  About
                </a>
                <a
                  href="/contact"
                  className="text-black block hover:bg-orange-600 hover:text-black font-bold rounded-lg p-2 flex justify-center"
                >
                  +91 93435XXXXX
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
