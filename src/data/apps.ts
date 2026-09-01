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
  },
];

export function getAppBySlug(slug: string): AppConfig | undefined {
  return apps.find((app) => app.slug === slug);
}

export function getAllApps(): AppConfig[] {
  return apps;
}
