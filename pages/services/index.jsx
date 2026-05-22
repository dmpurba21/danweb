import { motion } from "framer-motion";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import ServiceSlider from "../../components/ServiceSlider";
import { fadeIn } from "../../variants";
import { RxArrowTopRight } from "react-icons/rx";

export const serviceData = [
  {
    icon: <RxArrowTopRight />,
    title: "Software License Advisory",
    description:
      "more than 12 years performing Software license audits across ASEAN. I help you navigate audit notifications, set up Software License Management processes, and optimize licensing costs — before the penalties arrive.",
  },
  {
    icon: <RxArrowTopRight />,
    title: "Vendor Risk Management",
    description:
      "5 years in Third-Party Risk Management at Deloitte. I help you assess vendor risk, build TPRM frameworks, design risk questionnaires, and run assessments — whether you're short-staffed or starting from scratch.",
  },
  {
    icon: <RxArrowTopRight />,
    title: "Data Analytics for Compliance",
    description:
      "Using data mining techniques to identify non-compliance signals before auditors do. I analyze support logs, sales transactions, and software usage patterns to surface risk and prioritize your compliance activities.",
  },
];

const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8"
            >
              My services <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              12+ years across ASEAN and APAC helping organizations navigate
              software licensing risk, vendor exposure, and compliance
              complexity — turning technical challenges into commercial outcomes.
            </motion.p>
          </div>

          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
