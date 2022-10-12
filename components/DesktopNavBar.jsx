import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import cn from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faTaxi,
  faIdCard,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

const navItems = [
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

export default function DesktopNavBar(props) {
  const router = useRouter();

  return (
    <nav className="fixed hidden z-10 bg-white  md:flex top-0   left-0 right-0    flex-row justify-between  items-center">
      <div className="self-center w-[60%] bg-[#FBF7EB] flex flex-row justify-around  px-12 py-2 ">
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
                    "hover:cursor-pointer text-black/90 font-semibold  self-center border-b border-transparent transform text-base duration-500 transition-colors hover:border-black/90 hover:scale-[1.0] "
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

      <div className="self-stretch px-16 py-2 w-[40%] bg-[#EE3A46]">
        <div className="flex h-full flex-row justify-around space-x-6 w-full">
          <button className="block text-lg self-center  font-normal px-3 py-1  text-white outline-none hover:scale-[1.02] transform transition rounded-xl text-center ">
            Book a delivery
          </button>

          <button className="block text-[#EE3A46] self-center text-base px-6 py-2 hover:bg-c-1/10 transition-colors hover:text-white transform duration-300 font-normal  bg-[#FBF7EB]  rounded-xl outline-none text-center ">
            Join Waitlist
          </button>
        </div>
      </div>
    </nav>
  );
}
