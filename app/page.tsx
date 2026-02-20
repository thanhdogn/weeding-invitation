import Hero from "./components/Hero";
import PhotoGallery from "./components/PhotoGallery";
import Countdown from "./components/Countdown";
import PhotoStory from "./components/PhotoStory";
import EventDetails from "./components/EventDetails";
import GiftSection from "./components/GiftSection";
import ScrollAnimation from "./components/ScrollAnimation";
import RSVPForm from "./components/RSVPForm";

import Divider from "./components/Divider";

import EnterSite from "./components/EnterSite";

export default function Home() {
  return (
    <main>
      <EnterSite />
      <Hero />

      <ScrollAnimation animation="fade-up">
        <Countdown />
      </ScrollAnimation>

      <Divider />

      {/* PhotoStory handles its own animations */}
      <PhotoStory />

      <Divider />

      <ScrollAnimation animation="scale-up">
        <PhotoGallery />
      </ScrollAnimation>

      <Divider />

      <ScrollAnimation animation="fade-up">
        <EventDetails />
      </ScrollAnimation>

      <Divider />

      <ScrollAnimation animation="fade-up">
        <RSVPForm />
      </ScrollAnimation>

      <Divider />

      <ScrollAnimation animation="fade-up">
        <GiftSection />
      </ScrollAnimation>

      <footer
        style={{
          padding: "2rem",
          textAlign: "center",
          fontSize: "0.8rem",
          opacity: 0.7,
        }}
      >
        <p>&copy; 2026 Thanh & Partner. Can&apos;t wait to see you!</p>
      </footer>
    </main>
  );
}
