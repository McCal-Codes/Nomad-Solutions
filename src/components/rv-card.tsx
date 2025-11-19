import Image from 'next/image';
import Link from 'next/link';
import { Vehicle } from '@/lib/vehicles';

export function RvCard({ vehicle }: { vehicle: Vehicle }) {
  return (
    <article className="card-surface rounded-2xl overflow-hidden shadow-soft animate-fade">
      <div className="relative h-52 w-full">
        <Image
          src={vehicle.image}
          alt={`${vehicle.name} exterior`}
          fill
          sizes="(min-width: 1024px) 320px, 100vw"
          className="object-cover"
          priority
        />
        <div className="absolute top-3 left-3 rounded-full bg-black/70 text-white px-3 py-1 text-xs font-semibold">
          {vehicle.availability}
        </div>
      </div>
      <div className="p-5 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{vehicle.name}</h3>
          <span className="text-sm px-2 py-1 rounded-full bg-desert-clay/70 text-desert-night font-medium">
            Sleeps {vehicle.sleep}
          </span>
        </div>
        <p className="text-sm text-black/80 dark:text-white/80">{vehicle.description}</p>
        <dl className="grid grid-cols-2 gap-2 text-sm">
          <div className="rounded-lg bg-black/5 dark:bg-white/5 px-3 py-2">
            <dt className="text-xs uppercase tracking-wide text-black/60 dark:text-white/60">AC</dt>
            <dd className="font-semibold">{vehicle.ac}</dd>
          </div>
          <div className="rounded-lg bg-black/5 dark:bg-white/5 px-3 py-2">
            <dt className="text-xs uppercase tracking-wide text-black/60 dark:text-white/60">Water</dt>
            <dd className="font-semibold">{vehicle.water}</dd>
          </div>
          <div className="rounded-lg bg-black/5 dark:bg-white/5 px-3 py-2">
            <dt className="text-xs uppercase tracking-wide text-black/60 dark:text-white/60">Dust-proofing</dt>
            <dd className="font-semibold">{vehicle.dustProofing}</dd>
          </div>
          <div className="rounded-lg bg-black/5 dark:bg-white/5 px-3 py-2">
            <dt className="text-xs uppercase tracking-wide text-black/60 dark:text-white/60">Pickup</dt>
            <dd className="font-semibold">{vehicle.pickup}</dd>
          </div>
        </dl>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-desert-ember">{vehicle.price}</span>
          <Link href="/booking" className="font-semibold hover:underline">
            Reserve spot →
          </Link>
        </div>
      </div>
    </article>
  );
}
