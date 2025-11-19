const items = [
  { label: 'AC tuned for desert nights', detail: 'Chilled, freshly serviced systems' },
  { label: 'Dust-proof prep', detail: 'Seals, filters, and vent covers' },
  { label: 'Water & gray tanks', detail: 'Full fresh tanks, prepped hookups' },
  { label: 'Power planning', detail: 'Generator & solar combos with fuel guidance' },
  { label: 'Support line', detail: 'On-call during gate open + exit days' },
  { label: 'Flexible pickup', detail: 'Reno + on-playa rendezvous options' }
];

export function IncludesGrid() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
      {items.map((item) => (
        <div key={item.label} className="flex gap-3 rounded-xl bg-black/5 dark:bg-white/5 p-4">
          <span className="mt-1 h-2 w-2 rounded-full bg-desert-ember" aria-hidden />
          <div>
            <p className="font-semibold leading-tight">{item.label}</p>
            <p className="text-sm text-black/70 dark:text-white/70">{item.detail}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
