import { SelectedPage } from "src/shared/types";
import ActionButton from "src/shared/ActionButton";
import useMediaQuery from "src/hooks/useMediaQuery";
import HomePageText from "src/assets/HomePageText.png";
import HomePageGraphic from "src/assets/HomePageGraphic.png";
import SponsorRedBull from "src/assets/SponsorRedBull.png";
import SponsorForbes from "src/assets/SponsorForbes.png";
import SponsorFortune from "src/assets/SponsorFortune.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

function Home({ setSelectedPage }: Props) {
  const isAboveMediumScreen = useMediaQuery("min-width: 1060px");
  return <div>Home</div>;
}

export default Home;
