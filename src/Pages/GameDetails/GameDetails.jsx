
import React from "react";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router";
import { FaStar } from "react-icons/fa";
import useData from "../../Hooks/useData";
import { BiArrowBack, BiDownload } from "react-icons/bi";
import GameDetailsErr from "./GameDetailErr";
import LoadingSpinner from "../../Components/Loading/LoadingSpinner";

const GameDetails = () => {
    const { id } = useParams();
    const { games, loading, error } = useData();
    const navigate = useNavigate()

    if (loading)
        return (
            <LoadingSpinner></LoadingSpinner>
        );

    if (error)
        return (
            <p className="text-center text-red-500 text-xl py-10">
                Failed to load game details 😢
            </p>
        );

    const game = games.find((g) => g.id === id);
    
    return (
        <motion.section
            className="max-w-7xl mx-auto my-16 px-6 sm:px-10 md:px-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className="bg-[#101010] rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row gap-8">
                {/* Game Image */}
                <motion.img
                    src={game.coverPhoto}
                    alt={game.title}
                    className="w-full md:w-1/2 h-80 md:h-auto object-cover"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                />

                {/* Game Info */}
                <motion.div
                    className="p-6 md:p-10 flex flex-col justify-between"
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div>
                        <title>{game.title}</title>
                        <h1 className="text-4xl sm:text-5xl md:w-11/12 lg:w-full font-extrabold text-[#00ff80] mb-4">
                            {game.title}
                        </h1>
                        <p className="text-gray-400 text-lg mb-2 capitalize">
                            Category: {game.category}
                        </p>
                        <p className="text-gray-400 text-lg mb-2">
                            Developer: {game.developer}
                        </p>
                        <p className="flex items-center text-yellow-400 mb-4">
                            <FaStar className="mr-2" /> {game.ratings} / 5
                        </p>

                        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                            {game.description}
                        </p>
                    </div>

                    <div className="mt-6 flex md:w-10/12 lg:w-full gap-5">
                        <motion.a
                            href={game.downloadLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            className=" px-8 py-4 bg-[#00ff80] text-black font-semibold rounded-full shadow-lg transition-all duration-300 flex justify-center items-center gap-4 text-xl w-1/2"
                        >
                            <BiDownload></BiDownload> Download
                        </motion.a>
                        <motion.button
                            onClick={() => navigate(-1)} 
                            whileHover={{ scale: 1.05, backgroundColor: "#00ff80", color: "#000" }}
                            className="flex items-center justify-center gap-3 px-8 py-4 bg-[#101010] text-white font-semibold rounded-full shadow-lg transition-all duration-300 text-xl w-1/2 mx-auto cursor-pointer"
                        >
                            <BiArrowBack className="text-2xl" />
                            Back
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default GameDetails;



