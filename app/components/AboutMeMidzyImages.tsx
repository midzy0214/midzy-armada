"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function AboutMeMidzyImages() {
  return (
    <div className=" h-[100vh]">
      <motion.div
        className="absolute w-1/2 h-1/2 border-8 rounded-2xl border-gray-400 p-4 -m-2 left-28 top-0"
        whileHover={{ scale: 1.1 }}
      >
        <Image
          src="/images/hair-makeup-5.jpg"
          alt="woman holding bouquet of flowers"
          width={800}
          height={800}
          className="object-cover w-full h-full"
        />
      </motion.div>
      <motion.div
        className="absolute w-1/2 h-1/2  border-8 rounded-2xl border-gray-400 p-4 -m-2 left-28 bottom-0"
        whileHover={{ scale: 1.1 }}
      >
        <Image
          src="/images/hair-makeup-2.jpg"
          alt="Midzy adjusting a client's hair"
          width={800}
          height={800}
          className="object-cover w-full h-full"
        />
      </motion.div>
      <motion.div
        className="absolute w-1/2 h-1/2   right-12 top-1/2 "
        whileHover={{ scale: 1.1 }}
      >
        <Image
          src="/images/hair-makeup-8.jpg"
          alt="Midzy adjusting a client's makeup/eyelashes"
          width={800}
          height={800}
          className="object-cover w-full h-full border-8 rounded-2xl border-gray-400 p-4 transform -translate-y-1/2"
        />
      </motion.div>
    </div>
  );
}
