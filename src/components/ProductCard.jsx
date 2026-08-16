import { Link } from "react-router-dom";
import { formatPrice } from "../data/store";
import PlaceholderImage from "./PlaceholderImage";
import Rating from "./Rating";

export default function ProductCard({ product, className = "" }) {
  const hasSale = product.salePrice;
  return (
    <div className={`group flex flex-col ${className}`}>
      <div className="relative overflow-hidden rounded-lg bg-cream">
        <Link to="/catalog" className="block">
          <div className="aspect-square w-full transition-transform duration-500 group-hover:scale-105">
            <PlaceholderImage seed={product.id.length} className="w-full h-full" />
          </div>
        </Link>
        {product.badge && (
          <span className="absolute top-3 left-3 rounded-full bg-foreground text-background text-2xs px-3 py-1 font-medium">
            {product.badge}
          </span>
        )}
        {hasSale && (
          <span className="absolute top-3 right-3 rounded-full bg-sale text-white text-2xs px-3 py-1 font-medium">
            -{Math.round((1 - product.salePrice / product.price) * 100)}%
          </span>
        )}
        <button
          type="button"
          className="absolute bottom-3 left-3 right-3 translate-y-2 rounded-full bg-background/95 backdrop-blur px-4 py-2.5 text-sm font-medium opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        >
          Quick view
        </button>
      </div>
      <div className="mt-4 flex flex-col gap-1.5">
        <p className="text-2xs uppercase tracking-wider text-foreground/50">{product.vendor}</p>
        <h3 className="text-base font-medium leading-snug">
          <Link to="/catalog" className="hover:underline underline-offset-4">
            {product.title}
          </Link>
        </h3>
        <div className="flex items-center gap-2">
          <Rating value={product.rating} />
          <span className="text-2xs text-foreground/50">({product.reviews})</span>
        </div>
        <p className="flex items-baseline gap-2">
          <span className="text-base font-medium">{formatPrice(hasSale ? product.salePrice : product.price)}</span>
          {hasSale && <span className="text-sm text-foreground/40 line-through">{formatPrice(product.price)}</span>}
        </p>
      </div>
    </div>
  );
}