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
      label: "Personal Blog on Hashnode",
      url: "https://blog.atharva.codes",
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
    {
      label: "Casual coffee chat with me",
      url: "https://cal.com/atharvadeosthale/coffee-chat",
      featured: false,
    },
  ]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#0a0b0d] text-white relative overflow-hidden selection:bg-purple-500/30 selection:text-white">
      {/* Noise texture */}
      <div className="fixed inset-0 opacity-[0.015] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
            backgroundRepeat: "repeat",
          }}
        />
      </div>

      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0b0d] via-[#131517] to-[#1a1b1e] opacity-80" />

      {/* Animated background elements */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-20 -left-32 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-screen filter blur-[128px] animate-blob" />
        <div className="absolute top-40 -right-32 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-screen filter blur-[128px] animate-blob animation-delay-2000" />
        <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-pink-500/20 rounded-full mix-blend-screen filter blur-[128px] animate-blob animation-delay-4000" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 w-full h-full bg-[url('/assets/grid.svg')] opacity-[0.02]" />

      <div className="flex flex-col max-w-4xl mx-auto p-5 relative z-10">
        <Head>
          <title>Links - Atharva Deosthale</title>
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <meta name="theme-color" content="#0a0b0d" />
          <meta
            name="description"
            content="All important links related to Atharva Deosthale in one place."
          />
        </Head>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-24 w-full text-center flex flex-col items-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="relative group cursor-pointer"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200 animate-tilt" />
            <img
              src="/assets/pfp.png"
              alt="Atharva Deosthale"
              className="relative h-32 w-32 rounded-full ring-2 ring-white/10 object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-8 space-y-3"
          >
            <h1 className="font-bold text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 tracking-tight">
              Atharva Deosthale
            </h1>
            <p className="text-gray-400 text-lg font-medium tracking-wide">
              Developer & Content Creator
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-6 text-base md:text-lg max-w-2xl leading-relaxed text-gray-400 font-light"
          >
            Welcome! These are all the important links you can refer to. I keep
            them updated so if you see me refer to this link, it might be
            updated to include a new link or an updated link. Thanks for your
            time and have a great day!
          </motion.div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-12 mb-24 flex flex-col gap-y-3 max-w-xl mx-auto w-full"
        >
          {[...links]
            .sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
            .map((link, index) => (
              <Link
                key={index}
                label={link.label}
                url={link.url}
                featured={link.featured}
              />
            ))}
        </motion.div>
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
