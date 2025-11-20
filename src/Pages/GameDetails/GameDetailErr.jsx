import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { FaExclamationTriangle } from "react-icons/fa";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const GameDetailsErr = () => {
    return (

        <div className="flex flex-col justify-between">
            <Header></Header>
            <section className="flex-1">
                <div className="h-screen flex items-center justify-center bg-[#101010] px-6">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Icon */}
                    <FaExclamationTriangle className="text-yellow-400 text-6xl mx-auto mb-6" />

                    {/* 404 Text */}
                    <h1 className="text-6xl font-bold text-white mb-4">404</h1>
                    <p className="text-xl text-gray-400 mb-8">
                        Oops! The game is not existed or may be deleted.
                    </p>

                    {/* Back to Home Button */}
                    <Link
                        to="/games"
                        className="inline-block px-6 py-3 bg-[#00ff80] text-black font-semibold rounded-full shadow-lg hover:bg-[#00cc66] transition-all duration-300"
                    >
                        Games
                    </Link>
                </motion.div>

            </div>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default GameDetailsErr;
