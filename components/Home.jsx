import React from "react";
import DesktopNavBar from "./DesktopNavBar";
import MobileNavBar from "./MobileNavBar";
import Image from "next/image";
import { useRouter } from "next/router";
import cn from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldHalved,
  faStopwatch,
  faArrowDownUpLock,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import AOS from "aos";

export default function Home(props) {
  const router = useRouter();

  AOS.init({
    offset: 80,
    duration: 800,
    easing: "ease-in-sine",
    delay: 100,
  });

  return (
    <>
      <DesktopNavBar />
      <MobileNavBar />
      <div className=" bg-gray-100 mt-14">
        <div className="px-4 md:px-24 bg-local  bg-origin-border bg-clip-border bg-top md:bg-[right_top_150px]  bg-no-repeat bg-[length:100%_300px] md:bg-[length:700px_500px] bg-[#8C8C8C] min-h-[800px] py-12 bg-[url('/assets/slik-delivery-red.jpg')] pt-[320px] md:pt-[150px] ">
          <h1
            data-aos="fade-up"
            style={{ fontFamily: "Work Sans" }}
            className="text-center capitalize p-4 font-black text-4xl lg:text-6xl 2xl:text-6xl max-w-3xl 2xl:max-w-4xl lg:text-left  text-c-1"
          >
            {" "}
            Reliable delivery service every time{" "}
          </h1>

          <h1
            data-aos="fade-up"
            style={{ fontFamily: "Work Sans" }}
            className="text-center capitalize p-4 font-black text-3xl lg:text-4xl 2xl:text-5xl max-w-3xl 2xl:max-w-4xl lg:text-left  text-prim-color/80"
          >
            Ship packages to anywhere with ease.
          </h1>

          <h1
            data-aos="fade-up"
            style={{ fontFamily: "Work Sans" }}
            className="text-center capitalize p-4 font-black text-4xl lg:text-6xl 2xl:text-6xl max-w-3xl 2xl:max-w-4xl lg:text-left  text-c-1"
          >
            Experience the modern way of logistics with Slik.
          </h1>
          <div
            data-aos="fade-up"
            className="mx-auto md:hidden text-center md:text-left text-c-1 text-4xl md:text-5xl my-2 md:my-6 px-4  space-x-8 "
          >
            <FontAwesomeIcon
              icon={faStopwatch}
              className="text-4xl md:text-5xl"
            />

            <FontAwesomeIcon
              icon={faShieldHalved}
              className="text-4xl md:text-5xl"
            />

            <FontAwesomeIcon
              icon={faArrowDownUpLock}
              className="text-4xl md:text-5xl"
            />
          </div>
          <p
            data-aos="fade-up"
            style={{ fontFamily: "Work Sans" }}
            className="text-center max-w-3xl px-4 text-lg lg:text-xl lg:text-left  py-4 "
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            obcaecati saepe dicta explicabo dolorum corporis vel repudiandae qui
            sint aut, soluta recusandae repellendus enim asperiores incidunt,
            reiciendis dolorem eaque eveniet doloremque cum excepturi.
          </p>

          <div data-aos="fade-up">
            <h1
              style={{ fontFamily: "Work Sans" }}
              className="text-center  mt-8 md:mt-16 capitalize p-4 font-black text-3xl lg:text-4xl 2xl:text-5xl  lg:text-left  text-black"
            >
              Join the waitlist to get notified when we launch
            </h1>

            <div className="my-8 px-2 md:px-4 md:w-[70%]">
              <div className="flex flex-col md:flex-row justify-around space-y-8 md:space-y-0 md:space-x-16">
                <div className="flex flex-row w-full hover:bg-prim-color/80 bg-prim-color rounded-xl  justify-between items-center space-x-2 ">
                  <input
                    className=" outline-none w-[65%] text-base md:text-lg h-[50px] caret:text-prim-color text-prim-color placeholder:text-prim-color/50  py-2 pl-8 pr-8 rounded-y-xl rounded-l-xl  "
                    type="email"
                    placeholder="johndoe@gmail.com"
                    name="waiter"
                  />
                  <button className="block w-[35%] text-base text-white font-bold outline-none  rounded-y-xl rounded-r-xl text-center ">
                    Join Waitlist
                  </button>
                </div>

                <div className="w-full">
                  <button className="block w-full text-xl font-normal px-6 py-2 hover:bg-c-1/80 transition-colors transform duration-300 h-[50px]   bg-c-1 ring-[2px] ring-c-1 text-white rounded-xl outline-none text-center ">
                    Learn more &nbsp;{" "}
                    <FontAwesomeIcon className="text-xl" icon={faCircleInfo} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Frame 2  */}

      <div className="  bg-gray-100">
        <div className="px-4 w-full  md:px-24 bg-local  bg-origin-border bg-clip-border bg-top md:bg-[left_top_150px]  bg-no-repeat bg-[length:100%_300px] md:bg-[length:700px_500px] bg-[#8C8C8C] min-h-[800px] py-12 bg-[url('/assets/slik-delivery-white.jpg')] pt-[320px] md:pt-[150px] ">
          <div className="md:ml-[45%]">
            <h1
              data-aos="fade-up"
              style={{ fontFamily: "Work Sans" }}
              className="text-center capitalize p-4 font-black text-4xl lg:text-6xl 2xl:text-6xl  lg:text-left   text-white"
            >
              Slik provides clean and fast logistics service
            </h1>

            <h1
              data-aos="fade-up"
              style={{ fontFamily: "Work Sans" }}
              className="text-center capitalize p-4 font-black text-2xl lg:text-3xl 2xl:text-4xl  lg:text-left  text-c-1"
            >
              Want to contact us? Our channels are always available 24 hours a
              day, 7 days a week!
            </h1>

            <p
              data-aos="fade-up"
              style={{ fontFamily: "Work Sans" }}
              className="text-center max-w-3xl px-4 text-lg lg:text-xl lg:text-left  py-4 "
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              obcaecati saepe dicta explicabo dolorum corporis vel repudiandae
              qui sint aut, soluta recusandae repellendus enim asperiores
              incidunt.
            </p>

            <div data-aos="fade-up">
              <div className="my-2 px-2 md:px-4 md:w-[70%]">
                <div className="flex flex-col md:flex-row justify-around space-y-8 md:space-y-0 md:space-x-16">
                  <div className="w-full">
                    <button className="block w-[80%] mx-auto md:w-full text-xl font-bold px-6 py-2 hover:bg-c-1/80 transition-colors transform duration-300 h-[50px]   bg-c-1 ring-[2px] ring-c-1 text-white rounded-xl outline-none text-center ">
                      Call Us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Frame 3 */}

      <div className="px-4 w-full  md:px-24 bg-local  bg-origin-border bg-clip-border bg-top md:bg-[right_top_150px]  bg-no-repeat bg-[length:100%_400px] min-h-[500px] md:bg-[length:700px_500px] bg-[#8C8C8C]  py-12 bg-[url('/assets/Fast-Delivery-Dark.png')] pt-[50px] md:pt-[150px]  ">
        <div data-aos="fade-up" className="">
          <h1
            style={{ fontFamily: "Work Sans" }}
            className="text-center capitalize p-4 font-black text-3xl lg:text-6xl 2xl:text-6xl  lg:text-left   text-white"
          >
            Try us and see how good our services are
          </h1>

          <div className="mt-36 max-w-lg">
            <div className="flex flex-col md:flex-row justify-around space-y-8 md:space-y-0 md:space-x-16">
              <div className="w-full">
                <button className="block w-[80%] mx-auto md:w-full text-xl font-bold px-6 py-2 bg-c-1/80 transition-colors transform duration-300 h-[50px] text-white  ring-[2px] ring-gray-100  rounded-xl outline-none text-center ">
                  Ok, Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
