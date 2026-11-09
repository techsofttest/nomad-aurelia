import React from "react";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  eyebrowColor?: "gold" | "soft" | "muted";
  dark?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  eyebrowColor = "gold",
  dark = false,
  className = "",
}: SectionHeadingProps) {
  const eyebrowColors = {
    gold: "text-[var(--color-gold)]",
    soft: "text-[var(--color-ink-soft)]",
    muted: "text-[var(--color-muted)]",
  };

  return (
    <div className={className}>
      {eyebrow && (
        <span className={`text-sm font-semibold ${eyebrowColors[eyebrowColor]}`}>
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-5 font-serif text-5xl leading-[0.94] tracking-[-0.035em] sm:text-6xl ${
          dark ? "text-white" : "text-[var(--color-ink)]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-7 text-base leading-7 ${
            dark ? "text-white/70" : "text-[var(--color-muted)]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

