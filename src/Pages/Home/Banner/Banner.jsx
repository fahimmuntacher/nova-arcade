import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Link } from "react-router";
import { MdOutlineArrowOutward } from "react-icons/md";

const Banner = () => {
  const slides = [
    {
      id: 1,
      image:
        "https://i.ibb.co.com/vvPSkJqK/Fortnite-HD-HD-Games-4k-Wallpaper-Image-Background-Photo.jpg",
      title: "Discover Epic Worlds 🌌",
      subtitle: "Explore the best indie and AAA games in one place.",
    },
    {
      id: 2,
      image:
        "https://i.ibb.co.com/NgK7pTkF/4-K-Wallpaper-For-Mobile-1920-X1080-Pubg-Gallery.jpg",
      title: "Join the Battle Today⚔️",
      subtitle: "Experience the thrill of online action and adventure.",
    },
    {
      id: 3,
      image:
        "https://i.ibb.co.com/SX4GqZ1r/40-Call-of-Duty-Wallpapers-Free-download-Best-Collection.jpg",
      title: "Level Up Your Game 🚀",
      subtitle: "Play. Discover. Support. All in one gaming platform.",
    },
  ];

  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="w-full h-[75vh] md:h-[90vh] flex flex-col md:flex-row items-center justify-between bg-black p-6 md:p-12 lg:p-20">
              
              {/* LEFT — FIXED HEIGHT IMAGE */} 
              <div className="w-full md:w-1/2 h-full flex justify-center items-center">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover rounded-2xl shadow-xl"
                />
              </div>

              {/* RIGHT — TEXT */}
              <div className="w-full md:w-1/2 text-white flex flex-col justify-center items-start mt-6 md:mt-0 px-3 md:px-10">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-2xl opacity-90 mb-8 max-w-xl">
                  {slide.subtitle}
                </p>

                <Link to="/games">
                  <button className="px-8 py-4 bg-green-500 hover:bg-blue-500 transition-all duration-300 rounded-xl text-black font-bold text-xl flex items-center gap-3 shadow-xl">
                    View All Games
                    <MdOutlineArrowOutward className="text-3xl" />
                  </button>
                </Link>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
