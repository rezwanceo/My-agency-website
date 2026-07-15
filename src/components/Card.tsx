'use client';

import { type ReactNode } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  description: string;
  children?: ReactNode;
  className?: string;
  href?: string;
  ctaLabel?: string;
}

export function Card({ title, description, children, className = '', href, ctaLabel = 'Read more' }: CardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className={`group rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/20 ${className}`.trim()}
    >
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-slate-300">{description}</p>
        {children}
        {href ? (
          <Link href={href} className="inline-flex items-center gap-2 text-sm font-semibold text-teal-300 transition hover:text-teal-200">
            {ctaLabel} <span aria-hidden="true">→</span>
          </Link>
        ) : null}
      </div>
    </motion.article>
  );
}
