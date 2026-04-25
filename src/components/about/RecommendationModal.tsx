import { useEffect } from "react";
import { Quote, X } from "lucide-react";
import type { Recommendation } from "../../types";

type RecommendationModalProps = {
  recommendation: Recommendation;
  onClose: () => void;
};

export function RecommendationModal({
  recommendation,
  onClose,
}: RecommendationModalProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <section
        className="recommendation-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="recommendation-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="modal-close"
          type="button"
          onClick={onClose}
          aria-label="Close recommendation"
        >
          <X />
        </button>

        <div className="modal-person">
          <img src={recommendation.avatar} alt="" aria-hidden="true" />
          <div>
            <h3 id="recommendation-modal-title">{recommendation.name}</h3>
            <p>{recommendation.role}</p>
            <time dateTime={recommendation.dateTime}>
              {recommendation.date}
            </time>
          </div>
        </div>

        <Quote className="modal-quote-icon" aria-hidden="true" />
        <p className="modal-quote">{recommendation.text}</p>
      </section>
    </div>
  );
}
