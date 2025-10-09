# Ralyale Listings Website Builder

A static web app for browsing Clash Royale card listings. Built with vanilla JavaScript and Tailwind CSS, it loads card data from a JSON file and displays interactive cards with modal details.

## Features

- Card grid view with images, stats, and rarity
- Modal pop-up for detailed card info
- Responsive design using Tailwind CSS (via CDN)
- No build step or dependencies—just open `index.html` in your browser

## Project Structure

```
assets/
  data/clash.json      # Card data (edit to add new cards)
  images/              # Project images
js/
  card.js              # Card class and rendering
  stats.js             # Stats class for card stats
  cardModal.js         # Modal logic for card details
  script.js            # Main app logic and data loading
index.html             # Main entry point
html/devs.html         # Developer info page
```

## Getting Started

1. Clone or download the repo
2. Open `index.html` in your browser
3. To add cards, edit `assets/data/clash.json`

## Customization

- Change card rendering: edit `Card.CreateCardElement()` in `js/card.js`
- Update modal behavior: edit `js/cardModal.js`
- Style changes: use Tailwind utility classes in HTML

## License
    No Licenses