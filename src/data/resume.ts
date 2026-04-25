import type { RoadmapItem } from "../types";

export const learningRoadmap: RoadmapItem[] = [
  {
    status: "done",
    date: "Foundation",
    title: "HTML5 and CSS3",
    description:
      "Built the base for semantic markup, responsive layouts, spacing, forms and visual structure.",
    tags: ["HTML5", "CSS3", "Responsive"],
  },
  {
    status: "done",
    date: "Core logic",
    title: "JavaScript",
    description:
      "Practiced DOM work, events, functions, arrays, objects, async basics and interactive UI behavior.",
    tags: ["JavaScript", "DOM", "Events"],
  },
  {
    status: "active",
    date: "Current focus",
    title: "React and TypeScript",
    description:
      "Building component-based interfaces, improving state logic and turning this portfolio into a real project.",
    tags: ["React", "TypeScript", "Components"],
  },
  {
    status: "next",
    date: "Next step",
    title: "Backend basics and stronger projects",
    description:
      "Planning to deepen Node.js, API work and project structure so frontend projects feel closer to production.",
    tags: ["Node.js", "API", "Portfolio"],
  },
];

export const professionalStrengths = [
  "Learns through real tasks, not only theory",
  "Cares about visual details and user perception",
  "Uses feedback to improve the next iteration",
  "Keeps projects organized and presentation-ready",
  "Communicates progress clearly and calmly",
];
