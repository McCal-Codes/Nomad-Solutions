import { Vehicle } from '@/lib/vehicles';

export function PricingTable({ vehicles }: { vehicles: Vehicle[] }) {
  return (
    <section className="card-surface rounded-2xl p-6 space-y-4">
      <header className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-wide text-black/60 dark:text-white/60">Transparent pricing</p>
          <h2 className="text-xl font-semibold">Rates tuned for the playa</h2>
        </div>
        <span className="text-sm rounded-full bg-black/5 dark:bg-white/10 px-3 py-1">No hidden fees</span>
      </header>
      <div className="grid md:grid-cols-3 gap-4">
        {vehicles.map((vehicle) => (
          <div key={vehicle.name} className="rounded-xl bg-black/5 dark:bg-white/5 p-4 space-y-2">
            <h3 className="font-semibold">{vehicle.name}</h3>
            <p className="text-sm text-black/70 dark:text-white/70">{vehicle.mileage} miles included</p>
            <p className="text-2xl font-bold text-desert-ember">{vehicle.price}</p>
            <ul className="text-sm space-y-1 text-black/80 dark:text-white/80">
              <li>AC: {vehicle.ac}</li>
              <li>Water: {vehicle.water}</li>
              <li>Generator: {vehicle.power}</li>
            </ul>
          </div>
        ))}
      </div>
      <p className="text-sm text-black/70 dark:text-white/70">
        Rates include thorough dust-proofing, pre-event maintenance, and on-call support during gate open hours.
      </p>
    </section>
  );
}
