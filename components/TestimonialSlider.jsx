import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { FaQuoteLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonialData = [
  {
    message:
      "I worked with Daniel during my time at IBM when he was the assigned Deloitte partner to my client base in ASEAN. I experienced Daniel as a highly professional and very organised individual. With his attention to detail he used to be an invaluable asset to our operations. Daniel's spectrum of knowledge and interests went far beyond what was required for his day to day activities and that further deepened our relationship and the interactions with our clients. Working with Daniel constitutes a value in itself, independent of the outcome.",
    name: "Roman Laal R.",
    position: "Service Account Executive, Software License Compliance",
    date: "Jan 2024",
  },
  {
    message:
      "I worked with Daniel at IBM. We were engaged for a compliance deal — totally complex and challenging — but with Daniel's leadership we closed it smoothly. His reputation, flexibility, strong communication with the customer, and responsiveness helped us reach a win-win solution. Highly recommend.",
    name: "Caroline P.",
    position: "Director",
    date: "",
  },
  {
    message:
      "I had the pleasure of hiring Daniel to promote my product, and I couldn't be more pleased with the results. His speed, punctuality, and the amazing outcome of the campaign he ran in less than 8 hours truly exceeded my expectations. Thanks to Daniel's efforts, I gained three valuable leads in just one day. I highly recommend him for anyone looking for a dedicated and effective freelancer to elevate their product promotion strategies.",
    name: "Kemadhipie K.",
    position: "Head of Sales Marketing, Indonesia",
    date: "",
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      className="h-[340px] xl:h-[280px]"
    >
      {testimonialData.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16 max-w-[900px] mx-auto">
            {/* quote & message */}
            <div className="flex-1 flex flex-col justify-center">
              <FaQuoteLeft className="text-4xl text-accent mb-4 mx-auto md:mx-0" />
              <p className="text-white/60 leading-relaxed text-sm md:text-base text-center md:text-left">
                {item.message}
              </p>
            </div>
            {/* name & position */}
            <div className="flex flex-col items-center md:items-start w-full md:w-[240px] flex-shrink-0 mt-6 md:mt-0">
              <div className="w-12 h-[2px] bg-accent mb-4" />
              <div className="text-lg font-semibold text-white">
                {item.name}
              </div>
              <div className="text-sm text-accent">{item.position}</div>
              {item.date && (
                <div className="text-xs text-white/40 mt-1">{item.date}</div>
              )}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
