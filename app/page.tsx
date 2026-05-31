import EnvelopeIntro from "./components/EnvelopeIntro";
import MusicPlayer from "./components/MusicPlayer";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import Venue from "./components/Venue";
import Program from "./components/Program";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <EnvelopeIntro />
      <MusicPlayer />
      <Hero />
      <Countdown />
      <Venue />
      <Program />
      <Footer />
    </>
  );
}
