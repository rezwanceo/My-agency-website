import Link from "next/link";
import {
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  ReactNode,
} from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

interface BaseProps {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  size?: Size;
}

interface LinkButtonProps
  extends BaseProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children" | "href"> {
  href: string;
}

interface NativeButtonProps
  extends BaseProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  href?: never;
}

type Props = LinkButtonProps | NativeButtonProps;

const variantClasses = {
  primary:
    "bg-teal-400 text-slate-950 shadow-[0_20px_60px_rgba(15,177,166,0.18)] hover:bg-teal-300",
  secondary:
    "bg-white/10 text-white border border-white/10 hover:bg-white/15",
  ghost:
    "bg-transparent text-teal-300 ring-1 ring-teal-400/30 hover:bg-white/5",
};

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button(props: Props) {
  const {
    children,
    className = "",
    variant = "primary",
    size = "md",
  } = props;

  const classes = `inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

 if ("href" in props && typeof props.href === "string") {
  const { href, target, rel, ...rest } = props;

  return (
    <Link href={href} className={classes} target={target} rel={rel} {...rest}>
      {children}
    </Link>
  );
}

  return (
    const { type = "button", ...buttonProps } = props;

return (
  <button
    type={type}
    className={classes}
    {...buttonProps}
  >
    {children}
  </button>
);
  );
}