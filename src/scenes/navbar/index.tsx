import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { SelectedPage } from "src/shared/types";
import Logo from "src/assets/Logo.png";
import Link from "./Link";
import useMediaQuery from "src/hooks/useMediaQuery";
import { useState } from "react";
import ActionButton from "src/shared/ActionButton";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

function Navbar({ selectedPage, setSelectedPage }: Props) {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  return (
    <nav className="{flexBetween} fixed top-0 z-30 w-full py-6">
      <div className={`${flexBetween} mx-auto w-5/6 `}>
        <div className={`${flexBetween} w-full gap-16`}>
          {/* Left Side */}
          <img alt="Logo" src={`${Logo}`} />

          {/* Right Side */}
          {isAboveMediumScreens ? (
            <div className={`${flexBetween} w-full`}>
              <div className={`${flexBetween} gap-8 text-sm`}>
                <Link
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />{" "}
                <Link
                  page="Banner"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />{" "}
                <Link
                  page="Our Classes"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />{" "}
                <Link
                  page="Contact Us"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <p></p>
              </div>
              <div className={`${flexBetween} gap-8`}>
                <p className="">Sign In</p>
                <ActionButton setSelectedPage={setSelectedPage}>
                  Become a Member
                </ActionButton>
              </div>
            </div>
          ) : (
            <button
              className="rounded-full bg-secondary-500"
              onClick={() => setIsMenuToggled(isMenuToggled)}
            >
              <Bars3Icon className="h-6 w-6 text-white" />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
