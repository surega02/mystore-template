import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import PlaceholderImage from "../components/PlaceholderImage";
import ProductCard from "../components/ProductCard";
import SectionHeading from "../components/SectionHeading";
import { COLLECTIONS, PRODUCTS } from "../data/store";

const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
];

export default function Catalog() {
  const [collection, setCollection] = useState("all");
  const [sort, setSort] = useState("featured");
  const [visible, setVisible] = useState(8);

  const filtered = useMemo(() => {
    let list = PRODUCTS.filter((p) => collection === "all" || p.category === collection);
    const price = (p) => p.salePrice || p.price;
    switch (sort) {
      case "price-asc":
        list = [...list].sort((a, b) => price(a) - price(b));
        break;
      case "price-desc":
        list = [...list].sort((a, b) => price(b) - price(a));
        break;
      case "rating":
        list = [...list].sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }
    return list;
  }, [collection, sort]);

  const shown = filtered.slice(0, visible);
  const activeCollection = COLLECTIONS.find((c) => c.id === collection);

  return (
    <>
      {/* Breadcrumb + catalog banner */}
      <section className="border-b border-foreground/5 bg-cream/50">
        <div className="page-width flex flex-col gap-4 py-12 md:py-16">
          <nav className="flex items-center gap-2 text-xs text-foreground/50" aria-label="Breadcrumb">
            <Link to="/" className="transition-colors hover:text-foreground">Home</Link>
            <Icon name="chevronRight" className="w-3 h-3" />
            <span className="text-foreground">Products</span>
          </nav>
          <h1 className="heading text-title-lg">Products</h1>
          <p className="max-w-xl text-base leading-7 text-foreground/60">
            {activeCollection?.subtitle ?? "Browse every audio essential in our store — sorted by what matters to you."}
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="page-width grid gap-10 lg:grid-cols-12">
          {/* Sidebar */}
          <aside className="lg:col-span-3" aria-label="Filters">
            <p className="heading mb-5 text-lg">Collections</p>
            <ul className="space-y-1">
              {COLLECTIONS.map((c) => (
                <li key={c.id}>
                  <button
                    onClick={() => { setCollection(c.id); setVisible(8); }}
                    className={`flex w-full items-center justify-between rounded-md px-3 py-2.5 text-left text-sm transition-colors ${
                      collection === c.id ? "bg-foreground text-background" : "text-foreground/70 hover:bg-cream"
                    }`}
                  >
                    {c.title}
                    <span className={`text-xs ${collection === c.id ? "text-background/70" : "text-foreground/40"}`}>
                      {PRODUCTS.filter((p) => c.id === "all" || p.category === c.id).length}
                    </span>
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-xl bg-highlight p-5">
              <p className="heading text-xl">Clearance</p>
              <p className="mt-1 text-sm text-foreground/70">Up to 20% off select audio gear — while stocks last.</p>
              <button className="btn--primary btn--small mt-4" onClick={() => setCollection("all")}>
                Shop the sale
              </button>
            </div>
          </aside>

          {/* Grid */}
          <div className="lg:col-span-9">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="text-sm text-foreground/60">
                Showing <span className="font-medium text-foreground">{shown.length}</span> of {filtered.length} products
              </p>
              <label className="flex items-center gap-2 text-sm text-foreground/60">
                Sort by
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="rounded-full border border-foreground/15 bg-transparent px-4 py-2 text-sm outline-none focus:border-foreground"
                >
                  {SORTS.map((s) => (
                    <option key={s.id} value={s.id}>{s.label}</option>
                  ))}
                </select>
              </label>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-3">
              {shown.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>

            {visible < filtered.length && (
              <div className="mt-12 flex justify-center">
                <button className="btn--secondary" onClick={() => setVisible((v) => v + 8)}>
                  View more products
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Promotion banner (from source: images-with-text-overlay) */}
      <section className="relative bg-foreground text-background">
        <div className="relative aspect-[16/7] overflow-hidden">
          <PlaceholderImage seed={24} className="w-full h-full opacity-40" />
          <div className="absolute inset-0 bg-foreground/60" />
          <div className="absolute inset-0 flex items-center">
            <div className="page-width flex flex-col items-center gap-4 text-center">
              <SectionHeading title={<>Level up your <span className="bg-highlight px-2 text-foreground">playlist</span>.</>} subtitle="New drops every week — from limited colorways to the latest in wireless tech." />
              <div className="flex flex-wrap justify-center gap-3">
                <Link to="/catalog" className="btn--white">Explore new arrivals</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recently viewed */}
      <section className="py-16 md:py-24">
        <div className="page-width">
          <SectionHeading eyebrow="Keep browsing" title="Recently viewed" />
          <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-4">
            {PRODUCTS.slice(6, 10).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}