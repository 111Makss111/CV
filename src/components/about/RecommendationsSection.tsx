import { useState } from "react";
import { recommendations } from "../../data/about";
import type { Recommendation } from "../../types";
import { RecommendationModal } from "./RecommendationModal";

export function RecommendationsSection() {
  const [selectedRecommendation, setSelectedRecommendation] =
    useState<Recommendation | null>(null);

  return (
    <>
      <section
        className="recommendations"
        aria-labelledby="recommendations-title"
      >
        <h3 id="recommendations-title">Recommendation</h3>
        <div className="recommendation-grid">
          {recommendations.map((recommendation) => (
            <button
              className="recommendation-card"
              key={recommendation.name}
              type="button"
              onClick={() => setSelectedRecommendation(recommendation)}
              aria-label={`Open recommendation from ${recommendation.name}`}
            >
              <div className="recommendation-person">
                <img src={recommendation.avatar} alt="" aria-hidden="true" />
                <div>
                  <strong>{recommendation.name}</strong>
                  <span>{recommendation.role}</span>
                </div>
              </div>
              <time dateTime={recommendation.dateTime}>
                {recommendation.date}
              </time>
              <p>{recommendation.text}</p>
            </button>
          ))}
        </div>
      </section>

      {selectedRecommendation && (
        <RecommendationModal
          recommendation={selectedRecommendation}
          onClose={() => setSelectedRecommendation(null)}
        />
      )}
    </>
  );
}
