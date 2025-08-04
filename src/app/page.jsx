"use client";

import AboutSection from "../components/homepage-components/AboutSection";
import CardsWork from "../components/homepage-components/CardsWork";
import ContactSection from "../components/homepage-components/ContactSection";
import DesignSection from "../components/homepage-components/DesignSection";
import LandingFrame from "../components/homepage-components/LandingFrame";
import PhotographySection from "../components/homepage-components/PhotographySection";
import WebDevelopmentSection from "../components/homepage-components/WebDevelopmentSection";
import ScrollToTop from "../components/ScrollToTop";

export default function Home() {
  const Divider = () => (
    <hr className="my-2 w-1/2 border-[0.1px] border-gray-400/20" />
  );

  return (
    <>
      <ScrollToTop />
      <LandingFrame />
      <CardsWork />
      <div className="mt-20 flex flex-col items-center justify-center gap-8 px-[20px]">
        <Divider />
        <WebDevelopmentSection />
        <Divider />
        <PhotographySection />
        <Divider />
        <DesignSection />
        <Divider />
        <AboutSection />
        <Divider />
        <ContactSection />
      </div>
    </>
  );
}
