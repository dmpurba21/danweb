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
    path: "/thumb5.jpg",
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
      className="h-[300px] sm:h-[400px]"
    >
      {workSlides.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="relative rounded-lg overflow-hidden w-full h-full">
            <Image
              src={item.path}
              alt={item.title}
              fill
              style={{ objectFit: "contain" }}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 px-3 py-2">
              <div className="text-xs tracking-[0.1em] text-white">
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