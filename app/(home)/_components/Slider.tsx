"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import { data } from "@/data/sliderContents";
import Image from "next/image";
import OverLay from "@/components/ui/OverLay";
import Link from "next/link";

const Slider = () => {
  return (
    <section className="h-[calc(100vh-5rem)] w-full">
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
            <SwiperSlide key={slide.image} className="w-full h-full relative">
                <Image width={2700} height={6000} src={slide.image} alt={slide.headings} priority className="w-full h-full object-cover"/>
                <OverLay/>
                <div className="container sp absolute top-0 left-0 right-0 bottom-0 h-full w-full text-white space-y-5 max-w-6xl">
                  <h1>{slide.headings}</h1>
                  <p>{slide.subHeadings}</p>
                  <Link href="/beauty-packages">Browse Beauty Packages</Link>
                </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </section>
  );
};

export default Slider;
