export interface Principle {
  n: string;
  title: string;
  description: string;
}


export const PRINCIPLES = [
  {
    "n": "01",
    "title": "Human first",
    "description": "The person using this is busy, distracted and not thinking about design. Start there."
  },
  {
    "n": "02",
    "title": "Clarity over complexity",
    "description": "If it needs explaining twice, the interface is doing the wrong job."
  },
  {
    "n": "03",
    "title": "Design as a system",
    "description": "One screen is an opinion. A system is a decision everyone can build on."
  },
  {
    "n": "04",
    "title": "Details matter",
    "description": "Empty states, error copy and the eighth tap are where trust is actually won."
  }
] as const;
