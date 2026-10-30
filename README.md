# Holger Imbery | Architect & Speaker

Personal speaker and architecture profile for Holger Imbery, Principal Architect, Microsoft MVP and MCT.

The static site highlights current talks from [Sessionize](https://sessionize.com/holgerimbery/), previous talk topics and materials, areas of expertise, and contact details.

## Shared profile and legal pages

instruo365.de owns the full personal profile at `/about/` and the shared legal
information at `/impressum/` and `/privacy/`. The legal scope is limited to
instruo365.de and holgerimbery.blog, not other linked projects or subdomains.
The blog remains a separate publication with its own editorial About page.

Pages use directory-based `index.html` files, supported by both GitHub Pages and
Azure Static Web Apps without a framework or build step. The subpages share
`assets/pages.css`; all pages share `assets/theme.js`. Keep their navigation,
legal links, theme controls, and canonical URLs consistent when adding pages.
The informational subpages intentionally load no analytics, external fonts, or
translation widgets.

### Publication review required

The privacy page is explicitly a draft, not a compliance certification. Before
merging this branch (which deploys automatically), confirm the operator/contact
details and legal requirements, and have the legal text reviewed. Confirm actual
service settings, retention/deletion periods, email provider, processor
agreements, lawful bases, and international-transfer safeguards. Resolve the
review items and replace draft notices with final, verified disclosures.

Both custom domains currently resolve to GitHub Pages; Azure deployment workflows
also exist for previews. Recheck hosting if deployments or DNS change.
The existing blog loads Google Analytics and Umami independently of its consent
banner. Review and correct consent gating where required before relying on a
final shared privacy notice. A privacy link alone does not fix that behavior.
This branch does not change analytics or consent behavior on either site.

### Blog migration checklist (separate repository)

No blog files are changed by this branch. Complete these steps in
`holgerimbery/holgerimbery.blog` after reviewing the shared pages:

- [ ] Create a clean feature branch from the latest GitHub `main`.
- [ ] Rewrite `holgerimbery/_pages/about.md` as "About this blog", keeping its
      permalink `/about/`, editorial purpose, publication-age caveat, and AI
      transparency note. Keep only a short bio linking to
      `https://instruo365.de/about/`. Ensure its rendered canonical remains the
      blog About URL, not the blog homepage or the personal profile.
- [ ] In `holgerimbery/_data/settings.yml`, rename the navigation's "About" to
      "About this blog", replace "My Page" with "Profile & Talks" linking to
      `https://instruo365.de/about/`, and point the homepage "Meet me" button there.
- [ ] In `holgerimbery/_includes/footer.html`, point Impressum to
      `https://instruo365.de/impressum/` and Privacy Policy to
      `https://instruo365.de/privacy/`. Preserve the cookie-preferences control.
- [ ] In `holgerimbery/_includes/head.html`, update the consent tool's
      `website_privacy_policy_url` to the shared privacy URL. Separately verify
      that reject/accept/withdrawal actually governs all relevant scripts.
- [ ] Replace the old Impressum content with a static
      `holgerimbery/impressum/index.html` fallback containing the destination link,
      canonical URL, and meta refresh. Avoid also generating the old collection
      page at the same path. GitHub Pages cannot supply arbitrary HTTP redirects.
- [ ] Add permanent 301 redirects for both `/impressum` and `/impressum/` in
      `holgerimbery/staticwebapp.config.json` for Azure deployments. Preserve its
      existing 404 response override. The static fallback serves GitHub Pages.
- [ ] Build Jekyll and inspect generated `/about/` and `/impressum/` pages. Verify
      navigation, cookie preferences, contact, and that article URLs are unchanged.
- [ ] Publish and verify the final instruo365 subpages first, then merge/deploy
      the blog changes so new links never point to missing pages.

## Links

- [LinkedIn](https://www.linkedin.com/in/holgerimbery/)
- [Blog](https://holgerimbery.blog)
- [Sessionize](https://sessionize.com/holgerimbery/)
- [Previous talk content](https://github.com/instruo365/talks/tree/main)
- [Tenant Manager](https://www.mate365.app/)
- [Labs](https://labs.instruo365.de)
