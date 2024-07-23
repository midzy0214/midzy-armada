"use client";
import { motion, useInView } from "framer-motion";
import { AboutMeMidzyImages } from "../components/AboutMeMidzyImages";
import { Header } from "../components/Header";
import { kameron, lexendTera } from "../components/Header";
import Image from "next/image";
import { useRef } from "react";

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
            initial={{ x: "10%", opacity: 0.1 }}
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
        <div className="w-full flex flex-wrap mb-20">
          <div className="w-1/2 flex flex-wrap justify-center">
            <Image
              src="/images/hair-makeup-1.jpg"
              alt="client with their makeup and hair done, smiling, holding a boquet of flowers"
              width={500}
              height={400}
            />
          </div>
          <div className="w-1/2 ">
            <h1 className={`w-full text-6xl ${lexendTera.className} `}>
              Makeup
            </h1>
            <p className={`w-full text-5xl leading-loose ${kameron.className}`}>
              Makeup is so powerful, it&apos;s magical how makeup can enhance
              one&apos;s natural beauty. I&apos;ve been doing make up since X
              (adjust this to experience/change it all together). From weddings
              to Quinceañeras, from the natural-look to extravagant, I can
              deliver!
            </p>
          </div>
        </div>
        <div className="w-full flex flex-wrap mb-20 ">
          <div className="w-1/2 ">
            <h1 className={`w-full text-6xl mx-16 ${lexendTera.className} `}>
              Hair
            </h1>
            <p
              className={`w-full text-5xl leading-loose mx-16 ${kameron.className}`}
            >
              I learned how to style hair from/when (will edit this with info).
              And ever since then, I have crafted and sculpted all kinds of
              looks and styles. (Maybe some specific hair styles you&apos;re
              super good at)
            </p>
          </div>
          <div className="w-1/2 flex flex-wrap justify-center">
            <Image
              src="/images/hair-2.jpg"
              alt="client with their makeup and hair done, smiling, holding a boquet of flowers"
              width={500}
              height={400}
            />
          </div>
        </div>
        <div className="w-full flex flex-wrap mb-20">
          <div className="w-1/2 flex flex-wrap justify-center">
            <Image
              src="/images/eyelashes.jpg"
              alt="client with their makeup and hair done, smiling, holding a boquet of flowers"
              width={500}
              height={500}
            />
          </div>
          <div className="w-1/2 ">
            <h1 className={`w-full text-6xl ${lexendTera.className} `}>
              Eyelash Extensions
            </h1>
            <p className={`w-full text-5xl leading-loose ${kameron.className}`}>
              Let&apos;s extend our reach towards greater beauty. Our eyes can
              say so much with just a look; so why not add a touch of flair.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-wrap mb-20 ">
          <div className="w-1/2 ">
            <h1 className={`w-full text-6xl mx-16 ${lexendTera.className} `}>
              Eyebrows
            </h1>
            <p
              className={`w-full text-5xl leading-loose mx-16 ${kameron.className}`}
            >
              They say eyes are windows to the soul. Well, in this case,
              eyebrows are the frame for your eyes. Together let&apos;s find a
              frame that will support and bring more attention to those eyes.
            </p>
          </div>
          <div className="w-1/2 flex flex-wrap justify-center">
            <Image
              src="/images/eyelashes-2.jpg"
              alt="client with their makeup and hair done, smiling, holding a boquet of flowers"
              width={500}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
