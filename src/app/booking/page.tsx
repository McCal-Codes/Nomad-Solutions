import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Booking | Reserve your RV',
  description: 'Send a Burning Man RV inquiry with your dates, crew size, and pickup preference. No payment needed yet.'
};

export default function BookingPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Booking request</h1>
        <p className="text-black/75 dark:text-white/75">No payment yet. Tell us your plan and we will confirm within one business day.</p>
      </div>
      <form className="card-surface rounded-2xl p-6 grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm">
          <span className="font-semibold">Name</span>
          <input required className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 px-3 py-2" placeholder="Playa name & legal name" />
        </label>
        <label className="space-y-2 text-sm">
          <span className="font-semibold">Email</span>
          <input type="email" required className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 px-3 py-2" placeholder="you@example.com" />
        </label>
        <label className="space-y-2 text-sm">
          <span className="font-semibold">Dates</span>
          <input required className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 px-3 py-2" placeholder="Aug 24 – Sept 2" />
        </label>
        <label className="space-y-2 text-sm">
          <span className="font-semibold">Pickup preference</span>
          <select className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 px-3 py-2">
            <option>Reno</option>
            <option>On-playa delivery</option>
            <option>Other (tell us below)</option>
          </select>
        </label>
        <label className="space-y-2 text-sm md:col-span-2">
          <span className="font-semibold">Crew size</span>
          <input className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 px-3 py-2" placeholder="How many burners and pets?" />
        </label>
        <label className="space-y-2 text-sm md:col-span-2">
          <span className="font-semibold">Notes</span>
          <textarea className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 px-3 py-2" rows={4} placeholder="Power needs, AC concerns, special timing" />
        </label>
        <button className="md:col-span-2 rounded-full bg-desert-ember text-white px-6 py-3 font-semibold shadow-soft hover:translate-y-[-1px] transition" type="submit">
          Send booking inquiry
        </button>
        <p className="md:col-span-2 text-xs text-black/60 dark:text-white/60">
          We respect Burning Man vehicle guidelines. Submitting this form does not confirm a reservation; we will follow up with availability and next steps.
        </p>
      </form>
    </div>
  );
}
