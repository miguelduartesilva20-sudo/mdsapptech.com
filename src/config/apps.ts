export interface AppConfig {
  /** URL segment used for the app's privacy policy page. */
  slug: string;
  name: string;
  /** Short line shown under the app name on the home page. */
  tagline: string;
  description: string;
  icon: string;
  /** Dedicated app website, when one exists. */
  website: string | null;
  platforms: string[];
  googlePlayUrl: string | null;
  appStoreUrl: string | null;
}

/** Every app gets its own privacy policy page under /privacy/. */
export function privacyUrl(app: AppConfig): string {
  return `/privacy/${app.slug}/`;
}
