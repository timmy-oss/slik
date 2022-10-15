import Image from "next/image";
import { useEffect } from "react";

export default function Slik(props) {
  useEffect(() => {
    if (localStorage) {
      const theme = localStorage.getItem("slik_theme");

      if (theme) {
        if (theme === "dark") {
          document.getElementsByTagName("html")[0].className += "  dark  ";
        }
      }
    }
  }, []);

  return (
    <div className="flex relative bg-white dark:bg-[#111315] w-full min-h-screen  flex-col items-center justify-center  text-center">
      <div className=" self-center absolute top-[35%]  ">
        <div className="hidden   md:block">
          <Image
            src="/assets/Slik-Logo-horizontal-web.png"
            layout="intrinsic"
            width="300"
            height="200"
            alt="slik logo"
            objectFit="contain"
            className=" "
          />
        </div>

        <div className="md:hidden block">
          <Image
            src="/assets/Slik-Logo-horizontal-web.png"
            layout="intrinsic"
            width="200"
            height="100"
            alt="slik logo"
            objectFit="contain"
            className=" "
          />
        </div>
      </div>
    </div>
  );
}
