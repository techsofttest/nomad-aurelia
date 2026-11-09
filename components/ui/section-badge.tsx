import Image from "next/image";

export interface SectionBadgeProps {
  label: string;
  theme?: "dark" | "light";
  className?: string;
}

export function SectionBadge({
  label,
  theme = "light",
  className = "",
}: SectionBadgeProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={`inline-flex gap-2 border-0 items-center text-xs font-semibold  backdrop-blur-md sm:text-sm ${isDark
        ? "border text-white"
        : "border text-[var(--color-ink)]"
        } ${className}`}
    >
      <Image
        src={isDark ? "/icons/arrow-up-light.svg" : "/icons/arrow-up.svg"}
        alt="Nomad Aurelia arrow icon"
        width={204}
        height={170}
        className="h-3.5 w-auto object-contain"
      />
      <span>{label}</span>
    </div>
  );
}

