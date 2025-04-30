import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";

const Vision = () => {
  const [animate, setAnimate] = useState({
    title: false,
    subtitle: false,
    description: false,
    services: false,
  });

  useEffect(() => {
    // Staggered animations
    const timer1 = setTimeout(
      () => setAnimate((a) => ({ ...a, title: true })),
      100
    );
    const timer2 = setTimeout(
      () => setAnimate((a) => ({ ...a, subtitle: true })),
      300
    );
    const timer3 = setTimeout(
      () => setAnimate((a) => ({ ...a, description: true })),
      500
    );
    const timer4 = setTimeout(
      () => setAnimate((a) => ({ ...a, services: true })),
      700
    );

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  const services = [
    {
      title: "RoadMaps",
      description:
        "Learn new-age skills on the go with our short-term online trainings",
      color: "blue",
      img: assets.about_img,
    },
    {
      title: "Fresher jobs",
      description:
        "Get premium fresher jobs with a minimum CTC of 2LPA on your fingertips",
      color: "green",
      img: assets.about_img,
    },
    {
      title: "Placement Guarantee courses",
      description:
        "Specialize in industry-oriented programs that get you ready for a career in your dream profile",
      color: "purple",
      img: assets.about_img,
    },
    {
      title: "Internships",
      description:
        "Find 10,000+ internships from great companies to give a kickstart to your career",
      color: "orange",
      img: assets.about_img,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:px-6 md:py-12 font-sans">
      {/* Main Vision Section */}
      <div className="mb-12">
        <h1
          className={`text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6 transition-all duration-500 ease-out ${
            animate.title
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0"
          }`}
        >
          Our vision
        </h1>
        <p
          className={`text-lg text-gray-700 text-center mb-4 transition-all duration-500 ease-out ${
            animate.subtitle
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0"
          }`}
        >
          CareerCraft is a dot com business with the heart of dot org.
        </p>
        <p
          className={`text-lg text-gray-700 text-center transition-all duration-500 ease-out ${
            animate.description
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0"
          }`}
        >
          We are a technology company on a mission to equip students with
          relevant skills & practical exposure to help them get the best
          possible start to their careers. Imagine a world full of freedom and
          possibilities. A world where you can discover your passion and turn it
          into your career. A world where you graduate fully assured, confident,
          and prepared to stake a claim on your place in the world.
        </p>
      </div>

      {/* Services Grid */}
      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-500 ease-out ${
          animate.services
            ? "translate-y-0 opacity-100"
            : "-translate-y-4 opacity-0"
        }`}
      >
        {services.map((service, index) => (
          <div
            key={index}
            className={`bg-white rounded-xl shadow-md overflow-hidden border-t-4 border-${service.color}-600 hover:shadow-lg transition-shadow duration-300`}
          >
            <div className="flex flex-col sm:flex-row">
              {/* Image */}
              <div className="w-full sm:w-1/3">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 w-full sm:w-2/3">
                <h2 className="text-xl font-bold text-gray-800 mb-3">
                  {service.title}
                </h2>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <a
                  href="#"
                  className={`text-blue-600 hover:text-blue-800 font-medium inline-flex items-center`}
                >
                  Explore more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vision;
