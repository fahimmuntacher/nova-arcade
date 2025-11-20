import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import useData from "../../Hooks/useData";
import { FaRegStar, FaStar } from "react-icons/fa";
import LoadingSpinner from "../../Components/Loading/LoadingSpinner";


const GameLibrary = () => {
  const { games, loading, setLoading, error } = useData();
  const [sortOrder, setSortOrder] = useState("desc");
  const sortedGames = [...games].sort((a, b) =>
    sortOrder === "desc" ? b.ratings - a.ratings : a.ratings - b.ratings
  );

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => setLoading(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [loading, setLoading]);

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

  return (
    <section className="bg-[#252525] min-h-screen pt-10 pb-20 px-6 sm:px-10 md:px-16">
      {/* Page Title */}
      <title>Games Library | NovaArcade</title>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="max-w-7xl mx-auto flex md:flex-row flex-col justify-between items-center mb-10"
      >
        <h1 className="text-5xl sm:text-6xl font-extrabold text-white uppercase">
          All Games
        </h1>

        <button
          onClick={() =>
            setSortOrder(sortOrder === "desc" ? "asc" : "desc")
          }
          className="bg-[#00ff80] px-4 py-2 rounded-lg text-black font-semibold transition-all duration-300 hover:bg-green-400 cursor-pointer"
        >
          Sort by Rating ({sortOrder === "desc" ? "High → Low" : "Low → High"})
        </button>
      </motion.div>

      {/* Games Grid */}



      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 px-6 sm:px-10 md:px-16">
        {sortedGames.map((game, i) => (
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
              <h3 className="text-white font-semibold text-lg truncate">{game.title}</h3>
              <p className="text-gray-400 text-sm mt-1 capitalize">{game.category} | Rating: <span className="text-yellow-300">{game.ratings}</span></p>


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


    </section>
  );
};

export default GameLibrary;
