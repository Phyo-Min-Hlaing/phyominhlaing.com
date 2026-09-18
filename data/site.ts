export const SITE = {
  name: "Phyo Min Hlaing",
  role: "Senior Product UI/UX Designer",
  tagline: "I design digital experiences that make complexity feel simple.",
  description:
    "Phyo Min Hlaing — Senior Product UI/UX Designer. Product design, UX strategy, interaction design and design systems for mobile and web products.",
  url: "https://phyominhlaing.com",
  email: "phyo1401@gmail.com",
  location: "Yangon, Myanmar · remote friendly",
  socials: {
    linkedin: "https://www.linkedin.com/in/phyominhlaing/",
    behance: "https://www.behance.net/phyominhlaing/",
    pinterest: "https://www.pinterest.com/phyo1401/portfolio/",
    resume: "https://phyominhlaing.netlify.app/cv/PhyoMinHlaing_Resume.pdf",
  },
} as const;

export interface NavItem {
  href: string;
  label: string;
}

export const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/cases", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/process", label: "Process" },
  { href: "/contact", label: "Contact" },
];

export const FILTERS = [
  { id: "all", label: "All" },
  { id: "product", label: "Product" },
  { id: "mobile", label: "Mobile" },
  { id: "web", label: "Web" },
  { id: "ux", label: "UX" },
  { id: "ui", label: "UI" },
  { id: "visual", label: "Visual" },
] as const;

export const MARQUEE_WORDS = [
  "Product design",
  "UX strategy",
  "Interaction",
  "Design systems",
  "Research",
  "Prototyping",
  "Visual design",
] as const;
