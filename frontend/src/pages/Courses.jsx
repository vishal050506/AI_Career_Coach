import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

const Courses = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = UserAuth();
  const interests = location.state?.interests || [];
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleEnrollClick = (courseId) => {
    if (!user) {
      toast.error("Please log in to enroll in this course", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      toast.success("Enrolled successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  // Sample course data
  const [courses] = useState([
    {
      id: 1,
      title: "React Fundamentals",
      provider: "CodeAcademy",
      domain: "Web Development",
      duration: "6 weeks",
      level: "Beginner",
      description:
        "Learn React from scratch with hands-on projects and exercises.",
      skills: ["React", "JavaScript", "JSX"],
      rating: 4.8,
      students: 12500,
      price: "$49.99",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    },
    {
      id: 2,
      title: "Python for Data Science",
      provider: "DataCamp",
      domain: "Data Science",
      duration: "8 weeks",
      level: "Intermediate",
      description:
        "Master Python for data analysis, visualization, and machine learning.",
      skills: ["Python", "Pandas", "Matplotlib", "Scikit-learn"],
      rating: 4.7,
      students: 8900,
      price: "$59.99",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    },
    {
      id: 3,
      title: "AWS Certified Solutions Architect",
      provider: "Udemy",
      domain: "Cloud Computing",
      duration: "10 weeks",
      level: "Advanced",
      description:
        "Prepare for the AWS certification with real-world scenarios.",
      skills: ["AWS", "Cloud Architecture", "Terraform"],
      rating: 4.9,
      students: 21500,
      price: "$84.99",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
    },
    {
      id: 4,
      title: "Complete Ethical Hacking Bootcamp",
      provider: "Cybrary",
      domain: "Cybersecurity",
      duration: "12 weeks",
      level: "Intermediate",
      description: "Learn ethical hacking from basic to advanced techniques.",
      skills: ["Kali Linux", "Penetration Testing", "Network Security"],
      rating: 4.6,
      students: 7500,
      price: "$99.99",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/1/19/Unity_Technologies_logo.svg",
    },
  ]);

  // Search and filter states
  const [titleSearch, setTitleSearch] = useState("");
  const [domainSearch, setDomainSearch] = useState("");
  const [levelSearch, setLevelSearch] = useState("All");
  const [durationSearch, setDurationSearch] = useState("All");

  // Get all unique domains and levels for filters
  const allDomains = Array.from(
    new Set(courses.map((course) => course.domain))
  );
  const allLevels = Array.from(new Set(courses.map((course) => course.level)));

  // Filter courses based on interests AND search criteria
  const filteredCourses = courses.filter((course) => {
    const interestMatch =
      interests.length === 0 || interests.includes(course.domain);
    const titleMatch =
      !titleSearch ||
      course.title.toLowerCase().includes(titleSearch.toLowerCase());
    const domainMatch =
      !domainSearch ||
      course.domain.toLowerCase().includes(domainSearch.toLowerCase());
    const levelMatch =
      levelSearch === "All" ||
      course.level.toLowerCase() === levelSearch.toLowerCase();
    const durationMatch =
      durationSearch === "All" || course.duration.includes(durationSearch);

    return (
      interestMatch && titleMatch && domainMatch && levelMatch && durationMatch
    );
  });

  // Get domain-specific heading text
  const getHeadingText = () => {
    if (interests.length === 0) return "All Courses";

    if (interests.includes("Web Development")) return "Web Development Courses";
    if (interests.includes("Data Science")) return "Data Science Courses";
    if (interests.includes("Artificial Intelligence"))
      return "AI & Machine Learning Courses";
    if (interests.includes("Cloud Computing")) return "Cloud Computing Courses";
    if (interests.includes("Cybersecurity")) return "Cybersecurity Courses";
    if (interests.includes("Mobile Development"))
      return "Mobile Development Courses";
    if (interests.includes("DevOps")) return "DevOps Courses";
    if (interests.includes("Blockchain")) return "Blockchain Courses";

    return `${interests.join(" & ")} Courses`;
  };

  // Get domain-specific description text
  const getDescriptionText = () => {
    if (interests.length === 0) return "Browse our complete course catalog";

    if (interests.includes("Web Development"))
      return "Master modern web development with these comprehensive courses";
    if (interests.includes("Data Science"))
      return "Learn data science and analytics from industry experts";
    if (interests.includes("Artificial Intelligence"))
      return "Cutting-edge AI and machine learning courses";
    if (interests.includes("Cloud Computing"))
      return "Cloud technologies and infrastructure courses";
    if (interests.includes("Cybersecurity"))
      return "Security and ethical hacking courses";
    if (interests.includes("Mobile Development"))
      return "Build mobile apps with these development courses";
    if (interests.includes("DevOps"))
      return "DevOps practices and tools courses";
    if (interests.includes("Blockchain"))
      return "Blockchain development and cryptocurrency courses";

    return "Recommended courses based on your interests";
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Left Sidebar - Search Filters */}
        <div
          className={`w-full md:w-1/4 bg-white p-6 rounded-lg shadow-md h-fit sticky top-4 transition-all duration-700 ease-out ${
            animate ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
          }`}
        >
          <h2 className="text-xl font-bold mb-4 text-gray-800">
            Course Filters
          </h2>

          {/* Search by Title */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Search Courses
            </label>
            <input
              type="text"
              placeholder="Course title or keywords"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={titleSearch}
              onChange={(e) => setTitleSearch(e.target.value)}
            />
          </div>

          {/* Filter by Domain */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Domain
            </label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={domainSearch}
              onChange={(e) => setDomainSearch(e.target.value)}
            >
              <option value="">All Domains</option>
              {allDomains.map((domain) => (
                <option key={domain} value={domain}>
                  {domain}
                </option>
              ))}
            </select>
          </div>

          {/* Filter by Level */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Difficulty Level
            </label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={levelSearch}
              onChange={(e) => setLevelSearch(e.target.value)}
            >
              <option value="All">All Levels</option>
              {allLevels.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </div>

          {/* Filter by Duration */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Duration
            </label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={durationSearch}
              onChange={(e) => setDurationSearch(e.target.value)}
            >
              <option value="All">All Durations</option>
              <option value="4 weeks">Under 4 weeks</option>
              <option value="6 weeks">4-8 weeks</option>
              <option value="10 weeks">8-12 weeks</option>
              <option value="12 weeks">12+ weeks</option>
            </select>
          </div>

          <button
            onClick={() => {
              setTitleSearch("");
              setDomainSearch("");
              setLevelSearch("All");
              setDurationSearch("All");
            }}
            className="w-full py-2 px-4 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md transition-colors"
          >
            Clear Filters
          </button>
        </div>

        {/* Main Content */}
        <div className="w-full md:w-3/4">
          <h1
            className={`text-3xl font-bold text-center text-gray-900 mb-2 transition-all duration-700 ease-out ${
              animate ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
            }`}
          >
            {getHeadingText()}
          </h1>
          <p
            className={`text-center text-gray-600 mb-12 transition-all duration-700 ease-out delay-100 ${
              animate ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
            }`}
          >
            {getDescriptionText()}
          </p>

          {/* Results count */}
          <div
            className={`mb-6 text-gray-600 transition-all duration-700 ease-out delay-200 ${
              animate ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
            }`}
          >
            Showing {filteredCourses.length}{" "}
            {filteredCourses.length === 1 ? "course" : "courses"}
          </div>

          <div className="grid grid-cols-1 gap-8">
            {filteredCourses.map((course, index) => (
              <div
                key={course.id}
                className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 ${
                  animate
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-8 opacity-0"
                }`}
                style={{
                  transitionDelay: `${200 + index * 100}ms`,
                }}
              >
                <div className="md:flex">
                  <div className="md:flex-shrink-0">
                    <img
                      className="h-48 w-full mt-18 md:w-64 object-contain"
                      src={course.image}
                      alt={course.title}
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">
                          {course.domain}
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800 mt-1">
                          {course.title}
                        </h2>
                        <p className="mt-2 text-gray-600">{course.provider}</p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          course.level === "Beginner"
                            ? "bg-green-100 text-green-800"
                            : course.level === "Intermediate"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {course.level}
                      </span>
                    </div>

                    <p className="mt-4 text-gray-700">{course.description}</p>

                    <div className="mt-4 grid grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">
                          Duration:
                        </h3>
                        <p className="text-gray-600">{course.duration}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">
                          Rating:
                        </h3>
                        <p className="text-gray-600">
                          ⭐ {course.rating} ({course.students.toLocaleString()}{" "}
                          students)
                        </p>
                      </div>
                    </div>

                    <div className="mt-4">
                      <h3 className="text-sm font-medium text-gray-900">
                        Skills Covered:
                      </h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {course.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 flex justify-between items-center">
                      <span className="text-xl font-bold text-gray-900">
                        {course.price}
                      </span>
                      <button
                        onClick={() => handleEnrollClick(course.id)}
                        className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-300"
                      >
                        Enroll Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div
              className={`text-center py-12 transition-all duration-700 ease-out ${
                animate
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-8 opacity-0"
              }`}
            >
              <p className="text-gray-500 text-lg">
                No courses found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setTitleSearch("");
                  setDomainSearch("");
                  setLevelSearch("All");
                  setDurationSearch("All");
                }}
                className="mt-4 text-blue-600 hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Courses;
