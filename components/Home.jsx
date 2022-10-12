import React from "react";
import DesktopNavBar from "./DesktopNavBar";
import MobileNavBar from "./MobileNavBar";
import Image from "next/image";
import { useRouter } from "next/router";
import cn from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
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
      <div className=" bg-[#FBF7EB] dark:bg-[#242318] mt-14 flex flex-col lg:flex-row justify-center lg:justify-around max-h-[727px] min-h-[727px]">
        <div className="w-[60%] px-32 pt-24">
          <h1
            data-aos="fade-up"
            style={{ fontFamily: "Work Sans" }}
            className="text-center capitalize p-4 font-black text-4xl lg:text-6xl 2xl:text-6xl max-w-3xl 2xl:max-w-4xl lg:text-left  text-black/90 dark:text-white"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            tempora.
          </h1>

          <p
            data-aos="fade-up"
            style={{ fontFamily: "Work Sans" }}
            className="text-center max-w-3xl px-4 text-lg lg:text-xl lg:text-left  py-4 dark:text-white text-black/90"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            obcaecati saepe dicta explicabo dolorum corporis vel repudiandae qui
            sint aut, soluta recusandae repellendus enim asperiores.
          </p>

          <div className="p-2 pl-4 bg-white dark:bg-[#2A2A2A] rounded-[10px] mt-24">
            <div className="flex flex-row w-full   rounded-[10px]  justify-between items-center  ">
              <input
                className=" outline-none w-[65%] bg-[#EEEEEE] dark:bg-[#444444] text-base md:text-lg h-[72px] caret:text-prim-color text-black/90 dark:text-white placeholder:text-black/40 dark:placeholder:text-white/40  py-4 pl-8 pr-8 rounded-y-xl rounded-l-xl  "
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

        <div className="w-[40%] bg-[#EE3A46]  self-stretch ">
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

      <div className=" bg-[#FFFFFF] dark:bg-[#111315] py-[96px] max-h-[728px] flex flex-col lg:flex-row justify-center lg:justify-center min-h-[727px]">
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
            className="text-left w-[80%] text-black/90 dark:text-white text-2xl lg:text-3xl py-8 font-bold "
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>

          <p
            data-aos="fade-up"
            style={{ fontFamily: "Work Sans" }}
            className="text-left w-[80%] dark:text-white text-sm text-[#797979] "
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

      {/* Phase 3 */}

      <div
        style={{ fontFamily: "Mulish" }}
        className="px-[97px] dark:bg-[#242318] bg-[#D4AF37]/10 py-[96px] max-h-[616px] flex flex-col lg:flex-col justify-center lg:justify-center min-h-[616px]"
      >
        <div className=" w-[40%]">
          <h1
            // style={{ fontFamily: "Work Sans" }}
            className="   font-bold uppercase text-lg  text-left  text-[#EE3A46]"
          >
            Our Services
          </h1>

          <h2
            // style={{ fontFamily: "Work Sans" }}
            className="text-left dark:text-white w-[80%] text-black/90 text-xl lg:text-2xl py-8 font-bold "
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row justify-around space-x-16 items-center">
          {[1, 2, 3, 4].map((c, i) => {
            return (
              <div className="white py-[46px] dark:bg-[#111315] flex max-h-[290px] min-h-[290px] flex-1  flex-col justify-start bg-white px-[34px]">
                <div className="rounded-[10px] dark:hidden">
                  <Image
                    src="/assets/cart-wheel.png"
                    layout="fixed"
                    width="72"
                    height="62"
                    alt="cart wheel"
                    objectFit="contain"
                  />
                </div>

                <div className="rounded-[10px] dark:block hidden">
                  <Image
                    src="/assets/cart-wheel-dm.png"
                    layout="fixed"
                    width="72"
                    height="62"
                    alt="cart wheel"
                    objectFit="contain"
                  />
                </div>

                <h3 className=" block dark:text-white capitalize font-bold py-6 text-2xl text-black/90">
                  {" "}
                  Delivery{" "}
                </h3>

                <p
                  data-aos="fade-up"
                  // style={{ fontFamily: "Work Sans" }}
                  className="text-left w-[80%] dark:text-white text-base text-[#797979] "
                >
                  Delivery to every location in Nigeria.
                </p>
              </div>
            );
          })}
        </div>
      </div>
      {/* Phase 4  */}

      <div
        style={{ fontFamily: "Mulish" }}
        className="px-[97px] bg-white dark:bg-[#111315] py-[87px] max-h-[1433px] flex flex-col  justify-start lg:justify-start items-center min-h-[1433px]"
      >
        <h1
          // style={{ fontFamily: "Work Sans" }}
          className="     text-2xl font-bold dark:text-white  text-center  text-black/90"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi!
        </h1>

        <div className="flex w-full  flex-col pt-[100px] lg:flex-row justify-evenly space-x-24 items-center">
          <div className="">
            <Image
              src="/assets/v2.png"
              layout="fixed"
              width="701"
              height="467"
              alt="mask group"
              objectFit="contain"
              className="rounded-[10px]"
            />
          </div>

          <div>
            <h3 className=" block dark:text-white capitalize font-bold py-6 text-2xl text-black/90">
              Slik Vendor
            </h3>

            <p
              data-aos="fade-up"
              // style={{ fontFamily: "Work Sans" }}
              className="text-left w-[80%] dark:text-white  text-sm text-[#797979] "
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              omnis adipisci expedita labore velit consequuntur pariatur sed
              inventore perferendis, voluptas mollitia dignissimos nam, quis
              eaque ipsa suscipit, nulla repellat ut animi enim quia ratione
              ipsum. Voluptatum, reprehenderit atque odit animi accusantium
              officiis minus cum velit eos impedit quidem ut sit!
            </p>

            <div className="mt-[60px]">
              <button className="block text-[#EE3A46] self-center text-base  py-3 px-4 ring-1 hover:ring-2 ring-[#EE3A46] transition-colors  transform duration-300 font-normal    rounded-xl outline-none text-center ">
                Become a vendor &nbsp;
                <FontAwesomeIcon icon={faArrowRightLong} className="" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex w-full  flex-col pt-[100px] lg:flex-row justify-end  items-center">
          <div className="ml-24">
            <h3 className=" block dark:text-white capitalize font-bold py-6 text-2xl text-black/90">
              Slik Driver
            </h3>

            <p
              data-aos="fade-up"
              // style={{ fontFamily: "Work Sans" }}
              className="text-left w-[80%] dark:text-white text-sm text-[#797979] "
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              omnis adipisci expedita labore velit consequuntur pariatur sed
              inventore perferendis, voluptas mollitia dignissimos nam, quis
              eaque ipsa suscipit, nulla repellat ut animi enim quia ratione
              ipsum. Voluptatum, reprehenderit atque odit animi accusantium
              officiis minus cum velit eos impedit quidem ut sit!
            </p>

            <div className="mt-[60px] ">
              <button className="block text-[#EE3A46] self-center text-base  py-3 px-4  ring-1 hover:ring-2 ring-[#EE3A46] transition-colors  transform duration-300 font-normal    rounded-xl outline-none text-center ">
                Become a driver &nbsp;
                <FontAwesomeIcon icon={faArrowRightLong} className="" />
              </button>
            </div>
          </div>

          <div className="">
            <Image
              src="/assets/v1.png"
              layout="fixed"
              width="701"
              height="467"
              alt="mask group 2"
              objectFit="contain"
              className="rounded-[10px] ml-24"
            />
          </div>
        </div>
      </div>

      {/* footer  */}

      <footer
        style={{ fontFamily: "Mulish" }}
        className=" px-[97px] py-[87px] min-h-[516px] bg-[#EE3A46]"
      >
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="self-start">
            <Image
              src="/assets/Slik-Logo-vertical-white-web.png"
              layout="fixed"
              width="100"
              height="60"
              alt="slik logo white"
              objectFit="contain"
              className="rounded-[10px] ml-24"
            />

            <div className="text-white mt-24 text-2xl flex flex-row justify-around space-x-4">
              <FontAwesomeIcon icon={faLinkedinIn} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faInstagram} />
            </div>
          </div>

          <div>
            <h2 className="text-left text-white text-2xl"> Company </h2>
            <ul className="mt-6">
              <li className="text-white capitalize pb-4 text-sm"> About us </li>
              <li className="text-white capitalize pb-4 text-sm">
                {" "}
                Our services{" "}
              </li>
              <li className="text-white capitalize pb-4 text-sm"> Join us </li>
              <li className="text-white capitalize pb-4 text-sm">
                {" "}
                Book a delivery{" "}
              </li>
            </ul>
          </div>
          <div className="w-[40%]">
            <p className="text-white capitalize pb-4 text-sm">
              {" "}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
              temporibus impedit dolores exercitationem officiis sunt quod illum
              est minima tempora in, ducimus possimus, error corrupti asperiores
              velit? Nobis, error eaque.
            </p>

            <em className="text-white block capitalize pb-4 text-sm">
              {" "}
              example@slik.com
            </em>

            <em className="text-white block capitalize pb-4 text-sm">
              {" "}
              +234-000-000-0000
            </em>
          </div>
        </div>

        <div className="mt-16">
          <p className="text-white text-center max-w-[70%] mx-auto py-4 capitalize pb-4 text-sm">
            {" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
            temporibus impedit dolores exercitationem officiis sunt quod illum
            est minima tempora in, ducimus possimus, error corrupti asperiores
            velit? Nobis.
          </p>

          <p className="text-white text-center max-w-[70%] mx-auto py-4 capitalize pb-4 text-sm">
            &copy; 2021-2022 Slik - RC 000000
          </p>
        </div>
      </footer>
    </>
  );
}
