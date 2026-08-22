import type { Route } from "next";

export interface NavLink {
  label: string;
  href: Route;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Product", href: "/product" },
  { label: "Contact Us", href: "/contact" },
];
