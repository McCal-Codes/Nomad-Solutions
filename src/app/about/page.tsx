import type { Metadata } from 'next';
import { PhotoGallery } from '@/components/photo-gallery';

export const metadata: Metadata = {
  title: 'About | Nomad Solutions',
  description: 'Meet the team keeping RVs safe, dust-proofed, and compliant for Burning Man. Learn our maintenance standards.'
};

export default function AboutPage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-4 py-8">
        <p className="text-sm uppercase tracking-wide text-desert-ember font-semibold">Our Story</p>
        <h1 className="text-4xl md:text-5xl font-bold">Built by Burners, For Burners</h1>
        <p className="text-lg text-black/75 dark:text-white/75 max-w-3xl mx-auto">
          Nomad Solutions is a small Reno-based crew of burners and RV techs. We prep every rig with safety checklists, AC stress
          tests, and dust-proofing before it heads to Gate Road.
        </p>
      </div>

      {/* Stats Banner */}
      <div className="card-surface rounded-2xl p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-desert-ember">6+</div>
            <div className="text-sm text-black/60 dark:text-white/60 mt-1">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-desert-ember">500+</div>
            <div className="text-sm text-black/60 dark:text-white/60 mt-1">Happy Burners</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-desert-ember">15+</div>
            <div className="text-sm text-black/60 dark:text-white/60 mt-1">RVs in Fleet</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-desert-ember">100%</div>
            <div className="text-sm text-black/60 dark:text-white/60 mt-1">Satisfaction</div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Our Mission</h2>
          <p className="text-black/80 dark:text-white/80 leading-relaxed">
            We believe that your Burning Man experience shouldn't be compromised by vehicle issues or inadequate preparation. 
            Every RV in our fleet is meticulously maintained and specially prepared for the harsh playa environment.
          </p>
          <p className="text-black/80 dark:text-white/80 leading-relaxed">
            From comprehensive dust-proofing to 24/7 support during the event, we're committed to making your burn safe, 
            comfortable, and unforgettable. We've learned from years of playa experience what truly matters.
          </p>
        </div>
        <div className="card-surface rounded-2xl p-6 space-y-3">
          <h3 className="text-xl font-semibold">Why Choose Us?</h3>
          <ul className="space-y-3 text-sm text-black/80 dark:text-white/80">
            <li className="flex items-start gap-3">
              <span className="text-desert-ember text-lg">✓</span>
              <span><strong>Playa veterans:</strong> We've been going to the burn for 10+ years</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-desert-ember text-lg">✓</span>
              <span><strong>RV experts:</strong> Licensed technicians maintain every vehicle</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-desert-ember text-lg">✓</span>
              <span><strong>Dust specialists:</strong> Proprietary dust-proofing techniques</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-desert-ember text-lg">✓</span>
              <span><strong>Always available:</strong> On-call support during gate open hours</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Standards Section */}
      <section className="grid md:grid-cols-[1.1fr_0.9fr] gap-6 items-start">
        <div className="card-surface rounded-2xl p-6 space-y-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">🛡️</span>
            <h2 className="text-2xl font-semibold">Safety + Maintenance Standards</h2>
          </div>
          <p className="text-black/70 dark:text-white/70 text-sm mb-4">
            Every vehicle undergoes our rigorous pre-burn preparation checklist:
          </p>
          <ul className="space-y-3 text-sm text-black/80 dark:text-white/80">
            <li className="flex items-start gap-3 p-3 rounded-lg bg-black/5 dark:bg-white/5">
              <span className="text-desert-ember font-bold">❄️</span>
              <span><strong>AC Load Tests:</strong> Performed the week of pickup with backup filters packed and ready.</span>
            </li>
            <li className="flex items-start gap-3 p-3 rounded-lg bg-black/5 dark:bg-white/5">
              <span className="text-desert-ember font-bold">🔒</span>
              <span><strong>Dust-Proofing:</strong> Sealed seams, filtered vents, and pressure fans to minimize dust intrusion.</span>
            </li>
            <li className="flex items-start gap-3 p-3 rounded-lg bg-black/5 dark:bg-white/5">
              <span className="text-desert-ember font-bold">💧</span>
              <span><strong>Water Systems:</strong> Sanitized and filled; tanks labeled with capacity and usage guides.</span>
            </li>
            <li className="flex items-start gap-3 p-3 rounded-lg bg-black/5 dark:bg-white/5">
              <span className="text-desert-ember font-bold">⚡</span>
              <span><strong>Generator Service:</strong> Full maintenance with spare oil and clear fuel usage instructions.</span>
            </li>
            <li className="flex items-start gap-3 p-3 rounded-lg bg-black/5 dark:bg-white/5">
              <span className="text-desert-ember font-bold">📋</span>
              <span><strong>Pre-Trip Walkthrough:</strong> Comprehensive training covering playa etiquette and safety protocols.</span>
            </li>
          </ul>
          <div className="pt-4 border-t border-black/10 dark:border-white/10">
            <p className="text-sm text-black/70 dark:text-white/70">
              <strong>Note:</strong> We coordinate with Ranger and BMORG guidance to ensure all vehicles remain compliant and camps stay safe throughout the event.
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <PhotoGallery />
          
          {/* Team Values */}
          <div className="card-surface rounded-2xl p-6 space-y-3">
            <h3 className="text-lg font-semibold">Our Values</h3>
            <ul className="space-y-2 text-sm text-black/80 dark:text-white/80">
              <li><strong>Radical Reliability:</strong> Equipment that works when you need it</li>
              <li><strong>Transparency:</strong> No hidden fees or surprises</li>
              <li><strong>Community First:</strong> Supporting the burner community</li>
              <li><strong>Leave No Trace:</strong> Proper waste systems and education</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <div className="card-surface rounded-2xl p-8 text-center space-y-4">
        <h2 className="text-2xl font-bold">Ready to Join the Nomad Family?</h2>
        <p className="text-black/70 dark:text-white/70 max-w-2xl mx-auto">
          Whether you're a first-time burner or a playa veteran, we're here to make your experience unforgettable. 
          Get in touch to reserve your spot for the next burn.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a 
            href="/fleet" 
            className="inline-block bg-desert-ember text-white px-6 py-3 rounded-lg font-semibold hover:bg-desert-ember/90 transition-colors"
          >
            View Our Fleet
          </a>
          <a 
            href="/contact" 
            className="inline-block bg-black/5 dark:bg-white/5 px-6 py-3 rounded-lg font-semibold hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
