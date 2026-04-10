export const routes = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
] as const;

export type Route = (typeof routes)[number];
