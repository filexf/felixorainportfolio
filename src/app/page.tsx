import AboutSection from "@/components/homepage-components/AboutSection";
import CardsWork from "@/components/homepage-components/CardsWork";
import ContactSection from "@/components/homepage-components/ContactSection";
import DesignSection from "@/components/homepage-components/DesignSection";
import LandingFrame from "@/components/homepage-components/HeroSection";
import PhotographySection from "@/components/homepage-components/PhotographySection";
import WebDevelopmentSection from "@/components/homepage-components/WebDevelopmentSection";

export default function Home() {
  const Divider = () => (
    <hr className="w-1/2 border-[0.1px] border-gray-400/30" />
  );

  return (
    <>
      {/* Hero Section */}
      <LandingFrame />

      <CardsWork />
      <div className="mt-20 flex flex-col items-center justify-center gap-16 px-[20px]">
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
