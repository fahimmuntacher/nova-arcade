import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Link } from "react-router";
import { MdOutlineArrowOutward } from "react-icons/md";


const Banner = () => {
  const slides = [
    {
      id: 1,
      image: 'https://i.ibb.co.com/vvPSkJqK/Fortnite-HD-HD-Games-4k-Wallpaper-Image-Background-Photo.jpg',
      title: 'Discover Epic Worlds 🌌',
      subtitle: 'Explore the best indie and AAA games in one place.',
    },
    {
      id: 2,
      image:
        'https://i.ibb.co.com/NgK7pTkF/4-K-Wallpaper-For-Mobile-1920-X1080-Pubg-Gallery.jpg',
      title: 'Join the Battle ⚔️',
      subtitle: 'Experience the thrill of online action and adventure.',
    },
    {
      id: 3,
      image: 'https://i.ibb.co.com/SX4GqZ1r/40-Call-of-Duty-Wallpapers-Free-download-Best-Collection.jpg',
      title: 'Level Up Your Game 🚀',
      subtitle: 'Play. Discover. Support. All in one gaming platform.',
    },
  ];

  return (
    <div className="w-full relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        navigation
        className="mySwiper h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-[90vh] relative bg-cover bg-center bg-white"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0  bg-opacity-100 flex flex-col justify-center items-center text-center text-white px-5">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl opacity-90 font-medium tracking-wide max-w-2xl mx-auto">
                  {slide.subtitle}
                </p>
                <Link to="/games">
                <button className="mt-6 px-10 py-8 bg-green-400 hover:bg-blue-400 hover:text-white transition-all duration-300 ease-in-out rounded-[10px] text-black text-2xl font-semibold shadow-lg cursor-pointer flex items-center gap-2.5 rounded-br-[45px]">
                View All Games <MdOutlineArrowOutward />

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
