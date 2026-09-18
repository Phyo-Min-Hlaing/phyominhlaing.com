"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_ITEMS } from "@/data/site";
import { cn } from "@/lib/utils";

export function Logo() {
  return (
    <Link href="/" aria-label="Phyo Min Hlaing — home" className="logo">
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="9" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M4 16h5M23 16h5M16 4v5M16 23v5"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          opacity=".55"
        />
        <circle className="logo__dot" cx="23.5" cy="8.5" r="3.4" />
      </svg>
      <span>PMH</span>
    </Link>
  );
}

export function Header({ onMenuToggle, menuOpen }: { onMenuToggle: () => void; menuOpen: boolean }) {
  const pathname = usePathname();
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className={cn("header", stuck && "is-stuck")} id="header">
      <div className="header__inner">
        <Logo />
        <nav className="nav" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav__link"
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header__actions">
          <Link href="/contact" className="btn btn--primary btn--sm" data-magnetic>
            <span>Let&apos;s talk</span>
          </Link>
          <button
            className="burger"
            onClick={onMenuToggle}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobileMenu"
          >
            <i />
            <i />
          </button>
        </div>
      </div>
    </header>
  );
}
