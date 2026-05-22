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
      "11 years performing IBM and Microsoft license audits across ASEAN. Navigate audit notifications, set up Software License Management, and optimize costs — before the penalties arrive.",
  },
  {
    Icon: BsShieldCheck,
    title: "Vendor Risk Management",
    description:
      "5 years in Third-Party Risk Management at Deloitte. Build TPRM frameworks, design vendor risk questionnaires, and run assessments — whether you're starting from scratch or short-staffed.",
  },
  {
    Icon: MdOutlineAnalytics,
    title: "Data Analytics for Compliance",
    description:
      "Using data mining techniques to surface non-compliance signals before auditors do — analyzing support logs, sales transactions, and usage patterns to prioritize your compliance activities.",
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
