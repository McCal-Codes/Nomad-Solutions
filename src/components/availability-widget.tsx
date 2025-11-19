'use client';

import { useEffect, useState } from 'react';

export type Availability = {
  name: string;
  status: 'available' | 'limited' | 'booked';
  nextOpen?: string;
};

export function AvailabilityWidget() {
  const [data, setData] = useState<Availability[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch('/api/availability');
        const json = await res.json();
        setData(json.availability);
      } catch (error) {
        console.error('Availability fetch failed', error);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  return (
    <section className="card-surface rounded-2xl p-5 space-y-3">
      <header className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-wide text-black/60 dark:text-white/60">Live-ish glance</p>
          <h3 className="text-lg font-semibold">Fleet availability</h3>
        </div>
        <span className="text-xs bg-black/5 dark:bg-white/10 rounded-full px-3 py-1">API ready</span>
      </header>
      {loading ? (
        <p className="text-sm text-black/70 dark:text-white/70">Checking the playa queue…</p>
      ) : (
        <ul className="space-y-2 text-sm">
          {data.map((item) => (
            <li key={item.name} className="flex items-center justify-between rounded-lg bg-black/5 dark:bg-white/5 px-3 py-2">
              <span className="font-semibold">{item.name}</span>
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  item.status === 'available'
                    ? 'bg-green-100 text-green-900 dark:bg-green-900/50 dark:text-green-100'
                    : item.status === 'limited'
                      ? 'bg-amber-100 text-amber-900 dark:bg-amber-900/50 dark:text-amber-100'
                      : 'bg-red-100 text-red-900 dark:bg-red-900/50 dark:text-red-100'
                }`}
              >
                {item.status === 'booked' && item.nextOpen ? `Booked — open ${item.nextOpen}` : item.status}
              </span>
            </li>
          ))}
        </ul>
      )}
      <p className="text-xs text-black/60 dark:text-white/60">TODO: replace with real booking API feed.</p>
    </section>
  );
}
