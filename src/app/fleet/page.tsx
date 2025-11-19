import type { Metadata } from 'next';
import { RvCard } from '@/components/rv-card';
import { PricingTable } from '@/components/pricing-table';
import { vehicles } from '@/lib/vehicles';

export const metadata: Metadata = {
  title: 'Fleet | Playa-ready RV rentals',
  description: 'Explore dust-proofed RVs tuned for Burning Man with AC, water, and power details ready to roll.'
};

export default function FleetPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Playa-ready fleet</h1>
        <p className="text-black/75 dark:text-white/75">
          Every rig is sealed, cooled, and stocked with fresh filters. Check specs, availability badges, and rates.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vehicles.map((vehicle) => (
          <RvCard key={vehicle.name} vehicle={vehicle} />
        ))}
      </div>
      <PricingTable vehicles={vehicles} />
    </div>
  );
}
