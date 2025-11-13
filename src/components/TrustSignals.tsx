"use client";
import { motion } from "framer-motion";

const signals = [
  { title: "24/7 Assistance", subtitle: "Rapid support across the city" },
  { title: "Secure Payments", subtitle: "Encrypted transactions & receipts" },
  { title: "1000+ Rescues", subtitle: "Drivers and fleets trust Tow Rides" },
];

export function TrustSignals() {
  return (
    <section className="border-y border-black/10 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-center sm:flex-row sm:items-center sm:justify-between">
        {signals.map((signal, index) => (
          <motion.div
            key={signal.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className="flex flex-col items-center uppercase tracking-wide text-accent-black"
          >
            <span className="text-lg font-semibold text-primary">
              {signal.title}
            </span>
            <span className="mt-1 text-xs text-accent-black/60">{signal.subtitle}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

