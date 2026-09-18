export interface ProcessStep {
  title: string;
  description: string;
  activities: string[];
  art: string;
}


export const PROCESS_STEPS = [
  {
    "title": "Discover",
    "description": "Understand the product context and the people using it before proposing anything.",
    "activities": [
      "Research",
      "Stakeholder interviews",
      "Product context",
      "User needs"
    ],
    "art": "cluster"
  },
  {
    "title": "Define",
    "description": "Turn findings into a problem statement the whole team can argue with.",
    "activities": [
      "Problem statement",
      "Success criteria",
      "Scope",
      "Constraints"
    ],
    "art": "matrix"
  },
  {
    "title": "Explore",
    "description": "Go wide on structure — flows, IA and rough wireframes, fast and disposable.",
    "activities": [
      "Flows",
      "IA",
      "Sketches",
      "Wireframes"
    ],
    "art": "flow"
  },
  {
    "title": "Design",
    "description": "Commit to a direction and build it properly with type, colour, spacing and states.",
    "activities": [
      "UI direction",
      "Screens",
      "States",
      "Responsive"
    ],
    "art": "screen"
  },
  {
    "title": "Prototype",
    "description": "Make it clickable so the interaction can be judged instead of imagined.",
    "activities": [
      "Clickable flows",
      "Micro-interactions",
      "Walkthroughs"
    ],
    "art": "proto"
  },
  {
    "title": "Validate",
    "description": "Put it in front of people, watch where they hesitate, and change what fails.",
    "activities": [
      "Usability sessions",
      "Observation",
      "Iteration"
    ],
    "art": "states"
  },
  {
    "title": "Deliver",
    "description": "Specs, redlines and a design system engineering can build from without guessing.",
    "activities": [
      "Redlines",
      "Tokens",
      "Components",
      "Handoff"
    ],
    "art": "system"
  },
  {
    "title": "Improve",
    "description": "Watch the live product with analytics and feedback, then start the loop again.",
    "activities": [
      "Analytics review",
      "Feedback loop",
      "Backlog"
    ],
    "art": "grid"
  }
] as const;
