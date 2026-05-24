import {
  RxArrowTopRight,
} from "react-icons/rx";
import { MdOutlinePolicy, MdOutlineAnalytics } from "react-icons/md";
import { BsShieldCheck } from "react-icons/bs";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const serviceData = [
  {
    Icon: MdOutlinePolicy,
    title: "Software Licensing",
    description:
      "12+ years performing software license audits across ASEAN, working with some of the largest software publishers in the industry. I know how publishers build their audit cases, and how to navigate the process to reach fair and defensible outcomes for your organization.",
  },
  {
    Icon: BsShieldCheck,
    title: "Vendor Risk Management",
    description:
      "Built and led Deloitte's first TPRM managed services team in Malaysia. I understand both sides of the assessment — what good vendor controls look like and what gaps genuinely matter to your business versus what is just noise.",
  },
  {
    Icon: MdOutlineAnalytics,
    title: "Data Analytics for Business Insight",
    description:
      "Data has been the core of my work since day one — from mining support logs to identify license exposure to building SQL-based tools that cut reporting time by 60%. I use data to find what others miss and turn it into decisions that hold up.",
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
