import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const workSlides = [
  {
    title: "Software Risk Assessment Matrix",
    path: "/thumb4.jpg",
  },
  {
    title: "AI Training for Business Professionals",
    path: "/thumb5.png",
  },
  {
    title: "Data Mining Algorithm",
    path: "/thumb3.jpg",
  },
  {
    title: "Third-Party Risk Management",
    path: "/thumb2.jpg",
  },
];

const WorkSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
      }}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="relative rounded-lg overflow-hidden group h-full">
            <Image
              src={item.path}
              alt={item.title}
              fill
              className="object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"
              aria-hidden
            />
            <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-6 transition-all duration-300 px-4">
              <div className="text-[13px] tracking-[0.2em] text-white">
                {item.title}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;