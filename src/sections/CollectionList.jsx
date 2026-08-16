import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import PlaceholderImage from "../components/PlaceholderImage";
import SectionHeading from "../components/SectionHeading";
import { COLLECTIONS } from "../data/store";

export default function CollectionList() {
  const items = COLLECTIONS.filter((c) => c.featured).length
    ? COLLECTIONS.filter((c) => c.featured)
    : COLLECTIONS.slice(1, 5);
  const grid = items.slice(0, 4);

  return (
    <section className="py-16 md:py-24">
      <div className="page-width">
        <SectionHeading eyebrow="Shop by category" title="Collections" subtitle="Handpicked audio essentials across every category." />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {grid.map((collection, i) => (
            <Link
              key={collection.id}
              to="/catalog"
              className="group relative aspect-[3/4] overflow-hidden rounded-lg bg-cream"
            >
              <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
                <PlaceholderImage seed={i + 5} className="w-full h-full" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-background">
                <div>
                  <h3 className="heading text-2xl">{collection.title}</h3>
                  <p className="mt-1 max-w-[16ch] text-sm text-background/80">{collection.subtitle}</p>
                </div>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-background/15 backdrop-blur transition-transform duration-300 group-hover:translate-x-1">
                  <Icon name="arrowRight" className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}