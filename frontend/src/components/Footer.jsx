import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="px-4 sm:px-0">
      {/* Footer Content */}
      <div className="grid grid-cols-2 px-4 sm:grid-cols-6 gap-6 my-6 mt-20  text-sm">
        {/* About Section */}
        <div className="col-span-2 sm:col-span-1">
          <img
            src={assets.footer}
            className="mb-3 w-32"
            alt="footer_img"
            loading="lazy"
          />
          <p className="text-gray-600">
            "Career Craft is dedicated to empowering professionals with the
            skills and opportunities they need to thrive in today's dynamic job
            market. We bridge the gap between ambition and achievement through
            tailored resources, expert guidance, and innovative learning tools.
            Whether you're starting your career or leveling up, we're here to
            help you craft success—one step at a time. Together, let's build the
            future of work."
          </p>
          <Link to="/about">
            <p className="text-blue-500 hover:underline mt-2">Read more...</p>
          </Link>
        </div>

        {/* Internships by places */}
        <div>
          <p className="text-xl font-medium my-5">Internships by places</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <Link to="/internships/jobs">
              <li className="hover:underline">Internships in India</li>
            </Link>
            <Link to="/internships/jobs">
              <li className="hover:underline">Internships in Delhi</li>
            </Link>
            <Link to="/internships/jobs">
              <li className="hover:underline">Internships in Gurgaon</li>
            </Link>
            <Link to="/internships/jobs">
              <li className="hover:underline">Internships in Kolkata</li>
            </Link>
            <Link to="/internships/jobs">
              <li className="hover:underline">Internships in Banglore</li>
            </Link>
            <Link to="/internships/jobs">
              <li className="hover:underline">Internships in Hyderabad</li>
            </Link>
            <Link to="/internships/jobs">
              <li className="hover:underline">Internships in Mumbai</li>
            </Link>
            <Link to="/internships/jobs">
              <li className="hover:underline">Internships in</li>
            </Link>
            <Link to="/internships/jobsabout">
              <li className="hover:underline">Virtual Internship</li>
            </Link>
            <Link to="/internships/jobsdelivery">
              <li className="hover:underline">View all Internships</li>
            </Link>
          </ul>
        </div>

        {/* Internships by Stream*/}
        <div>
          <p className="text-xl font-medium my-5">Internships by Stream</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <Link to="/">
              <li className="hover:underline">Computer Science Internship</li>
            </Link>
            <Link to="/">
              <li className="hover:underline">Electronics Internship</li>
            </Link>
            <Link to="/">
              <li className="hover:underline">Mechanical Internship</li>
            </Link>
            <Link to="/">
              <li className="hover:underline">Civil Internship</li>
            </Link>
            <Link to="/">
              <li className="hover:underline">Marketing Internship</li>
            </Link>
            <Link to="/">
              <li className="hover:underline">Chemical Internship</li>
            </Link>
            <Link to="/">
              <li className="hover:underline">Finance Internship</li>
            </Link>
            <Link to="/">
              <li className="hover:underline">Summer Reserch Fellowship</li>
            </Link>
            <Link to="/about">
              <li className="hover:underline">Campus Ambassador program</li>
            </Link>
            <Link to="/delivery">
              <li className="hover:underline">View all Internships</li>
            </Link>
          </ul>
        </div>

        {/* Jobs by Places */}
        <div>
          <p className="text-xl font-medium my-5">Jobs by Places</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <Link to="/">
              <li className="hover:underline">Jobs in Delhi</li>
            </Link>
            <Link to="/">
              <li className="hover:underline">Jobs in Mumbai</li>
            </Link>
            <Link to="/">
              <li className="hover:underline">Jobs in Banglore</li>
            </Link>
            <Link to="/">
              <li className="hover:underline">Jobs in Kolkata</li>
            </Link>
            <Link to="/">
              <li className="hover:underline">Jobs in Pune</li>
            </Link>
            <Link to="/">
              <li className="hover:underline">Jobs in Chennai</li>
            </Link>
            <Link to="/">
              <li className="hover:underline">Jobs in Lucknow</li>
            </Link>
            <Link to="/">
              <li className="hover:underline">Jobs in Jaipur</li>
            </Link>
            <Link to="/about">
              <li className="hover:underline">Jobs in Hyderabad</li>
            </Link>
            <Link to="/delivery">
              <li className="hover:underline">View all Jobs</li>
            </Link>
          </ul>
        </div>

        {/* Jobs by Streams */}
        <div>
          <p className="text-xl font-medium my-5">Jobs by Streams</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <Link to="/">
              <li className="hover:underline">Marketing jobs</li>
            </Link>
            <Link to="/">
              <li className="hover:underline">Content writing jobs</li>
            </Link>
            <Link to="/">
              <li className="hover:underline">Web development jobs</li>
            </Link>
            <Link to="/">
              <li className="hover:underline">Sales jobs</li>
            </Link>
            <Link to="/">
              <li className="hover:underline">Finance jobs</li>
            </Link>
            <Link to="/">
              <li className="hover:underline">Digital Marketing jobs</li>
            </Link>
            <Link to="/">
              <li className="hover:underline">Computer Science jobs</li>
            </Link>
            <Link to="/">
              <li className="hover:underline">Graphic Design jobs</li>
            </Link>
            <Link to="/about">
              <li className="hover:underline">Data Science jobs</li>
            </Link>
            <Link to="/delivery">
              <li className="hover:underline">View all jobs</li>
            </Link>
          </ul>
        </div>

        {/* Placement Guarantee Courses */}
        <div>
          <p className="text-xl font-medium my-5">
            Placement Guarantee Courses
          </p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <Link to="/">
              <li className="hover:underline">Full Stack Development</li>
            </Link>
            <Link to="/">
              <li className="hover:underline">Data Science</li>
            </Link>
            <Link to="/">
              <li className="hover:underline">Human Resource Management</li>
            </Link>
            <Link to="/">
              <li className="hover:underline">Digital Marketing</li>
            </Link>
            <Link to="/">
              <li className="hover:underline">Electric Vehicle</li>
            </Link>
            <Link to="/">
              <li className="hover:underline">UI/UX Design</li>
            </Link>
            <Link to="/">
              <li className="hover:underline">Product Management</li>
            </Link>
            <Link to="/">
              <li className="hover:underline">Financial Marketing</li>
            </Link>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          © 2025 CarrerCraft | All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
