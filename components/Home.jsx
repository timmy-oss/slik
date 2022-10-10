import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import cn from "classnames";

const navItems = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Merchants",
    link: "",
  },
  {
    title: "Customers",
    link: "",
  },
  {
    title: "Riders",
    link: "",
  },
  {
    title: "Partners",
    link: "",
  },
  {
    title: "How it works",
    link: "",
  },
];

export default function Home(props) {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="fixed hidden bg-white border-b border-prim-color/20 md:flex top-0 px-4 py-2 left-0 right-0 min-h-[40px] md:min-h-[50px] shadow  flex-row justify-between  items-center">
        <div className="self-center relative ">
          <Image
            src="/assets/Slik-Logo-horizontal-web.png"
            layout="fixed"
            width="100"
            height="50"
            alt="nav logo"
            objectFit="contain block bg-inherit"
          />

          <span
            style={{ fontFamily: "Lato" }}
            className="inline-block absolute top-[-10%] left-[100%] text-prim-color   text-lg align-top"
          >
            logistics
          </span>
        </div>

        <div className="self-center">
          <ul className="flex flex-row font-bold  justify-around items-center space-x-8 ">
            {navItems.map((n) => {
              return (
                <li
                  className={
                    "hover:cursor-pointer text-gr self-center border-b-2 border-transparent transform text-lg duration-500 transition-colors hover:border-black hover:scale-[1.02] " +
                    cn([
                      {
                        " opacity-20 ": router.pathname === n.link,
                        " opacity-100 ": router.pathname !== n.link,
                      },
                    ])
                  }
                >
                  {n.title}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="self-center">
          <div className="flex flex-row space-x-6">
            <button className="block text-lg p-2 hover:bg-prim-color/10 transition-colors transform duration-300 font-bold px-4 bg-white ring ring-prim-color text-prim-color outline-none rounded-xl text-center ">
              Join Waitlist 🔥
            </button>

            <button className="block text-lg p-2 hover:bg-black/10 transition-colors transform duration-300 font-bold px-4 bg-white ring ring-black text-black rounded-xl outline-none text-center ">
              Get Started
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
