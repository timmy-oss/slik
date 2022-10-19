import { useState, useEffect } from "react";
import DesktopNavBar from "./DesktopNavBar";
import MobileNavBar from "./MobileNavBar";
import Image from "next/image";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import AOS from "aos";
import WaitListForm from "./WaitlistForm";
import Link from "next/link";

const pitchBoxes = [
  {
    title: "Meals & Drinks",
    body: "Get your meals and drinks delivered to your doorstep, right from your favourite vendors.",
    img: "/assets/burg.png",
  },

  {
    title: "Packaging",
    body: "Need to waybill a package? We offer interstate delivery services within Nigeria!",
    img: "/assets/box.png",
  },

  {
    title: "Groceries",
    body: "Why spend hours grocery shopping when you can get someone else to do it for you?",
    img: "/assets/groceries.png",
  },

  {
    title: "Laundry",
    body: "Experience laundry without stress. We get your clothes to the dry cleaner and back. Fast!",
    img: "/assets/laundry.png",
  },
];

export default function Home({ waitlistData = null, ...props }) {
  const router = useRouter();
  const [showForm, setShowForm] = useState(false);

  function toggleForm() {
    setShowForm(!showForm);
  }

  useEffect(() => {
    AOS.init({
      offset: 40,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <>
      <DesktopNavBar toggleForm={toggleForm} />
      {((waitlistData && waitlistData.showForm) || showForm) && (
        <WaitListForm
          toggle={waitlistData ? waitlistData.toggleForm : toggleForm}
          showForm={waitlistData ? waitlistData.showForm : showForm}
          pref={waitlistData && waitlistData.pref}
        />
      )}
      <MobileNavBar toggleForm={toggleForm} />

      <div className="bg-[#FBF7EB] md:bg-[#FBF7EB] dark:bg-[#242318] md:dark:bg-[#242318]   md:pt-32 lg:pt-14 flex flex-col lg:flex-row justify-center lg:justify-around  min-h-[727px]">
        <div className="bg-[#FBF7EB] w-full md:bg-[#FBF7EB] dark:bg-[#242318] md:dark:bg-[#242318]   lg:w-[60%]  px-4 lg:px-32 pt-24 pb-16 lg:pb-[67px] self-stretch lg:space-y-40">
          <h1
            data-aos="fade-up"
            style={{ fontFamily: "Arial Black" }}
            className="text-center   capitalize  p-4 font-black text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl lg:max-w-5xl 2xl:max-w-6xl lg:text-left text-black/90 md:text-black/90 md:dark:text-white dark:text-white"
          >
            <div className="w-full space-y-3 lg:space-y-6 ">
              <span className="block w-full"> Seamless Delivery. </span>
              <span className="block w-full"> Every Time. </span>
              <span className="block w-full"> Anywhere. </span>
            </div>
          </h1>

          <div className="mt-[36px] w-full flex flex-row justify-center lg:justify-start items-center    p-2 lg:w-[70%]  ">
            <button
              onClick={toggleForm}
              className="block w-[70%] hover:text-[#EE3A46] dark:hover:text-white  text-lg px-12 py-2 lg:py-4 hover:bg-[#FBF7EB] dark:hover:bg-[#242318] hover:ring-1 hover:ring-[#EE3A46] transition-colors text-white transform duration-300 font-normal   bg-[#EE3A46]  rounded-xl outline-none text-center "
            >
              Join Waitlist
            </button>
          </div>

          {/* <div className="p-2 pl-4 max-w-md   bg-white md:dark:bg-[#2A2A2A] rounded-[10px] mt-12">
            <div className="flex flex-row w-full max-w-md   rounded-[10px]  justify-between items-center">
              <input
                className=" outline-none w-[65%] bg-[#EEEEEE] md:dark:bg-[#444444] text-sm md:text-lg h-[50px] lg:h-[72px] caret:text-prim-color text-black/90 md:dark:text-white placeholder:text-black/40 md:dark:placeholder:text-white/40  py-4 pl-4 md:pl-8  pr-8 rounded-y-xl rounded-l-xl  "
                type="email"
                placeholder="Input Tracking Code"
                name="waiter"
              />
              <button className="block relative -left-2 w-[35%] bg-[#EE3A46] self-stretch text-base md:text-lg hover:bg-[#EE3A46]/90 transform transition-colors text-white  outline-none  rounded-[10px] text-center ">
                Track order
              </button>
            </div>
          </div> */}
        </div>

        <div className="w-full flex flex-col justify-center items-stretch   lg:w-[40%]  bg-[#FBF7EB] dark:bg-[#111315] md:dark:bg-[#242318] py-12 self-end ">
          <Image
            src="/assets/mobile-logistics.png"
            layout="intrinsic"
            width="710"
            height="569"
            alt="bike"
            objectFit="contain"
            className=""
            priority
          />

          <div className="lg:flex-1 p-2 self-start space-y-4 mt-16 mx-auto">
            {/* <h2 className="text-left text-[#EE3A46] dark:marker:text-white text-lg lg:text-xl">
              {" "}
              Coming soon.
            </h2>{" "} */}
            <div className="flex flex-row justify-start space-x-6">
              <div>
                <Image
                  src="/assets/appstore-badge.svg"
                  layout="intrinsic"
                  width="160"
                  height="52"
                  alt="appstore"
                  objectFit="contain"
                />
              </div>

              <div>
                <Image
                  src="/assets/Google_Play_Store_badge_EN.svg"
                  layout="intrinsic"
                  width="160"
                  height="52"
                  alt="google-play-badge"
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Phase 2  */}

      <div className=" bg-[#FFFFFF] dark:bg-[#111315] lg:py-[96px]  flex flex-col lg:flex-row justify-center lg:justify-center min-h-[727px]  space-y-16 lg:space-y-0">
        <div className="w-full order-2 lg:order-1 lg:w-[50%] self-center bg-[##EEEEEE] lg:self-stretch mx-auto rounded-[10px]  flex flex-col justify-center items-center">
          <Image
            src="/assets/delivery-car.png"
            layout="intrinsic"
            width="710"
            height="569"
            alt="nav logo"
            objectFit="contain"
            className="rounded-[10px]"
            priority
          />
        </div>

        <div className="w-full  lg:w-[50%] order-1 lg:order-2 self-center  lg:self-start px-8">
          <h1
            style={{ fontFamily: "Work Sans" }}
            className="   font-normal uppercase lg:w-[80%] mx-auto text-base text-left lg:text-left  text-[#EE3A46]"
          >
            About Us
          </h1>

          <h2
            style={{ fontFamily: "Work Sans" }}
            className="text-left lg:text-left mx-auto lg:w-[80%] text-black/90 dark:text-white text-2xl capitalize lg:text-3xl py-8 font-bold "
          >
            Connecting vendors to customers all over
          </h2>

          <p
            data-aos="fade-up"
            style={{ fontFamily: "Work Sans" }}
            className="text-left lg:text-left mx-auto lg:w-[80%] dark:text-white text-base lg:text-lg text-[#797979] "
          >
            Slik is more than just logistics. We are building a truly connected
            ecosystem where goods and services can travel safely from any point
            in one country to another. From your favourite <b> Food Vendor</b>{" "}
            or <b> Dry Cleaner</b> right around the corner to that{" "}
            <b>Whatsapp Business Account </b> from the other side of the
            country. We are building a network that allows for easy movement of
            goods and services, FAST.
          </p>

          <div className="mt-[72px] mx-auto lg:w-[80%]  ">
            <button
              onClick={toggleForm}
              className="  hover:text-[#EE3A46] self-center text-base px-8 py-3 hover:bg-white dark:hover:bg-[#111315] hover:ring-1 hover:ring-[#EE3A46] transition-colors text-white transform duration-300 font-normal   bg-[#EE3A46]  rounded-xl outline-none text-center "
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </div>

      {/* Phase 3 */}

      <div
        style={{ fontFamily: "Mulish" }}
        className="px-4 lg:px-[97px] dark:bg-[#242318] bg-[#D4AF37]/10 py-[96px]  flex flex-col lg:flex-col justify-center lg:justify-center min-h-[616px]"
      >
        <div className=" lg:w-[40%] mx-auto lg:mx-0 px-4">
          <h1
            // style={{ fontFamily: "Work Sans" }}
            className=" text-left  font-bold uppercase text-lg  lg:text-left  text-[#EE3A46]"
          >
            Our Services
          </h1>

          <h2
            // style={{ fontFamily: "Work Sans" }}
            className=" text-left lg:text-left dark:text-white lg:w-[80%] text-black/90 text-xl lg:text-2xl  py-8 font-bold "
          >
            If you can buy it, we can deliver it.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 lg:gap-y-8 justify-around  items-center">
          {pitchBoxes.map((c, i) => {
            return (
              <div
                key={i}
                className="white w-[95%] mx-auto md:mx-0 md:w-full py-[46px] dark:bg-[#111315] flex  min-h-[290px] flex-1  flex-col justify-start bg-white px-[34px]"
              >
                <div className="rounded-[10px] dark:hidden">
                  <Image
                    src={c.img}
                    layout="intrinsic"
                    width="72"
                    height="62"
                    alt="cart wheel"
                    objectFit="contain"
                  />
                </div>

                <div className="rounded-[10px] dark:block hidden">
                  <Image
                    src={c.img}
                    layout="intrinsic"
                    width="72"
                    height="62"
                    alt="cart wheel"
                    objectFit="contain"
                  />
                </div>

                <h3 className=" block dark:text-white capitalize font-bold py-6 text-2xl text-black/90">
                  {c.title}
                </h3>

                <p
                  data-aos="fade-up"
                  // style={{ fontFamily: "Work Sans" }}
                  className="text-left w-[95%] dark:text-white text-base text-[#797979] "
                >
                  {c.body}{" "}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Phase 4  */}

      <div
        style={{ fontFamily: "Mulish" }}
        className="px-8 lg:px-[97px] bg-[#EE3A46] py-[87px]  flex flex-col lg:flex-row justify-center lg:justify-between items-center min-h-[240px] lg:space-x-24 space-y-6 lg:space-y-0"
      >
        <div className="lg:w-[40%] self-start">
          <h3
            // style={{ fontFamily: "Work Sans" }}
            className="   text-xl   lg:text-3xl font-normal dark:text-white  text-left  text-white"
          >
            Get real-time notifications on every delivery right from the mobile
            apps.
          </h3>
        </div>

        <div className="lg:flex-1 self-start space-y-4">
          <div className="flex flex-row justify-start space-x-6">
            <div>
              <Image
                src="/assets/appstore-badge.svg"
                layout="intrinsic"
                width="160"
                height="52"
                alt="appstore"
                objectFit="contain"
              />
            </div>

            <div>
              <Image
                src="/assets/Google_Play_Store_badge_EN.svg"
                layout="intrinsic"
                width="160"
                height="52"
                alt="google-play-badge"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Phase 5  */}

      <div
        style={{ fontFamily: "Mulish" }}
        className="px-8 lg:px-[97px] bg-white dark:bg-[#111315] py-[87px]  flex flex-col  justify-start lg:justify-start items-center min-h-[1433px]"
      >
        <h1
          // style={{ fontFamily: "Work Sans" }}
          className="  capitalize   text-2xl font-bold dark:text-white  text-center  text-black/90"
        >
          More than just Delivery
        </h1>

        <div className="flex w-full  flex-col pt-[100px] lg:flex-row justify-evenly lg:space-x-24 items-center space-y-8 lg:space-y-0">
          <div className="lg:w-[50%] flex flex-col justify-start items-start">
            <Image
              src="/assets/v2.png"
              layout="intrinsic"
              width="701"
              height="467"
              alt="mask group"
              objectFit="contain"
              className="rounded-[10px] "
            />
          </div>

          <div className="lg:w-[50%]">
            <h3 className=" block dark:text-white capitalize font-bold py-6 text-2xl text-black/90">
              Slik Vendor
            </h3>

            <p
              data-aos="fade-up"
              // style={{ fontFamily: "Work Sans" }}
              className="text-left lg:w-[80%] dark:text-white text-base lg:text-lg text-[#797979] "
            >
              Are you a food vendor, Dry Cleaner, or a Local/Online Store Owner?
              Why wait for customers to come to you when you can take your
              products and services to them?! Become a Slik Vendor and reach
              customers wherever they are in the country.
            </p>

            <Link href="/join-waitlist?pref=vendor">
              <div className="mt-[60px]">
                <button className="block text-[#EE3A46] self-center text-base  py-3 px-4 ring-1 hover:ring-2 ring-[#EE3A46] transition-colors  transform duration-300 font-normal    rounded-xl outline-none text-center ">
                  Become a Vendor &nbsp;
                  <FontAwesomeIcon icon={faArrowRightLong} className="" />
                </button>
              </div>
            </Link>
          </div>
        </div>

        <div className="flex w-full  flex-col pt-[100px] lg:flex-row justify-end  items-center space-y-8 lg:space-y-0">
          <div className="lg:ml-24 order-2 lg:order-1 lg:w-[50%]">
            <h3 className=" block dark:text-white capitalize font-bold py-6 text-2xl text-black/90">
              Slik Rider
            </h3>

            <p
              data-aos="fade-up"
              // style={{ fontFamily: "Work Sans" }}
              className="text-left lg:w-[80%] dark:text-white text-base lg:text-lg text-[#797979] "
            >
              Are you a local or interstate rider? Join Nigeria's fastest
              growing network of active riders and increase your income. Choose
              when and where you work. Set your own price on every delivery. All
              you need is a vehicle, a smartphone, and time.
            </p>

            <Link href="/join-waitlist?pref=driver">
              <div className="mt-[60px] ">
                <button className="block text-[#EE3A46] self-center text-base  py-3 px-4  ring-1 hover:ring-2 ring-[#EE3A46] transition-colors  transform duration-300 font-normal    rounded-xl outline-none text-center ">
                  Become a Rider &nbsp;
                  <FontAwesomeIcon icon={faArrowRightLong} className="" />
                </button>
              </div>
            </Link>
          </div>

          <div className=" lg:w-[50%] order-1 lg:order-2 flex flex-col justify-start items-start">
            <Image
              src="/assets/v1.png"
              layout="intrinsic"
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
        className="px-8 lg:px-[97px] pt-[87px] pb-[40px] min-h-[516px] dark:bg-[#111315] bg-[#FFFFFF]"
      >
        <div className="flex  flex-col md:flex-row justify-center md:justify-between space-y-8 md:space-y-0">
          <div className="self-center  lg:self-start  flex-1 flex flex-row lg:flex-col w-full justify-between lg:justify-center lg:space-y-8">
            <div className="flex self-start  flex-row justify-start items-start">
              <Image
                src="/assets/Slik-Logo-horizontal-web.png"
                layout="intrinsic"
                width="100"
                height="50"
                alt="slik logo white"
                objectFit="contain"
              />
            </div>

            <div className="text-black/90   dark:text-white   self-center  lg:self-center space-x-8 text-2xl flex flex-row justify-end lg:justify-start  w-full lg:space-x-4 ">
              <FontAwesomeIcon icon={faLinkedinIn} className="cursor-pointer" />
              <FontAwesomeIcon icon={faTwitter} className="cursor-pointer" />
              <FontAwesomeIcon icon={faInstagram} className="cursor-pointer" />
            </div>
          </div>

          <div className="self-start flex-1 lg:self-center">
            <h2 className="text-left text-black/90   dark:text-white text-xl lg:text-2xl">
              {" "}
              Company{" "}
            </h2>
            <ul className="mt-6">
              <li className="text-black/90   dark:text-white capitalize pb-4 text-base">
                {" "}
                About us{" "}
              </li>
              <li className="text-black/90   dark:text-white capitalize pb-4 text-base">
                {" "}
                Our services{" "}
              </li>
              <li className="text-black/90   dark:text-white capitalize pb-4 text-base">
                {" "}
                Join us{" "}
              </li>
              <li className="text-black/90   dark:text-white capitalize pb-4 text-base">
                {" "}
                Book a delivery{" "}
              </li>
            </ul>
          </div>
          <div className="md:w-[40%] flex-1 self-start">
            {/* <p className="text-black/90   dark:text-white text-left md:text-left capitalize pb-4 text-sm">
              {" "}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
              temporibus impedit dolores exercitationem officiis sunt quod illum
              est minima tempora in, ducimus possimus, error corrupti asperiores
              velit? Nobis, error eaque.
            </p> */}

            <em className="text-black/90   dark:text-white block text-left md:text-left capitalize pb-4 text-sm">
              {" "}
              example@slik.com
            </em>

            <em className="text-black/90   dark:text-white block text-left md:text-left capitalize pb-4 text-sm">
              {" "}
              +234-000-000-0000
            </em>
          </div>
        </div>

        <div className="mt-8">
          <p className="text-black/90   dark:text-white  lg:max-w-[70%] mx-auto py-4 capitalize pb-4 text-sm text-center ">
            Seamless Delivery. Every Time. Anywhere.
          </p>

          <p className="text-black/90   dark:text-white text-center   max-w-[70%] mx-auto py-4 capitalize pb-4 text-sm">
            &copy; 2021-2022 Slik - RC 000000
          </p>
        </div>
      </footer>
    </>
  );
}
