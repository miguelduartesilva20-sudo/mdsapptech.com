import type { AppConfig } from "@/config/apps";

export const apps: AppConfig[] = [
  {
    slug: "stratostream",
    name: "StratoStream",
    tagline: "IPTV player for phone, tablet and Android TV",
    description:
      "A lightweight player for the M3U and Xtream Codes playlists you already own. StratoStream ships with no channels and no subscription — you add your own playlist and it plays it.",
    icon: "/apps/stratostream/icon.png",
    website: null,
    platforms: ["Android", "Android TV"],
    googlePlayUrl: "https://play.google.com/store/apps/details?id=com.stratostream.iptv",
    appStoreUrl: null,
    productPage: true,
  },
  {
    slug: "Avinimo",
    name: "Avinimo",
    tagline: "In development",
    description: "A simple Android app, currently in development.",
    icon: "/apps/Avinimo/icon.png",
    website: null,
    platforms: ["Android"],
    googlePlayUrl: null,
    appStoreUrl: null,
    inDevelopment: true,
  },
  {
    slug: "Funinimo",
    name: "Funinimo",
    tagline: "In development",
    description: "A simple Android game, currently in development.",
    icon: "/apps/Funinimo/icon.png",
    website: null,
    platforms: ["Android"],
    googlePlayUrl: null,
    appStoreUrl: null,
    inDevelopment: true,
  },
  {
    slug: "QuizWhizzy",
    name: "QuizWhizzy",
    tagline: "Quiz game — in development",
    description: "A simple Android quiz game, currently in development.",
    icon: "/apps/QuizWhizzy/icon.png",
    website: null,
    platforms: ["Android"],
    googlePlayUrl: null,
    appStoreUrl: null,
    inDevelopment: true,
  },
  {
    slug: "Digrift",
    name: "Digrift",
    tagline: "Family-friendly game for Android",
    description:
      "A game for all ages that plays fully offline. No accounts and no sign-up — your progress is saved on your device and never leaves it.",
    icon: "/apps/Digrift/icon.png",
    website: null,
    platforms: ["Android"],
    googlePlayUrl: null,
    appStoreUrl: null,
  },
  {
    slug: "Lexolumi",
    name: "Lexolumi",
    tagline: "In development",
    description: "A simple Android app, currently in development.",
    icon: "/apps/Lexolumi/icon.png",
    website: null,
    platforms: ["Android"],
    googlePlayUrl: null,
    appStoreUrl: null,
    inDevelopment: true,
  },
  {
    slug: "Numivela",
    name: "Numivela",
    tagline: "In development",
    description: "A simple Android app, currently in development.",
    icon: "/apps/Numivela/icon.png",
    website: null,
    platforms: ["Android"],
    googlePlayUrl: null,
    appStoreUrl: null,
    inDevelopment: true,
  },
];

export function getAppBySlug(slug: string): AppConfig | undefined {
  return apps.find((app) => app.slug === slug);
}

export function getAllApps(): AppConfig[] {
  return apps;
}

/** Released apps — the ones that get a card on the home page. */
export function getPublishedApps(): AppConfig[] {
  return apps.filter((app) => !app.inDevelopment);
}
