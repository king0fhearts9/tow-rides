import type { Metadata } from "next";
import { BookingForm } from "@/components/BookingForm";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Book A Tow",
  description:
    "Request a tow truck or roadside rescue instantly. Share your location, vehicle details, and issue to dispatch verified drivers within minutes.",
};

export default function BookPage() {
  return (
    <div className="bg-white text-accent-black">
      <section className="relative overflow-hidden py-20 sm:py-24">
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-primary/15 to-transparent blur-3xl" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-xl space-y-6">
            <p className="text-xs uppercase tracking-[0.5em] text-accent-black/50">Roadside Booking Center</p>
            <h1 className="text-4xl font-bold sm:text-5xl">Reliable Roadside Rescue — One Click Away</h1>
            <p className="text-lg text-accent-black/70">
              Submit a booking request and we&apos;ll confirm within minutes. Our dispatch team pairs you with the
              nearest certified tow specialist, keeps you updated, and ensures transparent pricing throughout.
            </p>
            <div className="rounded-3xl border-2 border-black bg-white p-6 text-sm text-accent-black/70 shadow-[0_24px_60px_rgba(0,0,0,0.12)]">
              <p className="uppercase text-xs tracking-[0.3em] text-primary">What happens next</p>
              <ul className="mt-4 space-y-3 leading-relaxed">
                <li>• Command center reviews your request instantly.</li>
                <li>• We call/text to confirm the exact pickup point.</li>
                <li>• Track your rescue team with a live shareable link.</li>
                <li>• Secure your payment digitally once the job is done.</li>
              </ul>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button href="/whatsapp" className="w-full justify-center sm:w-auto" glow="black">
                  Need Instant Chat?
                </Button>
                <Button
                  href="tel:+919316062600"
                  variant="ghost"
                  glow="black"
                  className="w-full justify-center sm:w-auto text-sm"
                >
                  Call Support
                </Button>
              </div>
            </div>
          </div>
          <BookingForm />
        </div>
      </section>
    </div>
  );
}


