# Pampered Paws — Session Context

Read this first in any new chat to pick up where we left off without re-deriving everything from scratch. This file is a working doc, not user-facing documentation — update or delete sections as they go stale.

## Project at a glance

- **Repo:** `https://github.com/jpsesguerra/pampered-paws` (cloned into this directory, `main` branch, no other branches)
- **Stack:** Next.js 14 App Router, TypeScript, Tailwind CSS, `src/` layout. Sanity CMS deferred to Phase 3 (not started).
- **Hosting target:** Hostinger, persistent Node process (`next build` + `next start`), **not** static export.
- **Design source of truth:** Figma file `https://www.figma.com/design/haXXQaqvImI1QosVHWu7BV/Pampered-Paws---Project`. Always pull real copy/assets from Figma via the MCP tools (`mcp__e3e840b4...__get_design_context`, `get_metadata`, `download_assets`) rather than inventing content — this came back to bite us once already (see "Mistakes already made" below).
- **Original build plan:** `/Users/joelpaolo/Desktop/Pampered Paws Website Build/nextjs-figma-sanity-init-prompt.md` — 4 phases (1. design audit/tokens, 2. scaffold + static build, 3. Sanity, 4. pre-launch audit). We are deep into **Phase 2** (static build), Sanity (Phase 3) has not started.
- **Stack template reference:** `/Users/joelpaolo/Desktop/Pampered Paws Website Build/STACK_TEMPLATE.md` — conventions from a prior similar project (CLSF Church site). Worth re-reading before starting Phase 3 (Sanity) — it has hard-won gotchas about Hostinger env vars, image hosts, ISR, etc.
- **CMS source data:** CSV exports in `/Users/joelpaolo/Desktop/Pampered Paws Website Build/CMS Stuff/` (Blog, FAQs, Locations, Pricings, Programs, Resources, Testimonials). These are the eventual Sanity collections; for now their content is hardcoded into `src/lib/data/*.ts`.

## Phase 1 (sign-off complete)

Full design-token audit was done and approved. Tokens live in `tailwind.config.ts` (theme.extend) and `src/app/globals.css` (CSS custom properties). Key facts if tokens ever need re-deriving:
- Colors: brand pink `#EC5998`, secondary light pink `#F7C0D8`, deep raspberry `#B12A69`, accent dark `#1A181A`, background neutral `#FAF7F2`, neutral dark `#131313`, etc.
- Typography: Playfair Display (headings, serif) + Urbanist (body/labels, sans). Adobe Fonts/Typekit is the eventual production font loader (NOT `next/font`) — currently using a temporary Google Fonts `<link>` fallback in `src/app/layout.tsx` with a `TODO` comment to swap in the real Typekit kit ID.
- Border radius / shadow scales were **not** in Figma variables — we assigned conventional Tailwind-like scales ourselves (approved by user).

## Phase 2 progress — page-by-page status

All 14 Figma pages have routes scaffolded. Status reflects how thoroughly each has been audited against Figma (not just "exists"):

| Page | Route | Status |
|---|---|---|
| Homepage | `/` | **Heavily iterated** — see "Homepage feedback rounds" below. Hero photo row rebuilt this session to be fully responsive (see "Locations / detail-page rebuild session" below). |
| Grooming | `/grooming` | **Re-audited and rebuilt this session** — hero video, new `GroomingServiceCard`, animations. See below. |
| Schooling | `/schooling` + `/schooling/[slug]` | **Re-audited and rebuilt this session** — highlights, sticky sidebar, Program detail page fully rebuilt. See below. |
| About Us | `/about-us` | **Cleaned up this session** — real video embed, button fix, card-height pattern. See below. |
| Franchise | `/franchise` | **Re-audited and rebuilt this session** — hero photo bleed/fade, highlights, animations. See below. |
| Grooming Prices | `/grooming-prices` | Audited; breed photo collage **removed this session** per explicit instruction (no photos in the pricing collection). |
| Locations | `/locations` + `/locations/[slug]` | **Fully rebuilt this session as a Sanity-shaped collection.** See "Locations collection" below — this is the big one, read it before touching this route. |
| Blog | `/blog/[slug]` | **Rebuilt this session.** Real content found in Figma and added. See below. |
| Resources | `/resources/[slug]` | **Rebuilt this session.** Real content found in Figma and added. See below. |
| Request an Appointment | `/request-an-appointment` | Generic `ContactForm`, now reads `?location=<locationKey>` query param (see Locations section). |
| Grooming School Form | `/schooling/enroll` | Generic `ContactForm` component, built in initial pass. Not yet location-aware. |
| Franchise Form | `/franchise/enquire` | Generic `ContactForm` component, built in initial pass. |

