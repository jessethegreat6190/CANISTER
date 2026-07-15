# Canister Archive

World's largest open database tracking tear gas canister use in protests worldwide.

## Features

- **Grid View**  Browse all 132+ records with images, locations, dates, and source links
- **Map View**  Interactive world map highlighting origin countries with company details
- **About**  Project background and partner organizations
- **Filters** Filter by category: Chemical, Conventional Weapons, Kinetic Impact, Less Lethal Launchers, Restraints, Striking Weapons
- **Search** Search by name, location, category, or date
- **Dark Mode**  Toggle light/dark theme

## Tech Stack

Single-page application, no build tools:
- HTML + CSS (Poppins font, Material Symbols)
- Vanilla JavaScript
- Google GeoChart (map visualization)
- Hosted on GitHub Pages

## File Structure

```
index.html      — Main HTML
style.css       — All styles
script.js       — All logic (data, rendering, interactions)
```

## Data

Records are stored as an array in `script.js` with fields:
`[name, image_id, categories[], source_url, location, date]`

Images are served via Cloudflare Image CDN.

## Deployment

Push to `main` branch. GitHub Pages serves from root at:
`https://jessethegreat6190.github.io/CANISTER/`

## Credits

Built from data originally collected and published by [canister.thraets.org](https://canister.thraets.org).
