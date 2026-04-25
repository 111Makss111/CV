import { aboutParagraphs } from "../../data/about";

export function AboutIntro() {
  return (
    <div className="intro-copy">
      {aboutParagraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}
