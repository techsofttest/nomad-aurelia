import React from "react";

export type ButtonVariant = "primary" | "secondary" | "ternary";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  onDark?: boolean;
  children: React.ReactNode;
}

const darkVariantStyles: Record<ButtonVariant, string> = {
  // Primary: High-contrast pure white
  primary:
    "bg-white text-neutral-950 hover:bg-white/90 active:bg-white/80 focus-visible:ring-2 focus-visible:ring-white/50",
  // Secondary: Subtle translucent glass with crisp border
  secondary:
    "border border-white/30 bg-white/10 text-white hover:bg-white/20 active:bg-white/25 focus-visible:ring-2 focus-visible:ring-white/40",
  // Ternary: Ghost / link-style with transparent background and gentle hover plate
  ternary:
    "bg-transparent text-white hover:bg-white/10 active:bg-white/15 focus-visible:ring-2 focus-visible:ring-white/30",
};

const lightVariantStyles: Record<ButtonVariant, string> = {
  // Primary: Solid dark ink
  primary:
    "bg-[var(--color-ink)] text-white hover:bg-[var(--color-ink-soft)] active:bg-neutral-950 focus-visible:ring-2 focus-visible:ring-[var(--color-ink)]/30",
  // Secondary: Clean white with border
  secondary:
    "border border-[var(--color-line)] bg-white text-[var(--color-ink)] hover:bg-neutral-50 active:bg-neutral-100 focus-visible:ring-2 focus-visible:ring-neutral-400/40",
  // Ternary: Ghost on light
  ternary:
    "bg-transparent text-[var(--color-ink)] hover:bg-black/5 active:bg-black/10 focus-visible:ring-2 focus-visible:ring-[var(--color-ink)]/20",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3.5 py-2 text-xs gap-1.5",
  md: "px-5 py-2.5 text-sm gap-2",
  lg: "px-6 py-3.5 text-sm sm:text-base gap-2.5",
};

const baseStyles =
  "inline-flex items-center justify-center font-semibold rounded-md transition-colors duration-150 cursor-pointer select-none focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50";

export function Button({
  variant = "primary",
  size = "md",
  onDark = false,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const styles = onDark ? darkVariantStyles[variant] : lightVariantStyles[variant];

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${styles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export interface LinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  onDark?: boolean;
  children: React.ReactNode;
}

export function LinkButton({
  variant = "primary",
  size = "md",
  onDark = false,
  className = "",
  children,
  ...props
}: LinkButtonProps) {
  const styles = onDark ? darkVariantStyles[variant] : lightVariantStyles[variant];

  return (
    <a
      className={`${baseStyles} ${sizeStyles[size]} ${styles} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
