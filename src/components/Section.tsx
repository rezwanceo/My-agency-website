import { type ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  title?: string;
  className?: string;
  id?: string;
}

export function Section({ children, title, className = '', id }: SectionProps) {
  return (
    <section id={id} className={`py-16 sm:py-20 ${className}`.trim()}>
      <div className="space-y-8">
        {title ? (
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.28em] text-teal-400">{title}</p>
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}
