import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Myprofile from "./pages/Myprofile";
import Store from "./pages/Store";
import Games from "./pages/Games";
import About from "./pages/About";
import Internshipsjobs from "./pages/Internshipsjobs";
import Courses from "./pages/Courses";
import TermConditions from "./pages/TermConditions";
import Footer from "./components/Footer";
// import SearchBar from "./components/SearchBar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Roadmaps from "./pages/Roadmaps";
import { assets } from "./assets/assets";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // --------------Simulate a loading effect-----------------------------
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000); // Adjust timeout as needed
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <div className="loader"></div>
          <img
            src={assets.logo}
            className="w-40 cursor-pointer"
            loading="lazy"
          />
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------------

  return (
    <>
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[7vw]">
        <ToastContainer />
        <Navbar />
        {/* <SearchBar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/my-profile" element={<Myprofile />} />
          <Route path="/store" element={<Store />} />
          <Route path="/games" element={<Games />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/internships/jobs" element={<Internshipsjobs />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/roadmaps" element={<Roadmaps />} />
          {/* <Route path="/reset-password" element={<ResetPassword />} /> */}
          <Route path="/terms-conditions" element={<TermConditions />} />
        </Routes>
        {/* <NewsletterBox /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
