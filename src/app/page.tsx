import { HeroSection } from "@/components/HeroSection";
import { TrustSignals } from "@/components/TrustSignals";
import { FeaturesSection } from "@/components/FeaturesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Button } from "@/components/Button";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustSignals />
      <FeaturesSection />
      <TestimonialsSection />
      <section className="border-t border-black/10 bg-white py-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 text-center lg:flex-row lg:items-center lg:text-left">
          <div className="flex-1 space-y-4">
            <p className="text-xs uppercase tracking-[0.5em] text-accent-black/60">Stay Prepared</p>
            <h2 className="text-3xl font-bold text-accent-black sm:text-4xl">
              Download the Tow Rides App Before You Need It
            </h2>
            <p className="text-accent-black/70">
              Keep emergency contacts, vehicle insurance, and service history in one secure place. Access one-tap rescue,
              live driver tracking, and instant proof-of-service receipts from anywhere.
            </p>
          </div>
          <div className="flex flex-1 flex-col gap-4 rounded-3xl border-2 border-black bg-white p-6 text-left text-accent-black/80 shadow-[0_25px_70px_rgba(0,0,0,0.12)] lg:max-w-md">
            <p className="uppercase tracking-wide text-sm text-primary">Core features</p>
            <ul className="space-y-3 text-sm leading-relaxed">
              <li>• Live ETA notifications shared with family</li>
              <li>• Digital wallet for payments and driver tipping</li>
              <li>• Service history and roadside insurance integration</li>
              <li>• One-tap WhatsApp and Voice Support</li>
            </ul>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <Button href="/app" className="w-full justify-center sm:w-auto" glow="black">
                Explore The App
              </Button>
              <Button href="/book" variant="ghost" glow="black" className="w-full justify-center sm:w-auto">
                Book A Tow
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
