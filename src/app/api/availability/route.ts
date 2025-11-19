import { NextResponse } from 'next/server';
import { vehicles } from '@/lib/vehicles';

export async function GET() {
  return NextResponse.json({
    availability: vehicles.map((vehicle) => ({
      name: vehicle.name,
      status: vehicle.availability.toLowerCase().includes('booked')
        ? 'booked'
        : vehicle.availability.toLowerCase().includes('limited')
          ? 'limited'
          : 'available',
      nextOpen: vehicle.availability.match(/opens (.*)/i)?.[1]
    }))
  });
}
