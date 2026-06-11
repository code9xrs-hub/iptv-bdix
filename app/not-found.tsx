"use client";

import Link from "next/link";
import React from "react";
import { AlertCircle, Home, RefreshCw } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import BackgroundScene from "./components/BackgroundScene";
import Header from "./components/Header";

export default function NotFound() {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-between text-white overflow-hidden bg-[#070414]">
      {/* Dynamic Grid Background */}
      <BackgroundScene />

      {/* Header wrapper */}
      <div className="relative z-10 w-full">
        <Header />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-lg mx-auto text-center">
          <div className="glass-card p-8 md:p-12 border border-white/10 shadow-2xl backdrop-blur-xl bg-white/[0.02] rounded-3xl space-y-8 animate-slide-in">
            {/* Animated Error Icon */}
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 w-24 h-24 bg-[#8b5cf6]/20 rounded-full blur-xl mx-auto" />
              <div className="relative w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center glow">
                <AlertCircle className="text-[#8b5cf6] w-10 h-10 animate-pulse" />
              </div>
            </div>

            {/* Error Code and Text */}
            <div className="space-y-3">
              <h1 className="text-7xl font-extrabold tracking-tight gradient-text drop-shadow-sm select-none">
                404
              </h1>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
                Page Not Found
              </h2>
              <p className="text-sm text-zinc-400 font-medium leading-relaxed max-w-sm mx-auto">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
              <Link
                href="/"
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-2xl font-bold btn-primary text-sm hover:scale-[1.02] active:scale-[0.98] transition-all text-center"
              >
                <Home size={16} />
                <span>Go Back Home</span>
              </Link>
              <button
                onClick={handleReload}
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-2xl font-bold bg-white/5 hover:bg-white/10 text-white text-sm border border-white/10 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <RefreshCw size={16} />
                <span>Reload Page</span>
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
    </div>
  );
}
