import React from "react";

import { Typography, Button, IconButton } from "@material-tailwind/react";

function Hero() {
  return (
    <div className="w-full">
      <div className="relative overflow-hidden h-screen flex justify-center items-center">
        <div className="flex absolute -top-96 start-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-green-300/50 to-green-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem]"></div>
          <div className="bg-gradient-to-tl from-green-50 via-green-100 to-green-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem]"></div>
        </div>

        <div className="relative z-10">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
            <div className="max-w-2xl text-center mx-auto">
              <div className="mt-5 max-w-2xl">
                <h1 className="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl">
                  <Typography variant="h1" color="black" className="font-bold">
                    The Intuitive Web Solutions
                  </Typography>
                </h1>
              </div>

              <div className="mt-5 max-w-3xl">
                <p className="">
                  <Typography variant="p" color="gray" className="font-normal">
                    Preline UI is an open-source set of prebuilt UI components,
                    ready-to-use examples and Figma design system based on the
                    utility-first Tailwind CSS framework.
                  </Typography>
                </p>
              </div>

              <div className="mt-8 gap-3 flex justify-center">
                <Button
                  color="green"
                  size="sm"
                  className="flex items-center justify-center gap-2"
                >
                  <Typography variant="p">Get Started</Typography>
                  <svg
                    className="flex-shrink-0 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;