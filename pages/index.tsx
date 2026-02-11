import type { NextPage } from "next";
import Head from "next/head";
import Script from "next/script";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "../components/Link";

const Home: NextPage = () => {
  const [links] = useState([
    {
      label: "YouTube Channel",
      url: "https://www.youtube.com/channel/UC3UrEDB27fL3vbnt-tiMgoQ",
      featured: true,
    },
    {
      label: "Portfolio Website",
      url: "https://atharva.codes",
      featured: false,
    },
    {
      label: "Blog",
      url: "https://atharva.codes/blog",
      featured: false,
    },
    {
      label: "Instagram",
      url: "https://instagram.com/atharvadeosthale",
      featured: false,
    },
    {
      label: "X (Formerly Twitter) Handle",
      url: "https://x.com/atharvabuilds",
      featured: true,
    },
    {
      label: "LinkedIn Profile",
      url: "https://linkedin.com/in/atharvadeosthale",
      featured: false,
    },
  ]);

  const sortedLinks = [...links].sort(
    (a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
  );

  return (
    <div className="min-h-screen bg-base text-bone relative noise-bg">
      {/* Decorative marquee strip at top */}
      <div className="w-full bg-bone text-base overflow-hidden border-b-[3px] border-bone">
        <div className="animate-marquee whitespace-nowrap py-1.5 font-mono text-xs tracking-widest">
          {Array(4)
            .fill(
              "DEVELOPER \u2022 CONTENT CREATOR \u2022 LINKS \u2022 CONNECT \u2022 "
            )
            .map((text, i) => (
              <span key={i} className="mx-4">
                {text}
              </span>
            ))}
        </div>
      </div>

      <div className="flex flex-col max-w-lg mx-auto px-5 relative z-10">
        <Head>
          <title>Links - Atharva Deosthale</title>
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <meta name="theme-color" content="#0A0A0A" />
          <meta
            name="description"
            content="All important links related to Atharva Deosthale in one place."
          />
        </Head>

        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-16 md:mt-20 flex flex-col items-center text-center"
        >
          {/* Profile picture with brutalist frame */}
          <motion.div
            whileHover={{ rotate: -2 }}
            transition={{ duration: 0.2 }}
            className="relative"
          >
            <div className="border-brutal-thick bg-surface p-1.5 shadow-brutal-lg rotate-2 hover:rotate-0 transition-transform duration-200">
              <img
                src="/assets/pfp.jpeg"
                alt="Atharva Deosthale"
                className="h-28 w-28 md:h-32 md:w-32 object-cover"
              />
            </div>
            {/* Decorative sticker */}
            <div className="absolute -bottom-2 -right-3 bg-yolk text-base border-brutal px-2 py-0.5 font-mono text-[10px] font-bold rotate-6 shadow-brutal-hover">
              HI!
            </div>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="mt-8"
          >
            <h1 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight text-bone leading-none">
              Atharva
              <br />
              <span className="relative inline-block">
                Deosthale
                <div className="absolute -bottom-1 left-0 right-0 h-3 bg-yolk -z-10 -rotate-1" />
              </span>
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-4 flex items-center gap-2"
          >
            <div className="h-[2px] w-6 bg-bone/40" />
            <p className="font-mono text-sm tracking-wide text-bone/50 uppercase">
              Developer & Content Creator
            </p>
            <div className="h-[2px] w-6 bg-bone/40" />
          </motion.div>

          {/* Welcome text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-5 text-sm md:text-base max-w-sm leading-relaxed text-bone/50 font-mono"
          >
            All my important links in one place. Bookmark this page — it stays
            updated.
          </motion.p>
        </motion.div>

        {/* Divider */}
        <div className="mt-10 mb-8 flex items-center gap-3">
          <div className="flex-1 border-t-[2px] border-bone/20 border-dashed" />
          <span className="font-mono text-xs text-bone/30 uppercase tracking-widest">
            Links
          </span>
          <div className="flex-1 border-t-[2px] border-bone/20 border-dashed" />
        </div>

        {/* Links */}
        <div className="mb-16 flex flex-col gap-y-3.5 w-full">
          {sortedLinks.map((link, index) => (
            <Link
              key={index}
              label={link.label}
              url={link.url}
              featured={link.featured}
              index={index}
            />
          ))}
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mb-8 text-center"
        >
          <div className="border-brutal-thick bg-surface px-4 py-3 shadow-brutal inline-block">
            <p className="font-mono text-xs text-bone/30">
              &copy; {new Date().getFullYear()} &middot; Atharva Deosthale
            </p>
          </div>
        </motion.footer>
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
