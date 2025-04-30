import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import Typewriter from "./Typewriter";

const Hero = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-10 overflow-hidden">
      {/* Background Image - Responsive adjustments */}
      <div
        className="absolute inset-0 -z-20"
        style={{
          width: "100%",
          maxWidth: "900px",
          height: "auto",
          minHeight: "400px",
          maxHeight: "600px",
          margin: "0 auto",
          backgroundImage: `url(${assets.herobg})`,
          backgroundSize: "contain",
          backgroundPosition: "left top",
          backgroundRepeat: "no-repeat",
          pointerEvents: "none",
        }}
      ></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-4 md:space-y-0">
            {/* Headings with animation */}
            <h1
              className={`text-3xl sm:text-4xl md:text-5xl font-bold text-[rgb(22,30,100)] leading-tight transition-all duration-500 ease-out ${
                animate
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-8 opacity-0"
              }`}
            >
              AI NAVIGATOR
            </h1>

            <h1
              className={`text-3xl sm:text-4xl md:text-3xl font-bold text-[rgb(22,30,100)] leading-tight  mb-4 transition-all duration-500 ease-out delay-100 font-dm-sans ${
                animate
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-8 opacity-0"
              }`}
            >
              <Typewriter />
            </h1>
            <br />

            {/* Paragraph with animation */}
            <p
              className={`text-base md:text-lg text-gray-800 max-w-lg transition-all duration-500 ease-out delay-300 ${
                animate
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-8 opacity-0"
              }`}
            >
              It helps you find the best way forward with smart suggestions. By
              analyzing your goals and progress, it guides you toward better
              decisions—simply and effectively.
            </p>
            <br />
            {/* List items with staggered animation */}
            <ul className="space-y-2 md:space-y-4">
              {[
                "What do you want to learn",
                "Search Course",
                "Get 30% off on every 1st month",
                "Expert teachers",
              ].map((item, index) => (
                <li
                  key={index}
                  className={`flex items-center transition-all duration-500 ease-out delay-${
                    300 + index * 100
                  } ${
                    animate
                      ? "translate-y-0 opacity-100"
                      : "-translate-y-8 opacity-0"
                  }`}
                >
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2 md:mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm md:text-base text-gray-700">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <br />
            {/* Search input with animation */}
            <div
              className={`relative max-w-lg transition-all duration-500 ease-out delay-700 ${
                animate
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-8 opacity-0"
              }`}
            >
              <input
                type="text"
                placeholder="What do you want to learn"
                className="w-full py-3 px-4 md:py-4 md:px-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 text-sm md:text-base"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white py-1 px-3 md:py-2 md:px-4 rounded-lg flex items-center gap-1 md:gap-2 text-sm md:text-base">
                <span>Search</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 md:h-5 md:w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Column - Stacked Images with Animation */}
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] mt-8 md:mt-0">
            {/* Decorative elements with animation */}
            <div
              className={`absolute -top-5 -right-5 md:-top-10 md:-right-10 w-20 h-20 md:w-32 md:h-32 bg-indigo-100 rounded-full transition-all duration-1000 ease-out -z-100 delay-500 ${
                animate ? "opacity-100" : "opacity-0 scale-90"
              }`}
            ></div>

            {/* Bottom Image with animation */}
            <div
              className={`absolute bottom-8 md:bottom-15 left-0 w-4/5 transition-all duration-700 ease-out delay-300 ${
                animate
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <div className="aspect-w-4 aspect-h-3 bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                  alt="Teacher instructing"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className={`absolute -bottom-6 -left-6 md:-bottom-12 md:-left-12 w-20 h-20 md:w-30 md:h-30 bg-blue-100 rounded-full transition-all duration-1000 ease-out delay-700  -z-100 ${
                  animate ? "opacity-100" : "opacity-0 scale-90"
                }`}
              ></div>
            </div>

            {/* Top Image with animation */}
            <div
              className={`relative w-full max-w-xs md:max-w-md ml-auto transition-all duration-700 ease-out delay-500 -z-100 ${
                animate
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <div className="aspect-w-3 aspect-h-4 bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                  alt="Students learning"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
