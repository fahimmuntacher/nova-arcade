import React from 'react';
import "../home.css";
import deco from "../../../assets/h1_deco.png";
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router';
import { FaArrowRight } from 'react-icons/fa';
import CountUp from 'react-countup';
import { motion } from "framer-motion";

const HomeAbout = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-white rounded-t-[50px] sm:rounded-t-[70px] relative -top-10 sm:-top-16 z-40 shadow-xl pb-20 sm:pb-45"
    >
      {/* 🔹 Marquee Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Marquee speed={70}>
          <div className="pt-10 sm:pt-30 flex items-center gap-6 sm:gap-10">
            {["Art direction", "Game development", "Game design", "Multiplatform development"].map(
              (text, idx) => (
                <React.Fragment key={idx}>
                  <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-7xl font-extrabold uppercase whitespace-nowrap text-black">
                    {text}
                  </h1>
                  <img src={deco} alt="" className="w-8 sm:w-auto mr-10" />
                </React.Fragment>
              )
            )}
          </div>
        </Marquee>
      </motion.div>

      {/* 🔹 About Section */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-10 mt-10 sm:mt-20 px-4 sm:px-8">
        {/* Left side */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold uppercase text-gray-400 leading-snug">
            <span className="text-black">NovaArcade</span> is your ultimate destination for discovering and supporting{" "}
            <span className="text-black">indie games</span>. Play, discover, and connect — all in one place!
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-10 mt-8 sm:mt-10 h-fit">
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              src="https://i.ibb.co.com/BVtbHsB5/annie-spratt-MCh-SQHx-GZr-Q-unsplash.jpg"
              alt=""
              className="w-full md:w-[200px] lg:w-[250px] rounded-2xl object-cover shadow-lg"
            />

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <h3 className="text-base sm:text-lg text-gray-500 font-medium">
                Your premier destination for discovering, playing, and supporting indie games from creators around the
                world. In today’s fast-paced digital landscape, mainstream games dominate the market, but there exists a
                vibrant community of independent developers pouring their creativity, passion, and innovation into
                projects that deserve recognition.
              </h3>

              <Link to="/about">
                <motion.h2
                  whileHover={{ x: 5 }}
                  className="text-base sm:text-lg font-extrabold uppercase mt-3 sm:mt-2.5 hover:text-green-400 cursor-pointer flex items-center justify-center md:justify-start gap-2.5 text-black"
                >
                  More About Us <span className="text-green-400"><FaArrowRight /></span>
                </motion.h2>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* 🔹 Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 mt-10 lg:mt-0"
        >
          <div className="text-center flex flex-col h-full justify-between gap-10 sm:gap-30">
            {[
              { end: 10, text: "years supporting indie developers", suffix: "+" },
              { end: 50, text: "games featured in the library", suffix: "+" },
              { end: 5, text: "downloads of all-time games", suffix: "M+" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-transparent stroke-text">
                  <CountUp start={0} end={item.end} duration={3} />{item.suffix}
                </h1>
                <p className="mt-2 text-base sm:text-lg text-gray-800 font-bold">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HomeAbout;



// import React from 'react';
// import "../home.css";
// import deco from "../../../assets/h1_deco.png";
// import Marquee from 'react-fast-marquee';
// import { Link } from 'react-router';
// import { FaArrowRight } from 'react-icons/fa';
// import CountUp from 'react-countup';

// const HomeAbout = () => {
//     return (
//         <div className='bg-white rounded-t-[50px] sm:rounded-t-[70px] relative -top-10 sm:-top-16 z-40 shadow-xl pb-20 sm:pb-45'>
//             {/* Marquee Section */}
//             <Marquee speed={70}>
//                 <div className='pt-10 sm:pt-30 flex items-center gap-6 sm:gap-10'>
//                     <h1 className='text-xl sm:text-3xl md:text-5xl lg:text-7xl font-extrabold uppercase whitespace-nowrap'>Art direction</h1>
//                     <img src={deco} alt="" className='w-8 sm:w-auto' />
//                     <h1 className='text-xl sm:text-3xl md:text-5xl lg:text-7xl font-extrabold uppercase whitespace-nowrap'>Game development</h1>
//                     <img src={deco} alt="" className='w-8 sm:w-auto' />
//                     <h1 className='text-xl sm:text-3xl md:text-5xl lg:text-7xl font-extrabold uppercase whitespace-nowrap'>Game design</h1>
//                     <img src={deco} alt="" className='w-8 sm:w-auto' />
//                     <h1 className='text-xl sm:text-3xl md:text-5xl lg:text-7xl font-extrabold uppercase whitespace-nowrap'>Multiplatform development</h1>
//                     <img src={deco} alt="" className='w-8 sm:w-auto mr-5 sm:mr-10' />
//                 </div>
//             </Marquee>

//             {/* About Section */}
//             <div className='max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-10 mt-10 sm:mt-20 px-4 sm:px-8'>
//                 {/* Left side */}
//                 <div className='w-full lg:w-1/2'>
//                     <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold uppercase text-gray-400 leading-snug'>
//                         <span className='text-black'>NovaArcade</span> is your ultimate destination for discovering and supporting <span className='text-black'>indie games</span>. Play, discover, and connect — all in one place!
//                     </h2>

//                     <div className='flex flex-col md:flex-row items-center gap-6 sm:gap-10 mt-8 sm:mt-10 h-fit'>
//                         <img
//                             src="https://i.ibb.co.com/BVtbHsB5/annie-spratt-MCh-SQHx-GZr-Q-unsplash.jpg"
//                             alt=""
//                             className='w-full md:w-[200px] lg:w-[250px] rounded-2xl object-cover'
//                         />
//                         <div className='text-center md:text-left'>
//                             <h3 className='text-base sm:text-lg text-gray-500 font-medium'>
//                                 Your premier destination for discovering, playing, and supporting indie games from creators around the world. In today’s fast-paced digital landscape, mainstream games dominate the market, but there exists a vibrant community of independent developers pouring their creativity, passion, and innovation into projects that deserve recognition.
//                             </h3>

//                             <Link to="/about">
//                                 <h2 className='text-base sm:text-lg font-extrabold uppercase mt-3 sm:mt-2.5 hover:text-green-400 cursor-pointer flex items-center justify-center md:justify-start gap-2.5'>
//                                     More About Us <span className='text-green-400'><FaArrowRight /></span>
//                                 </h2>
//                             </Link>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Statistics */}
//                 <div className='w-full lg:w-1/2 mt-10 lg:mt-0'>
//                     <div className="text-center flex flex-col h-full justify-between gap-10 sm:gap-30">
//                         <div>
//                             <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-transparent stroke-text">
//                                 <CountUp start={1} end={10} duration={3} />+
//                             </h1>
//                             <p className="mt-2 text-base sm:text-lg text-gray-800 font-bold">years supporting indie developers</p>
//                         </div>

//                         <div>
//                             <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-transparent stroke-text">
//                                 <CountUp start={1} end={50} duration={3} />+
//                             </h1>
//                             <p className="mt-2 text-base sm:text-lg text-gray-800 font-bold">games featured in the library</p>
//                         </div>

//                         <div>
//                             <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-transparent stroke-text">
//                                 <CountUp start={1} end={5} duration={5} />M+
//                             </h1>
//                             <p className="mt-2 text-base sm:text-lg text-gray-800 font-bold">downloads of all-time games</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default HomeAbout;


