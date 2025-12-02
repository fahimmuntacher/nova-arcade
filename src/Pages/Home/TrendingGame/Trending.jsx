import React from "react";
import { motion } from "framer-motion";
import useData from "../../../Hooks/useData";
import "../home.css";
import { Link } from "react-router";
import LoadingSpinner from "../../../Components/Loading/LoadingSpinner";

const Trending = () => {
  const { games, loading, error } = useData();

  if (loading)
    return (
     <LoadingSpinner></LoadingSpinner>
    );
  if (error)
    return (
      <p className="text-center text-red-500 text-xl py-10">
        Failed to load games 😢
      </p>
    );

  const trendingGames = games.slice(0, 8);

  return (
    <section className="relative bg-linear-to-b from-[#050505] via-[#0a0a0a] to-black rounded-t-[40px] sm:rounded-t-[70px] sm:-mt-16 -top-18 z-40 shadow-[0_0_30px_rgba(0,255,128,0.2)] border-t border-[#00ff80] overflow-hidden pb-50">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="text-center text-4xl sm:text-5xl font-extrabold mt-12 mb-10"
      >
        <span className="text-[#00ff80]">TRENDING</span>{" "}
        <span className=" outline-text">GAMES</span>
      </motion.h2>

      {/* Game Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 px-15 sm:px-10 md:px-16">
        {trendingGames.map((game, i) => (
          <motion.div
            key={game.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="relative bg-[#101010] rounded-3xl overflow-hidden shadow-lg border border-[#1f1f1f] hover:border-[#00ff80]/50 transition-all duration-300"
          >
            <div className="overflow-hidden">
              <img
                src={game.coverPhoto}
                alt={game.title}
                className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-4 sm:p-5">
              <h3 className="text-white font-semibold text-lg truncate">
                {game.title}
              </h3>
              <p className="text-gray-400 text-sm mt-1 capitalize">
                {game.category} | Rating: <span className="text-yellow-300">{game.ratings}</span>
              </p>
             <Link to={`/game-details/${game.id}`}>
                 <motion.button
                whileHover={{
                  backgroundColor: "#00ff80",
                  color: "#000",
                  scale: 1.05,
                }}
                className="mt-4 px-4 py-2 border border-[#00ff80] text-[#00ff80] rounded-full text-sm font-medium transition-colors duration-300 cursor-pointer"
              >
                Explore
              </motion.button>
             </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* See All Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-center mt-12"
      >
        <Link to="/games">
            <button className="relative inline-block px-8 py-3 text-black font-semibold bg-[#00ff80] rounded-full overflow-hidden group cursor-pointer">
          <span className="absolute inset-0 bg-linear-to-r from-[#00ff80] via-[#00ffcc] to-[#00ff80] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          <span className="relative group-hover:text-black">See All Games →</span>
        </button>
        </Link>
      </motion.div>
    </section>
  );
};

export default Trending;
