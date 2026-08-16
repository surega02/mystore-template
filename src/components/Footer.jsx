import { Link } from "react-router-dom";
import Icon from "./Icon";
import { NAV_LINKS, SOCIALS, TRUST_ICONS } from "../data/store";

const QUICK_LINKS = [
  { label: "Search our store", to: "/catalog" },
  { label: "About us", to: "/" },
  { label: "News & blog", to: "/" },
  { label: "Contact us", to: "/contact" },
  { label: "FAQ", to: "/contact" },
];

const INFO_BLOCKS = [
  { label: "Address", lines: ["Jl. Sudirman No. 123, Jakarta Selatan,", "DKI Jakarta 12190, Indonesia"] },
  { label: "Email", lines: ["support@mystore.com", "hello@mystore.com"] },
  { label: "Phone", lines: ["+62 812-3456-7890"] },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Trust bar */}
      <div className="border-b border-background/10">
        <div className="page-width grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-10">
          {TRUST_ICONS.map((item) => (
            <div key={item.title} className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-background/10 text-background">
                <Icon name={item.icon} className="w-5 h-5" />
              </span>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide">{item.title}</p>
                <p className="mt-1 text-sm leading-5 text-background/70">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="page-width py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4 space-y-6">
            <p className="heading text-2xl">My Store</p>
            <p className="max-w-sm text-sm leading-6 text-background/70">
              Premium audio gear handpicked for everyday listening. Created by Concept as a
              React + Tailwind CSS storefront template.
            </p>
            <ul className="flex items-center gap-3">
              {SOCIALS.map((s) => (
                <li key={s.id}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-background/20 transition-colors hover:bg-background hover:text-foreground"
                  >
                    <Icon name={s.id} className="w-4 h-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav className="lg:col-span-3 lg:col-start-6 space-y-4" aria-label="Quick links">
            <p className="text-xs uppercase tracking-[0.2em] text-background/50">Quick links</p>
            <ul className="space-y-3">
              {QUICK_LINKS.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-sm text-background/80 transition-colors hover:text-background">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="lg:col-span-3 space-y-4" aria-label="Browse">
            <p className="text-xs uppercase tracking-[0.2em] text-background/50">Browse</p>
            <ul className="space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-background/80 transition-colors hover:text-background">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 border-t border-background/10 pt-8 lg:grid-cols-3">
          {INFO_BLOCKS.map((b) => (
            <div key={b.label}>
              <p className="text-xs uppercase tracking-[0.2em] text-background/50">{b.label}</p>
              {b.lines.map((line) => (
                <p key={line} className="mt-1 text-sm text-background/80">
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-background/10 pt-8 text-sm text-background/60 sm:flex-row">
          <p>&copy; 2026 My Store. Powered by Concept theme.</p>
          <p className="text-background/50">All prices in Indonesian Rupiah (IDR).</p>
        </div>
      </div>
    </footer>
  );

}