"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS, SITE } from "@/data/site";
import { cn } from "@/lib/utils";

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pathname = usePathname();

  return (
    <div
      className="mobile-menu"
      id="mobileMenu"
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      aria-hidden={!open}
    >
      <div className="mobile-menu__bg" aria-hidden="true">
        <svg viewBox="0 0 400 800" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
          <defs>
            <linearGradient id="mg1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="var(--c1)" />
              <stop offset="1" stopColor="var(--c2)" />
            </linearGradient>
            <linearGradient id="mg2" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="var(--c3)" />
              <stop offset="1" stopColor="var(--c1)" />
            </linearGradient>
          </defs>
          <circle cx="330" cy="120" r="130" fill="url(#mg1)" opacity=".22" />
          <circle cx="60" cy="330" r="90" fill="url(#mg2)" opacity=".18" />
          <path
            d="M0,520 C120,420 260,640 400,500"
            stroke="var(--c3)"
            strokeWidth="1"
            fill="none"
            opacity=".4"
            className="dash-march"
          />
          <path d="M0,560 C120,460 260,680 400,540" stroke="var(--c2)" strokeWidth="1" fill="none" opacity=".3" />
        </svg>
      </div>
      <ul className="mobile-menu__list">
        {NAV_ITEMS.map((item, i) => (
          <li key={item.href} className="mobile-menu__item">
            <Link
              href={item.href}
              className={cn("mobile-menu__link")}
              aria-current={pathname === item.href ? "page" : undefined}
              onClick={onClose}
              tabIndex={open ? 0 : -1}
            >
              <em>{String(i + 1).padStart(2, "0")}</em>
              {item.label.replace("Case Studies", "Cases")}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mobile-menu__foot">
        <span className="mono">Available for selected opportunities</span>
        <a className="btn btn--ghost btn--sm" href={`mailto:${SITE.email}`}>
          <span>{SITE.email}</span>
        </a>
      </div>
    </div>
  );
}
