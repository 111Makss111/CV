import type { TabId } from "../../types";

type TabsProps = {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
  tabs: Array<{ id: TabId; label: string }>;
};

export function Tabs({ activeTab, onTabChange, tabs }: TabsProps) {
  return (
    <nav className="tabs" aria-label="Portfolio sections">
      {tabs.map((tab) => (
        <button
          className={`tab ${activeTab === tab.id ? "is-active" : ""}`}
          key={tab.id}
          type="button"
          onClick={() => onTabChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
}
