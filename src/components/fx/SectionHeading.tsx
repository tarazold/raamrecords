import { useReveal } from "@/hooks/use-reveal";

/**
 * Editorial section header: small gold index + label, then the title sliding
 * up out of an overflow mask when scrolled into view.
 */
const SectionHeading = ({
  index,
  label,
  title,
  align = "left",
}: {
  index: string;
  label: string;
  title: string;
  align?: "left" | "center";
}) => {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const centered = align === "center";

  return (
    <div ref={ref} className={`${visible ? "is-visible" : ""} ${centered ? "text-center" : ""} mb-20 md:mb-32`}>
      <div
        className={`flex items-center gap-5 mb-8 ${centered ? "justify-center" : ""} reveal ${visible ? "is-visible" : ""}`}
      >
        <span className="font-display text-xs font-medium text-gold tracking-[0.25em]">
          {index}
        </span>
        <span className="w-12 h-px bg-[hsl(42_62%_58%/0.4)]" />
        <span className="text-[11px] uppercase tracking-[0.35em] text-muted-foreground font-light">
          {label}
        </span>
      </div>
      <h2 className="mask-line">
        <span
          className="font-display font-semibold uppercase text-[var(--bone)] leading-[1.02] tracking-tight"
          style={{ fontSize: "clamp(1.9rem, 4.5vw, 3.75rem)" }}
        >
          {title}
        </span>
      </h2>
    </div>
  );
};

export default SectionHeading;
