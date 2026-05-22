import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

export const aboutData = [
  {
    title: "skills",
    info: [
      { title: "Software License Advisory" },
      { title: "Vendor Risk Assessment" },
      { title: "Third-Party Risk Management (TPRM)" },
      { title: "Data Analytics & Automation" },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "FY23 Trailblazer Award — Deloitte",
        stage: "Feb 2023",
      },
      {
        title: "EERM Delegation — Global Summit, Las Vegas",
        stage: "Jul 2016",
      },
      {
        title: "FY13 ERS Rookie of the Year — Deloitte",
        stage: "May 2013",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Manager — Connor (APAC)",
        stage: "2025 - Present",
      },
      {
        title: "Senior Manager, Risk Advisory — Deloitte",
        stage: "2021 - 2024",
      },
      {
        title: "Manager, Risk Advisory — Deloitte",
        stage: "2016 - 2021",
      },
      {
        title: "Consultant → Sr. Consultant — Deloitte",
        stage: "2013 - 2015",
      },
    ],
  },
    {
    title: "education",
    info: [
      {
        title: "MBA, International Business",
        stage: "TH Nürnberg, Germany — 2012",
      },
      {
        title: "BSc, Information Technology",
        stage: "BINUS University, Jakarta — 2008",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[400px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Turning licensing complexity into{" "}
            <span className="text-accent">strategic advantage.</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Over 12 years across ASEAN and APAC, I've built compliance
            practices, led multi-million dollar audit engagements, and helped
            organizations turn regulatory exposure into competitive positioning.
            My edge is bridging deep technical credibility with pragmatic,
            relationship-preserving outcomes.
          </motion.p>

          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* years */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={12} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience.
                </div>
              </div>

              {/* engagements */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={40} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Engagements per year.
                </div>
              </div>

              {/* efficiency */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={36} duration={5} />%
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Efficiency gain via analytics.
                </div>
              </div>

              {/* awards */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={3} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Professional awards.
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* info tabs */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${
                  index === itemI &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemI) => (
              <div
                key={itemI}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-center text-white/60"
              >
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                {item.stage && <div className="hidden md:flex">-</div>}
                {item.stage && <div>{item.stage}</div>}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
