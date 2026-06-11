"use client";

import React, { useEffect } from "react";
import { AlertOctagon, RefreshCw } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import BackgroundScene from "./components/BackgroundScene";
import Header from "./components/Header";
import "./globals.css";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Critical Layout Level Error:", error);
  }, [error]);

  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-[#070414] text-white flex flex-col justify-between font-sans overflow-hidden">
        {/* Dynamic Grid Background */}
        <BackgroundScene />

        {/* Header wrapper */}
        <div className="relative z-10 w-full">
          <Header />
        </div>

        {/* Content Box */}
        <div className="relative z-10 flex-1 flex items-center justify-center px-4 py-8">
          <div className="w-full max-w-lg mx-auto text-center">
            <div className="bg-[rgba(255,255,255,0.06)] backdrop-blur-xl border border-[rgba(255,255,255,0.12)] rounded-3xl p-8 md:p-12 shadow-2xl space-y-8 animate-slide-in">
              {/* Animated Warning Icon */}
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 w-24 h-24 bg-rose-500/10 rounded-full blur-xl mx-auto" />
                <div className="relative w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center shadow-lg">
                  <AlertOctagon className="text-rose-500 w-10 h-10 animate-pulse" />
                </div>
              </div>

              {/* Error Headers */}
              <div className="space-y-3">
                <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-rose-500 via-[#8b5cf6] to-[#06b6d4] drop-shadow-sm select-none">
                  System Error
                </h1>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
                  A critical system crash occurred!
                </h2>
                <p className="text-sm text-zinc-400 font-medium leading-relaxed max-w-sm mx-auto">
                  The core layout of the application encountered a fatal exception. Please try restarting the system session.
                </p>
              </div>

              {/* Reset Button */}
              <div className="flex justify-center pt-2">
                <button
                  onClick={() => reset()}
                  className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 rounded-2xl font-bold bg-gradient-to-r from-[#8b5cf6] to-[#2563eb] hover:from-[#a855f7] hover:to-[#4f46e5] text-white text-sm transition-all shadow-lg shadow-[#8b5cf6]/20 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  <RefreshCw size={16} />
                  <span>Recover Application</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Area */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pb-6 mt-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-4 py-3 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
            <div className="flex items-center gap-2">
              <p className="text-zinc-400 text-[10px] sm:text-xs font-medium">
                Watch premium live TV channels directly from official stream sources.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex items-center px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-[10px] sm:text-xs text-zinc-300 font-medium whitespace-nowrap shadow-sm">
                Developed by <span className="text-white font-bold ml-1">S. SHAJON</span>
              </span>
              <a
                href="https://github.com/SHAJON-404/iptv"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.09] border border-white/[0.08] hover:border-white/[0.18] text-[10px] sm:text-xs text-gray-300 hover:text-white font-semibold transition-all duration-300 shadow-sm whitespace-nowrap"
              >
                <FaGithub size={12} className="opacity-80" />
                <span>GitHub Repository</span>
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
