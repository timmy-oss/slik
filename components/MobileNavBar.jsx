import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import cn from "classnames";

export default function MobileNavBar(props) {
  const router = useRouter();

  return (
    <nav className="py-2 z-10 bg-white md:hidden px-4 flex flex-row shadow fixed top-0 left-0 right-0 justify-between items-center">
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

      <div className="text-prim-color text-3xl self-center">
        <div className="flex flex-row items-center justify-center space-x-6">
          <div
            className={
              " transform duration-300 transition-all hover:scale-[103%]" +
              cn([
                {
                  " opacity-20 ": router.pathname === "/",
                },
              ])
            }
          >
            <span className="text-3xl">
              <i className="fa-solid fa-house "></i>
            </span>
          </div>

          <div className=" transform duration-300 transition-all hover:scale-[103%]">
            <span className="text-3xl">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
          </div>

          <div className=" transform duration-300 transition-all hover:scale-[103%]">
            <span className="text-3xl">
              <i className="fa-solid fa-bars-staggered"></i>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
