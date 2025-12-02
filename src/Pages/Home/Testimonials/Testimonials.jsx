import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonialsData = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Pro Gamer",
    avatar: "https://cutt.ly/3tugKzzr",
    feedback:
      "NovaArcade has completely changed the way I discover indie games. The curation and community are top-notch!",
    rating: 5,
  },
  {
    id: 2,
    name: "Samantha Lee",
    role: "Game Designer",
    avatar: "https://cutt.ly/5tugKMIr",
    feedback:
      "A truly immersive platform! I found amazing indie titles I would never have discovered otherwise.",
    rating: 4,
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Streamer",
    avatar: "https://cutt.ly/UtugLWCp",
    feedback:
      "Love the variety and quality of games. NovaArcade keeps me entertained and engaged with my community.",
    rating: 5,
  },
  {
    id: 4,
    name: "Raisa Yasser",
    role: "Indie Developer",
    avatar: "https://cutt.ly/FtugZF6e",
    feedback:
      "The support and exposure I got through NovaArcade was phenomenal. Highly recommended to all indie developers!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="relative bg-black rounded-t-[40px] sm:rounded-t-[70px] sm:-mt-16 -top-38 z-40 shadow-[0_0_30px_rgba(0,255,142,0.2)] border-t border-[#00ff8e] pb-20 overflow-hidden pt-16 px-4 sm:px-8 lg:px-15">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl font-extrabold text-center mb-14"
      >
        What Our Gamers Say
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {testimonialsData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="bg-[#111] p-6 sm:p-8 rounded-3xl shadow-2xl relative hover:scale-105 transition-transform duration-300 border border-[#00ff8e] flex flex-col justify-between"
          >
            <div className="absolute top-4 left-4 text-green-500 text-2xl sm:text-3xl">
              <FaQuoteLeft />
            </div>

            <p className="text-gray-300 text-base sm:text-lg mb-6 leading-relaxed">
              {item.feedback}
            </p>

            <div className="flex items-center mb-4">
              {[...Array(item.rating)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 mr-1" />
              ))}
            </div>

            <div className="flex items-center gap-4">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-green-500"
              />
              <div>
                <h3 className="text-white font-bold">{item.name}</h3>
                <p className="text-gray-400 text-sm">{item.role}</p>
              </div>
            </div>

            <div className="absolute bottom-4 right-4 text-green-500 text-2xl sm:text-3xl rotate-180">
              <FaQuoteLeft />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
