import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import PlaceholderImage from "../components/PlaceholderImage";
import SectionHeading from "../components/SectionHeading";
import { PRODUCTS, formatPrice } from "../data/store";

const LOOK = [PRODUCTS[0], PRODUCTS[5], PRODUCTS[8]];

export default function ShopTheLook() {
  return (
    <section className="bg-cream/60 py-16 md:py-24">
      <div className="page-width">
        <SectionHeading eyebrow="Curated set" title="Shop The Look" subtitle="Our stylists paired these pieces — take the whole look home." />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <Link to="/catalog" className="group relative overflow-hidden rounded-xl">
            <div className="aspect-[4/5]">
              <PlaceholderImage seed={16} className="h-full w-full transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-6 text-background">
              <p className="text-2xs uppercase tracking-[0.2em] text-background/70">The complete look</p>
              <p className="heading text-2xl mt-1">Every piece, one basket</p>
            </div>
          </Link>
          {LOOK.map((p, i) => (
            <Link
              key={p.id}
              to="/catalog"
              className="group flex flex-col overflow-hidden rounded-xl bg-background"
            >
              <div className="relative aspect-square overflow-hidden">
                <PlaceholderImage seed={i + 17} className="h-full w-full transition-transform duration-500 group-hover:scale-105" />
                {i === 0 && (
                  <span className="absolute left-4 top-4 rounded-full bg-foreground px-3 py-1 text-2xs font-medium text-background">Editor's pick</span>
                )}
              </div>
              <div className="flex justify-between gap-3 p-5">
                <div>
                  <h3 className="text-base font-medium leading-snug">{p.title}</h3>
                  <p className="mt-1 text-sm text-foreground/50">{p.vendor}</p>
                </div>
                <p className="text-sm font-medium">{formatPrice(p.salePrice || p.price)}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Link to="/catalog" className="btn--secondary">
            Shop the whole look <Icon name="arrowRight" className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}