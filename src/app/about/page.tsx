import type { Metadata } from 'next';
import { PhotoGallery } from '@/components/photo-gallery';

export const metadata: Metadata = {
  title: 'About | Nomad Solutions',
  description: 'Meet the team keeping RVs safe, dust-proofed, and compliant for Burning Man. Learn our maintenance standards.'
};

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Our story</h1>
        <p className="text-black/75 dark:text-white/75">
          Nomad Solutions is a small Reno-based crew of burners and RV techs. We prep every rig with safety checklists, AC stress
          tests, and dust-proofing before it heads to Gate Road.
        </p>
      </div>
      <section className="grid md:grid-cols-[1.1fr_0.9fr] gap-6 items-start">
        <div className="card-surface rounded-2xl p-6 space-y-3">
          <h2 className="text-xl font-semibold">Safety + maintenance standards</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-black/80 dark:text-white/80">
            <li>AC load tests the week of pickup with backup filters packed.</li>
            <li>Sealed seams, filtered vents, and pressure fans to minimize dust.</li>
            <li>Water systems sanitized and filled; tanks labeled with capacity.</li>
            <li>Generators serviced with spare oil and clear fuel usage guides.</li>
            <li>Pre-trip walkthroughs covering playa etiquette and safety.</li>
          </ul>
          <p className="text-sm text-black/70 dark:text-white/70">
            We coordinate with Ranger and BMORG guidance to keep vehicles compliant and camps safe.
          </p>
        </div>
        <div className="space-y-3">
          <PhotoGallery />
        </div>
      </section>
    </div>
  );
}
