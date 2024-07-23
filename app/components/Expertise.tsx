import Image from "next/image";
import { lexendTera, kameron } from "./Header";
import { Skills, skills } from "../data/data";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type ExpertiseProps = {
  skills: Skills;
  index: number;
};
export function Expertise({ skills, index }: ExpertiseProps) {
  const isOdd = index % 2 !== 0;
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.3,
  });

  if (!skills) {
    console.error("Skills prop is undefined");
    return null;
  }

  return (
    <div>
      <motion.div
        className={`w-full flex flex-wrap mb-20 ${
          isOdd ? "flex-row-reverse pl-20" : "flex-row pr-20"
        }`}
        ref={ref}
        initial={
          isOdd ? { x: "10%", opacity: 0.1 } : { x: "-20%", opacity: 0.3 }
        }
        animate={isInView ? { x: "0%", opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <div className="w-1/2 flex flex-wrap justify-center">
          <Image
            src={skills.image}
            alt={`${skills.name} image`}
            height={400}
            width={500}
          />
        </div>
        <div className="w-1/2">
          <h1 className={`w-full text-6xl ${lexendTera.className} `}>
            {skills.name}
          </h1>
          <p className={`w-full text-5xl leading-loose ${kameron.className}`}>
            {skills.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
