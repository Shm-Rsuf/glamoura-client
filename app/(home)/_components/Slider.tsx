"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import { data } from "@/data/sliderContents";
import Image from "next/image";

const Slider = () => {
  return (
    <section className="h-[calc(100vh-5rem)]">
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        loop={true}
        speed={500}
        className="mySwiper w-full h-full"
      >
        {
          data && data.length >0 && data.map(slide=>(
            <SwiperSlide key={slide.image} className="w-full h-full">
                <Image width={2700} height={6000} src={slide.image} alt={slide.headings} priority className="w-full h-full object-cover"/>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </section>
  );
};

export default Slider;
