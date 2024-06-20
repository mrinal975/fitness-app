import { SelectedPage } from "src/shared/types";
import ActionButton from "src/shared/ActionButton";
import useMediaQuery from "src/hooks/useMediaQuery";
import HomePageText from "src/assets/HomePageText.png";
import HomePageGraphic from "src/assets/HomePageGraphic.png";
import SponsorRedBull from "src/assets/SponsorRedBull.png";
import SponsorForbes from "src/assets/SponsorForbes.png";
import SponsorFortune from "src/assets/SponsorFortune.png";
// @ts-ignore
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

function Home({ setSelectedPage }: Props) {
  const isAboveMediumScreen = useMediaQuery("min-width: 1060px");
  console.log("isAboveMediumScreen", isAboveMediumScreen);
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pd-0">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/4">
          {/* HEADINGS */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div
                className="before:absolute 
                before:-top-20 
                before:-left-20 
                before:z-[-1]
                md:before:content-evolvetext"
              >
                <img src={HomePageText} alt="home-page-text" />
              </div>
            </div>
            <p className="mt-8 text-sm md:text-start">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </motion.div>
        </div>
        {/* ACTIONS */}
        <motion.div
          className="mt-8 flex item-center gap-8 md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <ActionButton setSelectedPage={setSelectedPage}>
            Join Now
          </ActionButton>
          <AnchorLink
            className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
            href={`${SelectedPage.ContactUs}`}
            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
          >
            <p>Learn More</p>
          </AnchorLink>
        </motion.div>
        {/* IMAGE */}
        <div className="flex basis-3/5 justify-center md:z-10 md:mt-16 md:ml-40 md:justify-items-end">
          <img alt="home-pageGraphic" src={HomePageGraphic} />
        </div>
        {/* SPONSORS */}
        {!isAboveMediumScreen && (
          <div className=" h-[150px] w-full bg-primary-100 py-10">
            <div className="mx-auto w-5/6">
              <div className="flex w-3/5 items-center justify-between gap-3">
                <img alt="redbull-sponsor" src={SponsorRedBull} />
                <img alt="forbes-sponsor" src={SponsorForbes} />
                <img alt="fortune-sponsor" src={SponsorFortune} />
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
}

export default Home;
