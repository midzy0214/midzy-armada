import Image from "next/image";
import { lexendTera, kameron } from "./Header";
import { Skills } from "../data/data";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useWindowSize } from "./UseWindowSize";

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

  const { width } = useWindowSize();
  const isMobile = width < 768;

  if (!skills) {
    console.error("Skills prop is undefined");
    return null;
  }

  return (
    <div>
      <motion.div
        className={`w-full flex flex-wrap mb-4 lg:mb-20 justify-center ${
          !isMobile && isOdd
            ? "flex-row-reverse pl-20"
            : "flex-row p-4 lg:pr-20"
        }`}
        ref={ref}
        initial={isOdd ? { x: "40%", opacity: 0 } : { x: "-50%", opacity: 0 }}
        animate={isInView ? { x: "0%", opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <div className="w-full  lg:w-1/2 flex flex-wrap justify-center">
          <Image
            src={skills.image}
            alt={`${skills.name} image`}
            height={500}
            width={500}
            className="lg:w-1/2 object-cover border-8 lg:border-[16px]"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h1 className={`w-full text-lg lg:text-6xl ${lexendTera.className} `}>
            {skills.name}
          </h1>
          <p
            className={`w-full text-md lg:text-5xl leading-loose ${kameron.className}`}
          >
            {skills.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
