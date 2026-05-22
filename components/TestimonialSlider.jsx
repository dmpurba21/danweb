import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import { FaQuoteLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const testimonialData = [
  {
    message:
      "I had the pleasure of hiring Daniel to promote my product, and I could not be more pleased with the results. His speed, punctuality, and the amazing outcome of the campaign he ran in less than 8 hours truly exceeded my expectations. Thanks to Daniel's efforts, I gained three valuable leads in just one day. I highly recommend him for anyone looking for a dedicated and effective freelancer to elevate their product promotion strategies.",
    name: "Kemadhipie K.",
    position: "Head of Sales Marketing, TransGraph Consulting Pvt Ltd",
    date: "Jan 2024",
  },
  {
    message:
      "I worked with Daniel during my time at IBM when he was the assigned Deloitte partner to my client base in ASEAN. I experienced Daniel as a highly professional and very organised individual. With his attention to detail he used to be an invaluable asset to our operations. Daniel's spectrum of knowledge and interests went far beyond what was required for his day to day activities and that further deepened our relationship and the interactions with our clients. Working with Daniel constitutes a value in itself, independent of the outcome.",
    name: "Roman Laal Riahi",
    position: "ASEAN Enterprise Software License Manager, IBM",
    date: "Jan 2024",
  },
  {
    message:
      "I worked with Daniel at IBM. We were engaged for a compliance deal, totally complex and challenging, but with Daniel's leadership we closed it smoothly. His reputation, flexibility, strong communication with the customer, and responsiveness helped us reach a win-win solution. Highly recommend.",
    name: "Caroline P.",
    position: "Enteprise Software Sales, IBM",
    date: "Jan 2024",
  },
];

const TestimonialSlider = () => {
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
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      freeMode
      className="h-[350px]"
    >
      {testimonialData.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="bg-[rgba(65,47,123,0.15)] rounded-lg px-8 py-6 flex flex-col gap-y-4 h-full cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
            {/* quote icon */}
            <FaQuoteLeft className="text-3xl text-accent" />
            {/* message */}
            <p className="text-white/60 leading-relaxed text-sm flex-1">
              {item.message}
            </p>
            {/* name & position */}
            <div>
              <div className="w-8 h-[1px] bg-accent mb-3" />
              <div className="text-sm font-semibold text-white">{item.name}</div>
              <div className="text-xs text-accent">{item.position}</div>
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
