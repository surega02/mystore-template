import PlaceholderImage from "../components/PlaceholderImage";
import SectionHeading from "../components/SectionHeading";
import { PRODUCTS, formatPrice } from "../data/store";

const POSTS = [
  { caption: "Midnight listening sessions", products: [PRODUCTS[0], PRODUCTS[5]] },
  { caption: "Studio vibes at home", products: [PRODUCTS[7], PRODUCTS[2]] },
  { caption: "On the go, always", products: [PRODUCTS[4], PRODUCTS[6]] },
];

export default function ShopTheFeed() {
  return (
    <section className="py-16 md:py-24">
      <div className="page-width">
        <SectionHeading eyebrow="@mystore" title="Shop The Feed" subtitle="Tagged by our community — shop what they're loving right now." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((post, i) => (
            <figure key={post.caption} className="overflow-hidden rounded-xl bg-cream">
              <div className="relative aspect-square">
                <PlaceholderImage seed={i + 13} className="w-full h-full" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 text-background">
                  <p className="text-sm font-medium">{post.caption}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {post.products.map((p) => (
                      <span key={p.id} className="rounded-full bg-background/20 px-3 py-1 text-2xs backdrop-blur">
                        {p.title} &middot; {formatPrice(p.salePrice || p.price)}
                      </span>
                    ))}
                  </div>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}