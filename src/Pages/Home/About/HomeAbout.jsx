import React from "react";
import "../home.css";
import deco from "../../../assets/h1_deco.png";
import Marquee from "react-fast-marquee";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const HomeAbout = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white rounded-t-[60px] sm:rounded-t-[90px] relative -top-8 z-40 shadow-xl pb-20 sm:pb-32 px-4 sm:px-8 lg:px-16"
    >
      {/* MARQUEE */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="border-b border-gray-200 pb-8 sm:pb-14"
      >
        <Marquee speed={60} gradient={false}>
          <div className="pt-8 sm:pt-16 flex items-center gap-8 sm:gap-14">
            {["Art direction", "Game development", "Game design", "Multiplatform development"].map((text, i) => (
              <React.Fragment key={i}>
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold uppercase whitespace-nowrap text-black">
                  {text}
                </h1>
                <img
                  src={deco}
                  alt=""
                  className="w-6 sm:w-8 md:w-10 lg:w-12 opacity-70"
                />
              </React.Fragment>
            ))}
          </div>
        </Marquee>
      </motion.div>

      {/* MAIN SECTION */}
      <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 lg:grid-cols-2 gap-20 px-2 sm:px-4 lg:px-8">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col justify-start w-full"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-snug text-gray-500">
            <span className="text-black">NovaArcade</span> is your ultimate destination for discovering and supporting{" "}
            <span className="text-black">indie games</span>. Play, discover & connect all in one place!
          </h2>

          <div className="mt-10 flex flex-col md:flex-row items-center gap-10">
            {/* IMAGE CARD */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-xl bg-white/60 backdrop-blur-lg border border-gray-200"
            >
              <img
                src="https://i.ibb.co.com/BVtbHsB5/annie-spratt-MCh-SQHx-GZr-Q-unsplash.jpg"
                alt="about"
                className="w-full md:w-60 lg:w-[280px] h-full object-cover"
              />
            </motion.div>

            {/* TEXT */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                We spotlight indie developers building the next generation of creative experiences. 
                NovaArcade empowers creators by giving them a dedicated space where passion meets discovery.
              </p>

              <Link to="/about">
                <motion.h2
                  whileHover={{ x: 6 }}
                  className="text-base sm:text-lg font-extrabold uppercase mt-4 cursor-pointer flex items-center justify-center md:justify-start gap-2 text-black hover:text-green-500"
                >
                  More About Us <FaArrowRight className="text-green-500" />
                </motion.h2>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT STATS */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full flex flex-col items-center justify-center"
        >
          <div className="text-center flex flex-col gap-16 w-full">
            {[
              { end: 10, text: "years supporting indie developers", suffix: "+" },
              { end: 50, text: "games featured in the library", suffix: "+" },
              { end: 5, text: "downloads of all-time games", suffix: "M+" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-transparent stroke-text">
                  <CountUp start={0} end={item.end} duration={3} />
                  {item.suffix}
                </h1>
                <p className="mt-3 text-base sm:text-lg text-gray-800 font-semibold">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HomeAbout;
