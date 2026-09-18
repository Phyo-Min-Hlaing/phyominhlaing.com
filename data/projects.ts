export type ProjectSpan = 'wide' | 'tall' | 'full' | 'half' | 'closer';

export interface Project {
  id: string;
  no: string;
  name: string;
  category: string;
  role: string;
  platform: string;
  year: string;
  tags: readonly string[];
  art: string;
  span: ProjectSpan;
  featured: boolean;
  team: string;
  summary: string;
  problem: string;
  business: string;
}


export const PROJECTS = [
  {
    "id": "oway-ride",
    "no": "01",
    "name": "Oway Ride",
    "category": "Ride-hailing app",
    "role": "Product UI/UX Designer",
    "platform": "iOS · Android",
    "year": "2018 — 2021",
    "tags": [
      "product",
      "mobile",
      "ux",
      "ui"
    ],
    "art": "app",
    "span": "wide",
    "featured": true,
    "team": "Product, engineering, operations",
    "summary": "Native ride-hailing app for a Myanmar travel and mobility operator — booking, driver matching, live trip states and fare clarity.",
    "problem": "Ordering a ride involves a person standing on a street with poor signal, limited patience and real doubt about price. The interface has to reduce that doubt in seconds, then stay calm while the trip state changes underneath it.",
    "business": "Oway Ride sits alongside the wider Oway travel portfolio, so the app had to feel part of one product family while behaving like a category-specific tool."
  },
  {
    "id": "oway-web",
    "no": "02",
    "name": "Oway Travel platform",
    "category": "Multi-service travel web",
    "role": "Senior Product UI/UX Designer",
    "platform": "Responsive web",
    "year": "2018 — present",
    "tags": [
      "product",
      "web",
      "ux",
      "ui"
    ],
    "art": "web",
    "span": "tall",
    "featured": true,
    "team": "Product, engineering, analytics, marketing",
    "summary": "One platform covering flights, hotels, tours, express bus, visa and car rental — desktop and mobile web, with search patterns that stay recognisable across every service.",
    "problem": "Six booking products with genuinely different data models were fighting for the same homepage. Each search felt like a different website, and users paid for that inconsistency in re-learning cost.",
    "business": "Consolidating services under one interface language reduced design and build duplication and made cross-selling between travel products possible."
  },
  {
    "id": "oway-express-bus",
    "no": "03",
    "name": "Express Bus booking",
    "category": "Booking flow",
    "role": "Product UI/UX Designer",
    "platform": "Web · Mobile web",
    "year": "2018 — 2019",
    "tags": [
      "product",
      "web",
      "ux"
    ],
    "art": "flow",
    "span": "full",
    "featured": true,
    "team": "Product, engineering, bus operations",
    "summary": "Seat-level intercity bus booking: route search, operator comparison, seat maps, boarding points and payment — designed for low-bandwidth mobile web.",
    "problem": "Bus travel has constraints that flights do not: physical seat selection, multiple boarding points and operators with wildly different inventory quality.",
    "business": "Express bus is a high-frequency, low-value transaction, so every step removed from the flow has a direct effect on completion."
  },
  {
    "id": "flymya-carrental",
    "no": "04",
    "name": "Flymya Car Rental",
    "category": "Rental booking",
    "role": "Product UI/UX Designer",
    "platform": "Responsive web",
    "year": "2019 — 2020",
    "tags": [
      "product",
      "web",
      "ui"
    ],
    "art": "web2",
    "span": "half",
    "featured": true,
    "team": "Product, engineering",
    "summary": "Car rental booking within a travel marketplace — vehicle classes, durations, driver options and a price summary that never surprises anyone.",
    "problem": "Rental pricing is conditional: duration, vehicle class, driver, region and extras all move the number. Hiding that logic creates distrust at checkout.",
    "business": "Car rental had to slot into an existing marketplace shell without forking the design language."
  },
  {
    "id": "reward-platform",
    "no": "05",
    "name": "Rewards platform",
    "category": "Loyalty · user + admin",
    "role": "Senior Product UI/UX Designer",
    "platform": "Web app",
    "year": "2021 — 2022",
    "tags": [
      "product",
      "web",
      "ui",
      "ux"
    ],
    "art": "admin",
    "span": "half",
    "featured": true,
    "team": "Product, engineering, marketing ops",
    "summary": "Two interfaces for one system: a member-facing rewards experience and the internal admin console that configures, issues and audits it.",
    "problem": "The people running campaigns and the people earning points need opposite things — density and control versus clarity and delight — from the same data.",
    "business": "Loyalty only works if operations can launch campaigns without engineering help, so the admin side needed to be genuinely usable, not merely functional."
  },
  {
    "id": "design-system",
    "no": "06",
    "name": "Product design system",
    "category": "Design system",
    "role": "Senior Product UI/UX Designer — owner",
    "platform": "Cross-product",
    "year": "2021 — present",
    "tags": [
      "product",
      "ui",
      "visual"
    ],
    "art": "system",
    "span": "closer",
    "featured": true,
    "team": "Design team, front-end engineering",
    "summary": "The shared component library, tokens and documentation behind the product family — maintained against brand requirements and used by a team of designers and engineers.",
    "problem": "Multiple products, multiple designers and a growing engineering team were each solving buttons, forms and tables again. Consistency was a memory exercise instead of a system.",
    "business": "A maintained library shortens delivery, keeps branding coherent across services, and gives junior designers a safe place to start."
  },
  {
    "id": "aya-mobile",
    "no": "07",
    "name": "AYA Mobile",
    "category": "Mobile banking UI",
    "role": "UI Designer",
    "platform": "iOS · Android",
    "year": "—",
    "tags": [
      "mobile",
      "ui",
      "ux"
    ],
    "art": "app2",
    "span": "half",
    "featured": false,
    "team": "",
    "summary": "Mobile banking interface work — account overview, transfers and transaction history with a focus on legibility and trust cues.",
    "problem": "Financial interfaces have to communicate certainty. Numbers, states and confirmations carry more weight than anything decorative.",
    "business": "Placeholder for the commercial context of this engagement."
  },
  {
    "id": "kbz-revamp",
    "no": "08",
    "name": "KBZ revamp",
    "category": "Interface revamp",
    "role": "UI Designer",
    "platform": "Web · Mobile",
    "year": "—",
    "tags": [
      "ui",
      "web",
      "visual"
    ],
    "art": "screen",
    "span": "half",
    "featured": false,
    "team": "",
    "summary": "A visual and structural revamp of an existing product interface — hierarchy, spacing and component consistency brought up to date.",
    "problem": "Legacy interfaces accumulate inconsistency faster than features. The revamp focused on structure before styling.",
    "business": "Placeholder for the commercial context of this engagement."
  },
  {
    "id": "ooredoo-appathon",
    "no": "09",
    "name": "Appathon concept",
    "category": "Concept app",
    "role": "UI/UX Designer",
    "platform": "Mobile",
    "year": "—",
    "tags": [
      "mobile",
      "ux",
      "product"
    ],
    "art": "app",
    "span": "half",
    "featured": false,
    "team": "",
    "summary": "A concept mobile product designed under hackathon time pressure — scoped to one clear user need and one demonstrable flow.",
    "problem": "Time-boxed design forces honesty about scope: one job, one flow, one screen that has to land.",
    "business": "Concept work — not a shipped commercial product."
  },
  {
    "id": "oway-branding",
    "no": "10",
    "name": "Brand & visual system",
    "category": "Visual design",
    "role": "Visual Designer",
    "platform": "Brand · Product surfaces",
    "year": "2018 — 2022",
    "tags": [
      "visual",
      "ui"
    ],
    "art": "poster",
    "span": "half",
    "featured": false,
    "team": "",
    "summary": "Logo, icon and brand-surface work supporting the product family — the visual layer that product UI had to stay consistent with.",
    "problem": "Product design and brand design drift apart unless someone keeps translating between them.",
    "business": "Consistent brand surfaces across web, mobile and marketing output."
  },
  {
    "id": "tours-experiences",
    "no": "11",
    "name": "Tours & experiences",
    "category": "Content-led booking",
    "role": "Product UI/UX Designer",
    "platform": "Responsive web",
    "year": "—",
    "tags": [
      "web",
      "ui",
      "ux"
    ],
    "art": "gallery",
    "span": "half",
    "featured": false,
    "team": "",
    "summary": "A browse-first booking surface where photography leads and the booking mechanics stay quietly available.",
    "problem": "Experience products sell on imagery and description, not on filters — but they still need to convert.",
    "business": "Placeholder for the commercial context of this engagement."
  },
  {
    "id": "consumer-web",
    "no": "12",
    "name": "Consumer web",
    "category": "Marketing + product",
    "role": "Product UI/UX Designer",
    "platform": "Responsive web",
    "year": "—",
    "tags": [
      "web",
      "ui",
      "visual"
    ],
    "art": "web",
    "span": "half",
    "featured": false,
    "team": "",
    "summary": "Consumer-facing web pages sitting in front of the product — the hand-off between marketing narrative and functional booking.",
    "problem": "The seam between a marketing page and a product interface is where most trust is lost.",
    "business": "Placeholder for the commercial context of this engagement."
  }
] as const;
