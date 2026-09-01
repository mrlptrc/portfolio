# Design review — baseline

## Scope and evidence

Reviewed the source for the home page, project-detail template, shared header,
footer, buttons, section headings, and the three project illustrations. This is
a code-level review; an interactive browser preview was not available in this
pass.

## Current visual language

- Background: `#09090b` (near-black).
- Surfaces: `zinc-900` and `zinc-950`, with `white/10` rules.
- Text: white/zinc scale.
- Accent: cyan, used in CTA fills, links, focus states, hero label, highlighted
  words, and experience bullets.
- Competing accent: fuchsia in the hero orb and the second highlighted hero word.
- Decorative effects: a 56px grid and a large blurred, animated cyan/fuchsia orb.

The neutral base is sound, but the cyan + fuchsia gradient, grid, moving orb,
and solid cyan controls pull the site toward an AI/Web3 landing page. The
illustrations are intentionally neutral, although `ledger.svg` introduces a
slightly warm brown palette that does not belong to the rest of the page.

## Proposed token direction

Use a neutral/off-white accent (or, only if interaction later requires it, one
restrained cool accent) and a compact semantic token set in `globals.css`:

- `background`: near-black
- `surface`, `surface-hover`: two neutral charcoal values
- `border`: one subtle neutral rule
- `text-primary`, `text-secondary`, `text-muted`: neutral scale
- `accent`, `accent-hover`, `accent-contrast`: off-white/neutral interaction
  states

Keep the project images neutral/monochrome. Accent should mark interaction and
one intentional editorial emphasis, not every navigational or decorative item.

## Audit by area

### Hero

- Strong: large editorial title, one clear introductory sentence, good negative
  space at desktop.
- Issue: `hero-orb` combines two unrelated hues, blur, scale and endless drift.
  Together with the grid, it dominates before the work does.
- Issue: two different accent treatments within the same sentence (`cyan` and
  `fuchsia`), plus a cyan eyebrow, create three visual priorities.
- Issue: both “Ver meu GitHub” and “Ver projetos” use button-shaped prominence;
  the first does not direct the visitor to the primary portfolio content.

### Navbar

- Strong: compact, semantic navigation and sensible sticky behavior.
- Issue: at 375px the four links plus mark fit only narrowly; no reduced mobile
  navigation treatment exists. Ensure hit areas and gaps remain usable.
- Issue: accent appears in logo slash, hover and focus; focus can remain accent,
  but the logo does not need a colored slash.

### Selected work / cards

- Strong: work is positioned before biography and cards have a calm two-column
  desktop composition.
- Issue: at mobile, each image/card border plus section/card separators produce
  too many stacked rules. The synthetic SVGs look like generic dashboard
  wireframes, especially the warm `ledger.svg`; real screenshots or a consistent
  technical diagram system would increase credibility later.
- Issue: title, metadata, description and “View case study” are visually sound
  but mixed Portuguese/English weakens editorial cohesion.

### About

- Strong: the quote/personal narrative split has a useful, restrained layout.
- Issue: on narrow screens, 4xl/5xl serif statement may compete with hero while
  body copy is comparatively modest. The scale can be tightened after hero is
  simplified.

### Experience

- Strong: clear separation between public projects and professional work.
- Issue: it relies on repeated top borders, tiny muted copy, and cyan arrow
  bullets—slightly “dashboard timeline.” Reduce decorative bullet color and
  increase descriptive text contrast for professional readability.

### Skills

- Issue: the numbered 12-cell grid is visually the most dashboard-like section.
  It gives every technology equal importance and competes with the projects.
  A short grouped text inventory or fewer purposeful groups would be calmer and
  more credible.

### Contact and footer

- Strong: contact has a clear large closing statement and one direct action.
- Issue: the repeated GitHub icon below the GitHub button duplicates a single
  destination. Remove the redundant icon link or add a distinct confirmed
  contact channel.
- Issue: second large cyan word mirrors the hero accent strategy and adds visual
  noise. Keep it neutral or reserve the single accent for the CTA.

### Project detail pages

