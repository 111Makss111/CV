import { useState } from "react";
import { AboutPanel } from "./components/about/AboutPanel";
import { BlogPanel } from "./components/blog/BlogPanel";
import { ProfileCard } from "./components/layout/ProfileCard";
import { Tabs } from "./components/layout/Tabs";
import { PortfolioPanel } from "./components/portfolio/PortfolioPanel";
import { ResumePanel } from "./components/resume/ResumePanel";
import { accentThemes, tabs } from "./data/navigation";
import type { TabId } from "./types";

export function App() {
  const [activeTab, setActiveTab] = useState<TabId>("about");
  const [accentIndex, setAccentIndex] = useState(0);
  const activeAccent = accentThemes[accentIndex];

  const handleAccentChange = () => {
    setAccentIndex((currentIndex) => (currentIndex + 1) % accentThemes.length);
  };

  return (
    <main className="portfolio-stage" data-accent={activeAccent.id}>
      <div className="workspace">
        <ProfileCard
          activeAccent={activeAccent.label}
          onToggleAccent={handleAccentChange}
        />

        <section className="content-shell">
          <Tabs
            activeTab={activeTab}
            onTabChange={setActiveTab}
            tabs={tabs}
          />

          {activeTab === "about" && <AboutPanel />}
          {activeTab === "resume" && <ResumePanel />}
          {activeTab === "portfolio" && <PortfolioPanel />}
          {activeTab === "blog" && <BlogPanel />}
        </section>
      </div>
    </main>
  );
}
