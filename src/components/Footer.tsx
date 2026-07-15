import Link from 'next/link';
import { Button } from './Button';
import { navLinks } from '../lib/site-data';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/95 px-4 py-14 text-slate-400 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">
        <div className="space-y-4">
          <p className="text-xl font-semibold text-white">Rezwan Agency</p>
          <p className="max-w-md leading-7 text-slate-400">
            Premium AI and digital growth services for Bangladeshi SMEs, wholesale brands, and corporate clients.
          </p>
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Explore</p>
          <div className="mt-4 space-y-3">
            {navLinks.slice(0, 5).map((link) => (
              <Link key={link.href} href={link.href as any} className="block text-slate-300 hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Contact</p>
          <div className="mt-4 space-y-3 text-slate-300">
            <p>Dhaka, Bangladesh</p>
            <p>hello@rezwanagency.com</p>
            <p>+880 1234 567 890</p>
            <div className="pt-2">
              <Button href="/contact" variant="ghost" size="sm">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
