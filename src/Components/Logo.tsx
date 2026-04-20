"use client";

interface LogoProps {
  /** height in px — width scales automatically */
  height?: number;
  /** "white" for dark backgrounds (default), "black" for light backgrounds */
  color?: "white" | "black";
  className?: string;
}

export default function Logo({ height = 52, color = "white", className = "" }: LogoProps) {
  const solid   = color === "white" ? "#ffffff" : "#000000";
  const outline = color === "white" ? "#ffffff" : "#000000";

  return (
    <svg
      className={className}
      height={height}
      viewBox="0 0 120 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Yash Gole"
    >
      {/* YASH — solid */}
      <text
        x="60"
        y="32"
        textAnchor="middle"
        fontFamily="'Bebas Neue', 'Arial Black', sans-serif"
        fontSize="36"
        letterSpacing="4"
        fill={solid}
      >
        YASH
      </text>

      {/* divider rule */}
      <line
        x1="2" y1="38"
        x2="118" y2="38"
        stroke={solid}
        strokeWidth="0.7"
        opacity="0.28"
      />

      {/* GOLE — outline */}
      <text
        x="60"
        y="66"
        textAnchor="middle"
        fontFamily="'Bebas Neue', 'Arial Black', sans-serif"
        fontSize="36"
        letterSpacing="4"
        fill="none"
        stroke={outline}
        strokeWidth="1.2"
      >
        GOLE
      </text>
    </svg>
  );
}