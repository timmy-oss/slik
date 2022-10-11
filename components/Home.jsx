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
        <div className="px-4 bg-local  bg-origin-border bg-clip-border bg-top md:bg-[right_top_1rem]  bg-no-repeat bg-[length:100%_300px] md:bg-[length:700px_500px] bg-[#8C8C8C] min-h-[800px] py-12 bg-[url('/assets/slik-delivery-red.jpg')] pt-[320px] md:pt-[100px]">
          <h1
            style={{ fontFamily: "Work Sans" }}
            className="text-center capitalize p-4 font-black text-4xl lg:text-7xl 2xl:text-7xl max-w-3xl 2xl:max-w-4xl lg:text-left  text-c-1"
          >
            {" "}
            Reliable delivery service every time{" "}
          </h1>
          <div className="mx-auto text-center md:text-left text-c-1 text-4xl md:text-7xl my-2 md:my-6 px-4  ">
            <i class="fa-regular fa-clock"></i>{" "}
            <i class="fa-solid fa-shield-halved"></i>{" "}
            <i class="fa-solid fa-arrow-down-up-lock"></i>
          </div>
          <p
            style={{ fontFamily: "Roboto" }}
            className="text-center text-lg lg:text-3xl lg:text-left  py-4 "
          >
            {" "}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
            in alias perspiciatis. Similique iure eveniet hic maiores vero quod
            assumenda libero voluptatum id, sequi.
          </p>
        </div>
      </div>
    </>
  );
}
