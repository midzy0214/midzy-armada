"use client";
import { motion, useInView } from "framer-motion";
import { AboutMeMidzyImages } from "../components/AboutMeMidzyImages";
import { Header } from "../components/Header";
import { kameron, lexendTera } from "../components/Header";
import { useRef } from "react";
import { Expertise } from "../components/Expertise";
import { skills } from "../data/data";

export default function About() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const isInView1 = useInView(ref1, {
    amount: 0.3,
  });
  const isInView2 = useInView(ref2, {
    amount: 0.3,
  });
  const isInView3 = useInView(ref3, {
    amount: 0.3,
  });

  return (
    <div>
      <Header />
      <div className="w-full flex flex-wrap bg-backgroundGray">
        <motion.div
          ref={ref1}
          initial={{ x: "-20%", opacity: 0.3 }}
          animate={isInView1 ? { x: "0%", opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className={`w-full text-6xl m-16 leading-loose mb-36 ${lexendTera.className}`}
        >
          I aspire to instill confidence and happiness
        </motion.div>
        <div className="w-full flex">
          <div className="w-1/2 relative mb-16">
            <AboutMeMidzyImages />
          </div>
          <motion.div
            className="w-1/2"
            ref={ref3}
            initial={{ x: "10%", opacity: 0 }}
            animate={isInView3 ? { x: "0%", opacity: 1 } : {}}
            transition={{ duration: 1 }}
          >
            <h1 className={`w-full text-6xl p-10 ${lexendTera.className}`}>
              About Me
            </h1>

            <p
              className={`w-full text-5xl p-10 leading-loose ${kameron.className}`}
            >
              Hello, my name is &quot;Midzy&quot; Armada. I have been doing
              hair, makeup, and eyebrows for X years. I am constantly honing my
              techniques and abilities, not only to better myself, but to better
              provide for my clients&apos; needs.
            </p>
          </motion.div>
        </div>
        <motion.div
          ref={ref2}
          initial={{ x: "-20%", opacity: 0.3 }}
          animate={isInView2 ? { x: "0%", opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="w-full text-6xl mx-16 my-24"
        >
          <h1 className={` underline ${lexendTera.className}`}>Expertise</h1>
        </motion.div>
        {skills.map((skill, index) => (
          <Expertise key={index} skills={skill} index={index} />
        ))}
      </div>
    </div>
  );
}
