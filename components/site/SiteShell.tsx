"use client";

import { useEffect, useState } from "react";
import { Cursor, ScrollChrome } from "@/components/portfolio/Chrome";
import { Footer } from "@/components/portfolio/Footer";
import { Header } from "@/components/portfolio/Header";
import { Loader } from "@/components/portfolio/Loader";
import { MobileMenu } from "@/components/portfolio/MobileMenu";
import { cn } from "@/lib/utils";

/** Global site chrome: header, menu, footer, loader, cursor. */
export function SiteShell({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("is-locked", menuOpen);
    return () => document.body.classList.remove("is-locked");
  }, [menuOpen]);

  return (
    <div className={cn(menuOpen && "menu-open")}>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Loader />
      <Cursor />
      <ScrollChrome />
      <Header onMenuToggle={() => setMenuOpen((v) => !v)} menuOpen={menuOpen} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <div id="app">
        <main id="main">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
