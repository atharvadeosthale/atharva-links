import React from "react";
import { motion } from "framer-motion";

interface Props {
  label: string;
  url: string;
  featured: boolean;
}

export default function Link({ label, url, featured }: Props) {
  const domain = (() => {
    try {
      return new URL(url).hostname.replace(/^www\./, "");
    } catch {
      return "";
    }
  })();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={url}
        className={`group relative overflow-hidden block w-full cursor-pointer ${
          featured
            ? "bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 hover:from-purple-500/20 hover:via-pink-500/20 hover:to-blue-500/20"
            : "bg-[#1a1b1e]/40 hover:bg-[#2c2d31]/40"
        } backdrop-blur-xl p-4 rounded-2xl transition-all border ${
          featured
            ? "border-purple-500/20 hover:border-purple-500/40"
            : "border-[#2c2d31]"
        } shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_25px_rgba(0,0,0,0.3)]`}
      >
        {featured && (
          <div className="absolute top-0 right-0 px-2 py-1 text-xs font-medium text-purple-200 bg-purple-500/20 rounded-bl-lg rounded-tr-xl border-l border-b border-purple-500/20">
            Featured
          </div>
        )}
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 text-gray-400 group-hover:text-white transition-colors pt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-5 h-5 ${featured ? "text-purple-400" : ""}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </svg>
          </div>
          <div className="flex-grow min-w-0">
            <p
              className={`text-lg font-medium transition-colors text-left ${
                featured ? "text-purple-100" : "text-gray-100"
              } group-hover:text-white`}
            >
              {label}
            </p>
            <p
              className={`text-sm transition-colors text-left ${
                featured ? "text-purple-300/70" : "text-gray-400"
              } group-hover:text-gray-300`}
            >
              {domain}
            </p>
          </div>
          <div className="flex-shrink-0 text-gray-400 group-hover:text-white transition-colors pt-1">
            <svg
              className={`w-5 h-5 transform group-hover:translate-x-1 transition-transform ${
                featured ? "text-purple-400" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        </div>
        {featured && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-blue-500/5" />
            <div className="absolute inset-0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
          </div>
        )}
      </a>
    </motion.div>
  );
}
