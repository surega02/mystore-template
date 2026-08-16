import Icon from "../components/Icon";
import PlaceholderImage from "../components/PlaceholderImage";
import SectionHeading from "../components/SectionHeading";
import { PRODUCTS, formatPrice, useShopSafe } from "../data/store";

export default function BundleSection() {
  const shop = useShopSafe();
  const bundle = [PRODUCTS[2], PRODUCTS[1], PRODUCTS[8]];
  const total = bundle.reduce((s, p) => s + (p.salePrice || p.price), 0);
  const bundlePrice = Math.round(total * 0.85);

  const addBundle = () => {
    if (!shop) return;
    bundle.forEach((p) => shop.addToCart(p, 1));
    shop.setCartOpen(true);
  };

  return (
    <section className="py-16 md:py-24">
      <div className="page-width">
        <SectionHeading eyebrow="Bundle & save" title="Build your perfect setup" subtitle="Save 15% when you buy the essentials together." />
        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          {bundle.map((p, i) => (
            <div key={p.id} className="relative overflow-hidden rounded-xl bg-cream lg:col-span-3">
              <div className="aspect-square">
                <PlaceholderImage seed={i + 10} className="w-full h-full" />
              </div>
              <div className="flex flex-col gap-1 p-5">
                <p className="text-2xs uppercase tracking-wider text-foreground/50">{p.vendor}</p>
                <h3 className="text-base font-medium leading-snug">{p.title}</h3>
                <p className="text-sm font-medium">{formatPrice(p.salePrice || p.price)}</p>
              </div>
              <span className="absolute right-4 top-4 rounded-full bg-background/90 px-3 py-1 text-2xs font-medium text-foreground">
                {i === 0 ? "Save more" : "Bundle item"}
              </span>
            </div>
          ))}
          <div className="flex flex-col justify-between gap-6 rounded-xl bg-foreground p-6 text-background lg:col-span-3">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-background/50">Bundle total</p>
              <p className="mt-2 text-3xl font-semibold">{formatPrice(bundlePrice)}</p>
              <p className="mt-1 text-sm text-background/60 line-through">{formatPrice(total)}</p>
            </div>
            <button className="btn--white w-full" onClick={addBundle}>
              <Icon name="cart" className="w-4 h-4" /> Add bundle to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}