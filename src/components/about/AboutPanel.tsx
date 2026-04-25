import { SectionHeading } from "../common/SectionHeading";
import { AboutIntro } from "./AboutIntro";
import { RecommendationsSection } from "./RecommendationsSection";
import { ServicesSection } from "./ServicesSection";

export function AboutPanel() {
  return (
    <article className="panel">
      <SectionHeading title="About Me" />
      <AboutIntro />
      <ServicesSection />
      <RecommendationsSection />
    </article>
  );
}
