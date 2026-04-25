import avatarImage from "../img/i.png";

export const profile = {
  name: "Maksym Yaropovets",
  title: "Frontend Developer",
  avatar: avatarImage,
  cvUrl: "./README.md",
  contacts: [
    {
      type: "email",
      label: "Email",
      value: "777docmax777@gmail.com",
      href: "mailto:777docmax777@gmail.com",
    },
    {
      type: "phone",
      label: "Phone",
      value: "+48 793-528-147",
      href: "tel:+48793528-147",
    },
    {
      type: "location",
      label: "Location",
      value: "Lodz, Poland",
    },
    {
      type: "languages",
      label: "Languages",
      value: "UA, PL, EN",
    },
  ],
  socials: {
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    telegram: "https://t.me/",
  },
} as const;
