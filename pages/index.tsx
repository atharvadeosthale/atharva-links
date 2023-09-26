import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import { useState } from "react";
import Link from "../components/Link";

const Home: NextPage = () => {
  const [links, setLinks] = useState([
    {
      label: "YouTube Channel",
      url: "https://www.youtube.com/channel/UC3UrEDB27fL3vbnt-tiMgoQ",
      featured: false,
    },
    {
      label: "Twitter Handle",
      url: "https://twitter.com/athudeosthale",
      featured: false,
    },
    {
      label: "Personal Blog on Hashnode",
      url: "https://blog.atharva.codes",
      featured: false,
    },
    {
      label: "LinkedIn Profile",
      url: "https://linkedin.com/in/atharvadeosthale",
      featured: false,
    },
  ]);

  return (
    <div className="flex flex-col max-w-5xl mx-auto text-center p-5">
      <Head>
        <title>Links - Atharva Deosthale</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mt-28 w-full text-center flex flex-col items-center">
        <img
          src="/assets/pfp.png"
          alt="Atharva Deosthale"
          className="h-36 w-36 rounded-full"
        />
        <h1 className="mt-10 font-bold text-5xl">Atharva Deosthale</h1>
        <div className="mt-10 text-2xl max-w-3xl leading-normal text-gray-400">
          Welcome! These are all the important links you can refer to. I keep
          them updated so if you see me refer to this link, it might be updated
          to include a new link or an updated link. Thanks for your time and
          have a great day!
        </div>
      </div>
      <div className="mt-10 mb-28 flex flex-col gap-y-5 max-w-xl mx-auto w-full">
        {links.map((link) => (
          <Link label={link.label} url={link.url} featured={link.featured} />
        ))}
      </div>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-F5K0043KNF"
      />

      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-F5K0043KNF', {
page_path: window.location.pathname,
});
`,
        }}
      />
    </div>
  );
};

export default Home;