**Recommended next step:** Grooming Prices listing page (`/grooming-prices`) and the Blog/Resources *listing* pages (`/blog`, `/resources` — not the detail pages, which are now done) haven't had a close Figma audit yet. Also see "Open TODOs" at the bottom of this doc for two known gaps in the card-height pattern.

## Homepage feedback rounds (most iterated page — read this carefully)

The homepage went through several rounds of client feedback after the initial "rebuild against Figma" pass. Commits in order:
1. `b0ec51b` — Initial rebuild against Figma + responsive pass.
2. `140f274` — First feedback round: nav centering, eyebrow icon (real pink dot, not a chevron), Highlight component (real highlighter PNG), 4 decorative paw badges, hero photo padding, footer logo transparency, footer location links, copyright contrast, CraftSection chip content + opposing marquee directions.
3. `12aa719` — Second feedback round: swapped in real hero photos (Cat.png/Dog.png/Lesley.png), fixed a clipped paw badge, fixed ServiceCard overflow (`min-w-0` fix), made curriculum chips bleed full-width past the page margins, removed "Services" prefix from curriculum eyebrow, removed CTA links from Team Section's 3 value cards.
4. `a1cbf9f` — Reordered hero photos so Lesley (groomer, landscape photo) sits in the wider center grid slot, Cat/Dog on the sides.
5. `6a00320` (latest) — Testimonials carousel (peek-style, prev/next buttons, loops through 3), removed hero image padding (now edge-to-edge per latest request), fixed Gallery heading to force exactly 3 lines via `whitespace-nowrap` spans, added `CTABanner` to homepage after Gallery section.

**⚠️ Not yet visually verified:** commit `6a00320`'s changes (testimonials carousel, gallery heading, CTA banner placement) were typechecked and build-passed but **not confirmed in the browser** — the preview tool's screenshot capture got stuck on a stale frame right when we were about to verify, and the user interrupted to ask for this context doc instead. **First thing to do in the new session: visually verify the testimonials carousel works (peek effect, prev/next buttons cycle correctly, mobile fallback to single card) and that the Gallery heading/CTA banner look right.**

## Recurring bug pattern — watch for this everywhere

We hit the **same bug four separate times** across different components: an image with `fill` inside a flex child using `lg:h-auto` (or `sm:h-auto`) nested in a row container that switches `flex-col` → `flex-row` at a breakpoint, where the row container does **not** have `items-stretch` at that breakpoint. Result: the image's flex-basis collapses to 0 height (invisible) specifically at the breakpoint where the row layout kicks in, while looking fine below that breakpoint (because below it, an explicit pixel height like `h-[280px]` is used instead of `h-auto`).

**Fixed instances:** `TeamSection.tsx`, `Timeline.tsx`, `WhoIsThisFor.tsx`, `WhatsIncludedSection.tsx`.

**If you ever see a photo silently not rendering at a specific viewport width** (but DOM/computed-style checks show the `<img>` exists with correct `src`), check for this pattern first: search for `h-auto` combined with `flex-1` inside a `flex-col ... lg:flex-row` (or `sm:flex-row`) parent, and make sure the parent also has `lg:items-stretch` (or `sm:items-ststretch`) at the same breakpoint. Quick grep: `grep -rn "h-auto" src --include="*.tsx"`.

A second, related bug we hit once (Gallery.tsx): a CSS grid with `lg:w-auto` and no intrinsic sizing collapsed to 0 width in a flex row, because grids need an explicit width to resolve `fr` tracks. Fixed by giving it an explicit `lg:w-[480px] lg:shrink-0` instead of `lg:w-auto`.

