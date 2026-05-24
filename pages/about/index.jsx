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
        stage: "Feb 2023 · Awarded for introducing a new service offering to the ASEAN market",
      },
      {
        title: "EERM Delegation — Global Summit, Las Vegas",
        stage: "Jul 2016 · Selected as Southeast Asia delegate to Deloitte's Global EERM Summit",
      },
      {
        title: "FY13 ERS Rookie of the Year — Deloitte",
        stage: "May 2013 · Recognised for outstanding contribution within the first year at Deloitte",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Manager — Connor (APAC)",
        stage: "2025 - Present · Applying data-driven compliance analytics across 30-40+ publisher engagements annually, translating complex licensing data into commercially actionable outcomes for APAC markets.",
      },
      {
        title: "Senior Manager, Risk Advisory — Deloitte",
        stage: "2021 - 2024 · Built and scaled Malaysia's first TPRM managed services practice, using structured data assessment frameworks to evaluate vendor risk at scale. 40% profit margin. FY23 Trailblazer Award.",
      },
      {
        title: "Manager, Risk Advisory — Deloitte",
        stage: "2016 - 2021 · Led ASEAN IT Asset Management service line, pioneering SQL-based analytics to identify license exposure and optimize software spend. Improved operational efficiency by 36%.",
      },
      {
        title: "Consultant → Sr. Consultant — Deloitte",
        stage: "2013 - 2015 · Started career performing IBM and Microsoft software license audits where data mining and analytics were the core tools for identifying non-compliance and quantifying risk. FY13 Rookie of the Year.",
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
    <div className="h-full bg-primary/30 py-32 pt-40 text-center xl:text-left">
      <Circles />

      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[700px]"
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
            Turning data into{" "}
            <span className="text-accent">decisions that matter.</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Over 12 years across ASEAN and APAC, I have applied data analytics
            to solve complex business challenges. From uncovering software
            license exposure to assessing vendor risk and surfacing hidden
            opportunities, my work sits at the intersection of data, risk, and
            commercial outcomes. I bridge deep technical credibility with
            pragmatic, relationship-preserving results.
          </motion.p>

          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={12} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience.
                </div>
              </div>
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={40} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Engagements per year.
                </div>
              </div>
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={36} duration={5} />%
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Efficiency gain via analytics.
                </div>
              </div>
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

          <div className="py-2 xl:py-6 flex flex-col gap-y-3 xl:gap-y-5 items-center xl:items-start w-full overflow-y-auto">
            {aboutData[index].info.map((item, itemI) => (
              <div
                key={itemI}
                className="flex flex-col gap-y-1 text-center xl:text-left text-white/60 border-b border-white/10 pb-3 w-full"
              >
                <div className="font-semibold text-white text-sm">
                  {item.title}
                </div>
                {item.stage && (
                  <div className="text-xs text-white/40 leading-relaxed">
                    {item.stage}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
