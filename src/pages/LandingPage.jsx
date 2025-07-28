import LandingFrame from "../components/homepage-components/LandingFrame";
import CardsWork from "../components/homepage-components/CardsWork";
import WebDevelopmentSection from "../components/homepage-components/WebDevelopmentSection";
import PhotographySection from "../components/homepage-components/PhotographySection";
import DesignSection from "../components/homepage-components/DesignSection";
import AboutSection from "../components/homepage-components/AboutSection";
import ContactSection from "../components/homepage-components/ContactSection";

export default function LandingPage() {

  const Divider = () => (

    <hr className="w-1/2 my-2 border-[0.1px] border-gray-400/20" />
  );


  return (
    <>
      <LandingFrame />
      <CardsWork />
      <div className="mt-20 flex flex-col items-center justify-center gap-16 px-[20px]">
        <Divider/>
        <WebDevelopmentSection />
        <Divider   />

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
