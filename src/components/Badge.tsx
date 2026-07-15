import { type ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'neutral' | 'accent' | 'ghost';
  className?: string;
}

const variantClasses = {
  neutral: 'bg-white/10 text-slate-100 border border-white/10',
  accent: 'bg-teal-500/15 text-teal-200 border border-teal-500/20',
  ghost: 'bg-white/5 text-slate-200 border border-white/10',
};

export function Badge({ children, variant = 'neutral', className = '' }: BadgeProps) {
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] ${variantClasses[variant]} ${className}`.trim()}>
      {children}
    </span>
  );
}
