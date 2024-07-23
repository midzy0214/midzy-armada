"use client";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

export default function HomepageCollage() {
  const pulsePics1 = useAnimation();
  const pulsePics2 = useAnimation();
  const pulsePics3 = useAnimation();
  const pulsePics4 = useAnimation();
  const pulsePics5 = useAnimation();

  useEffect(() => {
    pulsePics1.start({
      scale: [1, 0.9, 1],
      transition: {
        duration: 10,
        repeat: Infinity,
        repeatType: "loop",
      },
    }),
      pulsePics2.start({
        scale: [1, 0.9, 1],
        transition: {
          duration: 14,
          repeat: Infinity,
          repeatType: "loop",
        },
      }),
      pulsePics3.start({
        scale: [1, 0.9, 1],
        transition: {
          duration: 8,
          repeat: Infinity,
          repeatType: "loop",
        },
      }),
      pulsePics4.start({
        scale: [1, 0.9, 1],
        transition: {
          duration: 12,
          repeat: Infinity,
          repeatType: "loop",
        },
      }),
      pulsePics5.start({
        scale: [1, 0.9, 1],
        transition: {
          duration: 16,
          repeat: Infinity,
          repeatType: "loop",
        },
      });
  }, [pulsePics1, pulsePics2, pulsePics3, pulsePics4, pulsePics5]);

  return (
    <div className="w-full flex flex-wrap h-[150vh] bg-backgroundGray">
      <div className="w-full flex h-1/2">
        {" "}
        <motion.div animate={pulsePics1} className="w-3/5">
          <Image
            src="/images/hair.jpg"
            alt="hair styled with a braid"
            className="object-cover object-center w-full h-full"
            width={600}
            height={500}
          />
        </motion.div>
        <motion.div animate={pulsePics2} className="w-2/5">
          <Image
            src="/images/eyelashes.jpg"
            alt="eyes with eyelash extensions and makeup"
            className="object-cover object-center w-full h-full"
            width={600}
            height={300}
          />
        </motion.div>
      </div>
      <div className="w-full flex h-1/2">
        {" "}
        <motion.div animate={pulsePics3} className="w-1/3">
          <Image
            src="/images/hair-makeup-4.jpg"
            alt="woman with makeup done, holding a boquet of flowers"
            className="object-cover object-center w-full h-full"
            width={600}
            height={500}
          />
        </motion.div>
        <motion.div animate={pulsePics4} className="w-1/3">
          <Image
            src="/images/hair-makeup-6.jpg"
            alt="woman with makeup done, with eyes closed, showing off her eyelashes"
            className="object-cover object-center w-full h-full"
            width={600}
            height={500}
          />
        </motion.div>
        <motion.div animate={pulsePics5} className="w-1/3">
          <Image
            src="/images/hair-makeup-8.jpg"
            alt="Midzy adjusting a clients makeup"
            className="object-cover object-center w-full h-full"
            width={600}
            height={500}
          />
        </motion.div>
      </div>
    </div>
  );
}
