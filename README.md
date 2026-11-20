# India Crop Package-of-Practices Book

This folder contains an English, all-India reference for field preparation, sowing,
soil and climate suitability, seasonal windows, water, irrigation, weeds, crop
nutrition, special field practices, harvest signs, and indicative yields.

## Files

- [index.html](./index.html) — responsive crop-practices website entry point
- [practices.html](./practices.html) — searchable, crop-by-crop practice tables
- [styles.css](./styles.css) — website layout and responsive styling
- [about.html](./about.html) — about the learning resource
- [privacy.html](./privacy.html) — privacy information
- [student.html](./student.html) — student sign-in page
- [student.js](./student.js) — Firebase Google authentication
- [firebase-config.js](./firebase-config.js) — Firebase web app configuration
- [site.js](./site.js) — shared mobile navigation
- [script.js](./script.js) — crop search, category filters and statistics
- [practices.js](./practices.js) — crop practice data and filters
- [Package_of_Practices_India.md](./Package_of_Practices_India.md) — the crop guide
- [field-preparation.svg](./field-preparation.svg) — original field-preparation diagram
- [crop-growth-water.svg](./crop-growth-water.svg) — original growth-stage/water diagram

Run `py -m http.server 8000` in this folder and open `http://localhost:8000` in Chrome
or another modern browser. Use the **Field practices** link or a crop card to open
`practices.html` for 25 searchable crop/group guides, each
with a consistent field table. The website has no package install or build step; the
companion Markdown book remains available for reading or printing.

## Configure student Google sign-in

1. Create a Firebase project and register a Web app in the Firebase console.
2. In **Authentication → Sign-in method**, enable the Google provider.
3. In **Authentication → Settings → Authorized domains**, add `localhost` (and `127.0.0.1` if you serve the site using that hostname).
4. Copy the Firebase Web app configuration into `firebase-config.js`, replacing each `PASTE_...` value.
5. Serve the site over localhost and open `student.html`. Google sign-in will remain unavailable until configuration is complete.

The Firebase Web app config is intended for browser use; never put service-account credentials or private keys in this site. Google sign-in confirms a Google account only. This static site has no school-enrollment verification, private student data store, or protected student-only pages. Add trusted backend authorization before using it for restricted access or sensitive student information.

The current-production figures are from the Government of India 2025–26 Third Advance
Estimate (dated 27 May 2026). The estimate reports production but not per-hectare crop
yield; the site's yield ranges are clearly marked as indicative field benchmarks, not
official national productivity statistics. Use the linked Agricultural Statistics at
a Glance series for area/production/yield data.

## Important use note

This is a planning guide, not a state-specific recommendation. India’s crop calendars,
varieties, fertilizer recommendations, pesticide registrations, and achievable yields
vary substantially by state, district, soil test, irrigation source, and season. Confirm
the final variety, seed rate, fertilizer dose, and any pesticide use with the current
State Agricultural University (SAU), Krishi Vigyan Kendra (KVK), or local agriculture
department package. Follow the product label and local law for any pesticide.

Values in the book are broad indicative ranges for a well-managed crop, not guarantees.
The water figures are approximate crop evapotranspiration (ETc) in mm/day; they are not
irrigation depths and do not include rice-field seepage/percolation. Convert them to an
irrigation schedule using local weather, effective rainfall, soil moisture, and system
efficiency.
