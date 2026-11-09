import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "cream" | "gold" | "paper";
}

export function Badge({
  children,
  variant = "cream",
  className = "",
  ...props
}: BadgeProps) {
  const variantStyles = {
    cream: "bg-[var(--color-cream)] text-[var(--color-ink)]",
    gold: "bg-[var(--color-gold)] text-[var(--color-ink)]",
    paper: "bg-[var(--color-paper)] text-[var(--color-ink)]",
  };

  return (
    <span
      className={`rounded-full px-4 py-2 text-sm font-semibold ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}

