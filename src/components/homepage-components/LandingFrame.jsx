import { motion } from "framer-motion";
import ArrowLogo from "../../assets/icons/Main-icons/Vector-arrow-white.svg";
import PhotoLandingPage from "../../assets/images/Photo-GGB/Photo_GGB_Landing_page.webp";
import SplitStrings from "../../util/regexSplitString.js";
import Reveal from "../Reveal";

import { useLanguage } from "../../context/LanguageContext";
import { t } from "../../i18n/i18n";

export default function LandingFrame() {
  const title = "Félix Orain";
  const splitTitle = SplitStrings(title);
  const { language } = useLanguage();
  const profession =
    t("landing.profession", language) || "Developer and photographer";
  const splitProfession = SplitStrings(profession);

  const charVariants = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <>
      <section className="relative flex animate-[fade-up_1s_ease-in-out] flex-col items-center gap-[40px]">
        <div className="absolute z-10 mt-[30px] ml-[140px] flex items-start justify-center gap-60 self-stretch pl-[20px]">
          <div className="flex flex-col items-start gap-[16px]">
            <motion.h1
              className="text-[4rem] leading-[normal] font-extrabold text-shadow-lg md:text-[90px]"
              initial="hidden"
              animate="reveal"
              whileInView={"reveal"}
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.05 }}
            >
              {splitTitle.map((char, index) => (
                <motion.span
                  key={index}
                  variants={charVariants}
                  className="bg-gradient-to-t from-slate-600 to-slate-700 bg-clip-text text-transparent text-shadow-md"
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>
            <motion.p
              className="text-2xl font-semibold text-shadow-md md:text-3xl"
              initial="hidden"
              animate="reveal"
              whileInView={"reveal"}
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.05, delayChildren: 0.4 }}
            >
              {splitProfession.map((char, index) => (
                <motion.span
                  key={index}
                  variants={charVariants}
                  className="bg-gradient-to-tr from-slate-600 to-slate-700 bg-clip-text text-transparent opacity-100 text-shadow-md"
                >
                  {char}
                </motion.span>
              ))}
            </motion.p>
          </div>
        </div>

        <div className="absolute bottom-[15%] z-20 flex items-center justify-center">
          <motion.div
            animate={{
              y: [0, -10, 0], // Moves up and down
            }}
            transition={{
              duration: 10, // Total duration of the animation
              repeat: Infinity, // Repeat forever
              ease: "easeOut", // Easing function for smoothness
              repeatType: "loop", // Loop the animation smoothly
              repeatDelay: 2, // Delay before repeating
            }}
          >
            <img
              src={ArrowLogo}
              className="w-[80px] animate-[blinker_3s_ease-in-out_infinite]"
              alt="Downward Arrow"
            />
          </motion.div>
        </div>
        <Reveal y={75} duration={0.8} delay={0}>
          <div>
            <img
              className="h-full w-full object-cover"
              src={PhotoLandingPage}
              srcSet={`${PhotoLandingPage} 500w, ${PhotoLandingPage} 1000w, ${PhotoLandingPage} 1500w`}
              sizes="(max-width: 600px) 500px, (max-width: 1000px) 1000px, 1500px"
              alt="Landscape photo"
              fetchPriority="high"
              loading="eager"
            />
          </div>
        </Reveal>
      </section>
    </>
  );
}