## Tooling quirk — not a real bug, don't chase it

The `mcp__Claude_Preview__preview_screenshot` tool frequently returns a **stale cached frame** after `window.location.reload()`, `preview_resize`, or sometimes even a fresh navigation — showing old content (sometimes from a completely different page) while `window.location.href`, `scrollY`, and DOM queries via `preview_eval` all confirm the actual page state is correct. **Fix: stop and restart the preview server** (`preview_stop` then `preview_start`, or kill port 3000 via Bash and restart) — this reliably clears it. Don't waste time debugging "missing" content that the screenshot shows blank/wrong if `preview_eval` (checking `getBoundingClientRect()`, `getComputedStyle()`, etc.) confirms it's actually there.

## Mistakes already made (don't repeat)

1. **Fabricated content instead of pulling from Figma.** Early on we guessed at copy/icons instead of fetching real Figma data (e.g., the "3 feature cards" on the Grooming page turned out to be the *same* reused Booking Steps cards from the homepage, not unique copy; the Eyebrow icon was guessed as a chevron when it's actually a solid pink dot; CraftSection chip lists were invented instead of pulled from the real Figma chip components). **Always fetch real Figma data via `get_design_context` before writing copy/choosing icons**, even for components that look like they should be "obvious."
2. **Test images saved with opaque backgrounds instead of transparency**, e.g. the footer logo PNG had a flattened cream rectangle baked in (looked like a gray box on the dark footer) — fixed with a Python/PIL color-key script (`sed`/PIL background removal, see git history around commit `140f274`).
3. Two homepage sections (Team Section value cards' CTA links, CraftSection eyebrow wording) had to be walked back after initial build because they didn't match what the client actually wanted — when in doubt about whether a sub-element (like a CTA link under a card) is wanted, it's fine to include it matching Figma, but be ready to remove on feedback rather than over-defend the "correct per Figma" choice if the client explicitly says no.

## Useful conventions established

- **Shared components to reuse, not rebuild:** `Eyebrow`, `Highlight` (real highlighter-brush PNG behind text), `Button`/`SecondaryButton`, `Card`, `ServiceCard`, `ServiceChip` (has `icon="dot"` vs `icon="location"` variants), `IconCircle` (variants: paw/location/calendar/credit-card/graduation-cap/star/global/shower-head/thumbs-up), `FAQAccordion`/`FAQSection`, `CTABanner` (generalized with `buttonLabel`/`buttonHref`/`phoneLabel` props), `LocationCard`, `ProgramCard`.
- **Marquee/bleed pattern:** full-width scrolling chip rows (breed carousel, curriculum chips) live in a wrapper with **no** `max-w-[1240px]` constraint, `overflow-hidden`, and `animate-marquee` / `animate-marquee-reverse` (defined in `globals.css`) on a `flex w-max` inner row with the array duplicated (`[...ARR, ...ARR]`) for seamless looping.
- **Icons:** real Figma SVG icons are downloaded via `download_assets`/`get_design_context` asset URLs, cleaned (strip Figma's debug rect/dashed-border wrapper, replace `var(--fill-0, X)` with literal `X`), and saved flat in `public/icons/`. A few icons (chevron, arrow, thumbs-up before we found the real one) are intentionally generic/conventional where the exact Figma asset wasn't cleanly extractable — these are flagged in code comments or commit messages, not silently passed off as pixel-perfect.
- **Hero sections must be `max-w-[1240px]`-constrained** on every page (explicit client requirement) — already fixed on Grooming/Schooling/About Us/Franchise/Homepage.
- **Locations data** (`src/lib/data/locations.ts`) is the single source for Toronto/Mississauga/Scarborough used by the Footer, `/locations`, and `/locations/[slug]` — Footer links to `/locations/${slug}` already.
- Canadian English spelling, no emojis, no inline styles/CSS modules — Tailwind only, per original constraints doc.

## Known gaps / explicitly deferred

- **3 new hero photos** (`Cat.png`, `Dog.png`, `Lesley.png` in `public/images/`) were provided by the user directly into the project folder (not via Figma) — already wired into `Hero.tsx`.
- Sanity (Phase 3) hasn't started. All content in `src/lib/data/*.ts` is hardcoded placeholder mirroring the CSV structure, ready to swap for GROOQ queries later.
- Resources collection: most entries still have placeholder excerpt text (flagged `PLACEHOLDER_EXCERPT` in `src/lib/data/resources.ts`).
- FAQ answers for Grooming/Schooling/Franchising were written by us (the CSV's `Answer` column was blank) — should get a client review pass before launch.
- A few low-value Figma decorative flourishes (footer paw watermark, a couple of hero ball graphics that didn't export cleanly) were dropped rather than faked.
- User mentioned wanting **scroll/hover animations** based on "a live website" reference they have — they haven't shared that reference URL yet. Follow up on this.

## Immediate next steps (in priority order)

1. Visually verify commit `6a00320` (testimonials carousel, Gallery heading, CTA banner) actually renders correctly — this was interrupted before verification.
2. Get the animation reference site URL from the user and wire up scroll/hover animations on homepage components once provided.
3. Audit Grooming Prices, Locations, Blog, and Resources pages against Figma with the same rigor as the other pages (they were only built in the fast initial scaffold pass).
4. Ask whether to push the accumulated local commits to `origin/main` — nothing has been pushed yet, everything is local-only (explicit user approval needed per session norms, never push without asking).

---

## Homepage animation & polish session (appended — supersedes "Immediate next steps" items 1–2 above)

Items 1 and 2 from the "Immediate next steps" list above are now done: commit `6a00320` was visually verified, and the user provided the animation reference site (`https://vetic.webflow.io/home/home-1`). This whole section documents that follow-up work. The homepage is now animation-complete; **next session moves on to the Grooming and Schooling pages.**

### Reference site extraction method (reusable technique)

The reference site runs native Webflow IX2 interactions (no GSAP/AOS). Rather than guessing from visuals, we pulled the actual interaction config straight out of the page's JS runtime via Chrome MCP:
```js
const ix2 = window.Webflow.require('ix2');
const state = ix2.store.getState();
const ixData = state.ixData; // .events, .actionLists, .eventTypeMap, .mediaQueries
```
This gave exact triggers, durations, easings (as cubic-béziers or named curves like `outQuart`/`outExpo`/`outBack`), and transform values for every named interaction (`View - 0.1s`…`0.6s`, `Button Hover In/Off`, `Hover Scale On/Off`, `Team Hover On/Off`, `Image reveal`, `Home Load`, etc.). **If another Webflow reference site ever needs to be matched again, repeat this technique** rather than eyeballing it.

### What was built

- **`src/components/ui/Reveal.tsx`** — new client component, `IntersectionObserver`-based fade+rise-on-scroll wrapper (`<Reveal delay={0|100|200|300|400|500|600}>`). Fires once, threshold 0.15, rootMargin `-10%` bottom. Used to wrap whole sections in `page.tsx` (BreedCarousel, SuccessStories, BookingSteps, CraftSection, Testimonials, Gallery, CTABanner, BlogTeaser) and individual elements inside `Hero.tsx`/`TeamSection.tsx`/`Footer.tsx` (staggered per item).
- **`globals.css` motion additions:** easing custom properties (`--ease-out-quart`, `--ease-out-expo`, `--ease-out-back`, `--ease-out-quad`, `--ease-hover`); `.reveal`/`.reveal-delay-1..6` (currently tuned **slow and subtle**: 1.4s duration, only 6% translateY — was tightened down twice after early passes felt too fast/jumpy); `.img-reveal*` (wipe+zoom+blur reveal classes, built but not yet applied anywhere — available for future use e.g. About Us team photos); `.btn-hover-group`/`.btn-hover-pill`/`.btn-hover-icon`/`.btn-hover-paw` (primary `Button` hover: pill scales to 0.93, icon circle nudges **left** `-0.375rem` to merge into the pill, paw rotates **left** `-35deg` in place — direction was corrected twice per client feedback, don't flip it back); `.cell-hover` (lift utility for clickable grid cells only); `.ball-expand` + `--ball-from-x/y/rot`/`--ball-to-rot` (Hero paw decorations animate outward from center on load); `.testimonial-slide-next/prev` (direction-aware slide+rotate for the testimonials carousel); `.gallery-marquee-track`/`.gallery-fade-mask` (Gallery's photo-strip carousel, see below).
- **`Button.tsx` / `SecondaryButton.tsx`** — hover wired via the classes above (Button) and a `group-hover:translate-x-1` arrow nudge + optional `icon` prop (SecondaryButton, so it can show a phone icon instead of an arrow).
- **`Card.tsx` / `ServiceCard.tsx`** — explicitly **no hover animation** (client wants hover/animation reserved for actual links/buttons, not static cards/images — this was a deliberate correction, don't re-add `hover-scale`/`cell-hover` to these). Separately, **`ServiceCard.tsx` now has `h-full` + `justify-between` on its inner box** so that in an `items-stretch` row, descriptions of different lengths still end with all CTA buttons aligned to the same baseline (title/description top-aligned, button bottom-pinned). This fix applies wherever `ServiceCard` is used — homepage `SuccessStories.tsx` and the Grooming page's "Two ways to keep your pet looking..." section both benefit automatically.
- **`Hero.tsx`** — photo corner radius set to `rounded-[32px]` (was `rounded-2xl`/24px — client wanted the middle photo's edge fully covered with no pink showing). The 4 decorative paw badges now animate outward from center on load (via `.ball-expand`) and are positioned at the far corners (`2%`/`88-92%` horizontal, `2%`/`62%` vertical) specifically so they clear the text column and button row at every breakpoint where they're visible. **Breakpoint changed from `sm:block` to `lg:block`** — paws are now hidden below `lg`, not just on phones, because at tablet widths they were overlapping the "See grooming services" link.
- **`Header.tsx`** — nav links get a subtle 300ms `hover:text-brand-primary-pink` color transition (desktop nav + mobile menu, both).
- **`globals.css` marquee speed** — `.animate-marquee`/`.animate-marquee-reverse` slowed from 40s to 90s (breed carousel + CraftSection curriculum chip rows both use this).
- **`ServiceChip.tsx`** — new `size="sm"` variant (smaller padding/icon/text) used for both CraftSection marquee rows per client request ("curriculum chips have to be small").
- **`Testimonials.tsx`** — prev/next now track a `direction` state that drives `.testimonial-slide-next`/`-prev` (slide 48px + 2° rotate in from the direction of travel, 0.5s `outQuart`), via React `key`-remount per index change.
- **`CTABanner.tsx`** — new optional `phoneNumber` prop; when paired with `phoneLabel`, renders a real `tel:` `SecondaryButton` (with phone icon) instead of plain static text. Wired up on homepage, `/grooming`, `/schooling` (`phoneNumber="+14169042652"`). Franchise's CTABanner usage is unaffected (it passes a `mailto:` JSX node as `phoneLabel` with no `phoneNumber`, so it still renders as plain text+link, unchanged).
- **`Gallery.tsx` — rebuilt twice this session, now a continuous drifting photo-strip carousel** (not a static 2x2 grid anymore):
  - First pass fixed an overflow bug (fixed-width grids were pushing the page's horizontal scroll width on narrow viewports) by making the grids `flex-1`/`min-w-0`.
  - Client then asked for something more ambitious: a single strip of all photos drifting **left-to-right**, passing **behind** the "Real pets. Real grooms. Fresh from our salon" heading, fading out as it goes under the text and fading back in on the far side — done with a CSS `mask-image` linear gradient (`.gallery-fade-mask`, both `mask-image` and `-webkit-mask-image`) on the absolutely-positioned photo track, **not** real z-index occlusion — this is the key technique, reuse it for similar "fade through text" effects elsewhere if asked.
  - Mask shape: fades at the **far left/right viewport edges too** (not just around the center text) — client specifically asked for "linear fade on both edges instead of radial," i.e. don't let photos pop in/out abruptly at the section boundary; current gradient stops: `transparent 0% → black 10–26% → transparent 40–60% (text zone) → black 74–90% → transparent 100%`.
  - Photo set was swapped mid-session: client replaced the 4 portrait photos in `public/images/gallery/` with **10 new square photos** (`pet-bichon.jpg`, `pet-black-toy-poodle.jpg`, `pet-cat.jpg`, `pet-conton.jpg`, `pet-king-charles.jpg`, `pet-lhasa.jpg`, `pet-standard-poodle.jpg`, `pet-yorkshire.jpg`, `poodle.jpg`, `schnuzzer.jpg`) — `GALLERY_PHOTOS` array and card size (`size-[260px]`, square) updated accordingly. **If the client adds/removes/renames files in this folder again, update the `GALLERY_PHOTOS` array in `Gallery.tsx` to match** — don't assume the old 4-photo array is current.
  - Loop speed convention used: **duration = (seconds-per-photo-to-cross) × (number of unique photos)**, since the marquee technique (duplicate the array, `translateX(-50%) → 0%`) loops once per full unique-set traversal. Currently `70s` for 10 photos at "~7s per photo." If the photo count changes again, recalculate the duration the same way rather than guessing a flat number.
  - The whole strip lives in an `absolute inset-0` layer with `min-h-[420px]` on the section as a safety floor so tall photos don't get vertically clipped by `overflow-hidden`.

### Open / unresolved item

- **CraftSection.tsx bottom curriculum marquee row still shows full school program names** (`PROGRAMS_ROW` — e.g. "Groomers Professional Development Program"). The client said this row shouldn't "connect to the programs" and referenced an attached image showing what they actually want there instead — **the image never came through in chat**. We applied the `size="sm"` chip styling and slower marquee speed to this row already (safe, cosmetic), but did **not** invent replacement copy, per the project's standing rule against fabricating content (see "Mistakes already made" above). **Follow up: get the reference image or explicit replacement copy from the client before touching this row's content again.**

---

## Locations collection, Schooling/Blog/Resources detail-page rebuild session (appended — biggest session yet, read carefully)

This session covered: Grooming/Schooling/Franchise/About Us page audits, a brand-new **Locations collection built to mirror a future Sanity schema exactly** (the user's explicit next step is standing up real Sanity), the Schooling Program detail page, and the Blog/Resources detail pages. The user's very next step after this is **building the actual database (Sanity)** — that's the immediate context for the next session.

### Locations collection — the big build

The user gave an explicit field list for a Sanity "Location" collection and asked for the location pages to be built against it. `src/lib/data/locations.ts` now mirrors that schema 1:1 (field names match exactly so it's a drop-in swap for a GROQ query later):

```
slug, locationKey, metaTitle, metaDescription, locationName, heroSubtext,
heroImage, heroCtaLabel, address, city, postalCode, neighbourhoodsServed[],
phoneCall, phoneText?, email, staffNotificationEmail, bookingMethod ("form"|"phone"),
hours[], googleMapsEmbedUrl, geoLat, geoLng, teamHeading, teamIntro, testimonialIds[]
```

Two relationships work differently, per explicit instruction:
- **`testimonialIds`** is a manual reference array (max 3) — resolved via `getTestimonialsByIds()` from the new `src/lib/data/testimonials.ts` (testimonials now have stable `id`s).
- **`teamMembers` is NOT a field on Location at all.** It's a query relationship: `src/lib/data/teamMembers.ts` has its own collection where each Team Member stores a `locationKey`, looked up via `getTeamMembersByLocationKey()`. **Only seeded with real names we actually have** (Lesley Weeks → toronto, Eggie Feng → mississauga) — Scarborough has zero team members on purpose rather than inventing fake staff; `LocationTeamSection` renders a "coming soon" fallback when the array is empty. **Add real names with their `locationKey` and they'll show up automatically — don't invent placeholder people.**

New components built: `LocationHero.tsx`, `LocationTeamSection.tsx`, `GroomerProfileCard.tsx`, `LocationVisitCard.tsx`. `Testimonials.tsx` was refactored to accept optional `testimonials`/`heading` props (defaults preserve existing homepage behavior) so location pages can pass their own filtered list — handles 0, 1, or 2+ items gracefully (carousel controls only show when there's more than 1).

**Google Maps embed (real bug hit and fixed):** `LocationVisitCard` embeds a live map via the keyless `https://maps.google.com/maps?q=<addr>&output=embed` iframe technique (no API key). The *first* attempt 404'd because the address query string wasn't properly URL-encoded (raw commas/`+`-for-space instead of `encodeURIComponent`/`%20`/`%2C`) — verified the fix with `curl` before declaring it done. **If you ever add another embed like this, always run the URL through `curl -I` first to confirm it 200s/301s before wiring it into an iframe** — don't trust that a hand-typed query string is valid.

**Appointment routing:** every "Request an Appointment" CTA tied to a location (listing cards, hero, visit card) now links to `/request-an-appointment?location=<locationKey>` via `getAppointmentHref()`. The form page reads that query param server-side and passes `locationKey`/`locationName` into `ContactForm`, which renders a hidden `<input name="locationKey">` plus a visible "Booking for: X location" badge. **The actual interactive form itself is being built on another platform** per the user — this wiring is just to make sure the location context is available wherever that integration lands.

**Hero photo bleed/fade technique (reused 3 times now — Franchise, Location, see below):** the hero card's text column is sized `lg:w-fit lg:flex-none` (shrinks to its own content width) instead of `flex-1`, so the photo column (`lg:absolute lg:inset-y-0 lg:right-0 lg:w-[58%]`) can expand underneath/behind it without a dead gap. The photo's left edge fades into the card's background colour via a CSS mask: `.hero-edge-fade` in `globals.css` (`mask-image: linear-gradient(to right, transparent 0%, black 20%)`). `object-position` is nudged toward `object-right` so the photo's subject doesn't get clipped on the right edge. **This exact pattern now lives in both `Hero.tsx`... actually `franchise/page.tsx`'s inline hero AND `LocationHero.tsx`** — if a 4th page needs a bleed-photo hero, copy from one of these two rather than re-deriving the math.

### Schooling Program detail page (`/schooling/[slug]`) — rebuilt

`Program` type (now canonical in `src/lib/data/programs.ts`, no longer duplicated in `ProgramCard.tsx`) gained a `description: string[]` (paragraphs) and `ctaLabel` field. Page is now a two-column layout: left card (back link, title, length/cost, full body, CTA), right "Other Programs" sidebar.

**Two Figma mock-data problems caught and corrected, not copied verbatim:**
1. Figma's "Cost" row literally showed the same placeholder text as "Program Length" (a designer fill-in-the-blank that never got filled in) — used the real `cost` field instead.
2. Figma's sidebar — captioned "Other Programs" — actually listed generic Resources-article titles ("Comprehensive Grooming Guides," etc.), clearly a copy-pasted component the designer never customized. Populated it with the **real other 5 programs** instead, since that matches what the heading says. **This same mismatched-sidebar pattern repeats on the Resources detail page (see below) — if you ever see this generic 8-item list again anywhere else in Figma, do not copy it verbatim, check what the heading actually says it should contain.**

Only "Groomers Professional Development Program" got real curriculum copy from Figma (added verbatim). The other 5 programs show a flagged placeholder paragraph rather than invented curriculum details — same pattern as Resources' `PLACEHOLDER_EXCERPT`.

### Blog (`/blog/[slug]`) and Resources (`/resources/[slug]`) detail pages — rebuilt

Both follow the same back-link/title/body(+sidebar or related-posts) shape. `BlogTeaser.tsx` was extended with optional `eyebrow`/`posts` props (defaults unchanged) and reused for the blog detail page's "Similar articles for **you**" section.

**Real content found in Figma that didn't exist in our data and was added** (not fabricated):
- Resources `"equipment"` entry — full first-day grooming kit list + PPE requirements, verbatim from Figma.
- Resources `"to-shave-or-not-shave-the-double-coat"` entry — full article body about double-coat shaving risks, verbatim from Figma.

**Judgment call worth knowing about:** Figma's "Blog Post" mockup frame happened to use this exact double-coat title/content as its example. We already had that exact title modeled as a *Resource* (not a Blog post), so the content went there instead of creating a duplicate/guessed-slug blog post. If a real, distinct blog post with this topic ever gets written, it'd be a new entry — don't assume it's a duplicate of the resource.

`Resource` type gained an optional `content?: string[]` field; `getResourceContent()` falls back to `excerpt`, or a "coming soon" note if even the excerpt is the generic placeholder.

### Card equal-height / button-bottom-pin pattern — now a site-wide rule

Explicit instruction: **any row of cards displayed side-by-side must render at equal height, with content top-aligned and CTA buttons (if any) bottom-pinned.** Implementation pattern: parent row gets `items-stretch` at the relevant breakpoint; card root gets `h-full`; if the card has a CTA button, wrap everything *above* the button in a `flex-1` inner div so the button naturally gets pushed to the bottom (no `justify-between` needed).

**Already fixed this session:** `Card.tsx` (universal — affects every page that uses it), `BeliefsSection.tsx`, `TrainingHighlights.tsx`, `WhyPartnerSection.tsx`, `AddOnsSection.tsx`, `TeamSection.tsx`'s homepage VALUES row, `GroomingServiceCard.tsx` + its row in `grooming/page.tsx`, the 3-card row in `grooming/page.tsx`.

**⚠️ NOT yet done — flag before claiming this is site-wide-complete:**
- `ProgramCard.tsx` (used in the `/schooling` programs grid) still doesn't have the `h-full` + `flex-1`-wrapper treatment — its "View Program" button won't pin to the bottom if card heights vary.
- `PricingInfoSection.tsx`'s bottom 2-card row (Pricing/Grooming page) wasn't touched either.

Check these two before telling the client the card-height pattern is applied everywhere.

### Other fixes this session

- **`Hero.tsx` (homepage) 3-photo row** — was `sm:grid-cols-[1fr_538px_1fr]` with a fixed pixel center column and fixed `h-[398px]`, which could overflow/crop on narrower-than-designed viewports. Changed to proportional `fr` units (`1fr 1.625fr 1fr`, matching the original 331:538:331 px ratio) + `aspect-ratio` per photo instead of fixed height, so all three photos scale down together in both width and height, never cropping. **If another multi-column photo row ever needs to "shrink together without cropping," use this technique** (proportional `fr` columns + per-item `aspect-[w/h]`, no fixed pixel heights).
- **`BreedPriceLookup.tsx`** — removed the breed photo entirely (and its `next/image` import) per explicit instruction: "we won't be adding [photos] to the pricing collection."
- **`VideoSection.tsx` (About Us)** — replaced the placeholder play-button div with a real YouTube embed (Lesley's interview).
- **`TeamSection.tsx` (About Us)** — the card's CTA button went from "About us" (→ `/about-us`, a self-link) to "Find a Salon Near You" (→ `/locations`), per explicit instruction.
- **Dev workflow gotcha hit again:** running `npx next build` while the `nextjs-dev` preview server is running corrupts its `.next` cache (stale webpack chunk references → the homepage 500s). **Use `npx tsc --noEmit` for verification during a live session; only run a real `next build` after stopping the dev server, or expect to `rm -rf .next` and restart it afterward.**
- **Preview screenshot staleness happened repeatedly again this session** — same as documented above. The fix is still: check `getComputedStyle(...).opacity`/`is-visible` class or DOM text content via `preview_eval` before trusting a blank/wrong screenshot; restart the preview server if it persists after a real reload.

### Immediate next step

The user's stated plan: **stand up the actual Sanity database next**, using `src/lib/data/locations.ts` (and `teamMembers.ts`, `testimonials.ts`, `programs.ts`, `resources.ts`, `blog.ts`) as the schema reference — field names were deliberately chosen to match 1:1. Re-read `/Users/joelpaolo/Desktop/Pampered Paws Website Build/STACK_TEMPLATE.md` before starting (it has Hostinger/Sanity gotchas from a prior project). Nothing has been pushed to git this session — confirm with the user before pushing, per standing session norms.
