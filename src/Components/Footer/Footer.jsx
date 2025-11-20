import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub, FaArrowUp } from "react-icons/fa";
import logo from "../../assets/logo.jpg";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return alert("Please enter your email!");
    alert(`Subscribed with: ${email}`);
    setEmail("");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-black text-white border-t border-[#1f1f1f] relative"
    >

      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-12 flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Logo & Description */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Link to="/">
            <img className="w-[150px] mb-3" src={logo} alt="NovaArcade Logo" />
          </Link>
          <p className="text-gray-400 max-w-xs">
            Discover, play, and explore all your favorite games in one place. Stay updated with the latest releases!
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row gap-12">
          <div>
            <h3 className="font-bold text-white mb-2">Pages</h3>
            <ul className="space-y-1">
              <li>
                <Link to="/" className="hover:text-[#00ff80] transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/games" className="hover:text-[#00ff80] transition-colors">Games</Link>
              </li>
              <li>
                <Link to="/developers" className="hover:text-[#00ff80] transition-colors">Developers</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#00ff80] transition-colors">About</Link>
              </li>
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div className="flex flex-col gap-4 ">
            <h3 className="font-bold text-white mb-2">Follow Us</h3>
            <div className="flex gap-4 mb-4">
              <a href="#" className="hover:text-[#00ff80] transition-colors"><FaFacebookF /></a>
              <a href="#" className="hover:text-[#00ff80] transition-colors"><FaTwitter /></a>
              <a href="#" className="hover:text-[#00ff80] transition-colors"><FaInstagram /></a>
              <a href="#" className="hover:text-[#00ff80] transition-colors"><FaGithub /></a>
            </div>

            <div className="hidden md:block">
              <h3 className="font-bold text-white mb-2">Newsletter</h3>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 rounded-l-full border border-gray-600 bg-[#101010] text-white focus:outline-none focus:ring-2 focus:ring-[#00ff80]"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[#00ff80] text-black font-semibold rounded-r-full hover:bg-green-400 transition-all"
              >
                Subscribe
              </button>
            </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#1f1f1f] text-gray-500 text-sm text-center py-4 relative">
        &copy; {new Date().getFullYear()} NovaArcade. All rights reserved.
        <button
          onClick={scrollToTop}
          className="absolute text-2xl right-6 top-1/2 transform -translate-y-1/2 text-[#00ff80] hover:text-green-400 transition-colors"
        >
          <FaArrowUp />
        </button>
      </div>
    </motion.footer>
  );
};

export default Footer;
