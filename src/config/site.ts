export const siteConfig = {
  name: "MDS AppTech",
  title: "MDS AppTech — Mobile Apps & Web Pages",
  description:
    "MDS AppTech is a small, dedicated team building mobile applications and simple web pages for a wide range of purposes.",
  url: "https://mdsapptech.com",
  ogImage: "/og-image.png",
  email: "miguel.duarte.silva20@gmail.com",
  developerProfiles: {
    googlePlay: null,
    appStore: null,
    github: null,
  },
  legal: {
    privacyLastUpdated: "2026-09-01",
    termsLastUpdated: "2026-09-01",
  },
} as const;

export type SiteConfig = typeof siteConfig;
