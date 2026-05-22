import {
  RxArrowTopRight,
} from "react-icons/rx";
import { MdOutlinePolicy, MdOutlineAnalytics } from "react-icons/md";
import { BsShieldCheck } from "react-icons/bs";
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const serviceData = [
  {
    Icon: MdOutlinePolicy,
    title: "Software License Advisory",
    description:
      "11 years of IBM & Microsoft audit experience across ASEAN. I help you navigate audit notifications, optimize license costs, and build a defensible SAM process.",
  },
  {
    Icon: BsShieldCheck,
    title: "Vendor Risk Management",
    description:
      "5 years in TPRM at Deloitte. I help design risk frameworks, vendor questionnaires, and run end-to-end third-party assessments — from setup to execution.",
  },
  {
    Icon: MdOutlineAnalytics,
    title: "Data Analytics for Compliance",
    description:
      "Data mining techniques to surface non-compliance before auditors do — turning support logs, usage patterns, and sales signals into actionable compliance insights.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      freeMode
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
            {/* icon */}
            <div className="text-4xl text-accent mb-4">
              <item.Icon aria-hidden />
            </div>
            {/* title & description */}
            <div className="mb-8">
              <div className="mb-2 text-lg">{item.title}</div>
              <p className="max-w-[350px] leading-normal">{item.description}</p>
            </div>
            {/* arrow */}
            <div className="text-3xl">
              <RxArrowTopRight
                className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"
                aria-hidden
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
