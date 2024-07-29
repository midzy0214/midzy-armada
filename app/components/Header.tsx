import { Lexend_Tera, Kameron } from "next/font/google";
import Link from "next/link";

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
        className={`w-full text-2xl lg:text-6xl my-4 lg:ml-28 lg:mt-16 ${lexendTera.className}`}
      >
        Midzy Armada
      </h1>
      <h1
        className={`w-full text-2xl flex-none lg:text-6xl lg:flex justify-end mb-4 lg:mr-28 lg:mb-16 ${lexendTera.className}`}
      >
        Freelance Makeup Artist
      </h1>
      <div className="w-full flex flex-wrap mb-2">
        <button
          className={`w-1/3 lg:w-1/6  border-2 border-green-200 mb-1 text-sm font-semibold lg:text-3xl  ${kameron.className}`}
        >
          <Link href={"/"}>Welcome</Link>
        </button>
        <button
          className={`w-1/3 lg:w-1/6  border-2 border-green-200 mb-1 text-sm font-semibold lg:text-3xl ${kameron.className}`}
        >
          <Link href={"about"}>About</Link>
        </button>
        <button
          className={`w-1/3 lg:w-1/6  border-2 border-green-200 mb-1 text-sm font-semibold lg:text-3xl ${kameron.className}`}
        >
          Services
        </button>
        <button
          className={`w-1/3 lg:w-1/6  border-2 border-green-200 mb-1 text-sm font-semibold lg:text-3xl ${kameron.className}`}
        >
          <Link href={"contact"}>Contact</Link>
        </button>
        <button
          className={`w-1/3 lg:w-1/6  border-2 border-green-200 mb-1 text-sm font-semibold lg:text-3xl ${kameron.className}`}
        >
          Portfolio
        </button>
        <button
          className={`w-1/3 lg:w-1/6  border-2 border-green-200 mb-1 text-sm font-semibold lg:text-3xl ${kameron.className}`}
        >
          Reviews
        </button>
      </div>
    </div>
  );
}
