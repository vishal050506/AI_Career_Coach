import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

const Roadmaps = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = UserAuth();
  const interests = location.state?.interests || [];
  const [animate, setAnimate] = useState(false);
//when this page opens scroll to the top
  useEffect(() => {
   window.scrollTo(0, 0);
 }, []);
  useEffect(() => {
    setAnimate(true);
  }, []);

  // Function to handle PDF download with auth check
  const handleDownload = (pdfUrl, roadmapTitle) => {
    if (!user) {
      toast.error("Please log in to download this roadmap", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      toast.success(`Downloading ${roadmapTitle} roadmap`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      // In a real app, this would trigger the download
      console.log(`Downloading ${pdfUrl}`);
      // For demo purposes, we'll just open in new tab
      window.open(pdfUrl, "_blank");
    }
  };

  // Function to handle view online with auth check
  const handleViewOnline = (roadmapTitle) => {
    if (!user) {
      toast.error("Please log in to view this roadmap", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      toast.success(`Viewing ${roadmapTitle} roadmap`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      // You would typically navigate to the roadmap view page here
      // navigate(`/roadmap/${roadmapId}`);
    }
  };

  // Sample roadmap data
const [roadmaps] = useState([
  {
    id: 1,
    title: "Frontend Developer Roadmap",
    domain: "Web Development",
    level: "Beginner to Advanced",
    description:
      "Complete step-by-step guide to becoming a modern frontend developer",
    skills: ["HTML", "CSS", "JavaScript", "React", "State Management"],
    duration: "6-12 months",
    pdfUrl: assets.fullstack,
    image: "https://img.icons8.com/fluency/240/code.png",
  },
  {
    id: 2,
    title: "Data Science Roadmap",
    domain: "Data Science",
    level: "Intermediate",
    description:
      "Comprehensive path to becoming a data scientist with Python and ML",
    skills: ["Python", "Pandas", "NumPy", "Scikit-learn", "Data Visualization"],
    duration: "8-14 months",
    pdfUrl: assets.datascience,
    image: "https://img.icons8.com/color/240/artificial-intelligence.png",
  },
  {
    id: 3,
    title: "DevOps Engineer Roadmap",
    domain: "DevOps",
    level: "Intermediate to Advanced",
    description: "Pathway to mastering DevOps tools and cloud technologies",
    skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Terraform"],
    duration: "6-10 months",
    pdfUrl: assets.ml,
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    id: 4,
    title: "Cybersecurity Roadmap",
    domain: "Cybersecurity",
    level: "Beginner to Professional",
    description:
      "Complete cybersecurity learning path from fundamentals to ethical hacking",
    skills: [
      "Network Security",
      "Penetration Testing",
      "Cryptography",
      "Security Tools",
    ],
    duration: "12-18 months",
    pdfUrl: assets.cyber,
    image: "https://img.icons8.com/color/240/cyber-security.png",
  },
]);

  // Search and filter states
  const [titleSearch, setTitleSearch] = useState("");
  const [domainSearch, setDomainSearch] = useState("");
  const [levelSearch, setLevelSearch] = useState("All");

  // Get all unique domains and levels for filters
  const allDomains = Array.from(
    new Set(roadmaps.map((roadmap) => roadmap.domain))
  );
  const allLevels = Array.from(
    new Set(roadmaps.map((roadmap) => roadmap.level))
  );

  // Filter roadmaps based on interests AND search criteria
  const filteredRoadmaps = roadmaps.filter((roadmap) => {
    // First filter by interests if any
    const interestMatch =
      interests.length === 0 || interests.includes(roadmap.domain);

    // Then filter by search criteria
    const titleMatch =
      !titleSearch ||
      roadmap.title.toLowerCase().includes(titleSearch.toLowerCase());

    const domainMatch =
      !domainSearch ||
      roadmap.domain.toLowerCase().includes(domainSearch.toLowerCase());

    const levelMatch =
      levelSearch === "All" ||
      roadmap.level.toLowerCase().includes(levelSearch.toLowerCase());

    return interestMatch && titleMatch && domainMatch && levelMatch;
  });

  // Get domain-specific heading text
  const getHeadingText = () => {
    if (interests.length === 0) return "All Learning Roadmaps";

    if (interests.includes("Web Development"))
      return "Web Development Roadmaps";
    if (interests.includes("Data Science")) return "Data Science Roadmaps";
    if (interests.includes("Artificial Intelligence"))
      return "AI & Machine Learning Roadmaps";
    if (interests.includes("Cloud Computing"))
      return "Cloud Computing Roadmaps";
    if (interests.includes("Cybersecurity")) return "Cybersecurity Roadmaps";
    if (interests.includes("Mobile Development"))
      return "Mobile Development Roadmaps";
    if (interests.includes("DevOps")) return "DevOps Roadmaps";
    if (interests.includes("Blockchain")) return "Blockchain Roadmaps";

    return `${interests.join(" & ")} Roadmaps`;
  };

  // Get domain-specific description text
  const getDescriptionText = () => {
    if (interests.length === 0)
      return "Browse our complete collection of learning roadmaps";

    if (interests.includes("Web Development"))
      return "Recommended web development learning paths";
    if (interests.includes("Data Science"))
      return "Curated data science learning journeys";
    if (interests.includes("Artificial Intelligence"))
      return "AI and machine learning learning paths";
    if (interests.includes("Cloud Computing"))
      return "Cloud technology learning roadmaps";
    if (interests.includes("Cybersecurity"))
      return "Cybersecurity learning pathways";
    if (interests.includes("Mobile Development"))
      return "Mobile app development roadmaps";
    if (interests.includes("DevOps"))
      return "DevOps engineering learning paths";
    if (interests.includes("Blockchain"))
      return "Blockchain development roadmaps";

    return "Recommended learning paths based on your interests";
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
            Roadmap Filters
          </h2>

          {/* Search by Title */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Search Roadmaps
            </label>
            <input
              type="text"
              placeholder="Roadmap title or keywords"
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
              Skill Level
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

          <button
            onClick={() => {
              setTitleSearch("");
              setDomainSearch("");
              setLevelSearch("All");
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
            Showing {filteredRoadmaps.length}{" "}
            {filteredRoadmaps.length === 1 ? "roadmap" : "roadmaps"}
          </div>

          <div className="grid grid-cols-1 gap-8">
            {filteredRoadmaps.map((roadmap, index) => (
              <div
                key={roadmap.id}
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
                      className="h-48 w-full mt-15 md:w-64 object-cover"
                      src={roadmap.image}
                      alt={roadmap.title}
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">
                          {roadmap.domain}
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800 mt-1">
                          {roadmap.title}
                        </h2>
                        <p className="mt-2 text-gray-600">{roadmap.level}</p>
                      </div>
                      <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                        {roadmap.duration}
                      </span>
                    </div>

                    <p className="mt-4 text-gray-700">{roadmap.description}</p>

                    <div className="mt-4">
                      <h3 className="text-sm font-medium text-gray-900">
                        Skills Covered:
                      </h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {roadmap.skills.map((skill, index) => (
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
                      <button
                        onClick={() =>
                          handleDownload(roadmap.pdfUrl, roadmap.title)
                        }
                        className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-300"
                      >
                        Download PDF
                      </button>
                      <button
                        onClick={() => handleViewOnline(roadmap.title)}
                        className="px-6 py-2 border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium rounded-md transition-colors duration-300"
                      >
                        View Online
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredRoadmaps.length === 0 && (
            <div
              className={`text-center py-12 transition-all duration-700 ease-out ${
                animate
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-8 opacity-0"
              }`}
            >
              <p className="text-gray-500 text-lg">
                No roadmaps found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setTitleSearch("");
                  setDomainSearch("");
                  setLevelSearch("All");
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

export default Roadmaps;
