import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-[#1a1a1a] flex justify-center items-center px-4"
    >
      <div className="bg-[#101010] border border-[#1f1f1f] rounded-3xl p-8 sm:p-10 w-full max-w-lg shadow-xl text-white">
        <title>Contact Us | NovaArcade</title>
        <h1 className="text-4xl font-extrabold text-center mb-6 text-[#00ff80]">
          Get in Touch
        </h1>
        <p className="text-center text-gray-400 mb-8">
          Have questions or feedback? Send us a message below 💬
        </p>

        <form className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm text-gray-400 mb-2">Your Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              className="w-full px-5 py-3 rounded-full border border-gray-600 bg-[#1a1a1a] text-white focus:outline-none focus:ring-2 focus:ring-[#00ff80] transition-all duration-300"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-400 mb-2">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full px-5 py-3 rounded-full border border-gray-600 bg-[#1a1a1a] text-white focus:outline-none focus:ring-2 focus:ring-[#00ff80] transition-all duration-300"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm text-gray-400 mb-2">Message</label>
            <textarea
              name="message"
              required
              placeholder="Write your message..."
              rows="4"
              className="w-full px-5 py-3 rounded-2xl border border-gray-600 bg-[#1a1a1a] text-white focus:outline-none focus:ring-2 focus:ring-[#00ff80] transition-all duration-300 resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-full bg-[#00ff80] text-black font-bold text-lg hover:bg-[#00cc66] transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;
