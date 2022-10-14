import Image from "next/image";
import { useRouter } from "next/router";
import cn from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMagnifyingGlass,
  faBarsStaggered,
} from "@fortawesome/free-solid-svg-icons";
import { faRectangleXmark } from "@fortawesome/free-regular-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { useState, useMemo } from "react";
import { navItems } from "./DesktopNavBar";
import { useSpring, animated } from "@react-spring/web";

export default function MobileNavBar(props) {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);

  const animationProps = useSpring({
    opacity: showMenu ? 1 : 0,
    delay: 200,
  });

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <>
      {/* SLideInOverlay */}

      {showMenu && (
        <animated.div
          style={{ fontFamily: "Mulish" }}
          className={
            "bg-black/40 md:hidden z-10 fixed  w-[100%] right-0 top-[5%] min-h-screen "
          }
        >
          <animated.div
            // style={animationProps}
            className="bg-white fixed h-full w-[80%] top-0 right-0"
          >
            <ul className=" mx-auto pt-[50%] font-bold space-y-10 ">
              {navItems.map((n, i) => {
                return (
                  <li
                    key={i}
                    className={
                      "hover:cursor-pointer block mx-auto dark:text-black/90 text-black/90 font-semibold text-center self-center  transform text-lg duration-500 transition-colors pb-1  hover:scale-[1.02] "
                    }
                  >
                    {n.title}
                  </li>
                );
              })}

              <li className="hover:cursor-pointer block mx-auto dark:text-black/90 text-black/90 font-semibold text-center self-center  transform text-lg duration-500 transition-colors pb-1  hover:scale-[1.02] ">
                Book a delivery
              </li>
              {/* <li className="text-black/90 capitalize text-center pb-4 text-lg">
              {" "}
              About us{" "}
            </li>
            <li className="text-black/90 capitalize text-center pb-4 text-lg">
              {" "}
              Our services{" "}
            </li>
            <li className="text-black/90 capitalize text-center pb-4 text-lg">
              {" "}
              Join us{" "}
            </li>
            <li className="text-black/90 capitalize text-center pb-4 text-lg">
              {" "}
              Book a delivery{" "}
            </li> */}
            </ul>

            <div className="mt-[72px] w-full    ">
              <button className="block mx-auto hover:text-[#EE3A46] self-center text-base px-12 py-3 hover:bg-white  hover:ring-2 hover:ring-[#EE3A46] transition-colors text-white transform duration-300 font-normal   bg-[#EE3A46]  rounded-xl outline-none text-center ">
                Join Waitlist
              </button>
            </div>
          </animated.div>
        </animated.div>
      )}

      {/* End of SlideInOverlay  */}

      <nav className="py-3 z-20 bg-[#FFFFFF] md:hidden px-4 flex flex-row  fixed top-0 left-0 right-0 justify-between items-center">
        {/* <div className="self-center p-0  bg-blue-400"> */}
        <Image
          src="/assets/Slik-Logo-horizontal-web.png"
          layout="fixed"
          width="60"
          height="35"
          alt="nav logo"
          objectFit="contain"
          className=""
        />
        {/* </div> */}

        <div className="text-[#EE3A46] text-3xl self-center">
          <div className="flex flex-row items-center justify-center space-x-6">
            {/* <div
              className={
                " transform  duration-300 transition-all hover:scale-[103%]" +
                cn([
                  {
                    " opacity-20 ": router.pathname === "/",
                  },
                ])
              }
            >
              <FontAwesomeIcon icon={faHouse} className="text-3xl" />
            </div>

            <div className=" transform duration-300 transition-all hover:scale-[103%]">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="text-3xl" />
            </div> */}

            <div
              onClick={toggleMenu}
              className=" transform duration-300 transition-all hover:scale-[103%]"
            >
              <FontAwesomeIcon
                icon={showMenu ? faRectangleXmark : faBarsStaggered}
                className="text-3xl"
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
