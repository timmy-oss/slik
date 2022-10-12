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
      <div className=" bg-[#FBF7EB] mt-14 flex flex-col lg:flex-row justify-center lg:justify-around max-h-[727px] min-h-[727px]">
        <div className="w-[60%] px-32 pt-24">
          <h1
            data-aos="fade-up"
            style={{ fontFamily: "Work Sans" }}
            className="text-center capitalize p-4 font-black text-4xl lg:text-6xl 2xl:text-6xl max-w-3xl 2xl:max-w-4xl lg:text-left  text-black/90"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            tempora.
          </h1>

          <p
            data-aos="fade-up"
            style={{ fontFamily: "Work Sans" }}
            className="text-center max-w-3xl px-4 text-lg lg:text-xl lg:text-left  py-4 "
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            obcaecati saepe dicta explicabo dolorum corporis vel repudiandae qui
            sint aut, soluta recusandae repellendus enim asperiores.
          </p>

          <div className="p-2 pl-4 bg-white rounded-[10px] mt-24">
            <div className="flex flex-row w-full   rounded-[10px]  justify-between items-center  ">
              <input
                className=" outline-none w-[65%] bg-[#EEEEEE] text-base md:text-lg h-[72px] caret:text-prim-color text-black/90 placeholder:text-black/40  py-4 pl-8 pr-8 rounded-y-xl rounded-l-xl  "
                type="email"
                placeholder="Input Tracking Code"
                name="waiter"
              />
              <button className="block relative -left-2 w-[35%] bg-[#EE3A46] self-stretch text-lg hover:bg-[#EE3A46]/90 transform transition-colors text-white  outline-none  rounded-[10px] text-center ">
                Track order
              </button>
            </div>
          </div>
        </div>

        <div className="w-[40%] bg-[#EE3A46] self-stretch ">
          <Image
            src="/assets/slik-delivery-white-1.png"
            layout="fixed"
            width="700"
            height="500"
            alt="nav logo"
            objectFit="contain"
          />
        </div>
      </div>
      {/* Phase 2  */}

      <div className=" bg-[#FFFFFF] py-[96px] max-h-[728px] flex flex-col lg:flex-row justify-center lg:justify-center min-h-[727px]">
        <div className="w-[50%] bg-[##EEEEEE] self-stretch rounded-[10px] ">
          <Image
            src="/assets/slik-social-red-background.png"
            layout="fixed"
            width="710"
            height="569"
            alt="nav logo"
            objectFit="contain"
            className="rounded-[10px]"
          />
        </div>

        <div className="w-[50%] self-start ">
          <h1
            style={{ fontFamily: "Work Sans" }}
            className="   font-normal uppercase text-base  text-left  text-[#EE3A46]"
          >
            About Us
          </h1>

          <h2
            style={{ fontFamily: "Work Sans" }}
            className="text-left w-[80%] text-black/90 text-2xl lg:text-3xl py-8 font-bold "
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>

          <p
            data-aos="fade-up"
            style={{ fontFamily: "Work Sans" }}
            className="text-left w-[80%]  text-sm text-[#797979] "
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            quisquam in molestias minus pariatur harum voluptate error, fugiat
            earum rerum iusto, placeat ex amet dolores, accusantium iste
            aspernatur. Minus cupiditate voluptatibus aperiam omnis expedita
            magni commodi incidunt delectus ad deserunt necessitatibus beatae ea
            repudiandae excepturi reiciendis sed accusantium blanditiis tempora,
            aliquid nesciunt facere porro vel totam numquam? Exercitationem
            ducimus cum inventore similique perferendis repudiandae officiis
            sunt beatae obcaecati, aut eos, hic officia vero tempore totam,
            laborum aperiam assumenda. Nam sequi earum velit possimus
            accusantium ut culpa atque, repudiandae praesentium eius tempora
            laborum harum. Voluptatem aut sunt, animi consequuntur dolorum
            delectus omnis velit iure, nulla magni earum. Nihil, assumenda
            numquam odio sint quasi perferendis, architecto id soluta iste,
            dolores excepturi eveniet.
          </p>

          <div className="mt-[72px]">
            <button className="block hover:text-[#EE3A46] self-center text-base px-8 py-3 hover:bg-white hover:ring-1 hover:ring-[#EE3A46] transition-colors text-white transform duration-300 font-normal  bg-[#EE3A46]  rounded-xl outline-none text-center ">
              Join Waitlist
            </button>
          </div>
        </div>
      </div>

      {/* Phase 2 */}

      <div className="px-[97px] bg-[#D4AF37]/10 py-[96px] max-h-[616px] flex flex-col lg:flex-col justify-center lg:justify-center min-h-[616px]">
        <div className=" w-[40%]">
          <h1
            style={{ fontFamily: "Work Sans" }}
            className="   font-normal uppercase text-lg  text-left  text-[#EE3A46]"
          >
            Our Services
          </h1>

          <h2
            style={{ fontFamily: "Work Sans" }}
            className="text-left w-[80%] text-black/90 text-xl lg:text-2xl py-8 font-bold "
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row justify-around space-x-16 items-center">
          {[1, 2, 3, 4].map((c, i) => {
            return (
              <div className="white py-[46px] flex max-h-[290px] min-h-[290px] flex-1  flex-col justify-start bg-white px-[34px]">
                <Image
                  src="/assets/cart-wheel.png"
                  layout="fixed"
                  width="72"
                  height="62"
                  alt="cart wheel"
                  objectFit="contain"
                  className="rounded-[10px]"
                />

                <h3 className=" block  capitalize font-bold py-6 text-2xl text-black/90">
                  {" "}
                  Delivery{" "}
                </h3>

                <p
                  data-aos="fade-up"
                  style={{ fontFamily: "Work Sans" }}
                  className="text-left w-[80%]  text-sm text-[#797979] "
                >
                  Delivery to every location in Nigeria.
                </p>
              </div>
            );
          })}
        </div>
      </div>
      {/* Phase 4  */}

      <div className="px-[97px] bg-white py-[87px] max-h-[1433px] flex flex-col  justify-start lg:justify-start items-center min-h-[1433px]">
        <h1
          style={{ fontFamily: "Work Sans" }}
          className="     text-2xl font-bold  text-center  text-black/90"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi!
        </h1>
      </div>
    </>
  );
}
