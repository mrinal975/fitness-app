import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { SelectedPage } from "src/shared/types";
import Logo from "src/assets/Logo.png";
import Link from "./Link";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

function Navbar({ selectedPage, setSelectedPage }: Props) {
  const flexBetween = "flex items-center justify-between";
  return (
    <nav className="{flexBetween} fixed top-0 z-30 w-full py-6">
      <div className={`${flexBetween} mx-auto w-5/6 `}>
        <div className={`${flexBetween} w-full gap-16`}>
          {/* Left Side */}
          <img alt="Logo" src={`${Logo}`} />

          {/* Right Side */}
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
              <button className=""> Become a Member</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
