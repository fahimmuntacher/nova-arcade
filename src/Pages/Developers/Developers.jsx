import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import LoadingSpinner from "../../Components/Loading/LoadingSpinner";

const Developer = () => {
  const [developers, setDevelopers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get("/developersdata.json")
      .then(res => setDevelopers(res.data))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, []);


  if (loading)
    return (<LoadingSpinner></LoadingSpinner>);

  if (error)
    return (
      <p className="text-center text-red-500 text-xl py-10">
        Developers Not Alive 😢
      </p>
    );

  return (
    <section className="bg-[#101010] min-h-screen py-16 px-6 sm:px-10 md:px-16">
      <title>Developers</title>
      <motion.h1
        className="text-5xl font-extrabold text-[#00ff80] text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Game Developers
      </motion.h1>
    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        {developers.map((dev, i) => (
          <motion.div
            key={dev.id}
            className="bg-[#1f1f1f] rounded-3xl overflow-hidden shadow-lg border border-[#2a2a2a] p-10 hover:border-[#00ff80] transition-all duration-300 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="w-full h-48 mb-4">
              <img
                src={dev.photo}
                alt={dev.name}
                className="w-full h-full object-cover rounded-t-3xl"
              />
            </div>
            <h3 className="text-white font-bold text-xl mb-2">{dev.name}</h3>
            <p className="text-gray-400 mb-2">
              Games: {dev.games.join(", ")}
            </p>
            <a
              href={dev.website}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 mt-2 bg-[#00ff80] text-black font-semibold rounded-full shadow-md transition-all duration-300 hover:bg-green-400"
            >
              Visit Website
            </a>
          </motion.div>

        ))}
      </div>
    </section>
  );
};

export default Developer;
