import type { LucideIcon } from "lucide-react";

export type TabId = "about" | "resume" | "portfolio" | "blog";

export type AccentTheme = "gold" | "sky" | "mint" | "coral" | "violet";

export type Service = {
  Icon: LucideIcon;
  title: string;
  description: string;
};

export type RoadmapItem = {
  status: "done" | "active" | "next";
  date: string;
  title: string;
  description: string;
  tags: string[];
};

export type Project = {
  title: string;
  description: string;
  image?: string;
  status: "Live" | "In progress" | "Planned";
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
};

export type Recommendation = {
  avatar: string;
  name: string;
  role: string;
  date: string;
  dateTime: string;
  text: string;
};
