"use client";

import { useRef } from "react";
import { Header } from "./components/Header";
import { lexendTera } from "./components/Header";
import { kameron } from "./components/Header";
import HomepageCollage from "./components/HomepageCollage";
import { motion, useInView } from "framer-motion";

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.5,
  });
  return (
    <main className="min-h-screen">
      <Header />
      <div className="w-full flex-none lg:flex bg-backgroundGray">
        <motion.div
          className="w-full lg:w-1/2 flex ml-4 lg:ml-16 flex-wrap"
          ref={ref}
          initial={{ x: "-20%", opacity: 0 }}
          animate={isInView ? { x: "0%", opacity: 1 } : {}}
          transition={{ duration: 1 }}
        >
          <h1
            className={`text-lg lg:text-6xl my-4 lg:my-16 leading-relaxed ${lexendTera.className}`}
          >
            Let&apos;s bring out your inner beauty
          </h1>
          <hr className="w-full border-2 border-green-200" />

          <p
            className={`text-md lg:text-5xl leading-snug my-4 lg:my-16 ${kameron.className}`}
          >
            Armida, or better known as “Midzy” by her friends, is a passionate
            artist who thrives on bringing out the inner beauty of her clients
          </p>
        </motion.div>
        <div className="w-full lg:w-1/2"> placeholder</div>
      </div>
      <HomepageCollage />
    </main>
  );
}
