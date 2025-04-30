import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { XMarkIcon } from "@heroicons/react/24/outline";

const WithoutLogin = ({ onClose }) => {
  const { user } = UserAuth();
  const navigate = useNavigate();
  const [selectedDomains, setSelectedDomains] = useState([]);
  const [selectedGoal, setSelectedGoal] = useState("");
  const [showComponent, setShowComponent] = useState(false);

  // Redirect if user is already logged in
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  // Show component after 2 seconds (only once)
  useEffect(() => {
    const hasBeenShown = localStorage.getItem("withoutLoginShown");
    if (!hasBeenShown) {
      const timer = setTimeout(() => {
        setShowComponent(true);
        localStorage.setItem("withoutLoginShown", "true");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const domains = [
    "Web Development",
    "Data Science",
    "Artificial Intelligence",
    "Cloud Computing",
    "Cybersecurity",
    "Mobile Development",
    "DevOps",
    "Blockchain",
  ];

  const goals = [
    { id: "internships/jobs", label: "Internship" },
    { id: "internships/jobs", label: "Jobs" },
    { id: "courses", label: "Courses" },
    { id: "roadmaps", label: "Roadmaps" },
  ];

  const toggleDomain = (domain) => {
    setSelectedDomains((prev) =>
      prev.includes(domain)
        ? prev.filter((d) => d !== domain)
        : [...prev, domain]
    );
  };

  const handleSubmit = () => {
    if (!selectedDomains.length || !selectedGoal) {
      alert("Please select at least one domain and your goal");
      return;
    }

    localStorage.setItem(
      "userInterests",
      JSON.stringify({
        domains: selectedDomains,
        goal: selectedGoal,
      })
    );

    navigate(`/${selectedGoal}`, {
      state: {
        interests: selectedDomains,
        from: "withoutLogin",
      },
    });
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      navigate("/");
    }
  };

  if (user) {
    return null;
  }

  if (!showComponent) {
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 min-h-screen flex flex-col justify-center relative">
      <div className="bg-blue-50 rounded-xl shadow-xl p-8">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-10 right-8 p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Close"
        >
          <XMarkIcon className="h-8 w-8 text-gray-500" />
        </button>

        <h1 className="text-3xl font-bold text-center mb-8">
          What Are You Looking For?
        </h1>

        {/* Domains Selection */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-4">
            Select Your Areas of Interest
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {domains.map((domain) => (
              <button
                key={domain}
                onClick={() => toggleDomain(domain)}
                className={`px-4 py-2 rounded-full border ${
                  selectedDomains.includes(domain)
                    ? "bg-blue-500 text-white border-blue-500"
                    : "bg-white text-gray-700 border-gray-300 hover:border-blue-400"
                } transition-colors`}
              >
                {domain}
              </button>
            ))}
          </div>
        </div>

        {/* Goal Selection */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-4">
            What Are You Looking For?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {goals.map((goal) => (
              <div
                key={goal.id}
                onClick={() => setSelectedGoal(goal.id)}
                className={`p-4 border rounded-lg cursor-pointer text-center ${
                  selectedGoal === goal.id
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-blue-300"
                } transition-colors`}
              >
                <h3 className="font-medium">{goal.label}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            onClick={handleSubmit}
            disabled={!selectedDomains.length || !selectedGoal}
            className={`px-6 py-3 rounded-lg text-white font-medium ${
              !selectedDomains.length || !selectedGoal
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            } transition-colors`}
          >
            Explore Opportunities
          </button>
        </div>

        {/* Signup/Login Prompt */}
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Want to save your preferences?{" "}
            <button
              onClick={() => navigate("/signup")}
              className="text-blue-600 hover:underline font-medium"
            >
              Create an account
            </button>{" "}
            or{" "}
            <button
              onClick={() => navigate("/login")}
              className="text-blue-600 hover:underline font-medium"
            >
              login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WithoutLogin;
