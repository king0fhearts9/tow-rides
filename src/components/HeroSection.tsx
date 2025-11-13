"use client";

import { motion } from "framer-motion";
import { Button } from "./Button";
import { SiGoogleplay, SiAppstore } from "react-icons/si";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-primary/10 blur-2xl" />
      </div>
      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-24 md:flex-row md:items-end md:justify-between lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="z-10 max-w-2xl text-center md:text-left"
        >
          <p className="text-sm uppercase tracking-[0.5em] text-accent-black/60">
            Reliable Roadside Rescue — One Click Away
          </p>
          <h1 className="mt-6 text-4xl font-bold leading-tight text-accent-black sm:text-5xl lg:text-6xl">
            Stranded Is Not An Option. Our Tow Heroes Are On Standby 24/7.
          </h1>
          <p className="mt-6 text-lg text-accent-black/70">
            From flat tires to full recovery, we dispatch verified professionals with transparent pricing and real-time updates. One tap, and help is already en route.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row md:items-start">
            <Button href="#booking" glow="black" className="w-full sm:w-auto">
              Book a Tow Now
            </Button>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Button
                href="#"
                variant="ghost"
                glow="black"
                className="w-full justify-center gap-3 text-sm sm:w-auto"
              >
                <SiGoogleplay className="text-lg" />
                Google Play
              </Button>
              <Button
                href="#"
                variant="ghost"
                glow="black"
                className="w-full justify-center gap-3 text-sm sm:w-auto"
              >
                <SiAppstore className="text-lg" />
                App Store
              </Button>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="relative z-10 flex w-full max-w-md justify-center md:justify-end"
        >
          <div className="relative h-80 w-80 rounded-[2.5rem] border-2 border-black bg-white p-6 shadow-[0_35px_60px_rgba(0,0,0,0.12)]">
            <div className="absolute -left-10 top-6 h-24 w-24 rounded-3xl bg-primary/40 blur-3xl" />
            <div className="absolute -bottom-10 right-6 h-28 w-28 rounded-full bg-primary/20 blur-3xl" />
            <div className="relative flex h-full flex-col justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.4em] text-accent-black/50">
                  Dispatching
                </p>
                <p className="mt-2 text-4xl font-bold text-accent-black">
                  Tow Team
                </p>
              </div>
              <div className="space-y-3 text-sm text-accent-black/70">
                <div className="rounded-2xl border-2 border-black bg-white px-4 py-3">
                  <p className="font-semibold">ETA</p>
                  <p className="text-accent-black/60">12 minutes</p>
                </div>
                <div className="rounded-2xl border-2 border-black bg-white px-4 py-3">
                  <p className="font-semibold">Driver</p>
                  <p className="text-accent-black/60">Verified • 4.9 ★</p>
                </div>
              </div>
              <div className="flex items-center justify-between rounded-2xl border-2 border-black bg-primary px-4 py-3 text-sm font-semibold uppercase tracking-widest text-black">
                <span>Rescue Code</span>
                <span>RR-1027</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

