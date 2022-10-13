import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import cn from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMagnifyingGlass,
  faBarsStaggered,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

export default function MobileNavBar(props) {
  const router = useRouter();

  return (
    <nav className="py-2 z-10 bg-[#EE3A46] md:hidden px-4 flex flex-row  fixed top-0 left-0 right-0 justify-between items-center">
      {/* <div className="self-center p-0  bg-blue-400"> */}
      <Image
        src="/assets/Slik-Logo-horizontal-white-web.png"
        layout="fixed"
        width="60"
        height="35"
        alt="nav logo"
        objectFit="contain"
        className=""
      />
      {/* </div> */}

      <div className="text-white text-3xl self-center">
        <div className="flex flex-row items-center justify-center space-x-6">
          <div
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
          </div>

          <div className=" transform duration-300 transition-all hover:scale-[103%]">
            <FontAwesomeIcon icon={faBarsStaggered} className="text-3xl" />
          </div>
        </div>
      </div>
    </nav>
  );
}
