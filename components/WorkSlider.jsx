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
      {/* DESKTOP — original 2x2 grid dengan hover effect */}
      <div className="hidden sm:block">
        <Swiper
          spaceBetween={10}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="h-[480px]"
        >
          {workSlides.slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full">
                {slide.images.map((image, imageI) => (
                  <div
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                    key={imageI}
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group w-full h-full">
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
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300 px-4">
                        <div className="text-[13px] tracking-[0.2em] text-white">
                          {image.title}
                        </div>
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
          className="h-[300px]"
        >
          {workSlides.slides[0].images.map((image, i) => (
            <SwiperSlide key={i}>
              <div className="relative rounded-lg overflow-hidden w-full h-full">
                <Image
                  src={image.path}
                  alt={image.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-4 py-3">
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