import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { CartDrawer, SearchDrawer, AccountDrawer } from "./Drawers";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Header />
      <main id="MainContent" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
      <SearchDrawer />
      <AccountDrawer />
    </div>
  );
}