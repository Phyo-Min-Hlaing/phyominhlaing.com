export interface Capability {
  title: string;
  description: string;
  tags: string[];
  fig: string;
}


export const CAPABILITIES = [
  {
    "title": "Product design",
    "description": "From ambiguous product requirements to clear flows, interaction models and production-ready interfaces.",
    "tags": [
      "Requirements",
      "Flows",
      "Feature design",
      "Trade-offs"
    ],
    "fig": "flow"
  },
  {
    "title": "UX strategy",
    "description": "Framing the real problem before the screens: what the product should do, for whom, and what it should refuse to do.",
    "tags": [
      "Problem framing",
      "Prioritisation",
      "Product context"
    ],
    "fig": "matrix"
  },
  {
    "title": "UI design",
    "description": "Interfaces with a point of view — type, colour, spacing and hierarchy doing the work of explaining the product.",
    "tags": [
      "Visual design",
      "Typography",
      "Layout",
      "Iconography"
    ],
    "fig": "screen"
  },
  {
    "title": "Interaction design",
    "description": "States, transitions and feedback. What the interface does while a person waits, fails, or succeeds.",
    "tags": [
      "States",
      "Motion",
      "Feedback",
      "Edge cases"
    ],
    "fig": "states"
  },
  {
    "title": "Design systems",
    "description": "Component libraries and tokens that stay honest — documented, versioned and built with engineering.",
    "tags": [
      "Tokens",
      "Components",
      "Documentation",
      "Governance"
    ],
    "fig": "system"
  },
  {
    "title": "Prototyping",
    "description": "Clickable and coded prototypes used to settle arguments early, before anyone commits sprint time.",
    "tags": [
      "Clickable flows",
      "Micro-interactions",
      "Handoff"
    ],
    "fig": "proto"
  },
  {
    "title": "Research",
    "description": "Interviews, surveys and usability studies, translated into wireframes and decisions rather than slide decks.",
    "tags": [
      "Interviews",
      "Usability testing",
      "Synthesis"
    ],
    "fig": "cluster"
  },
  {
    "title": "Mobile UX",
    "description": "Native iOS and Android patterns: thumb reach, offline states, permissions and the cost of every extra tap.",
    "tags": [
      "iOS",
      "Android",
      "Touch targets",
      "Offline"
    ],
    "fig": "phone"
  },
  {
    "title": "Web UX",
    "description": "Responsive product interfaces and admin platforms — dense data made navigable across every breakpoint.",
    "tags": [
      "Responsive",
      "Data density",
      "Admin tools"
    ],
    "fig": "grid"
  },
  {
    "title": "Visual design",
    "description": "A fourteen-year foundation in graphic and visual design, applied to brand-consistent product surfaces.",
    "tags": [
      "Brand alignment",
      "Composition",
      "Colour"
    ],
    "fig": "poster"
  }
] as const;
