# IBM React Project Rubric Map

| Graded file | Rubric role | Implementation |
|---|---|---|
| `README.md` | Project description | Names the e-plantShopping project/repository and describes the Paradise Nursery storefront and how to run it. |
| `src/AboutUs.jsx` | About Us | Nursery introduction, mission, care promises, and a local plant illustration. |
| `src/App.css` | Application styling | Responsive nursery storefront, catalog, and cart styling, including a bundled-asset landing hero `background-image`, compact-phone layout, and neutral-gray disabled Add button state. |
| `src/App.jsx` | Main application | Paradise Nursery brand, Home/Plants/Cart navigation, exact `Get Started` plants action, live item count, about section, catalog view, cart view, and checkout notice. |
| `src/CartSlice.jsx` | Redux cart logic | Exports the expected `addItem`, `removeItem`, and `updateQuantity` actions. Reaching quantity zero removes the item. |
| `src/ProductList.jsx` | Plant catalog | Three categories, six distinct plants per category, local image, name, price, and add/disabled state. |
| `src/CartItem.jsx` | Cart page and row actions | This graded file contains both the exported line-item component and the named `CartView` page: thumbnails, names, unit prices, quantity controls, item subtotals, delete action, overall total, checkout notice, and Continue Shopping. Minus at one removes the item. |
| `src/store.js` | Redux store | `configureStore({ reducer: { cart: cartReducer } })`, importing `./CartSlice.jsx` (the store's required `./CartSlice` path resolves to this file). |

Run `npm test`, `npm run lint`, and `npm run build` for local checks. No GitHub publication or IBM submission is performed by these commands.
