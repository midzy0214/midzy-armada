import { Lexend_Tera, Kameron } from "next/font/google";
import Link from "next/link";
import { motion } from "framer-motion";

export const lexendTera = Lexend_Tera({
  subsets: ["latin"],
  weight: ["100", "400", "700"],
});

export const kameron = Kameron({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export function Header() {
  return (
    <div className="w-full flex flex-wrap bg-headerPink">
      <h1
        className={`w-full text-xl lg:text-5xl my-4 lg:ml-28 lg:mt-16 ${lexendTera.className}`}
      >
        Midzy Armada
      </h1>
      <h1
        className={`w-full text-xl flex-none lg:text-5xl lg:flex justify-end mb-4 lg:mr-28 lg:mb-16 ${lexendTera.className}`}
      >
        Freelance Makeup Artist
      </h1>
      <div className="w-full flex flex-wrap mb-2">
        <motion.button
          initial={{
            background: "radial-gradient( rgb(255,255,255), rgb(224,158,143))",
          }}
          whileHover={{
            background: "radial-gradient( rgb(224,158,143), rgb(255,255,255)) ",
          }}
          whileTap={{
            background: "radial-gradient( rgb(224,158,143), rgb(0,0,0))",
          }}
          transition={{ duration: 0.6 }}
          className={`w-1/3 lg:w-1/6  border-2 border-green-200 mb-1 text-sm font-semibold lg:text-3xl  ${kameron.className}`}
        >
          <Link href={"/"}>Welcome</Link>
        </motion.button>
        <motion.button
          initial={{
            background: "radial-gradient( rgb(255,255,255), rgb(224,158,143))",
          }}
          whileHover={{
            background: "radial-gradient( rgb(224,158,143), rgb(255,255,255)) ",
          }}
          whileTap={{
            background: "radial-gradient( rgb(224,158,143), rgb(0,0,0))",
          }}
          transition={{ duration: 0.6 }}
          className={`w-1/3 lg:w-1/6  border-2 border-green-200 mb-1 text-sm font-semibold lg:text-3xl ${kameron.className}`}
        >
          <Link href={"about"}>About</Link>
        </motion.button>
        <motion.button
          initial={{
            background: "radial-gradient( rgb(255,255,255), rgb(224,158,143))",
          }}
          whileHover={{
            background: "radial-gradient( rgb(224,158,143), rgb(255,255,255)) ",
          }}
          whileTap={{
            background: "radial-gradient( rgb(224,158,143), rgb(0,0,0))",
          }}
          transition={{ duration: 0.6 }}
          className={`w-1/3 lg:w-1/6  border-2 border-green-200 mb-1 text-sm font-semibold lg:text-3xl ${kameron.className}`}
        >
          Services
        </motion.button>
        <motion.button
          initial={{
            background: "radial-gradient( rgb(255,255,255), rgb(224,158,143))",
          }}
          whileHover={{
            background: "radial-gradient( rgb(224,158,143), rgb(255,255,255)) ",
          }}
          whileTap={{
            background: "radial-gradient( rgb(224,158,143), rgb(0,0,0))",
          }}
          transition={{ duration: 0.6 }}
          className={`w-1/3 lg:w-1/6  border-2 border-green-200 mb-1 text-sm font-semibold lg:text-3xl ${kameron.className}`}
        >
          <Link href={"contact"}>Contact</Link>
        </motion.button>
        <motion.button
          initial={{
            background: "radial-gradient( rgb(255,255,255), rgb(224,158,143))",
          }}
          whileHover={{
            background: "radial-gradient( rgb(224,158,143), rgb(255,255,255)) ",
          }}
          whileTap={{
            background: "radial-gradient( rgb(224,158,143), rgb(0,0,0))",
          }}
          transition={{ duration: 0.6 }}
          className={`w-1/3 lg:w-1/6  border-2 border-green-200 mb-1 text-sm font-semibold lg:text-3xl ${kameron.className}`}
        >
          Portfolio
        </motion.button>
        <motion.button
          initial={{
            background: "radial-gradient( rgb(255,255,255), rgb(224,158,143))",
          }}
          whileHover={{
            background: "radial-gradient( rgb(224,158,143), rgb(255,255,255)) ",
          }}
          whileTap={{
            background: "radial-gradient( rgb(224,158,143), rgb(0,0,0))",
          }}
          transition={{ duration: 0.6 }}
          className={`w-1/3 lg:w-1/6  border-2 border-green-200 mb-1 text-sm font-semibold lg:text-3xl ${kameron.className}`}
        >
          Reviews
        </motion.button>
      </div>
    </div>
  );
}
