import Head from "next/head";
import WaitlistForm from "../components/WaitlistForm";
import { useRouter } from "next/router";
import Slik from "../components/Slik";
import Home from "../components/Home";

export default function WaitlistPage() {
  const router = useRouter();

  let { pref = "" } = router.query;

  const allowedPrefs = ["driver", "user", "vendor"];

  if (!allowedPrefs.includes(pref.toLowerCase())) {
    pref = null;
  }

  function toHome() {
    router.replace("/");
  }

  return (
    <div className=" min-h-screen bg-main-bg  ">
      <Head>
        <title> Join waitlist - Slik </title>
        <link rel="icon" href="/assets/slik-favicon-transparent-web.png" />
        <link rel="shortcut icon" href="Slik-Logo-horizontal-web.png" />
      </Head>
      <main className="w-full min-h-screen bg-[#FFFFFF] dark:bg-[#111315] ">
        {router.isReady && (
          <Home
            waitlistData={{
              showForm: true,
              pref,
              toggleForm: toHome,
            }}
          />
        )}
        {!router.isReady && <Slik />}
      </main>
    </div>
  );
}
