import Image from "next/image";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faTaxi,
  faIdCard,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { useState, useEffect } from "react";

export const navItems = [
  {
    title: "Our Services",
    link: "",
    icon: faTaxi,
  },
  {
    title: "About Us",
    link: "/",
    icon: faCircleInfo,
  },
  {
    title: "Join Us",
    link: "",
    icon: faIdCard,
  },
];

export default function DesktopNavBar({ toggleForm }) {
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(false);

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

  return (
    <nav className="fixed hidden z-10 bg-[#FBF7EB] dark:bg-[#242318]   md:flex top-0   left-0 right-0    flex-row justify-between  items-center">
      <div className="self-center  md:w-[50%] lg:w-[60%] bg-[#FBF7EB] dark:bg-[#242318] flex flex-row justify-around  px-12 py-3 ">
        <div>
          <Image
            src="/assets/Slik-Logo-horizontal-web.png"
            layout="fixed"
            width="100"
            height="50"
            alt="nav logo"
            objectFit="contain"
          />
        </div>

        <div className="self-center hidden lg:block">
          <ul className="flex flex-row   justify-around items-center space-x-16 ">
            {navItems.map((n, i) => {
              return (
                <li
                  key={i}
                  className={
                    "hover:cursor-pointer dark:text-white text-black/90 font-semibold  self-center border-b border-transparent transform text-base duration-500 transition-colors pb-1 hover:border-black/90 dark:hover:border-white hover:scale-[1.0] "
                  }
                >
                  <FontAwesomeIcon icon={n.icon} className="text-base" />
                  &nbsp;&nbsp;
                  {n.title}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="self-stretch xl:px-16 py-3 md:w-[50%] lg:w-[40%] bg-[#FBF7EB] dark:bg-[#242318]">
        <div className="flex h-full flex-row justify-around space-x-6 w-full">
          <button className="block text-lg font-semibold self-center   px-3 py-1  text-black/90 dark:text-white outline-none hover:scale-[1.02] transform transition rounded-xl text-center ">
            Contact Us
          </button>

          <div
            onClick={toggleTheme}
            className=" rounded-full min-w-[30px] self-center  transform duration-300 transition-all hover:scale-[103%] "
          >
            {darkMode ? (
              <FontAwesomeIcon
                icon={faSun}
                className="text-3xl text-black/90 dark:text-white"
              />
            ) : (
              <FontAwesomeIcon
                icon={faMoon}
                className="text-3xl text-black/90 dark:text-white"
              />
            )}
          </div>

          <button
            onClick={toggleForm}
            className="block text-white self-center text-base px-6 py-2 hover:bg-[#FBF7EB] hover:ring-1 hover:ring-[#EE3A46] transition-colors hover:text-[#EE3A46] transform duration-300 font-normal  bg-[#EE3A46]  rounded-xl outline-none text-center "
          >
            Join Waitlist 🔥
          </button>
        </div>
      </div>
    </nav>
  );
}
