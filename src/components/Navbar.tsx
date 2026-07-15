'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { navLinks } from '../lib/site-data';
import { Button } from './Button';

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-semibold tracking-tight text-white">
          Rezwan Agency
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href as any} className="text-sm text-slate-300 transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button href="/contact" variant="ghost" size="sm">
            Contact
          </Button>
        </div>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 transition hover:bg-white/10 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-white/10 bg-slate-950/95 px-4 py-5 md:hidden">
          <div className="space-y-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href as any} className="block rounded-3xl bg-white/5 px-4 py-3 text-base text-slate-100 transition hover:bg-white/10">
                {link.label}
              </Link>
            ))}
            <Button href="/contact" variant="ghost" className="w-full" size="md">
              Contact
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
