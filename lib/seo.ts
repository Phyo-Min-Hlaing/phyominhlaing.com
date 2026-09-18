import type { Metadata } from "next";
import { SITE } from "@/data/site";

export const SITE_URL = SITE.url;

export const BASE_METADATA: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Phyo Min Hlaing — Senior Product UI/UX Designer",
    template: "%s — Phyo Min Hlaing",
  },
  description: SITE.description,
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  keywords: [
    "Product designer",
    "UI/UX designer",
    "UX strategy",
    "Interaction design",
    "Design systems",
    "Mobile app design",
    "Myanmar designer",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE.name,
    title: "Phyo Min Hlaing — Senior Product UI/UX Designer",
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Phyo Min Hlaing — Senior Product UI/UX Designer",
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE.name,
    jobTitle: SITE.role,
    url: SITE_URL,
    email: `mailto:${SITE.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Yangon",
      addressCountry: "MM",
    },
    sameAs: [SITE.socials.linkedin, SITE.socials.behance, SITE.socials.pinterest],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE_URL,
    description: SITE.description,
  };
}
