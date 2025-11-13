"use client";

import { motion } from "framer-motion";
import { BookingForm } from "./BookingForm";

export function BookingSection() {
  return (
    <section
      id="booking"
      className="relative overflow-hidden border-t border-black/10 bg-white py-20 sm:py-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute bottom-0 right-6 h-48 w-48 rounded-full bg-primary/10 blur-2xl" />
      </div>
      <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-6 lg:flex-row lg:items-start lg:justify-between">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl space-y-6 text-center lg:text-left"
        >
          <p className="text-xs uppercase tracking-[0.5em] text-accent-black/50">
            Emergency Dispatch
          </p>
          <h2 className="text-3xl font-bold text-accent-black sm:text-4xl">
            Help Is En Route The Moment You Tap Submit
          </h2>
          <p className="text-lg text-accent-black/70">
            Our command center triangulates your location, assigns a verified driver, and keeps you updated every step of
            the way. We stay on the line until you are safely on the move again.
          </p>
          <ul className="grid gap-3 text-left text-sm text-accent-black/70 sm:grid-cols-2">
            <li className="rounded-2xl border-2 border-black bg-white px-4 py-3">
              🚨 Dispatch within 15 minutes
            </li>
            <li className="rounded-2xl border-2 border-black bg-white px-4 py-3">
              🛡️ ID-verified tow experts
            </li>
            <li className="rounded-2xl border-2 border-black bg-white px-4 py-3">
              📍 Live GPS tracking link
            </li>
            <li className="rounded-2xl border-2 border-black bg-white px-4 py-3">
              💳 Secure digital payments
            </li>
          </ul>
        </motion.div>
        <BookingForm />
      </div>
    </section>
  );
}


