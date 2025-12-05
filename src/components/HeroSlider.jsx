import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper"; 
import "swiper/css";
import "swiper/css/pagination";

import "swiper/css/navigation";



const slides = [
  {
    id: 1,
    title: "Keep Your Pets Cozy",
    description: "Discover the best winter outfits for your furry friends.",
    image: "https://i.ibb.co.com/mFrQ74p6/pile-woolen-clothes-cat-preparing-winter-wrapped-up-36755778.webp",
  },
  {
    id: 2,
    title: "Professional Grooming",
    description: "Protect your pet's paws and fur from harsh winter cold.",
    image: "https://i.ibb.co.com/VYQSCKJX/collage-made-different-people-posing-their-dressed-up-dogs-celebrating-winter-warmth-love-pets-banne.webp",
  },
  {
    id: 3,
    title: "Healthy Winter Tips",
    description: "Expert advice to keep your pets safe and happy this season.",
    image: "https://i.ibb.co.com/ZzRgTH1r/Keep-your-pets-safe-from-the-weather.jpg",
  },
];



export default function HeroSlider() {
  return (
    <div className="w-full max-w-7xl mx-auto py-8">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]} 
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        className="rounded-lg overflow-hidden shadow-lg"
      >



        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-64 md:h-96 bg-gray-100">
              <img 
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover "
              />
              <div className="absolute inset-0 bg-{} bg-opacity-40 flex flex-col justify-center items-start p-6 md:p-12">
                <h2 className="text-white text-xl md:text-4xl font-bold mb-2">{slide.title}</h2>
                <p className="text-white text-sm md:text-lg">{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

