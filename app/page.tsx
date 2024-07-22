import { Header } from "./components/Header.";
import { lexendTera } from "./components/Header.";
import { kameron } from "./components/Header.";
import Image from "next/image";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div
        className="w-full flex"
        style={{ backgroundColor: "rgb(211,208,203)" }}
      >
        <div className="w-1/2 flex ml-16 flex-wrap">
          <h1
            className={`text-6xl my-16 leading-relaxed ${lexendTera.className}`}
          >
            Let&apos;s bring out your inner beauty
          </h1>
          <p className={`text-5xl leading-snug ${kameron.className}`}>
            Armida, or better known as “Midzy” by her friends, is a passionate
            artist who thrives on bringing out the inner beauty of her clients
          </p>
        </div>
        <div className="w-1/2"> placeholder</div>
      </div>
      <div className="w-full flex flex-wrap h-[150vh]">
        <div className="w-full flex  h-1/2">
          {" "}
          <Image
            src="/images/hair.jpg"
            alt="hair styled with a braid"
            className="w-3/5 object-cover"
            width={600}
            height={500}
          />
          <Image
            src="/images/eyelashes.jpg"
            alt="eyes with eyelash extensions and makeup"
            className="w-2/5 object-cover"
            width={600}
            height={500}
          />
        </div>
        <div className="w-full flex h-1/2">
          {" "}
          <Image
            src="/images/hair-makeup-4.jpg"
            alt="woman with makeup done, holding a boquet of flowers"
            className="w-1/3  object-cover"
            width={600}
            height={500}
          />
          <Image
            src="/images/hair-makeup-6.jpg"
            alt="woman with makeup done, with eyes closed, showing off her eyelashes"
            className="w-1/3 object-cover"
            width={600}
            height={500}
          />
          <Image
            src="/images/hair-makeup-8.jpg"
            alt="Midzy adjusting a clients makeup"
            className="w-1/3 object-cover"
            width={600}
            height={500}
          />
        </div>
      </div>
    </main>
  );
}
