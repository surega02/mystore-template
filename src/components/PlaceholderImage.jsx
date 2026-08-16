const PALETTES = [
  { a: "#A8E8E2", b: "#FFDDBF", c: "#F8E7E1" },
  { a: "#FFDDBF", b: "#FDE68A", c: "#E0A580" },
  { a: "#C7D2FE", b: "#A8E8E2", c: "#FDE68A" },
  { a: "#E0A580", b: "#F8E7E1", c: "#FFDDBF" },
  { a: "#A8E8E2", b: "#C7D2FE", c: "#FFDDBF" },
  { a: "#FDE68A", b: "#FFDDBF", c: "#E0A580" },
];

export default function PlaceholderImage({ seed = 0, className = "", icon }) {
  const p = PALETTES[Math.abs(seed) % PALETTES.length];
  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`g${seed}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={p.a} />
          <stop offset="55%" stopColor={p.b} />
          <stop offset="100%" stopColor={p.c} />
        </linearGradient>
      </defs>
      <rect width="400" height="400" fill={`url(#g${seed})`} />
      <circle cx="330" cy="70" r="120" fill="#ffffff" opacity="0.25" />
      <circle cx="60" cy="340" r="140" fill="#171717" opacity="0.08" />
      <path d="M0 300 Q 100 220 200 280 T 400 240 V 400 H 0 Z" fill="#171717" opacity="0.15" />
    </svg>
  );
}