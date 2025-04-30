import React, { useState, useEffect } from "react";

const Contact = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="mx-auto p-6 bg-white mt-10">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Column - Contact Info */}
        <div className="md:w-1/2 mt-20">
          <h2
            className={`text-[5rem] !font-medium md:font-bold md:text-[8rem] mt-4 leading-[0.9] transition-all duration-700 ease-out ${
              animate ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
            }`}
          >
            Get in
            <br />
            touch
          </h2>
          <div
            className={`mb-6 mt-15 transition-all duration-700 ease-out delay-100 ${
              animate ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
            }`}
          >
            <p className="text-gray-700">
              CONTACT US:
              <a
                className="underline ml-11"
                href="mailto:hello@careercraft.com"
              >
                hello@careercraft.com
              </a>
            </p>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="md:w-1/2">
          <form>
            <div
              className={`mb-10 transition-all duration-700 ease-out delay-200 ${
                animate
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-8 opacity-0"
              }`}
            >
              <input
                type="text"
                id="name"
                placeholder="Your name*"
                className="w-full px-3 py-4 text-lg border-b-2 border-gray-300 
                       hover:border-black 
                       focus:outline-none focus:border-b-2 focus:border-red-500
                       placeholder:text-gray-400 placeholder:text-lg"
                required
              />
            </div>

            <div
              className={`mb-10 transition-all duration-700 ease-out delay-300 ${
                animate
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-8 opacity-0"
              }`}
            >
              <input
                type="email"
                id="email"
                placeholder="Your email*"
                className="w-full px-3 py-4 text-lg border-b-2 border-gray-300 
                       hover:border-black 
                       focus:outline-none focus:border-b-2 focus:border-red-500
                       placeholder:text-gray-400 placeholder:text-lg"
                required
              />
            </div>

            <div
              className={`mb-10 transition-all duration-700 ease-out delay-400 ${
                animate
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-8 opacity-0"
              }`}
            >
              <textarea
                id="message"
                rows="4"
                placeholder="Your message*"
                className="w-full px-3 py-4 text-lg border-b-2 border-gray-300 
                       hover:border-black 
                       focus:outline-none focus:border-b-2 focus:border-red-500
                       placeholder:text-gray-400 placeholder:text-lg"
                required
              ></textarea>
            </div>

            <div
              className={`mb-8 transition-all duration-700 ease-out delay-500 ${
                animate
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-8 opacity-0"
              }`}
            >
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                  required
                />
                <span className="ml-3 text-gray-700 text-lg">
                  I accept the privacy policy*
                </span>
              </label>
            </div>

            <div
              className={`mb-10 transition-all duration-700 ease-out delay-600 ${
                animate
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-8 opacity-0"
              }`}
            >
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                />
                <span className="ml-3 text-gray-700 text-lg">
                  I would like to subscribe for the newsletter
                </span>
              </label>
            </div>

            <div
              className={`transition-all duration-700 ease-out delay-700 ${
                animate
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-8 opacity-0"
              }`}
            >
              <button
                type="submit"
                className="w-40 bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
                     transition-colors text-lg"
              >
                Submit →
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
