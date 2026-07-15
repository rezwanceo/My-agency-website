import { type ButtonHTMLAttributes, type AnchorHTMLAttributes, type ReactNode } from 'react';
import Link from 'next/link';

interface BaseButtonProps {
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

interface AnchorProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'>, BaseButtonProps {
  href: string;
}

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'>, BaseButtonProps {
  href?: never;
}

const variantClasses = {
  primary: 'bg-teal-400 text-slate-950 shadow-[0_20px_60px_rgba(15,177,166,0.18)] hover:bg-teal-300',
  secondary: 'bg-white/10 text-white border border-white/10 hover:bg-white/15',
  ghost: 'bg-transparent text-teal-300 ring-1 ring-teal-400/30 hover:bg-white/5',
};

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export function Button(props: ButtonProps | AnchorProps) {
  const { children, className = '', variant = 'primary', size = 'md' } = props;
  const classes = `inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`.trim();

  if ('href' in props) {
    const { href, ...anchorProps } = props;
    return (
      <Link href={href as any} className={classes} {...anchorProps}>
        {children}
      </Link>
    );
  }

  const { type = 'button', ...buttonProps } = props as ButtonProps;
  return (
    <button type={type} className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
