import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const workSlides = {
  slides: [
    {
      images: [
        { title: "Software Risk Assessment Matrix", path: "/thumb4.jpg" },
        { title: "AI Training for Business Professionals", path: "/thumb5.jpg" },
        { title: "Data Mining Algorithm", path: "/thumb3.jpg" },
        { title: "Third-Party Risk Management", path: "/thumb2.jpg" },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <>
      {/* DESKTOP — 2x2 grid dengan hover effect */}
      <div className="hidden sm:block">
        <Swiper
          spaceBetween={10}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="h-[480px]"
        >
          {workSlides.slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className="grid grid-cols-2 gap-4 h-full">
                {slide.images.map((image, imageI) => (
                  <div
                    className="relative rounded-lg overflow-hidden group"
                    key={imageI}
                  >
                    <Image
                      src={image.path}
                      alt={image.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"
                      aria-hidden
                    />
                    <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 transition-all duration-300 px-4">
                      <div className="text-[13px] tracking-[0.2em] text-white">
                        {image.title}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* MOBILE — slider satu per satu */}
      <div className="sm:hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={15}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="h-auto pb-8"
        >
          {workSlides.slides[0].images.map((image, i) => (
            <SwiperSlide key={i}>
              <div className="rounded-lg overflow-hidden bg-[rgba(65,47,123,0.15)]">
                <Image
                  src={image.path}
                  alt={image.title}
                  width={700}
                  height={500}
                  style={{ width: "100%", height: "auto" }}
                />
                <div className="bg-black/60 px-4 py-2">
                  <div className="text-xs tracking-[0.1em] text-white font-medium">
                    {image.title}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default WorkSlider;