- Strong: generous editorial grid and sections give a viable case-study base.
- Issue: headings and CTAs are English while main navigation/content is mostly
  Portuguese. Choose Portuguese consistently unless the whole portfolio changes.
- Issue: “Stack & impact” presents category labels such as “Foco” and
  “Integração” as impact; they are metadata, not evidence of an outcome. Rename
  it to metadata/stack or only retain real results that research can prove.

## High-impact priorities for the next implementation cycle

1. **Consolidate the palette and simplify the hero.** Remove the fuchsia/cyan
   orb and its infinite animation; remove fuchsia entirely; keep one muted accent
   for links, focus, and one primary action. Consider dropping the decorative
   grid as well. This delivers the requested calmer premium direction with the
   largest visual gain.
2. **Make the work section unmistakably primary.** Demote the external GitHub
   CTA, use one primary action toward selected work, and reduce card/separator
   density on mobile. Keep the two-column editorial layout at desktop.
3. **Replace dashboard patterns and unify language.** Rework the skills matrix
   into concise grouped evidence, remove duplicate GitHub affordance, and make
   visible portfolio labels/case-study language consistently Portuguese.

## Medium-impact follow-ups

- Centralize the existing color values into semantic CSS tokens rather than
  repeated Tailwind color utilities.
- Normalize the warm illustration into the neutral visual system; later replace
  conceptual images with verified product captures where appropriate.
- Check 375/768/1024/1440 layouts in a browser after the first pass, including
  header overflow, hero line breaks, project image proportions and keyboard focus.
- Improve contrast of descriptive experience text from `zinc-500` where it is
  essential reading.
- Preserve the existing reduced-motion safeguard when removing the decorative
  animation.

## Low-impact follow-ups

- Standardize radius usage (the interface is nearly square already; keep it that
  way outside pills/buttons).
- Add a skip link if the site grows further; current semantic regions are a good
  start.
- Treat `html lang="en"` as a content/accessibility mismatch once Portuguese is
  made definitive.

## Decision record

### Cycle 1 — implemented

- Removed the cyan/fuchsia orb, decorative grid and infinite animation from the hero.
- Replaced the competing accent treatment with a neutral charcoal, zinc and off-white palette; the primary action is now neutral rather than cyan.
- Made “Ver projetos” the primary hero CTA and demoted GitHub to a text-style secondary action.
- Replaced the numbered skills matrix with a compact, two-column technology list.
- Unified visible navigation, project-card, case-study and footer labels in Portuguese.
- Improved experience readability and removed colored timeline bullets.
- Updated the header to use smaller mobile link spacing and a Portuguese navigation label.

### Post-implementation critique

- The page is calmer and the projects now lead the story. The remaining visual limitation is the conceptual SVG artwork: it is consistent enough for now, but verified product captures would raise credibility more than further CSS decoration.
- The palette correction is successful: fuchsia, cyan decoration, the hero grid,
  and infinite movement are gone. The primary control and interaction states are
  now neutral; the newly introduced CSS tokens accurately document this direction,
  though the component classes still use Tailwind zinc utilities rather than the
  token names.
- The primary hero CTA now points to the work, and GitHub is appropriately
  secondary. The two-column skills list eliminates the dashboard-like numbered
  tile grid. Nothing in this pass made the composition worse.
- Portuguese is consistent across navigation, selected work and case-study UI.
  `Work & experiência` is the one remaining intentional mixed-language label;
  rename it to `Experiência profissional` for complete editorial consistency.
- The header improvement is code-safe at 375px: the smaller text/gaps, `shrink-0`
  logo and container gap make the four links materially less likely to overflow.
  The hero/action layout uses wrapping, so it has a reasonable small-screen
  fallback. Actual 375px/768px visual inspection is still required before
  publishing.

### One next relevant adjustment

Replace the three conceptual project SVGs with verified project screenshots—or,
when a screenshot is not defensible, a single consistent monochrome technical
diagram style. This is now the most visible remaining source of a generic
template/dashboard impression; further color or spacing changes would have less
impact.
