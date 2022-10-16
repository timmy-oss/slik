import Image from "next/image";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBarsStaggered,
  faX,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { useEffect, useState } from "react";
import { navItems } from "./DesktopNavBar";
import AOS from "aos";

export default function MobileNavBar({ toggleForm }) {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  AOS.init({
    offset: 40,
    duration: 500,
    easing: "ease-in-sine",
    delay: 100,
  });

  useEffect(() => {
    if (localStorage) {
      const theme = localStorage.getItem("slik_theme");

      if (theme) {
        if (theme === "dark") {
          setDarkMode(true);
          if (
            !document
              .getElementsByTagName("html")[0]
              .className.split(" ")
              .includes("dark")
          ) {
            document.getElementsByTagName("html")[0].className += "  dark  ";
          }
        }
      }
    }
  }, []);

  function toggleTheme() {
    let classes = document.getElementsByTagName("html")[0].className.split(" ");

    if (classes.includes("dark")) {
      const newClasses = classes.filter((m) => m !== "dark");
      document.getElementsByTagName("html")[0].className = newClasses;

      if (localStorage) {
        localStorage.setItem("slik_theme", "light");
      }
    } else {
      document.getElementsByTagName("html")[0].className += "  dark  ";
      if (localStorage) {
        localStorage.setItem("slik_theme", "dark");
      }
    }
    setDarkMode(!darkMode);
  }

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <>
      {/* SLideInOverlay */}

      {showMenu && (
        <div
          className={
            "bg-black/60 dark:bg-white/40  md:hidden z-10 fixed  w-[100%] right-0 top-[5%] min-h-screen "
          }
        >
          <div
            data-aos="fade-left"
            style={{ fontFamily: "Mulish" }}
            className="bg-white  dark:bg-[#111315] fixed h-full w-[80%] top-0 right-0"
          >
            <ul className=" mx-auto pt-[50%] font-bold space-y-10 ">
              {navItems.map((n, i) => {
                return (
                  <li
                    key={i}
                    className={
                      "hover:cursor-pointer block mx-auto dark:text-white text-black/90 font-semibold text-center self-center  transform text-lg duration-500 transition-colors pb-1  hover:scale-[1.02] "
                    }
                  >
                    {n.title}
                  </li>
                );
              })}

              <li className="hover:cursor-pointer block mx-auto dark:text-white text-black/90 font-semibold text-center self-center  transform text-lg duration-500 transition-colors pb-1  hover:scale-[1.02] ">
                Book a delivery
              </li>
            </ul>

            <div className="mt-[72px] w-full    ">
              <button
                onClick={toggleForm}
                className="block mx-auto hover:text-[#EE3A46] self-center text-base px-12 py-3 hover:bg-white  hover:ring-2 hover:ring-[#EE3A46] transition-colors text-white transform duration-300 font-normal dark:hover:bg-[#111315]   bg-[#EE3A46]  rounded-xl outline-none text-center "
              >
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
      )}

      {/* End of SlideInOverlay  */}

      <nav className="py-3 z-20 bg-[#FBF7EB] shadow-lg md:hidden px-4 flex flex-row  fixed top-0 left-0 right-0 justify-between items-center">
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
            */}

            <div
              onClick={toggleTheme}
              className=" rounded-full  transform duration-300 transition-all hover:scale-[103%] "
            >
              {darkMode ? (
                <FontAwesomeIcon
                  icon={faSun}
                  className="text-3xl text-[#EE3A46]"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faMoon}
                  className="text-3xl text-[#EE3A46]"
                />
              )}
            </div>

            <div
              onClick={toggleMenu}
              className=" transform duration-300  min-w-[25px] max-w-[25px] transition-all hover:scale-[103%]"
            >
              <FontAwesomeIcon
                icon={showMenu ? faX : faBarsStaggered}
                className="text-3xl"
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
