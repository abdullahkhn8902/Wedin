import EnvelopeIntro from "./components/EnvelopeIntro";
import MusicPlayer from "./components/MusicPlayer";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import Events from "./components/Events";
import Venue from "./components/Venue";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <EnvelopeIntro />
      <MusicPlayer />
      <Hero />
      <Countdown />
      <Events />
      <Venue />
      <Footer />
    </>
  );
}
