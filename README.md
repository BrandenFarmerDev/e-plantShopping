# e-plantShopping — Paradise Nursery

**e-plantShopping** is an IBM React + Redux Toolkit final project. The storefront is branded **Paradise Nursery**, a responsive online plant shop with 18 distinct plants in three collections.

Explore the Home and Plants sections, add plants to your cart, and use the cart controls to change quantities, remove items, review each line subtotal, and see the overall total. Checkout is intentionally marked **Coming Soon** and displays an in-page message when selected.

## Run locally

Requirements: Node.js 20 or newer and npm.

```bash
npm install
npm run dev
```

Vite prints the local development URL, typically `http://localhost:5173/`.

```bash
npm test
npm run lint
npm run build
```

## Project layout

The rubric-mapped files are directly under `src/`: `AboutUs.jsx`, `App.css`, `App.jsx`, `CartSlice.jsx`, `CartItem.jsx`, `ProductList.jsx`, and `store.js`. Original locally stored plant thumbnails are in `public/plants/`. Details are listed in [RUBRIC_MAP.md](RUBRIC_MAP.md).

The repository began from the IBM Developer Skills Network `e-plantShopping` skeleton. Its upstream Git history and `LICENSE` are retained.
