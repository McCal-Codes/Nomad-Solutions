import Image from 'next/image';

const photos = [
  {
    src: 'https://images.unsplash.com/photo-1502877828070-33b167ad6860?auto=format&fit=crop&w=1200&q=80',
    alt: 'RV interior with seating and table'
  },
  {
    src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
    alt: 'RV kitchen area ready for cooking'
  },
  {
    src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    alt: 'RV parked at sunrise near the desert'
  }
];

export function PhotoGallery() {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {photos.map((photo) => (
        <div key={photo.src} className="relative h-44 md:h-52 rounded-xl overflow-hidden shadow-soft">
          <Image src={photo.src} alt={photo.alt} fill className="object-cover" sizes="(min-width: 768px) 33vw, 100vw" />
        </div>
      ))}
    </div>
  );
}
