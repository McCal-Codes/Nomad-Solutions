import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact | Talk to the crew',
  description: 'Reach Nomad Solutions about Burning Man RV rentals, support, and logistics.'
};

export default function ContactPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Contact</h1>
        <p className="text-black/75 dark:text-white/75">We respond fast during build week and event days.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <form className="card-surface rounded-2xl p-6 space-y-3">
          <label className="space-y-1 text-sm">
            <span className="font-semibold">Email</span>
            <input type="email" required className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 px-3 py-2" placeholder="you@example.com" />
          </label>
          <label className="space-y-1 text-sm">
            <span className="font-semibold">How can we help?</span>
            <textarea className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 px-3 py-2" rows={4} placeholder="Availability check, support, partnership" />
          </label>
          <button className="rounded-full bg-desert-ember text-white px-6 py-3 font-semibold shadow-soft" type="submit">Send</button>
          <p className="text-xs text-black/60 dark:text-white/60">For urgent issues during the event, text our support line after booking.</p>
        </form>
        <div className="card-surface rounded-2xl p-6 space-y-2">
          <h2 className="text-xl font-semibold">Quick links</h2>
          <ul className="space-y-2 text-sm text-black/80 dark:text-white/80">
            <li>
              <Link href="mailto:hello@nomad-rentals.example" className="hover:underline">
                hello@nomad-rentals.example
              </Link>
            </li>
            <li>Reno basecamp: 15 minutes from RNO airport</li>
            <li>On-call hours: 8a–10p during event week</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
