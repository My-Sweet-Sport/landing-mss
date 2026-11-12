# mysweetsport.com

The company site for MySweetSport: who we are, our solutions, links to
MySweetSport Go and MySweetSport Talent, news, and client logos. French at `/`,
English at `/en/`.

Static site built with [Astro](https://astro.build), hosted on GitHub Pages,
content edited with [Pages CMS](https://pagescms.org). All free.

## Editing content (no code)

1. Go to <https://app.pagescms.org> and sign in with GitHub.
2. Open **My-Sweet-Sport/landing-mss**.
3. Edit, then **Save**. Each save is a commit to `main`; the site redeploys in
   about a minute.

| In the CMS | What it changes |
|---|---|
| Nouvelles / News | News posts (partnerships, product launches, events). Tick *Draft* to hide a post. |
| Clients | Logos in the “Ils nous font confiance” band. Without a logo the name is shown. |
| Produits / Products | The Go and Talent panels: text, features, button, link. |
| Page d'accueil / Home page | Hero, about, solutions, contact, social links, SEO text. |
| Politique de confidentialité | `/privacy` (linked from the App Store listing; keep the URL). |

Every text field has a French and an English box. If one is empty the site
shows the other language. Upload images through the CMS; they land in
`public/uploads/`. Client logos look best as transparent PNG or SVG.

To give a teammate access, add them as a collaborator in Pages CMS (they only
need an email) or give them write access to the repo.

## Developing

Needs Node 22.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs dist/
```

Content lives in `src/content/` as JSON (and `pages/privacy.md`). Its schema is
`src/content.config.ts`; keep `.pages.yml` in step when you add a field.

```
src/
  content/       settings/home.json, products/, news/, clients/, pages/
  components/    Home, Court (hero diagram), NewsRow, NewsIndex, NewsArticle, Icon
  layouts/       Base.astro (header, footer, meta)
  lib/i18n.ts    UI strings, language fallback, routes
  pages/         / and /en/, /nouvelles/ and /en/news/, /privacy, /support, 404
```

## Deploying

`.github/workflows/deploy.yml` builds and publishes on every push to `main`.
In the repo settings, **Pages → Source** must be *GitHub Actions*, and
**Custom domain** set to `mysweetsport.com` (the `public/CNAME` file matches it).
