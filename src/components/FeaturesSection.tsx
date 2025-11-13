"use client";

import { motion } from "framer-motion";
import { FiClock, FiShield, FiCreditCard } from "react-icons/fi";

const features = [
  {
    title: "Fast Response Time",
    description:
      "Dispatch within minutes and live updates on your driver’s route so you know exactly when help arrives.",
    icon: <FiClock />,
  },
  {
    title: "Verified Drivers",
    description:
      "Every Tow Rides partner passes a full background check and carries certified rescue credentials.",
    icon: <FiShield />,
  },
  {
    title: "Transparent Pricing",
    description:
      "No surprises. Upfront quotes, secure payments, and digital invoices delivered right to your phone.",
    icon: <FiCreditCard />,
  },
];

export function FeaturesSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[0.4em] text-accent-black/50">
            Why Tow Rides
          </p>
          <h2 className="mt-4 text-3xl font-bold text-accent-black sm:text-4xl">
            Designed For Emergencies, Delivered With Care
          </h2>
        </motion.div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col gap-4 rounded-3xl border-2 border-black bg-white p-8 shadow-[0_24px_60px_rgba(0,0,0,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(0,0,0,0.18)]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-black bg-primary text-2xl text-black shadow-[0_10px_25px_rgba(0,0,0,0.15)] transition group-hover:-translate-y-0.5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-accent-black">
                {feature.title}
              </h3>
              <p className="text-accent-black/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

