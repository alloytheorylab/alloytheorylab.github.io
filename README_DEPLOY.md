# Alloy Theory Laboratory website — deployment notes

This package contains the redesigned HTML, CSS, and JavaScript files for the GitHub Pages repository/site at `https://alloytheorylab.github.io/`.

## Install

1. Back up or commit the current repository.
2. Copy every file in this package into the repository root, allowing these HTML files to replace the existing versions.
3. Keep the existing image and data assets in their current locations. The redesign intentionally preserves the old paths listed below.
4. Commit and push to the branch currently used by GitHub Pages.
5. After deployment, open each navigation link on desktop and mobile and confirm that Google Analytics is receiving page views.

## Existing assets that must remain

- `alloy-g.gif`
- `headshot.jpg`
- `Missaka.jpg`
- `M1-alloy-phase-ML.png`
- `M2-Phonon-Kappa-extreme.png`
- `M3-Powder.png`
- `M4-AM-methods.png`
- `M6.png`
- `cover.jpg`
- `GA/GA1.jpg`
- `data/MagMaster.csv`

## Page structure

- `index.html` — Prince Sharma profile and homepage; keeps the animated alloy GIF.
- `research.html` — combined Research + Lab page, including Research Capabilities & Infrastructure and Lab Life & Highlights.
- `team.html` — team members and opportunities.
- `projects.html` + `publications.js` — interactive, searchable publication record.
- `data.html` — data-resource index.
- `magmaster.html` + `magmaster.js` — interactive MagMaster CSV viewer.
- `teaching.html` — teaching philosophy and courses.
- `news.html` — news, media, talks, and recognition.
- `about.html`, `lab.html`, `gallery.html`, and `publications.html` — compatibility redirects so old links do not break.

The homepage retains its personal blue/orange identity. Every interior page uses the University of Wyoming brown-and-gold palette. Navigation, locally bundled Montserrat typography, spacing, cards, responsive behavior, and the footer remain consistent throughout, so the color change does not fragment the site.

The homepage contains Prince Sharma's profile, professional links, education, research areas, and academic experience. The Team page intentionally omits a repeated investigator profile. Research areas appear only on the homepage; the Research page instead focuses on active questions, projects, capabilities, infrastructure, and lab highlights.

## Routine updates

- **New paper:** add one object near the top of the `publications` array in `publications.js`.
- **New team member:** duplicate a `person-card` in `team.html` and retain the matching student category.
- **New dataset:** duplicate a `dataset-card` in `data.html`, then add its data files under the existing `data/` folder.
- **New laboratory photo:** replace a campus or research image under `Lab Life & Highlights` in `research.html` while retaining the existing card structure.
- **New facility photo:** replace the relevant technical line-art block in `research.html`; retain the instrument name and update its status label when the equipment becomes operational.
- **New announcement:** add a date-sorted item at the top of the timeline in `news.html`.

## University of Wyoming brand assets

The supplied official UW signature, abbreviated mark, and campus photographs are bundled under `assets/uw/`. The site uses the full institutional signature in the footer and does not create a secondary UW logo for the laboratory. The Montserrat files under `assets/fonts/` were taken from UW's current web font resources so the pages do not depend on a third-party font service.

For future assets, use only approved UW sources:

- UW logos and unit signatures: https://www.uwyo.edu/publicrelations/marketing/uw-logos.html
- UW employee photo database (Canto): https://www.uwyo.edu/web/branding/photo-database.html
- Non-CMS UW header/footer downloads: https://www.uwyo.edu/web/branding/header-footer.html
- Pistol Pete mascot information: https://www.uwyo.edu/student-success/cowboy-coaches/characters/pistol-pete.html
- Cowboy Joe live mascot information: https://www.uwyo.edu/student-success/cowboy-coaches/characters/cowboy-joe.html

The official identity mark is the **Bucking Horse and Rider**. Request the correct web-ready logo or unit signature through UW's brand portal rather than downloading a random copy from image search.
