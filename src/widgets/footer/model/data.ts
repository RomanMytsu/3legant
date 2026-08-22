import type { Route } from "next";

export interface LegalLink {
  id: string;
  label: string;
  href: Route;
}

export const LEGAL_LINKS: LegalLink[] = [
  { id: "1", label: "Privacy Policy", href: "#" },
  { id: "2", label: "Terms of Use", href: "#" },
];

export const SOCIAL_LINKS = [
  {
    id: "1",
    name: "instagram",
    href: "https://instagram.com",
    label: "Instagram",
  },
  {
    id: "2",
    name: "facebook",
    href: "https://facebook.com",
    label: "Facebook",
  },
  { id: "3", name: "youtube", href: "https://youtube.com", label: "YouTube" },
];
