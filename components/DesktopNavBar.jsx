import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import cn from "classnames";

const navItems = [
  {
    title: "Home",
    link: "/",
    icon: "fa-solid fa-shop",
  },
  {
    title: "Merchants",
    link: "",
    icon: "fa-solid fa-basket-shopping",
  },
  {
    title: "Customers",
    link: "",
    icon: "fa-solid fa-users",
  },
  {
    title: "Riders",
    link: "",
    icon: "fa-solid fa-motorcycle",
  },
];

export default function DesktopNavBar(props) {
  const router = useRouter();

  return (
    <nav className="fixed hidden z-10 bg-white border-b border-black/20 md:flex top-0 px-24 py-2 left-0 right-0 min-h-[40px] md:min-h-[50px] shadow  flex-row justify-between  items-center">
      <div className="self-center  ">
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
        <ul className="flex flex-row   justify-around items-center space-x-8 ">
          {navItems.map((n, i) => {
            return (
              <li
                key={i}
                className={
                  "hover:cursor-pointer text-c-1 font-semibold  self-center border-b-2 border-transparent transform text-base duration-500 transition-colors hover:border-c-1 hover:scale-[1.02] " +
                  cn([
                    {
                      " opacity-20 ": router.pathname === n.link,
                      " opacity-100 ": router.pathname !== n.link,
                    },
                  ])
                }
              >
                <span className={n.icon}></span>&nbsp;
                {n.title}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="self-center text-stone-900 space-x-4 hidden 2xl:block">
        <span className="hover:cursor-pointer inline-block  self-center  transform text-base duration-500 transition-colors  hover:underline px-2">
          How it works &nbsp;
        </span>

        <span className="hover:cursor-pointer inline-block  self-center  transform text-base duration-500 transition-colors  hover:underline px-2">
          Brands and Partners&nbsp;{" "}
        </span>

        <span className="hover:cursor-help inline-block  self-center  transform text-base duration-500 transition-colors  hover:underline px-2">
          More info... &nbsp;
        </span>
      </div>

      <div className="self-center">
        <div className="flex flex-row space-x-6">
          <button className="block text-base  hover:bg-prim-color/10 transition-colors transform duration-300 font-normal px-3 py-1 bg-white ring-[2px] ring-prim-color text-prim-color outline-none rounded-xl text-center ">
            Join Waitlist 🔥
          </button>

          <button className="block text-base px-3 py-1 hover:bg-c-1/10 transition-colors transform duration-300 font-normal  bg-white ring-[2px] ring-c-1 text-c-1 rounded-xl outline-none text-center ">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
