import { useState } from "react";
import Icon from "../components/Icon";
import PlaceholderImage from "../components/PlaceholderImage";
import Rating from "../components/Rating";
import SectionHeading from "../components/SectionHeading";
import { PRODUCTS, formatPrice, useShopSafe } from "../data/store";

export default function FeaturedProduct() {
  const product = PRODUCTS[0];
  const [size, setSize] = useState("M");
  const [qty, setQty] = useState(1);
  const shop = useShopSafe();
  const hasSale = !!product.salePrice;

  const add = () => {
    if (!shop) return;
    shop.addToCart({ ...product, qty });
    shop.setCartOpen(true);
  };

  return (
    <section className="bg-cream/60 py-16 md:py-24">
      <div className="page-width grid items-center gap-12 lg:grid-cols-2">
        <div className="relative">
          <div className="aspect-square overflow-hidden rounded-2xl">
            <PlaceholderImage seed={2} className="w-full h-full" />
          </div>
          <span className="absolute left-6 top-6 rounded-full bg-sale px-4 py-1.5 text-2xs font-medium uppercase tracking-wider text-white">
            Featured
          </span>
        </div>

        <div className="flex flex-col gap-5">
          <SectionHeading align="left" eyebrow="Featured product" title="Why settle for ordinary sound?" />
          <div className="flex items-center gap-3">
            <Rating value={product.rating} />
            <span className="text-sm text-foreground/50">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>

          <div>
            <h3 className="heading text-3xl">{product.title}</h3>
            <p className="mt-2 flex items-baseline gap-3">
              <span className="text-xl font-semibold">
                {formatPrice(hasSale ? product.salePrice : product.price)}
              </span>
              {hasSale && <span className="text-base text-foreground/40 line-through">{formatPrice(product.price)}</span>}
            </p>
            <p className="mt-4 max-w-lg text-base leading-7 text-foreground/60">
              Immerse yourself in studio-grade detail. Our flagship headphones pair noise-cancelling
              drivers with a featherlight fit for all-day comfort.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-2xs uppercase tracking-[0.2em] text-foreground/50">Size</p>
            <div className="flex gap-2">
              {["S", "M", "L", "XL"].map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`h-10 w-10 rounded-full border text-sm transition-colors ${
                    size === s ? "border-foreground bg-foreground text-background" : "border-foreground/20 hover:border-foreground"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-2 flex flex-wrap items-center gap-4">
            <div className="flex items-center rounded-full border border-foreground/15">
              <button className="px-3.5 py-2.5 text-foreground/60" aria-label="Decrease quantity" onClick={() => setQty((q) => Math.max(1, q - 1))}>
                <Icon name="minus" className="w-4 h-4" />
              </button>
              <span className="min-w-8 text-center text-sm font-medium">{qty}</span>
              <button className="px-3.5 py-2.5 text-foreground/60" aria-label="Increase quantity" onClick={() => setQty((q) => q + 1)}>
                <Icon name="plus" className="w-4 h-4" />
              </button>
            </div>
            <button className="btn--primary" onClick={add}>
              <Icon name="cart" className="w-4 h-4" /> Add to cart
            </button>
          </div>
          <p className="text-xs text-foreground/50">
            Selected size: <span className="font-medium text-foreground">{size}</span> &middot; In stock, ships in 1&ndash;2 days
          </p>
        </div>
      </div>
    </section>
  );
}