import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "gold" | "outline-white";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold transition rounded-full";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs",
    md: "px-5 py-3 text-sm",
    lg: "px-6 py-4 text-sm",
  };

  const variantStyles = {
    primary: "bg-[var(--color-ink)] text-white hover:bg-[var(--color-ink-soft)]",
    secondary: "bg-white text-[var(--color-ink)] hover:bg-[var(--color-gold-pale)]",
    gold: "bg-[var(--color-gold)] text-[var(--color-ink)] hover:bg-[var(--color-gold)]/90",
    "outline-white": "bg-white/10 text-white hover:bg-white/15",
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export interface LinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary" | "gold" | "outline-white";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function LinkButton({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: LinkButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold transition rounded-full";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs",
    md: "px-5 py-3 text-sm",
    lg: "px-6 py-4 text-sm",
  };

  const variantStyles = {
    primary: "bg-[var(--color-ink)] text-white hover:bg-[var(--color-ink-soft)]",
    secondary: "bg-white text-[var(--color-ink)] hover:bg-[var(--color-gold-pale)]",
    gold: "bg-[var(--color-gold)] text-[var(--color-ink)] hover:bg-[var(--color-gold)]/90",
    "outline-white": "bg-white/10 text-white hover:bg-white/15",
  };

  return (
    <a
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}

