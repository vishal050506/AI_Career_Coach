import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";
import { UserAuth } from "../context/AuthContext";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [animate, setAnimate] = useState({
    logo: false,
    navItems: false,
    profile: false,
    coins: false,
    menu: false,
  });
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logIn, signUp, logOut } = UserAuth();

  const handleAuthSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      if (isLogin) {
        await logIn(email, password);
      } else {
        await signUp(email, password);
      }
      setShowAuthModal(false);
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    }
  };

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    // Staggered animations
    const timer1 = setTimeout(
      () => setAnimate((a) => ({ ...a, logo: true })),
      100
    );
    const timer2 = setTimeout(
      () => setAnimate((a) => ({ ...a, navItems: true })),
      300
    );
    const timer3 = setTimeout(
      () => setAnimate((a) => ({ ...a, profile: true })),
      500
    );
    const timer4 = setTimeout(
      () => setAnimate((a) => ({ ...a, coins: true })),
      700
    );
    const timer5 = setTimeout(
      () => setAnimate((a) => ({ ...a, menu: true })),
      900
    );

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, []);

  return (
    <div className="flex items-center justify-between py-0 font-medium">
      {/* Logo with animation */}
      <Link to="/">
        <div
          className={`transition-all duration-500 ease-out ${
            animate.logo
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0"
          }`}
        >
          <img
            src={assets.logo}
            className="w-20 cursor-pointer hover:scale-105 transition-transform"
            loading="lazy"
            alt="Logo"
          />
        </div>
      </Link>

      {/* Animated Navigation Links */}
      <ul className="hidden sm:flex gap-9 text-base text-gray-700">
        {[
          { path: "/", text: "HOME" },
          { path: "/internships/jobs", text: "INTERNSHIPS/JOBS" },
          { path: "/courses", text: "COURSES" },
          { path: "/roadmaps", text: "ROADMAPS" },
          { path: "/contact", text: "CONTACT" },
          { path: "/about", text: "ABOUT" },
        ].map((item, index) => (
          <NavLink
            key={item.path}
            to={item.path}
            className="flex flex-col items-center gap-1"
          >
            <div
              className={`transition-all duration-500 ease-out ${
                animate.navItems
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <p>{item.text}</p>
              <hr
                className={`mx-auto border-none h-[1.5px] bg-gray-700 transition-all duration-300 ${
                  location.pathname === item.path
                    ? "w-2/4 opacity-100"
                    : "w-0 opacity-0"
                }`}
              />
            </div>
          </NavLink>
        ))}
      </ul>

      {/* Right side elements with animations */}
      <div className="flex items-center gap-6">
        <div
          className={`relative group transition-all duration-500 ease-out ${
            animate.profile
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0"
          }`}
        >
          <div className="relative group">
            <img
              onClick={() => {
                if (!user) {
                  navigate("/login");
                }
              }}
              src={assets.profile_icon}
              className="w-10 cursor-pointer hover:scale-110 transition-transform"
              alt="Profile"
              loading="lazy"
            />
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              {user ? "Profile" : "Signup/Login"}
            </span>
          </div>

          {user && (
            <div className="group-hover:block hidden absolute dropdown-menu z-9990 right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded right-0 top-8">
                {/* <Link to="/my-profile">
                  <p className="cursor-pointer hover:text-black">My profile</p>
                </Link> */}
                <p
                  onClick={handleLogout}
                  className="cursor-pointer hover:text-black"
                >
                  Logout
                </p>
                {/* <Link to="/games">
                  <p className="cursor-pointer hover:text-black">Games</p>
                </Link>
                <Link to="/store">
                  <p className="cursor-pointer hover:text-black">Store</p>
                </Link> */}
              </div>
            </div>
          )}
        </div>

        <div
          className={`relative flex flex-row items-center border border-gray-300 rounded-lg p-2 w-24 gap-2 transition-all duration-500 ease-out ${
            animate.coins
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0"
          } hover:shadow-sm`}
        >
          <img src={assets.coins_icon} alt="Coins" className="w-8 min-w-6" />
          <p className="font-medium">{100}CC</p>
        </div>

        <div
          className={`transition-all duration-500 ease-out ${
            animate.menu
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0"
          }`}
        >
          <img
            onClick={() => setVisible(true)}
            src={assets.menu_icon}
            className="w-5 cursor-pointer sm:hidden hover:scale-110 transition-transform"
            alt="Menu"
            loading="lazy"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img
              src={assets.dropdown_icon}
              alt="Dropdown"
              className="h-4 rotate-180"
              loading="lazy"
            />
            <p>Back</p>
          </div>
          <NavLink
            to="/"
            className="py-2 pl-6 border"
            onClick={() => setVisible(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/internships/jobs"
            className="py-2 pl-6 border"
            onClick={() => setVisible(false)}
          >
            INTERNSHIPS/JOBS
          </NavLink>
          <NavLink
            to="/courses"
            className="py-2 pl-6 border"
            onClick={() => setVisible(false)}
          >
            COURSES
          </NavLink>
          <NavLink
            to="/about"
            className="py-2 pl-6 border"
            onClick={() => setVisible(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="py-2 pl-6 border"
            onClick={() => setVisible(false)}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
