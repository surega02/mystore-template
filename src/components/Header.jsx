import {NavLink} from "react-router-dom";
import Icon from "./Icon";
import {NAV_LINKS, SOCIALS} from "../data/store";
import {useShop} from "../context/ShopContext";

const ANNOUNCEMENTS = [
  "In stock! Ships within 1-2 business days",
  "90-day risk-free trial",
  "Free shipping on orders over Rp 2.000.000",
];

// function AnnouncementBar() {
//   return (
//     <div className="bg-foreground text-background">
//       <div className="page-width flex h-9 items-center justify-between text-xs">
//         <div className="hidden lg:flex items-center gap-4">
//           {SOCIALS.map((s) => (
//             <a key={s.id} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
//               <Icon name={s.id} className="w-4 h-4 opacity-80" />
//             </a>
//           ))}
//         </div>
//         <div className="w-full lg:w-auto text-center tracking-wide">
//           <span>{ANNOUNCEMENTS[0]}</span>
//         </div>
//         <div className="hidden lg:flex items-center gap-4">
//           <span className="inline-flex items-center gap-1.5">
//             <Icon name="checkCircle" className="w-4 h-4 opacity-80" /> Free exchange within 30 days
//           </span>
//           <span className="inline-flex items-center gap-1.5">
//             <Icon name="truck" className="w-4 h-4 opacity-80" /> Fast, free shipping
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }

export default function Header() {
  const {cartCount, setCartOpen, setSearchOpen, setMenuOpen, menuOpen, setAccountOpen} =
    useShop();

  return (
    <>
      {/* <AnnouncementBar /> */}
      <header className="sticky top-0 z-40 bg-background/90 backdrop-blur border-b border-foreground/5">
        <div className="page-width flex h-16 md:h-20 items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              className="lg:hidden -ml-2 p-2"
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
            >
              <Icon name="menu" className="w-6 h-6" />
            </button>
            <NavLink
              to="/"
              className="heading text-xl md:text-2xl tracking-heading"
            >
              My Store
            </NavLink>
          </div>

          <nav
            className="hidden lg:flex items-center gap-8"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({isActive}) =>
                  `relative text-sm font-medium transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:bg-foreground ${
                    isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
                  } after:transition-all`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <button
              className="p-2 cursor-pointer"
              aria-label="Search"
              onClick={() => setSearchOpen(true)}
            >
              <Icon name="search" className="w-5 h-5" />
            </button>
            <button
              className="hidden sm:inline-flex p-2 cursor-pointer"
              aria-label="Account"
              onClick={() => setAccountOpen(true)}
            >
              <Icon name="user" className="w-5 h-5" />
            </button>
            <button
              className="relative p-2 cursor-pointer"
              aria-label="Open cart"
              onClick={() => setCartOpen(true)}
            >
              <Icon name="cart" className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-sale px-1 text-2xs font-medium text-white">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden border-t border-foreground/5">
            <nav
              className="page-width flex flex-col py-4"
              aria-label="Mobile navigation"
            >
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  onClick={() => setMenuOpen(false)}
                  className={({isActive}) =>
                    `py-3 text-base font-medium ${isActive ? "" : "text-foreground/70"}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
