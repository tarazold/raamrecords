import { ReactNode } from "react";

/**
 * Infinite marquee strip. Content is duplicated once and the track animates
 * -50%, so the loop is seamless as long as children render at a fixed width.
 */
const Marquee = ({
  children,
  duration = 40,
  reverse = false,
  className = "",
}: {
  children: ReactNode;
  duration?: number;
  reverse?: boolean;
  className?: string;
}) => (
  <div
    className={`overflow-hidden select-none ${reverse ? "marquee-reverse" : ""} ${className}`}
    style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
    aria-hidden="true"
  >
    <div className="marquee-track">
      <div className="flex shrink-0 items-center">{children}</div>
      <div className="flex shrink-0 items-center">{children}</div>
    </div>
  </div>
);

export default Marquee;
