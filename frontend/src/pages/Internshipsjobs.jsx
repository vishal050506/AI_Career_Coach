import React, { useState,useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";

const Internshipsjobs = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = UserAuth();
  const interests = location.state?.interests || [];
//when this page opens scroll to the top
  useEffect(() => {
   window.scrollTo(0, 0);
 }, []);

  const handleApplyClick = (jobId) => {
    if (!user) {
      toast.error("Please log in to apply for this position", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      navigate(`/apply/${jobId}`);
    }
  };

  const [opportunities] = useState([
    {
      id: 1,
      title: "Frontend Developer Intern",
      company: "TechCorp",
      type: "Internship",
      location: "Remote",
      duration: "3 months",
      stipend: "$2,000/month",
      description:
        "Work on cutting-edge React applications with our experienced team.",
      skills: ["React", "JavaScript", "HTML/CSS"],
      postedDate: "2 days ago",
      domains: ["Web Development"],
    },
    {
      id: 2,
      title: "Data Science Intern",
      company: "DataAnalytics Inc",
      type: "Internship",
      location: "New York, NY",
      duration: "6 months",
      stipend: "$2,500/month",
      description:
        "Analyze large datasets and build predictive models for our clients.",
      skills: ["Python", "Pandas", "Machine Learning"],
      postedDate: "1 week ago",
      domains: ["Data Science", "Artificial Intelligence"],
    },
    {
      id: 3,
      title: "Full Stack Developer",
      company: "WebSolutions",
      type: "Job",
      location: "San Francisco, CA",
      salary: "$90,000 - $110,000/year",
      description:
        "Join our team to build scalable web applications using modern technologies.",
      skills: ["Node.js", "React", "MongoDB"],
      postedDate: "3 days ago",
      domains: ["Web Development", "DevOps"],
    },
    {
      id: 4,
      title: "Cloud Engineer",
      company: "CloudTech",
      type: "Job",
      location: "Remote",
      salary: "$120,000 - $140,000/year",
      description:
        "Design and implement cloud infrastructure solutions for enterprise clients.",
      skills: ["AWS", "Terraform", "Docker"],
      postedDate: "5 days ago",
      domains: ["Cloud Computing", "DevOps"],
    },
  ]);

  const [locationSearch, setLocationSearch] = useState("");
  const [domainSearch, setDomainSearch] = useState("");
  const [typeSearch, setTypeSearch] = useState("All");
  const [titleSearch, setTitleSearch] = useState("");

  const allDomains = Array.from(
    new Set(opportunities.flatMap((opp) => opp.domains))
  );

  const filteredOpportunities = opportunities.filter((opp) => {
    const interestMatch =
      interests.length === 0 ||
      opp.domains.some((domain) => interests.includes(domain));

    const locationMatch =
      !locationSearch ||
      opp.location.toLowerCase().includes(locationSearch.toLowerCase());

    const domainMatch =
      !domainSearch ||
      opp.domains.some((d) =>
        d.toLowerCase().includes(domainSearch.toLowerCase())
      );

    const typeMatch =
      typeSearch === "All" ||
      opp.type.toLowerCase() === typeSearch.toLowerCase();

    const titleMatch =
      !titleSearch ||
      opp.title.toLowerCase().includes(titleSearch.toLowerCase());

    return (
      interestMatch && locationMatch && domainMatch && typeMatch && titleMatch
    );
  });

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/4 bg-white p-6 rounded-lg shadow-md h-fit sticky top-4">
          <h2 className="text-xl font-bold mb-4 text-gray-800">
            Search Filters
          </h2>
          {/* Filters */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Search by Title
            </label>
            <input
              type="text"
              placeholder="Job title, keywords"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={titleSearch}
              onChange={(e) => setTitleSearch(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <input
              type="text"
              placeholder="City, country or remote"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={locationSearch}
              onChange={(e) => setLocationSearch(e.target.value)}
            />
          </div>
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
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Opportunity Type
            </label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={typeSearch}
              onChange={(e) => setTypeSearch(e.target.value)}
            >
              <option value="All">All Types</option>
              <option value="Internship">Internship</option>
              <option value="Job">Job</option>
            </select>
          </div>

          <button
            onClick={() => {
              setLocationSearch("");
              setDomainSearch("");
              setTypeSearch("All");
              setTitleSearch("");
            }}
            className="w-full py-2 px-4 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md transition-colors"
          >
            Clear Filters
          </button>
        </div>

        {/* Main Content */}
        <div className="w-full md:w-3/4">
          <h1 className="text-3xl font-bold text-center text-gray-900 mb-2">
            Available {interests.length > 0 ? interests.join(" & ") + " " : ""}
            Opportunities
          </h1>
          <p className="text-center text-gray-600 mb-12">
            {interests.length > 0
              ? "Here are opportunities matching your interests"
              : "Browse all available internships and jobs"}
          </p>

          <div className="mb-6 text-gray-600">
            Showing {filteredOpportunities.length}{" "}
            {filteredOpportunities.length === 1 ? "result" : "results"}
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <AnimatePresence>
              {filteredOpportunities.map((opp) => (
                <motion.div
                  key={opp.id}
                  variants={item}
                  layout
                  initial="hidden"
                  animate="show"
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="text-xl font-bold text-gray-800">
                          {opp.title}
                        </h2>
                        <p className="text-gray-600">{opp.company}</p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          opp.type === "Internship"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-green-100 text-green-800"
                        }`}
                      >
                        {opp.type}
                      </span>
                    </div>
                    <motion.div
                      className="mt-4 text-gray-700"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {opp.description}
                    </motion.div>
                    <div className="mt-4 text-gray-600">
                      <p>📍 {opp.location}</p>
                      <p>📅 {opp.postedDate}</p>
                    </div>
                    <div className="mt-4">
                      <strong>Compensation:</strong>{" "}
                      {opp.type === "Internship" ? opp.stipend : opp.salary}
                    </div>
                    <div className="mt-4">
                      <strong>Skills Required:</strong>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {opp.skills.map((skill, index) => (
                          <motion.span
                            key={index}
                            className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.1 * index }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-6">
                      <motion.button
                        onClick={() => handleApplyClick(opp.id)}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Apply Now
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredOpportunities.length === 0 && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray-500 text-lg">
                No opportunities found matching your criteria.
              </p>
              <motion.button
                onClick={() => {
                  setLocationSearch("");
                  setDomainSearch("");
                  setTypeSearch("All");
                  setTitleSearch("");
                }}
                className="mt-4 text-blue-600 hover:underline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Clear all filters
              </motion.button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Internshipsjobs;
