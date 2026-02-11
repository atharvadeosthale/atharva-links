import React from "react";
import { motion } from "framer-motion";

interface Props {
  label: string;
  url: string;
  featured: boolean;
  index: number;
}

const ACCENT_COLORS = ["bg-yolk", "bg-sky", "bg-lilac", "bg-punch"];

export default function Link({ label, url, featured, index }: Props) {
  const domain = (() => {
    try {
      return new URL(url).hostname.replace(/^www\./, "");
    } catch {
      return "";
    }
  })();

  const accentColor = ACCENT_COLORS[index % ACCENT_COLORS.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.4, ease: "easeOut" }}
    >
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={url}
        className={`group relative block w-full border-brutal bg-surface
          shadow-brutal hover:shadow-brutal-hover
          hover:translate-x-[2px] hover:translate-y-[2px]
          transition-all duration-150 ease-out
          ${featured ? "p-5" : "p-4"}`}
      >
        {/* Colored accent bar on left */}
        <div
          className={`absolute left-0 top-0 bottom-0 w-1.5 ${accentColor} transition-all duration-150 group-hover:w-full group-hover:opacity-[0.1]`}
        />

        {featured && (
          <div className="absolute -top-2.5 -right-2.5 bg-yolk text-base font-mono text-[10px] tracking-wider uppercase px-2.5 py-1 border-brutal z-10 font-bold">
            Featured
          </div>
        )}

        <div className="relative flex items-center gap-4">
          <div className="flex-grow min-w-0">
            <p
              className={`font-display font-bold tracking-tight text-bone transition-colors ${
                featured ? "text-lg" : "text-base"
              }`}
            >
              {label}
            </p>
            <p className="font-mono text-xs text-bone/40 mt-0.5 tracking-wide">
              {domain}
            </p>
          </div>

          <div className="flex-shrink-0 border-brutal w-8 h-8 flex items-center justify-center bg-base group-hover:bg-bone group-hover:text-base transition-all duration-150">
            <svg
              className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform duration-150"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="square"
                strokeLinejoin="miter"
                d="M7 17L17 7M17 7H7M17 7V17"
              />
            </svg>
          </div>
        </div>
      </a>
    </motion.div>
  );
}
