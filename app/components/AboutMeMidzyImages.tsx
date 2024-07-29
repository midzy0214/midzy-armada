"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export function AboutMeMidzyImages() {
  const ref1 = useRef(null);

  const isInView1 = useInView(ref1, {
    amount: 0.5,
  });

  return (
    <div>
      <div className="flex flex-wrap" ref={ref1}>
        <motion.div
          initial={{ y: "50%", opacity: 0 }}
          animate={isInView1 ? { y: "0%", opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="relative lg:absolute w-1/3 h-[25vh] lg:w-1/2 lg:h-3/4 lg:left-28 top-0"
          whileHover={{ scale: 1.1 }}
        >
          <Image
            src="/images/hair-makeup-5.jpg"
            alt="woman holding bouquet of flowers"
            width={800}
            height={800}
            className="object-cover w-full h-3/4 border-2 lg:border-8 rounded-2xl border-gray-400 lg:p-4 lg:-m-4 "
          />
        </motion.div>
        <motion.div
          initial={{ y: "50%", opacity: 0 }}
          animate={isInView1 ? { y: "0%", opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="relative lg:absolute w-1/3 h-[25vh] lg:w-1/2 lg:h-3/4  lg:left-28 bottom-[-40%]"
          whileHover={{ scale: 1.1 }}
        >
          <Image
            src="/images/hair-makeup-2.jpg"
            alt="Midzy adjusting a client's hair"
            width={800}
            height={800}
            className="object-cover w-full h-3/4 border-2 lg:border-8 rounded-2xl border-gray-400 lg:p-4 lg:-mx-4"
          />
        </motion.div>
        <motion.div
          initial={{ y: "50%", opacity: 0 }}
          animate={isInView1 ? { y: "0%", opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="relative lg:absolute w-1/3 h-[25vh] lg:w-1/2 lg:h-3/4 lg:right-12 lg:top-[60%] "
          whileHover={{ scale: 1.1 }}
        >
          <Image
            src="/images/hair-makeup-8.jpg"
            alt="Midzy adjusting a client's makeup/eyelashes"
            width={800}
            height={800}
            className="object-cover w-full h-3/4 border-2 lg:border-8 rounded-2xl border-gray-400 lg:p-4 transform lg:-translate-y-1/2"
          />
        </motion.div>
      </div>
    </div>
  );
}
