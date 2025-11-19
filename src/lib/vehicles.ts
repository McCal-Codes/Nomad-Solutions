export type Vehicle = {
  name: string;
  sleep: number;
  description: string;
  image: string;
  availability: string;
  price: string;
  ac: string;
  water: string;
  dustProofing: string;
  pickup: string;
  mileage: string;
  power: string;
};

export const vehicles: Vehicle[] = [
  {
    name: 'Playa Proof 24',
    sleep: 4,
    description: 'Compact Class C with fresh dust seals, tuned AC, and shade awning.',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    availability: 'Available',
    price: '$2,800/wk',
    ac: 'Dual ducted units + HEPA intake',
    water: '60 gal fresh / 40 gray',
    dustProofing: 'Full cabin seal + vent screens',
    pickup: 'Reno Thurs–Sat',
    mileage: '900',
    power: '4kw generator + solar trickle'
  },
  {
    name: 'Dune Dweller 30',
    sleep: 6,
    description: 'Spacious slide-out, blackout shades, and extended fresh water tank.',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
    availability: 'Limited',
    price: '$3,600/wk',
    ac: 'High-output roof AC + pre-cool option',
    water: '80 gal fresh / 50 gray',
    dustProofing: 'MERV-13 filtration + door skirts',
    pickup: 'On-playa delivery + Reno',
    mileage: '1,200',
    power: 'Quiet inverter generator'
  },
  {
    name: 'Sunset Suite 32',
    sleep: 8,
    description: 'Family-ready rig with bunkhouse, large fridge, and dual AC.',
    image: 'https://images.unsplash.com/photo-1502877828070-33b167ad6860?auto=format&fit=crop&w=1200&q=80',
    availability: 'Booked — opens Aug 24',
    price: '$4,200/wk',
    ac: 'Dual-zone climate control',
    water: '100 gal fresh / 65 gray',
    dustProofing: 'Cabin pressure fan + seal kit',
    pickup: 'Reno only',
    mileage: '1,300',
    power: 'Generator + lithium house batteries'
  }
];
