import React, { useState } from "react";
import login1 from "@/assets/login1.png";
import login2 from "@/assets/login2.png";
import login3 from "@/assets/login3.png";
import logo from "@/assets/Container.png";
import SliderModule from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = (SliderModule as any).default || SliderModule;

const Sliding: React.FC = () => {
  const [slides] = useState([
    {
      img: login1,
      title: "Find Your Perfect Place",
      subtitle: "Discover modern homes built for your lifestyle.",
    },
    {
      img: login2,
      title: "Move Beyond Limits",
      subtitle: "Premium properties and vehicles, all in one place.",
    },
    {
      img: login3,
      title: "Live The Luxury Life",
      subtitle: "Where dream spaces meet dream drives.",
    },
  ]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    pauseOnHover: true,
  };
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute z-20 top-4 left-4">
        <img src={logo} alt="Logo" className="w-auto h-12" />
      </div>
      <Slider {...settings} className="h-screen">
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full h-screen">
            <img
              src={slide.img}
              alt={`Slide ${index + 1}`}
              className="object-cover w-full h-full"
            />

            {/* Overlay for the slide */}
            <div className="absolute inset-0 w-full h-full bg-black opacity-30"></div>

            <div className="absolute inset-0 z-10 flex flex-col justify-center px-8 text-white md:px-16 lg:px-20">
              <h2 className="max-w-xl text-3xl font-semibold md:text-4xl lg:text-5xl">
                {slide.title}
              </h2>
              <p className="max-w-lg mt-4 text-sm text-gray-100 md:text-base lg:text-lg">
                {slide.subtitle}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Sliding;
