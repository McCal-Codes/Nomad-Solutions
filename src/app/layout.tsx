import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ThemeProvider } from '@/components/theme-provider';
import { ThemeToggle } from '@/components/theme-toggle';

const siteTitle = 'Playa RV Rentals | Burning Man Ready';
const siteDescription =
  'Dust-proofed RV rentals tuned for Burning Man: reliable AC, ample water, power guidance, and flexible pickups from Reno to Black Rock City.';

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  metadataBase: new URL('https://nomad-rentals.example'),
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: 'https://nomad-rentals.example',
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: 'Playa-ready RV parked at sunrise'
      }
    ]
  }
};

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/fleet', label: 'Fleet' },
  { href: '/booking', label: 'Booking' },
  { href: '/faq', label: 'FAQ' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen">
        <ThemeProvider>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'LocalBusiness',
                name: 'Nomad Solutions RV Rentals',
                url: 'https://nomad-rentals.example',
                image: 'https://nomad-rentals.example/og.jpg',
                areaServed: ['Reno', 'Black Rock City'],
                description: siteDescription,
                telephone: '+1-775-555-0112',
                openingHours: 'Mo-Su 08:00-22:00',
                department: {
                  '@type': 'VehicleRental',
                  name: 'Burning Man RV Fleet',
                  url: 'https://nomad-rentals.example/fleet'
                }
              })
            }}
          />
          <header className="sticky top-0 z-30 backdrop-blur bg-white/70 dark:bg-black/40 border-b border-black/5 dark:border-white/10">
            <div className="container flex items-center justify-between py-4">
              <Link href="/" className="font-bold text-lg">RV Rentals for Burning Man</Link>
              <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="hover:text-desert-ember">
                    {link.label}
                  </Link>
                ))}
              </nav>
              <ThemeToggle />
            </div>
          </header>
          <main className="container py-10 space-y-12">{children}</main>
          <footer className="container py-10 text-sm text-black/70 dark:text-white/70">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <p className="font-semibold">Nomad Solutions • Burning Man RV Rentals</p>
                <p>Safety-first. Event rule compliant. Dust-proof tested.</p>
              </div>
              <div className="flex gap-4">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="hover:text-desert-ember">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
