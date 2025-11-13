"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const stored = sessionStorage.getItem("towrides:splash-hidden");
    if (stored === "true") {
      setIsVisible(false);
      return;
    }
    const timeout = window.setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem("towrides:splash-hidden", "true");
    }, 6000);

    return () => window.clearTimeout(timeout);
  }, []);

  const dismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem("towrides:splash-hidden", "true");
  };

  if (!isVisible) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-white"
        >
          <div className="relative h-full w-full">
            <video
              className="h-full w-full object-cover"
              src="/media/splash.mp4"
              autoPlay
              muted
              playsInline
              onEnded={dismiss}
              onError={dismiss}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50" />
            <div className="absolute inset-x-0 bottom-10 flex flex-col items-center gap-4 px-6 text-center text-white">
              <p className="text-sm uppercase tracking-[0.6em] text-white/80">
                Tow Rides
              </p>
              <p className="text-3xl font-semibold sm:text-4xl">Roadside Rescue In Motion</p>
              <button
                type="button"
                onClick={dismiss}
                className="mt-4 inline-flex items-center justify-center rounded-full border-2 border-white/80 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-white hover:text-black"
              >
                Skip Intro
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


