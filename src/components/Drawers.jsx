import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon";
import { useShop } from "../context/ShopContext";
import { PRODUCTS, formatPrice } from "../data/store";
export function Drawer({ open, onClose, title, children, footer }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-background shadow-2xl">
        <div className="flex items-center justify-between border-b border-foreground/10 px-6 py-4">
          <h2 className="heading text-lg">{title}</h2>
          <button className="p-2" aria-label="Close" onClick={onClose}>
            <Icon name="close" className="w-5 h-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-6 py-6">{children}</div>
        {footer && <div className="border-t border-foreground/10 px-6 py-4">{footer}</div>}
      </div>
    </div>
  );
}

export function CartDrawer() {
  const { cart, cartOpen, setCartOpen, removeFromCart, updateQty, subtotal, cartCount } = useShop();

  return (
    <Drawer open={cartOpen} onClose={() => setCartOpen(false)} title={`Your cart (${cartCount})`}>
      {cart.length === 0 ? (
        <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
          <Icon name="cart" className="w-12 h-12 text-foreground/30" />
          <p className="text-lg font-medium">Your cart is empty</p>
          <p className="text-sm text-foreground/60">Add some of our audio essentials to get started.</p>
          <button className="btn--primary mt-2" onClick={() => setCartOpen(false)}>
            Continue shopping
          </button>
        </div>
      ) : (
        <ul className="space-y-5">
          {cart.map((item) => (
            <li key={item.id} className="flex gap-4">
              <div className="h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-cream">
                <Icon name="box" className="w-full h-full p-5 text-foreground/30" />
              </div>
              <div className="flex flex-1 flex-col justify-between py-1">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-sm font-medium leading-snug">{item.title}</p>
                    <p className="mt-0.5 text-xs text-foreground/50">{item.vendor}</p>
                  </div>
                  <button
                    className="p-1 text-foreground/40 hover:text-foreground"
                    aria-label={`Remove ${item.title}`}
                    onClick={() => removeFromCart(item.id)}
                  >
                    <Icon name="trash" className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center rounded-full border border-foreground/15">
                    <button
                      className="px-2.5 py-1 text-foreground/60"
                      aria-label="Decrease quantity"
                      onClick={() => updateQty(item.id, item.qty - 1)}
                    >
                      <Icon name="minus" className="w-3.5 h-3.5" />
                    </button>
                    <span className="min-w-6 text-center text-sm">{item.qty}</span>
                    <button
                      className="px-2.5 py-1 text-foreground/60"
                      aria-label="Increase quantity"
                      onClick={() => updateQty(item.id, item.qty + 1)}
                    >
                      <Icon name="plus" className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <p className="text-sm font-medium">
                    {new Intl.NumberFormat("en-US").format((item.salePrice || item.price) * item.qty)}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && (
        <footer className="space-y-3">
          <div className="flex items-center justify-between text-base">
            <span>Subtotal</span>
            <span className="font-semibold">
              Rp {new Intl.NumberFormat("en-US").format(subtotal)}
            </span>
          </div>
          <p className="text-xs text-foreground/60">
            Shipping and taxes calculated at checkout. Free shipping on orders over Rp 2.000.000.
          </p>
          <button className="btn--primary w-full">Checkout</button>
          <button className="btn--secondary w-full" onClick={() => setCartOpen(false)}>
            Continue shopping
          </button>
        </footer>
      )}
    </Drawer>
  );
}

export function SearchDrawer() {
  const { searchOpen, setSearchOpen } = useShop();
  const [query, setQuery] = useState("");
  const recent = ["Headphones", "Earphones", "Speaker", "Aurora 900"];

  const results = query.trim()
    ? PRODUCTS.filter(
        (p) =>
          p.title.toLowerCase().includes(query.trim().toLowerCase()) ||
          p.vendor.toLowerCase().includes(query.trim().toLowerCase()) ||
          p.category.toLowerCase().includes(query.trim().toLowerCase()),
      ).slice(0, 6)
    : [];

  const closeSearch = () => {
    setSearchOpen(false);
    setQuery("");
  };

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-300 ease-in-out ${
        searchOpen ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      role="dialog"
      aria-modal="true"
      aria-hidden={!searchOpen}
    >
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={closeSearch}
        aria-hidden="true"
      />
      <div className="absolute left-1/2 top-24 -translate-x-1/2 w-[90%] max-w-[36rem] rounded-2xl bg-background p-6 shadow-2xl sm:w-[80%] lg:w-[36rem]">
        <div className="flex items-center justify-between">
          <h2 className="heading text-lg">Search</h2>
          <button className="p-2 cursor-pointer" aria-label="Close" onClick={closeSearch}>
            <Icon name="close" className="w-5 h-5" />
          </button>
        </div>
        <form className="relative mt-4" onSubmit={(e) => e.preventDefault()}>
          <Icon name="search" className="absolute left-4 top-1/2 w-5 h-5 -translate-y-1/2 text-foreground/40" />
          <input
            type="search"
            placeholder="Search our store"
            autoFocus={searchOpen}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-full border border-foreground/15 bg-transparent py-3 pl-12 pr-4 text-sm outline-none transition-colors focus:border-foreground"
          />
        </form>

        {query.trim() ? (
          <div className="mt-4 max-h-72 overflow-y-auto">
            {results.length === 0 ? (
              <p className="py-6 text-center text-sm text-foreground/50">
                No products found for "{query.trim()}".
              </p>
            ) : (
              <ul className="divide-y divide-foreground/5">
                {results.map((p) => (
                  <li key={p.id}>
                    <Link
                      to="/catalog"
                      onClick={closeSearch}
                      className="flex items-center gap-4 py-3"
                    >
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-cream">
                        <Icon name="box" className="w-6 h-6 text-foreground/30" />
                      </span>
                      <span className="flex flex-1 flex-col gap-0.5">
                        <span className="text-sm font-medium">{p.title}</span>
                        <span className="text-2xs uppercase tracking-wider text-foreground/50">
                          {p.vendor}
                        </span>
                      </span>
                      <span className="text-sm font-medium">
                        {formatPrice(p.salePrice || p.price)}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ) : (
          <div className="mt-8">
            <p className="text-xs uppercase tracking-[0.2em] text-foreground/50">Popular searches</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {recent.map((term) => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  className="cursor-pointer rounded-full bg-cream px-4 py-1.5 text-sm transition-colors hover:bg-foreground hover:text-background"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function AccountDrawer() {
  const { accountOpen, setAccountOpen } = useShop();
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);

  const closeAccount = () => setAccountOpen(false);

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-300 ease-in-out ${
        accountOpen ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      role="dialog"
      aria-modal="true"
      aria-hidden={!accountOpen}
    >
      <div
        className="absolute inset-0"
        onClick={closeAccount}
        aria-hidden="true"
      />
      <div className="absolute right-4 top-16 w-72 rounded-2xl bg-background shadow-2xl sm:right-8 md:right-12">
        <header className="flex items-center justify-between px-5 py-3.5">
          <h2 className="heading text-base">Sign in or create account</h2>
          <button className="p-1 cursor-pointer" aria-label="Close menu" onClick={closeAccount}>
            <Icon name="close" className="w-4 h-4" />
          </button>
        </header>

        <div className="px-5 pb-5">
          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-purple-700 px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Sign in with <span className="font-bold">Shop</span>
          </button>

          <div className="my-4 flex items-center gap-3 text-2xs uppercase tracking-wider text-foreground/40">
            <span className="h-px flex-1 bg-foreground/10" />
            <span>or</span>
            <span className="h-px flex-1 bg-foreground/10" />
          </div>

          <form
            className="flex flex-col gap-3.5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full rounded-full border border-foreground/15 bg-transparent py-2.5 pl-4 pr-11 text-sm outline-none transition-colors focus:border-foreground"
              />
              <button
                type="submit"
                aria-label="Sign in"
                className="absolute right-1.5 top-1/2 flex h-7 w-7 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-foreground text-background transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-30"
                disabled={!email.trim()}
              >
                <Icon name="arrowRight" className="w-3.5 h-3.5" />
              </button>
            </div>

            <label className="flex cursor-pointer items-start gap-2.5 text-xs text-foreground/60">
              <span
                className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors ${
                  consent ? "border-foreground bg-foreground text-background" : "border-foreground/30"
                }`}
                onClick={() => setConsent((c) => !c)}
              >
                {consent && <Icon name="check" className="w-3 h-3" />}
              </span>
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="sr-only"
              />
              <span>Email me with news and offers</span>
            </label>
          </form>

          <div className="mt-4 grid gap-1.5">
            <button className="flex cursor-pointer items-center justify-center gap-2 rounded-full border border-foreground/20 px-4 py-2 text-xs font-medium transition-colors hover:bg-foreground hover:text-background">
              <Icon name="box" className="w-3.5 h-3.5" />
              Orders
            </button>
            <button className="flex cursor-pointer items-center justify-center gap-2 rounded-full border border-foreground/20 px-4 py-2 text-xs font-medium transition-colors hover:bg-foreground hover:text-background">
              <Icon name="user" className="w-3.5 h-3.5" />
              Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}