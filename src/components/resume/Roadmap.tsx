import type { RoadmapItem } from "../../types";

type RoadmapProps = {
  items: RoadmapItem[];
  visibleCount: number;
};

export function Roadmap({ items, visibleCount }: RoadmapProps) {
  return (
    <div className="roadmap">
      {items.map((item, index) => {
        const isVisible = index < visibleCount;

        return (
          <article
            className={`roadmap-item roadmap-item-${item.status} ${
              isVisible ? "is-visible" : ""
            }`}
            key={item.title}
          >
            <span className="roadmap-dot" aria-hidden="true" />
            <div className="roadmap-content">
              <span className="roadmap-date">{item.date}</span>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <div className="roadmap-tags">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
