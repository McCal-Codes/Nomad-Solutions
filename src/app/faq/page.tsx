import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | Burning Man logistics',
  description: 'Get answers about water, AC, dust-proofing, pickup/dropoff, and rules for Burning Man RV rentals.'
};

const faqs = [
  {
    q: 'How do you keep AC reliable at Burning Man?',
    a: 'We pre-cool before pickup, service filters, include vent covers, and provide generator fuel guidance so AC stays cold in the afternoon heat.'
  },
  {
    q: 'What about dust-proofing?',
    a: 'Each rig has sealed entry points, vent screens, and optional door skirts. We show you how to run positive pressure fans during whiteouts.'
  },
  {
    q: 'Water and tank guidance?',
    a: 'Fresh tanks leave full, gray/black are empty. We include reminders for daily checks and can arrange mid-week service runs on request.'
  },
  {
    q: 'Pickup and dropoff timing?',
    a: 'Standard pickup is Reno Thursday–Saturday before the event. On-playa delivery and exit day returns are available with advance notice.'
  }
];

export default function FaqPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Burning Man FAQ</h1>
        <p className="text-black/75 dark:text-white/75">Practical guidance for AC use, dust-proofing, water, and event compliance.</p>
      </div>
      <div className="space-y-4">
        {faqs.map((item) => (
          <div key={item.q} className="card-surface rounded-2xl p-5 space-y-2">
            <h3 className="text-xl font-semibold">{item.q}</h3>
            <p className="text-sm text-black/80 dark:text-white/80">{item.a}</p>
          </div>
        ))}
      </div>
      <div className="card-surface rounded-2xl p-5 text-sm text-black/80 dark:text-white/80">
        <p className="font-semibold">Safety + rules</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Follow posted speed limits on Gate Road and inside BRC.</li>
          <li>Keep generators clear of playa dust piles and flammable materials.</li>
          <li>Secure awnings during wind and overnight.</li>
          <li>Leave no trace: pack out gray water and trash or schedule service.</li>
        </ul>
      </div>
    </div>
  );
}
