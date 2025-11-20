import React, { useContext, useState } from "react";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { FiLogIn } from "react-icons/fi";
import logo from "../../../assets/logo.jpg"
import "../../../index.css"
import { AuthContext } from "../../../Context/AuthProvider";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {user} = useContext(AuthContext);

  const list = [
    { id: "1", title: "Home", path: "/" },
    { id: "2", title: "Games", path: "/games" },
    { id: "3", title: "Developers", path: "/developers" },
    { id: "4", title: "About", path: "/about" },
    { id: "5", title: "Contact", path: "/contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 font-poppins shadow-base-300">
      <div className="bg-black flex justify-between items-center px-6 py-3 shadow-sm">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="" className=" h-10 md:h-[60px] w-full rounded-2xl" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex space-x-8 text-white text-lg font-medium">
            {list.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#00ff80] transition-colors duration-300 border-b"
                      : "text-white hover:text-[#00ff80] transition-colors duration-300"
                  }
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Login Button */}
        <div className="hidden md:flex">
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link
          to={user ? "/my-profile" : "/login"}
          className={`flex items-center gap-3 px-6 py-3 rounded-full font-semibold text-xl shadow-lg transition-all duration-300 ${
            user
              ? "bg-[#101010] text-white hover:bg-[#00ff80] hover:text-black"
              : "bg-[#00ff80] text-black hover:bg-[#101010] hover:text-white"
          }`}
        >
          {user ? (
            <>
              <FaUserCircle className="text-2xl" />
              <span>My Profile</span>
            </>
          ) : (
            <>
              <FiLogIn className="text-2xl" />
              <span>Login</span>
            </>
          )}
        </Link>
      </motion.div>
    </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-white text-2xl cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            className="md:hidden fixed top-16 left-0 w-full h-screen bg-neutral bg-opacity-90 backdrop-blur-md flex flex-col items-center justify-center space-y-8 text-white text-2xl z-50"
          >
            {list.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                
              >
                <NavLink 
                to={item.path} 
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                    isActive
                      ? "text-[#00ff80] transition-colors duration-300 border-b"
                      : "text-white hover:text-[#00ff80] transition-colors duration-300"
                  }>
                  {item.title}
                </NavLink>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: list.length * 0.1 }}
            >
             <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link
          to={user ? "/my-profile" : "/login"}
          onClick={() => setIsOpen(false)}
          className={`flex items-center gap-3 px-6 py-3 rounded-full font-semibold text-xl shadow-lg transition-all duration-300 ${
            user
              ? "bg-[#101010] text-white hover:bg-[#00ff80] hover:text-black"
              : "bg-[#00ff80] text-black hover:bg-[#101010] hover:text-white"
          }`}
        >
          {user ? (
            <>
              <FaUserCircle className="text-2xl" />
              <span>My Profile</span>
            </>
          ) : (
            <>
              <FiLogIn className="text-2xl" />
              <span>Login</span>
            </>
          )}
        </Link>
      </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
};

export default Navbar;
