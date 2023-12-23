import Hero from "./sections/marketing/Hero";
import Navbar from "./sections/marketing/Navbar";

export default function Home() {
  return (
    <div className="bg-[#dd3327]">
      <div className="bg-marketing text-white">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}
