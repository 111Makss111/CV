import type { Project } from "../types";
import beautyBookingImage from "../img/beauty-booking.png";
import cvImage from "../img/cv.png";
import trainixImage from "../img/trainix.png";
import webStudioImage from "../img/web-studio.png";

// Add new portfolio items here. Import an image and pass it as `image` when a project has a screenshot.
export const projects: Project[] = [
  {
    title: "Web Studio",
    description:
      "A responsive business landing page with service sections, portfolio gallery, team cards and contact flow.",
    image: webStudioImage,
    status: "Live",
    tags: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://web-studio-gray.vercel.app/",
  },
  {
    title: "CV Portfolio",
    description:
      "A personal CV website focused on presenting profile information, skills, experience and project links in one place.",
    image: cvImage,
    status: "Live",
    tags: ["React", "CSS", "Portfolio"],
    liveUrl: "https://cv-zeta-two.vercel.app/",
  },
  {
    title: "Trainix",
    description:
      "A fitness-focused web interface with a strong visual style, training presentation and clear user-facing sections.",
    image: trainixImage,
    status: "Live",
    tags: ["React", "UI", "Responsive"],
    liveUrl: "https://trainix-pi.vercel.app/",
  },
  {
    title: "Beauty Booking",
    description:
      "A booking-oriented beauty service interface built around service discovery, visual polish and simple interaction flow.",
    image: beautyBookingImage,
    status: "Live",
    tags: ["React", "Booking", "UI"],
    liveUrl: "https://beauty-booking-eta.vercel.app/",
  },
];
