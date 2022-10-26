import Head from "next/head";
import HomeComponent from "../components/Home";

const Home = () => {
  return (
    <div className=" min-h-screen bg-main-bg  ">
      <Head>
        <title> Slik Logistics </title>

        <link rel="icon" href="/assets/slik-favicon-transparent-web.png" />
        <link rel="shortcut icon" href="Slik-Logo-horizontal-web.png" />
      </Head>
      <main className="w-full min-h-screen bg-[#FFFFFF] dark:bg-[#111315] ">
        <HomeComponent />
      </main>
    </div>
  );
};

export default Home;
