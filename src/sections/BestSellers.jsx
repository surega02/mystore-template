import { useState } from "react";
import ProductCard from "../components/ProductCard";
import SectionHeading from "../components/SectionHeading";
import { PRODUCTS } from "../data/store";

const TABS = [
  { id: "bestsellers", label: "Bestsellers", picks: [0, 1, 2, 3, 4] },
  { id: "new", label: "New Arrivals", picks: [7, 5, 9, 11] },
  { id: "onsale", label: "On Sale", picks: [1, 3, 5, 9] },
];

export default function BestSellers() {
  const [tab, setTab] = useState(TABS[0].id);
  const active = TABS.find((t) => t.id === tab);
  const items = active.picks.map((i) => PRODUCTS[i]);

  return (
    <section id="best-sellers" className="py-16 md:py-24">
      <div className="page-width">
        <SectionHeading eyebrow="Popular right now" title="Best sellers" subtitle="The audio gear everyone keeps coming back to." />
        <div className="mt-9 flex justify-center">
          <div className="flex items-center gap-1 rounded-full bg-cream p-1">
            {TABS.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                  tab === t.id ? "bg-foreground text-background" : "text-foreground/60 hover:text-foreground"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {items.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}