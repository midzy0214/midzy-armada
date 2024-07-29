"use client";

import { motion, useInView } from "framer-motion";
import { Header } from "../components/Header";
import { lexendTera, kameron } from "../components/Header";
import Image from "next/image";
import { useRef } from "react";
import { FaPhoneVolume } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function Contact() {
  const midzyImage = "/images/hair-makeup-2.jpg";

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  const isInView1 = useInView(ref1, {
    amount: 0.3,
  });
  const isInView2 = useInView(ref2, {
    amount: 0.1,
    once: true,
  });
  const isInView3 = useInView(ref3, {
    amount: 0.3,
  });
  const isInView4 = useInView(ref4, {
    amount: 0.3,
  });
  return (
    <div className="bg-backgroundGray overflow-x-hidden overflow-y-hidden">
      <Header />
      <div className="w-full flex flex-wrap">
        <motion.div
          ref={ref1}
          initial={{ x: "-20%", opacity: 0.3 }}
          animate={isInView1 ? { x: "0%", opacity: 1 } : {}}
          transition={{ duration: 1 }}
        >
          <h1
            className={`w-full text-6xl mt-16 ml-16 leading-relaxed  ${lexendTera.className}`}
          >
            Let&apos;s Talk!
          </h1>
          <h2
            className={`w-full text-6xl ml-16 mb-16 leading-relaxed  ${lexendTera.className}`}
          >
            {" "}
            Tell me about what you need
          </h2>
        </motion.div>
        <hr className="w-full border-2 border-green-200" />
        <motion.div
          className="w-full"
          ref={ref2}
          initial={{ y: "100%", opacity: 0 }}
          animate={isInView2 ? { y: "0%", opacity: 1 } : {}}
          transition={{ duration: 1 }}
        >
          <h2
            className={`w-full text-6xl text-center leading-relaxed mt-16 ${lexendTera.className}`}
          >
            Contact
          </h2>
        </motion.div>
        <div className="w-full flex">
          <motion.div
            className="w-1/2"
            ref={ref3}
            initial={{ x: "-50%", opacity: 0 }}
            animate={isInView3 ? { x: "0%", opacity: 1 } : {}}
            transition={{ duration: 1 }}
          >
            <Image
              src={midzyImage}
              alt="Midzy doing clients hair"
              width={500}
              height={500}
              className="w-full p-24 object-cover"
            />
          </motion.div>
          <motion.div
            className="w-1/2"
            ref={ref3}
            initial={{ x: "50%", opacity: 0 }}
            animate={isInView3 ? { x: "0%", opacity: 1 } : {}}
            transition={{ duration: 1 }}
          >
            <p
              className={` py-24 px-20 text-5xl leading-relaxed ${kameron.className}`}
            >
              I intend to help you look and feel your best. Whether you need
              makeup done for any occasion, a fresh hairstyle, or adding some
              length to those lashes, I&apos;m here for you. Hoping to hear from
              you!
            </p>
          </motion.div>
        </div>
        <motion.div
          ref={ref4}
          className="w-full flex flex-col items-center "
          initial={{ y: 80, opacity: 0 }}
          animate={isInView4 ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1 }}
        >
          <div
            className={`w-1/3 flex items-center text-5xl ${kameron.className}`}
          >
            <FaPhoneVolume className="text-8xl mr-4 mb-12" />
            &#40;714&#41;-757-1882
          </div>
          <div
            className={`w-1/3 flex justify-center items-center text-5xl ${kameron.className}`}
          >
            <IoMdMail className="text-8xl mr-6" />
            midzy0214@gmail.com
          </div>
        </motion.div>
      </div>
    </div>
  );
}
