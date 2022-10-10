import Head from "next/head";
import Image from "next/image";

const Home = () => {
  return (
    <div className=" min-h-screen bg-main-bg  ">
      <Head>
        <title> Slik </title>
        <link rel="icon" href="/assets/slik-favicon-transparent-web.png" />
        <link
          rel="shortcut icon"
          href="/assets/slik-social-red-background.png"
        />
      </Head>
      <main className="flex w-full min-h-screen  flex-col items-center justify-center  text-center">
        <div className=" self-center h-[100%] ">
          <div className="hidden   md:block">
            <Image
              src="/assets/Slik-Logo-horizontal-web.png"
              layout="intrinsic"
              width="300"
              height="200"
              alt="logo"
              objectFit="contain"
              className="animate-pulse "
            />
          </div>

          <div className="md:hidden block">
            <Image
              src="/assets/Slik-Logo-horizontal-web.png"
              layout="intrinsic"
              width="200"
              height="100"
              alt="logo"
              objectFit="contain"
              className="animate-pulse "
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
