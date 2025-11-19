import Link from 'next/link';
import { IncludesGrid } from '@/components/includes-grid';
import { PhotoGallery } from '@/components/photo-gallery';
import { AvailabilityWidget } from '@/components/availability-widget';

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
        <div className="space-y-6 animate-fade">
          <p className="text-sm uppercase tracking-[0.2em] text-black/60 dark:text-white/60">Burning Man RV Rentals</p>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Dust-proofed RVs with cold AC, big water, and support for the burn.
          </h1>
          <p className="text-lg text-black/75 dark:text-white/75">
            We prep every rig for playa life: sealed cabins, tuned generators, shaded setups, and flexible pickup windows from Reno
            to Black Rock City.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/booking"
              className="rounded-full bg-desert-ember text-white px-5 py-3 font-semibold shadow-soft hover:translate-y-[-2px] transition"
            >
              Request a rig
            </Link>
            <Link href="/fleet" className="rounded-full border border-black/10 dark:border-white/20 px-5 py-3 font-semibold">
              See fleet
            </Link>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-black/70 dark:text-white/70">
            <span>AC reliability guaranteed</span>
            <span>•</span>
            <span>Dust-proofing included</span>
            <span>•</span>
            <span>Water + power guidance</span>
          </div>
        </div>
        <div className="space-y-4">
          <div className="card-surface rounded-3xl p-6 shadow-soft">
            <p className="text-sm uppercase tracking-wide text-black/60 dark:text-white/60 mb-3">On-playa ready</p>
            <PhotoGallery />
          </div>
          <AvailabilityWidget />
        </div>
      </section>

      <section className="space-y-4">
        <header className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-wide text-black/60 dark:text-white/60">Rental includes</p>
            <h2 className="text-2xl font-semibold">Everything you need for a clean, cool week</h2>
          </div>
          <Link href="/faq" className="text-sm font-semibold hover:underline">
            Read logistics →
          </Link>
        </header>
        <IncludesGrid />
      </section>

      <section className="card-surface rounded-2xl p-6">
        <h3 className="text-xl font-semibold mb-2">Friendly disclaimers</h3>
        <ul className="list-disc pl-5 space-y-1 text-sm text-black/80 dark:text-white/80">
          <li>Respect all Burning Man safety rules and vehicle speed limits.</li>
          <li>Keep AC running with generators or shore power; monitor fuel daily.</li>
          <li>Seal windows during whiteouts; use vent covers to reduce dust.</li>
          <li>Return with tanks emptied or request our post-event service.</li>
        </ul>
      </section>
    </div>
  );
}
