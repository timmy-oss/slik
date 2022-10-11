import React from "react";
import DesktopNavBar from "./DesktopNavBar";
import MobileNavBar from "./MobileNavBar";
import Image from "next/image";
import { useRouter } from "next/router";
import cn from "classnames";

export default function Home(props) {
  const router = useRouter();

  return (
    <>
      <DesktopNavBar />
      <MobileNavBar />
      <div className="min-h-screen bg-gray-100 mt-14">
        <div className="px-4 md:px-24 bg-local  bg-origin-border bg-clip-border bg-top md:bg-[right_top_150px]  bg-no-repeat bg-[length:100%_300px] md:bg-[length:700px_500px] bg-[#8C8C8C] min-h-[800px] py-12 bg-[url('/assets/slik-delivery-red.jpg')] pt-[320px] md:pt-[150px] ">
          <h1
            style={{ fontFamily: "Work Sans" }}
            className="text-center capitalize p-4 font-black text-4xl lg:text-7xl 2xl:text-7xl max-w-3xl 2xl:max-w-4xl lg:text-left  text-c-1"
          >
            {" "}
            Reliable delivery service every time{" "}
          </h1>

          <h1
            style={{ fontFamily: "Work Sans" }}
            className="text-center capitalize p-4 font-black text-3xl lg:text-4xl 2xl:text-5xl max-w-3xl 2xl:max-w-4xl lg:text-left  text-prim-color/80"
          >
            Ship anything to anywhere with ease.
          </h1>

          <h1
            style={{ fontFamily: "Work Sans" }}
            className="text-center capitalize p-4 font-black text-4xl lg:text-7xl 2xl:text-7xl max-w-3xl 2xl:max-w-4xl lg:text-left  text-c-1"
          >
            Experience the modern logistics with Slik.
          </h1>
          <div className="mx-auto md:hidden text-center md:text-left text-c-1 text-4xl md:text-5xl my-2 md:my-6 px-4  ">
            <i class="fa-regular fa-clock"></i>{" "}
            <i class="fa-solid fa-shield-halved"></i>{" "}
            <i class="fa-solid fa-arrow-down-up-lock"></i>
          </div>
          <p
            style={{ fontFamily: "Roboto" }}
            className="text-center max-w-3xl px-4 text-lg lg:text-xl lg:text-left  py-4 "
          >
            {" "}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
            in alias perspiciatis. Similique iure eveniet hic maiores vero quod
            assumenda libero voluptatum id, sequi.
          </p>

          <h1
            style={{ fontFamily: "Work Sans" }}
            className="text-center  mt-16 capitalize p-4 font-black text-3xl lg:text-4xl 2xl:text-5xl max-w-5xl 2xl:max-w-5xl lg:text-left  text-black"
          >
            Join the waitlist to get notified when we launch
          </h1>

          <div className="my-8 md:px-4 md:w-[70%]">
            <div className="flex flex-col md:flex-row justify-around space-y-8 md:space-y-0 md:space-x-16">
              <div className="flex flex-row w-full hover:bg-prim-color/80 bg-prim-color rounded-xl  justify-between items-center space-x-2 ">
                <input
                  className=" outline-none w-[65%] text-lg h-[50px]  py-2 pl-4 pr-8 rounded-y-xl rounded-l-xl  "
                  type="email"
                  placeholder="Email Address"
                  name="waiter"
                />
                <button className="block w-[35%] text-base  hover:bg-prim-color/10 transition-colors transform duration-300   ring-[2px] ring-prim-color text-white font-bold outline-none  rounded-y-xl rounded-r-xl text-center ">
                  Join Waitlist
                </button>
              </div>

              <div className="w-full">
                <button className="block w-full text-xl font-bold px-6 py-2 hover:bg-c-1/80 transition-colors transform duration-300 h-[50px]   bg-c-1 ring-[2px] ring-c-1 text-white rounded-xl outline-none text-center ">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
