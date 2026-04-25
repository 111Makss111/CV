import { useEffect, useState } from "react";
import { GraduationCap } from "lucide-react";
import { learningRoadmap } from "../../data/resume";
import { SectionHeading } from "../common/SectionHeading";
import { Roadmap } from "./Roadmap";
import { ResumeSummary } from "./ResumeSummary";

export function ResumePanel() {
  const [visibleRoadmapItems, setVisibleRoadmapItems] = useState(1);
  const [visibleSummaryCards, setVisibleSummaryCards] = useState(0);

  useEffect(() => {
    if (visibleRoadmapItems >= learningRoadmap.length) {
      return;
    }

    const timerId = window.setTimeout(() => {
      setVisibleRoadmapItems((count) => count + 1);
    }, 520);

    return () => window.clearTimeout(timerId);
  }, [visibleRoadmapItems]);

  useEffect(() => {
    if (
      visibleRoadmapItems < learningRoadmap.length ||
      visibleSummaryCards >= 2
    ) {
      return;
    }

    const timerId = window.setTimeout(() => {
      setVisibleSummaryCards((count) => count + 1);
    }, 420);

    return () => window.clearTimeout(timerId);
  }, [visibleRoadmapItems, visibleSummaryCards]);

  return (
    <article className="panel">
      <SectionHeading title="Resume" />

      <section className="resume-section" aria-labelledby="roadmap-title">
        <div className="resume-section-title">
          <GraduationCap />
          <div>
            <h3 id="roadmap-title">Learning Roadmap</h3>
            <p>
              My current path into frontend development and what I am
              strengthening next.
            </p>
          </div>
        </div>

        <Roadmap items={learningRoadmap} visibleCount={visibleRoadmapItems} />
      </section>

      <ResumeSummary visibleCards={visibleSummaryCards} />
    </article>
  );
}
