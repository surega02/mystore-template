const base = {
  className: "w-5 h-5",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

const paths = {
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </>
  ),
  cart: (
    <>
      <circle cx="9" cy="20" r="1.6" />
      <circle cx="17" cy="20" r="1.6" />
      <path d="M3 3h2l2.4 12h9.7l2.6-9H6" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c.8-4 4.2-6 8-6s7.2 2 8 6" />
    </>
  ),
  menu: (
    <>
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </>
  ),
  close: (
    <>
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </>
  ),
  chevronDown: <path d="m6 9 6 6 6-6" />,
  chevronLeft: <path d="m15 6-6 6 6 6" />,
  chevronRight: <path d="m9 6 6 6-6 6" />,
  arrowRight: (
    <>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  arrowLeft: (
    <>
      <path d="M19 12H5" />
      <path d="m11 18-6-6 6-6" />
    </>
  ),
  star: <path d="m12 3 2.9 5.9 6.5.9-4.7 4.6 1.1 6.5-5.8-3-5.8 3 1.1-6.5L2.6 9.8l6.5-.9z" fill="currentColor" stroke="none" />,
  starHalf: (
    <>
      <path d="m12 3 2.9 5.9 6.5.9-4.7 4.6 1.1 6.5-5.8-3v-15z" fill="currentColor" stroke="none" />
      <path d="m12 3 2.9 5.9 6.5.9-4.7 4.6 1.1 6.5-5.8-3-5.8 3 1.1-6.5L2.6 9.8l6.5-.9z" />
    </>
  ),
  plus: (
    <>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </>
  ),
  minus: <path d="M5 12h14" />,
  trash: (
    <>
      <path d="M4 7h16" />
      <path d="M10 11v6" />
      <path d="M14 11v6" />
      <path d="M6 7l1 13h10l1-13" />
      <path d="M9 7V4h6v3" />
    </>
  ),
  check: <path d="m5 12 4.5 4.5L19 7" />,
  checkCircle: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12 2.5 2.5 4.5-5" />
    </>
  ),
  truck: (
    <>
      <path d="M3 6h11v9H3z" />
      <path d="M14 9h4l3 3v3h-7" />
      <circle cx="7" cy="18" r="1.6" />
      <circle cx="17" cy="18" r="1.6" />
    </>
  ),
  box: (
    <>
      <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9z" />
      <path d="M4 7.5 12 12l8-4.5" />
      <path d="M12 12v9" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  headphone: (
    <>
      <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
      <rect x="3" y="14" width="4" height="6" rx="1.5" />
      <rect x="17" y="14" width="4" height="6" rx="1.5" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="9" r="5" />
      <path d="m8.5 13.5-1.5 7 5-2.5 5 2.5-1.5-7" />
      <path d="M12 6.5l.9 1.8 2 .3-1.45 1.4.35 2-1.8-.95-1.8.95.35-2L9.1 8.6l2-.3z" fill="currentColor" stroke="none" />
    </>
  ),
  support: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 15a3 3 0 0 0 3-3V9a3 3 0 0 0-6 0v3a3 3 0 0 0 3 3z" />
      <path d="M5.5 16.5 4 19M18.5 16.5 20 19" />
      <path d="M4 19a8 8 0 0 1-1-1M20 18a8 8 0 0 1-1 1" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <path d="M16 5a3.5 3.5 0 0 1 0 6.5" />
      <path d="M18 14c2 .8 3.5 2.7 3.5 5.5" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  phone: (
    <path d="M6.6 3c.4 0 .9.3 1 .7l1 3.1c.2.5 0 1-.4 1.3l-1.6 1.2a13.5 13.5 0 0 0 6.5 6.5l1.2-1.6c.3-.4.8-.6 1.3-.4l3.1 1c.4.1.7.6.7 1v2.9c0 1.4-1.2 2.6-2.6 2.4C10.9 20.5 3.5 13.1 2.2 5.6 2 4.2 3.2 3 4.6 3z" />
  ),
  pin: (
    <>
      <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  play: <path d="M7 5v14l11-7z" fill="currentColor" stroke="none" />,
  quote: (
    <path
      d="M9 7c-2.8 0-5 2.2-5 5v5h5v-5H6.5C6.5 9.7 7.6 9 9 9V7zm10 0c-2.8 0-5 2.2-5 5v5h5v-5h-2.5c0-2.3 1.1-3 2.5-3V7z"
      fill="currentColor"
      stroke="none"
    />
  ),
  facebook: <path d="M14 8h2.5V4.5H14a3.5 3.5 0 0 0-3.5 3.5V10H8v3.5h2.5V20H14v-6.5h2.4l.6-3.5H14V8.3c0-.2.2-.3.5-.3z" fill="currentColor" stroke="none" />,
  twitter: <path d="M4 4h4.5l3.5 4.9L15.9 4H20l-5.8 6.8L20 20h-4.5L11.6 14.6 8 20H4l6-7.2z" fill="currentColor" stroke="none" />,
  instagram: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="4.5" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="16.8" cy="7.2" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  youtube: (
    <>
      <rect x="2.5" y="6" width="19" height="12" rx="3" />
      <path d="m10 9.5 4.5 2.5-4.5 2.5z" fill="currentColor" />
    </>
  ),
  sparkles: (
    <>
      <path d="M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8z" fill="currentColor" stroke="none" />
      <path d="M19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9z" fill="currentColor" stroke="none" />
      <path d="M5 15l.7 1.8L7.5 17.5l-1.8.7L5 20l-.7-1.8L2.5 17.5l1.8-.7z" fill="currentColor" stroke="none" />
    </>
  ),
  eye: (
    <>
      <path d="M3 12s3.5-6 9-6 9 6 9 6-3.5 6-9 6-9-6-9-6z" />
      <circle cx="12" cy="12" r="2.5" />
    </>
  ),
  refresh: (
    <>
      <path d="M4 12a8 8 0 0 1 14-5.4M20 12a8 8 0 0 1-14 5.4" />
      <path d="M20 3v4h-4M4 21v-4h4" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  fire: (
    <path
      d="M12 21c-3.3 0-6-2.5-6-5.8 0-2.4 1.3-3.9 2.5-5.2C9.7 8.7 10 7.6 10 6c3 1.6 4 3.6 4 6h-1.5c0-1-.3-1.8-.8-2.5.3 2 1.2 3 2.3 4 .8.8 1.5 1.6 1.5 2.8 0 3.2-2.7 5.7-6 5.7z"
      fill="currentColor"
      stroke="none"
    />
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </>
  ),
};

export default function Icon({ name, className = "w-5 h-5", strokeWidth = 1.6 }) {
  return (
    <svg {...base} className={className} strokeWidth={strokeWidth}>
      {paths[name] ?? null}
    </svg>
  );
}