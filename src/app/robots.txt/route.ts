import { NextResponse } from 'next/server';

const body = `User-agent: *
Allow: /

Sitemap: https://nomad-rentals.example/sitemap.xml`;

export function GET() {
  return new NextResponse(body, {
    headers: {
      'Content-Type': 'text/plain'
    }
  });
}
