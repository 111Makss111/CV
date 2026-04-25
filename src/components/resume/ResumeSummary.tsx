import { professionalStrengths } from "../../data/resume";

type ResumeSummaryProps = {
  visibleCards: number;
};

export function ResumeSummary({ visibleCards }: ResumeSummaryProps) {
  return (
    <section
      className="resume-section resume-bottom-grid"
      aria-label="Professional development summary"
    >
      <article
        className={`progress-card resume-reveal-card ${
          visibleCards > 0 ? "is-visible" : ""
        }`}
      >
        <span>Certificate status</span>
        <h3>In Progress</h3>
        <p>
          I do not present unfinished certificates as completed. The focus right
          now is practice, portfolio quality and job-ready frontend habits.
        </p>
      </article>

      <article
        className={`strength-card resume-reveal-card ${
          visibleCards > 1 ? "is-visible" : ""
        }`}
      >
        <h3>Professional Strengths</h3>
        <ul>
          {professionalStrengths.map((strength) => (
            <li key={strength}>{strength}</li>
          ))}
        </ul>
      </article>
    </section>
  );
}
