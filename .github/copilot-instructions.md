# Copilot Instructions for Website Builder

## Project Overview
This is a static web app for displaying card listings ("Ralyale Listings") using vanilla JavaScript, HTML, and Tailwind CSS (via CDN). The app loads card data from `assets/data/clash.json` and renders interactive card elements with modal details.

## Architecture & Data Flow
- **Entry Point:** `index.html` loads `js/script.js` as a module.
- **Data Source:** Card data is fetched from `assets/data/clash.json` (array of card objects with stats).
- **Main Components:**
  - `js/card.js`: Defines the `Card` class and its rendering method.
  - `js/stats.js`: Defines the `Stats` class for card statistics.
  - `js/cardModal.js`: Handles modal display logic for card details.
  - `js/script.js`: Orchestrates data loading, card instantiation, and UI rendering.
- **UI Structure:**
  - Card grid is rendered in the `#card-grid` element.
  - Modal is managed via `#card_modal_bg` and `#card_modal` elements.

## Key Patterns & Conventions
- **Class-based Models:** Card and Stats are modeled as ES6 classes. Card elements are created via `Card.CreateCardElement()`.
- **Module Imports:** All JS files use ES6 module syntax (`import ... from ...`).
- **Modal Logic:** Modal triggers are attached to card elements with the `modal-btn` class. Modal logic is centralized in `cardModal.js`.
- **Styling:** Uses Tailwind CSS via CDN. No custom CSS files are present.
- **Data Fetching:** Uses `fetch` API to load JSON data asynchronously.
- **File Organization:**
  - Data: `assets/data/clash.json`
  - Images: `assets/images/`
  - JS: `js/`
  - HTML: `index.html`, `html/devs.html`

## Developer Workflows
- **No build step required.** All code runs natively in the browser.
- **Debugging:** Use browser DevTools. No custom logging or error handling conventions.
- **Testing:** No automated tests or test runner present.
- **Live reload:** Not configured; refresh browser to see changes.

## Integration Points
- **External:**
  - Tailwind CSS via CDN (`@tailwindcss/browser@4`).
  - Card images are loaded from external URLs in the JSON data.

## Examples
- To add a new card, update `assets/data/clash.json` with the new card object.
- To change card rendering, modify `Card.CreateCardElement()` in `js/card.js`.
- To update modal behavior, edit `js/cardModal.js`.

## Recommendations for AI Agents
- Always use ES6 module syntax for new JS files.
- Keep UI logic modular and class-based.
- Reference `index.html` for main UI structure and entry points.
- Follow the data flow: JSON → JS classes → DOM rendering.
- Avoid adding build tools or frameworks unless requested.

---
_Last updated: 2025-10-09_
