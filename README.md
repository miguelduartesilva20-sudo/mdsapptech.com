# mdsapptech.com

The MDS AppTech website: a static Astro site that introduces the studio and hosts
the **privacy policy for every app we publish**. The policy URLs here are the ones
entered in the Google Play Console and App Store Connect, so they have to stay
reachable and stable.

## Pages

| Route | What it is |
| :-- | :-- |
| `/` | Company page — what we do, the app list, contact |
| `/privacy/` | Website privacy policy, and an index of every app policy |
| `/privacy/stratostream/` | StratoStream (IPTV player) privacy policy — Google Play |
| `/terms/` | Website terms of service |

## Commands

| Command | Action |
| :-- | :-- |
| `npm install` | Install dependencies |
| `npm run dev` | Dev server at `localhost:4321` |
| `npm run build` | Build to `./dist/` |
| `npm run preview` | Preview the built site |

## Adding a new app

1. Add an entry to `src/data/apps.ts` (the `slug` is the URL segment of its policy).
2. Drop a square icon at `public/apps/<slug>/icon.png`.
3. Create `src/pages/privacy/<slug>.astro`, using `src/pages/privacy/stratostream.astro`
   as the model — it wraps `LegalLayout` and uses the shared `.legal-*` classes from
   `src/styles/global.css`.

The home page, the footer and `/privacy/` pick the app up automatically, and the
sitemap includes the new page on the next build.

Company-wide values — name, domain, contact email, policy dates — live in
`src/config/site.ts`. Bump `legal.privacyLastUpdated` whenever a policy changes.

## Deployment

Pushing to `main` builds the site and publishes it to GitHub Pages
(`.github/workflows/deploy.yml`). In the repository, set
**Settings → Pages → Source** to **GitHub Actions**.

`public/CNAME` pins the custom domain `mdsapptech.com`, which needs these DNS
records at the registrar:

```text
A     @    185.199.108.153
A     @    185.199.109.153
A     @    185.199.110.153
A     @    185.199.111.153
CNAME www  <github-username>.github.io.
```

Enable **Enforce HTTPS** in Settings → Pages once the certificate is issued.
