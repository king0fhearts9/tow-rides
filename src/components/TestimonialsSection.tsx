"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiStar } from "react-icons/fi";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Samantha Ortiz",
    role: "E-commerce Founder",
    quote:
      "My delivery van blew a tire at 2 AM. Tow Rides had a tow on-site in under 15 minutes and kept me calm the entire time.",
    avatar: "https://i.pravatar.cc/150?img=7",
  },
  {
    name: "Marcus Lee",
    role: "Photographer",
    quote:
      "Transparent pricing and instant updates. I knew exactly what I was paying for before they even hooked up my car.",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Lina Patel",
    role: "Road Tripper",
    quote:
      "We were stuck on a remote highway. Their verified driver arrived with water, checked on us, and got us safely to a service center.",
    avatar: "https://i.pravatar.cc/150?img=24",
  },
  {
    name: "Jason Chen",
    role: "Logistics Manager",
    quote:
      "We now use Tow Rides for our entire fleet because they consistently deliver fast, professional support nationwide.",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
];

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-accent-black/50">
            Trusted By Drivers
          </p>
          <h2 className="mt-4 text-3xl font-bold text-accent-black sm:text-4xl">
            Stories From The Road
          </h2>
        </div>
        <div className="mt-12 flex flex-col items-center gap-8">
          <div className="relative w-full overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.article
                key={testimonials[index].name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="mx-auto max-w-3xl rounded-[2rem] border-2 border-black bg-white p-8 text-left shadow-[0_30px_80px_rgba(0,0,0,0.14)] md:p-10"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonials[index].avatar}
                    alt={testimonials[index].name}
                    width={64}
                    height={64}
                    className="h-16 w-16 rounded-2xl border-2 border-black object-cover"
                  />
                  <div>
                    <p className="text-lg font-semibold text-accent-black">
                      {testimonials[index].name}
                    </p>
                    <p className="text-sm uppercase tracking-wide text-accent-black/50">
                      {testimonials[index].role}
                    </p>
                    <div className="mt-2 flex items-center gap-1 text-primary">
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <FiStar key={starIndex} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="mt-6 text-lg text-accent-black/70">{testimonials[index].quote}</p>
              </motion.article>
            </AnimatePresence>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white via-white/60 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white via-white/60 to-transparent" />
          </div>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={prev}
              className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-black text-xl text-accent-black transition hover:-translate-y-0.5 hover:bg-primary hover:text-white"
              aria-label="Previous testimonial"
            >
              <FiChevronLeft />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((testimonial, indicatorIndex) => (
                <span
                  key={testimonial.name}
                  className={`h-2 w-8 rounded-full transition-all duration-300 ${
                    indicatorIndex === index ? "bg-primary" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-black text-xl text-accent-black transition hover:-translate-y-0.5 hover:bg-primary hover:text-white"
              aria-label="Next testimonial"
            >
              <FiChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

