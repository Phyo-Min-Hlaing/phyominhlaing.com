"use client";

import Link from "next/link";
import { NAV_ITEMS, SITE } from "@/data/site";
import { Reveal } from "@/components/portfolio/Reveal";

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <Reveal className="footer__cta">
          <h2>
            <span className="mask">
              <span className="ln">You&apos;ve reached the end.</span>
            </span>
            <span className="mask mask--d1">
              <span className="ln">Maybe it&apos;s the beginning of something new.</span>
            </span>
          </h2>
          <div>
            <Link href="/contact" className="btn btn--primary" data-magnetic>
              <span>Let&apos;s talk</span>
            </Link>
          </div>
        </Reveal>
        <div className="footer__grid">
          <div>
            <h5>Phyo Min Hlaing</h5>
            <p className="body-copy" style={{ fontSize: 14.5, maxWidth: "34ch" }}>
              Senior Product UI/UX Designer working across mobile apps, web platforms and the design
              systems that keep them consistent.
            </p>
          </div>
          <div>
            <h5>Pages</h5>
            <ul>
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5>Elsewhere</h5>
            <ul>
              <li>
                <a href={SITE.socials.linkedin} target="_blank" rel="noopener">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={SITE.socials.behance} target="_blank" rel="noopener">
                  Behance
                </a>
              </li>
              <li>
                <a href={SITE.socials.pinterest} target="_blank" rel="noopener">
                  Pinterest
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5>Direct</h5>
            <ul>
              <li>
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </li>
              <li>
                <a href={SITE.socials.resume} target="_blank" rel="noopener">
                  Résumé (PDF)
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__word" aria-hidden="true">
          PMH
        </div>
        <div className="footer__bottom">
          <span>© 2026 Phyo Min Hlaing. All rights reserved.</span>
          <span>Designed with curiosity. Built with attention to detail.</span>
        </div>
      </div>
    </footer>
  );
}
