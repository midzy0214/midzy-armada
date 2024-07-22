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
    <div
      className="w-full flex flex-wrap"
      style={{ backgroundColor: "rgb(224,158,143" }}
    >
      <h1 className={`w-full text-6xl ml-28 mt-16 ${lexendTera.className}`}>
        Midzy Armada
      </h1>
      <h1
        className={`w-full text-6xl flex justify-end mr-28 mb-16 ${lexendTera.className}`}
      >
        Freelance Makeup Artist
      </h1>
      <div className="w-full flex flex-wrap divide-x-4 divide-green-200 mb-2">
        <button className={`w-1/5 text-3xl ${kameron.className}`}>
          <Link href={"/"}>Welcome</Link>
        </button>
        <button className={`w-1/5 text-3xl ${kameron.className}`}>
          <Link href={"about"}>About</Link>
        </button>
        <button className={`w-1/5 text-3xl ${kameron.className}`}>
          Services
        </button>
        <button className={`w-1/5 text-3xl ${kameron.className}`}>
          Contact
        </button>
        <button className={`w-1/5 text-3xl ${kameron.className}`}>
          Portfolio
        </button>
      </div>
    </div>
  );
}
