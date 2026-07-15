import { type ReactNode } from 'react';

interface HeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function Heading({ title, subtitle, className = '' }: HeadingProps) {
  return (
    <div className={`space-y-3 ${className}`.trim()}>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle ? <p className="mx-auto max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">{subtitle}</p> : null}
    </div>
  );
}
