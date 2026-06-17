"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Shield, Loader2, AlertCircle } from "lucide-react";
import Turnstile from "./Turnstile";
import BackgroundScene from "./BackgroundScene";

interface TurnstileGuardProps {
  children: React.ReactNode;
}

export default function TurnstileGuard({ children }: TurnstileGuardProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  useEffect(() => {
    // Defer state update to avoid synchronous cascading render warning in ESLint
    setTimeout(() => {
      setIsMounted(true);

      // Skip verification if Turnstile site key is not configured in environment variables
      if (!siteKey) {
        setIsVerified(true);
        return;
      }

      // Check cookie or localStorage for previous verification
      const hasCookie = document.cookie.split(";").some((item) => item.trim().startsWith("cf_turnstile_verified="));
      const hasLocalStorage = localStorage.getItem("cf_turnstile_verified") === "true";

      if (hasCookie || hasLocalStorage) {
        setIsVerified(true);
      }
    }, 0);
  }, [siteKey]);

  const handleVerify = async (token: string) => {
    setIsVerifying(true);
    setError(null);

    try {
      const response = await fetch("/api/turnstile/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Save state on client side
        localStorage.setItem("cf_turnstile_verified", "true");
        // Give a short delay for smooth fade out transition
        setTimeout(() => {
          setIsVerified(true);
          setIsVerifying(false);
        }, 800);
      } else {
        setError(data.error || "Verification failed. Please try again.");
        setIsVerifying(false);
      }
    } catch (err) {
      console.error("Verification error:", err);
      setError("Network error. Please check your connection and try again.");
      setIsVerifying(false);
    }
  };

  const handleReset = () => {
    setError(null);
    setIsVerifying(false);
  };

  // Prevent server-side render content hydration mismatch by returning a placeholder layout during mount
  if (!isMounted) {
    return (
      <div className="fixed inset-0 z-[9999] bg-[#070414] flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-violet-500" />
      </div>
    );
  }

  // If verified or not enabled, let them pass
  if (isVerified) {
    return <>{children}</>;
  }

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#070414]">
      {/* Background visual scene (Grid & Glows) */}
      <BackgroundScene />

      {/* Verification Overlay Container */}
      <AnimatePresence>
        <div className="relative z-50 w-full max-w-[92%] sm:max-w-[28rem] px-4 py-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            style={{ willChange: "transform, opacity" }}
            className="w-full rounded-3xl border border-white/10 bg-[#0c0824]/80 backdrop-blur-2xl p-6 sm:p-8 shadow-[0_0_50px_rgba(139,92,246,0.15)] text-center relative overflow-hidden"
          >
            {/* Soft Ambient Inner Glows */}
            <div className="absolute -top-20 -left-20 -z-10 h-40 w-40 rounded-full bg-violet-500/10 blur-[48px]" />
            <div className="absolute -bottom-20 -right-20 -z-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-[48px]" />

            {/* Glowing Icon Badge */}
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-500/10 border border-violet-500/20 shadow-[0_8px_30px_rgba(139,92,246,0.2)]">
              {isVerifying ? (
                <Loader2 className="h-8 w-8 animate-spin text-cyan-400" />
              ) : error ? (
                <AlertCircle className="h-8 w-8 text-rose-500 animate-pulse" />
              ) : (
                <Shield className="h-8 w-8 text-violet-400" />
              )}
            </div>

            {/* Sub-badge status */}
            <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-500/30 bg-gradient-to-r from-violet-500/10 via-indigo-500/5 to-cyan-500/10 px-3 py-1 text-[9px] font-extrabold tracking-wider text-violet-300 uppercase shadow-inner">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse" />
              Security Gateway
            </span>

            {/* Title */}
            <h2 className="mt-4 text-2xl font-black tracking-tight text-white animate-fade-in">
              Are you human?
            </h2>
            <p className="mt-2 text-sm text-zinc-400 font-medium leading-relaxed">
              We need to perform a quick security check to protect our streaming servers from abuse.
            </p>

            {/* Turnstile / Loading Widget Space */}
            <div className="mt-8 min-h-[80px] flex items-center justify-center">
              {isVerifying ? (
                <div className="flex flex-col items-center gap-3 py-2">
                  <span className="text-xs text-violet-300 font-semibold tracking-wider uppercase animate-pulse">
                    Verifying security token...
                  </span>
                </div>
              ) : error ? (
                <div className="w-full flex flex-col items-center gap-3">
                  <div className="text-rose-400 text-xs font-semibold bg-rose-500/10 border border-rose-500/20 rounded-xl px-4 py-2.5 w-full">
                    {error}
                  </div>
                  <button
                    onClick={handleReset}
                    className="text-xs font-bold text-violet-400 hover:text-violet-300 transition-colors underline cursor-pointer"
                  >
                    Try verification again
                  </button>
                </div>
              ) : (
                siteKey && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="w-full animate-fade-in"
                  >
                    <Turnstile
                      siteKey={siteKey}
                      onSuccess={handleVerify}
                      onError={() => setError("Turnstile failed to load or verify. Please refresh.")}
                      onExpire={() => setError("Verification expired. Please try again.")}
                    />
                  </motion.div>
                )
              )}
            </div>

            {/* Footer Notice */}
            <div className="mt-8 pt-6 border-t border-white/5">
              <p className="text-[10px] text-zinc-500 font-medium">
                Protected by Cloudflare Turnstile. We do not store any personal identification data.
              </p>
            </div>
          </motion.div>
        </div>
      </AnimatePresence>
    </div>
  );
}
