import { Header } from "./components/Header.";
import { lexendTera } from "./components/Header.";
import { kameron } from "./components/Header.";
import HomepageCollage from "./components/HomepageCollage";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="w-full flex bg-backgroundGray">
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
      <HomepageCollage />
    </main>
  );
}
