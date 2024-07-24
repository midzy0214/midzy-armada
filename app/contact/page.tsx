import { Header } from "../components/Header";
import { lexendTera, kameron } from "../components/Header";
import Image from "next/image";
import { FaPhoneVolume } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function Contact() {
  const midzyImage = "/images/hair-makeup-2.jpg";
  return (
    <div className="bg-backgroundGray">
      <Header />
      <div className="w-full flex flex-wrap">
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
        <hr className="w-full border-2 border-green-200" />

        <h2
          className={`w-full text-6xl text-center leading-relaxed  ${lexendTera.className}`}
        >
          Contact
        </h2>
        <div className="w-full flex">
          <Image
            src={midzyImage}
            alt="Midzy doing clients hair"
            width={500}
            height={500}
            className="w-1/2 p-24 object-cover"
          />
          <p
            className={`w-1/2 py-24 px-20 text-5xl leading-relaxed ${kameron.className}`}
          >
            I intend to help you look and feel your best. Whether you need
            makeup done for any occasion, a fresh hairstyle, or adding some
            length to those lashes, I&apos;m here for you! Hoping to hear from
            you!
          </p>
        </div>
        <div className="w-full flex flex-col items-center ">
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
        </div>
      </div>
    </div>
  );
}
