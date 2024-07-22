import { Header } from "../components/Header.";
import { kameron, lexendTera } from "../components/Header.";
import Image from "next/image";

export default function About() {
  return (
    <div>
      <Header />
      <div
        className="w-full flex flex-wrap"
        style={{ backgroundColor: "rgb(211,208,203)" }}
      >
        <div className={`w-full text-6xl m-16 ${lexendTera.className}`}>
          I aspire to instill confidence and happiness
        </div>
        <div className="w-full flex">
          <div className="w-1/2 relative">
            <div className=" h-[100vh]">
              <Image
                src="/images/hair-makeup-5.jpg"
                alt="woman holding bouquet of flowers"
                width={800}
                height={800}
                className="absolute w-1/2 h-1/2 object-cover border-8  rounded-2xl p-10 left-28 top-0"
              />
              <Image
                src="/images/hair-makeup-2.jpg"
                alt="Midzy adjusting a client's hair"
                width={800}
                height={800}
                className="absolute w-1/2 h-1/2 object-cover border-8 border-green-200 p-10 left-28 bottom-0"
              />
              <Image
                src="/images/hair-makeup-8.jpg"
                alt="Midzy adjusting a client's makeup/eyelashes"
                width={800}
                height={800}
                className="absolute w-1/2 h-1/2 object-cover border-8 p-10 right-12 top-1/2 transform -translate-y-1/2"
              />
            </div>
          </div>
          <div className="w-1/2 flex flex-wrap">
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
          </div>
        </div>
        <div>
          <h1>Expertise</h1>
        </div>
      </div>
    </div>
  );
}
