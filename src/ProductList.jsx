import { useDispatch, useSelector } from 'react-redux';
import { ArrowRight, Check, Leaf, Sun, Sparkles } from 'lucide-react';
import { collections, products } from './plants.js';
import { addItem, selectCartItems } from './CartSlice.jsx';

function PlantCard({ plant, added, onAdd }) {
  return (
    <article className="plant-card" data-testid={`plant-${plant.id}`}>
      <div className="plant-image-wrap">
        <img className="plant-image" src={plant.image} alt={`${plant.name} potted plant`} loading="lazy" />
        <span className="plant-care"><Sun size={13} /> {plant.light}</span>
        <span className="plant-note"><Sparkles size={12} /> {plant.note}</span>
      </div>
      <div className="plant-info">
        <div><h3>{plant.name}</h3><p className="plant-category">{plant.category}</p></div>
        <strong className="plant-price">${plant.price.toFixed(2)}</strong>
      </div>
      <button className={`add-button${added ? ' is-added' : ''}`} type="button" onClick={() => onAdd(plant)} disabled={added} aria-label={added ? `${plant.name} added to cart` : `Add ${plant.name} to cart`}>
        {added ? <><Check size={16} /> Added to cart</> : <><Leaf size={15} /> Add to cart <ArrowRight size={15} /></>}
      </button>
    </article>
  );
}

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartIds = new Set(cartItems.map((item) => item.id));

  return (
    <section className="plant-collection" id="plants" aria-labelledby="plants-title">
      <div className="collection-intro">
        <div><p className="eyebrow">A GOOD PLACE TO GROW</p><h2 id="plants-title">Find your <em>kind of green.</em></h2></div>
        <p>Little leafy upgrades for every room, every light level, and every kind of plant person.</p>
      </div>
      <nav className="category-nav" aria-label="Plant categories">
        {collections.map((group, index) => <a href={`#${group.id}`} key={group.id}><span>0{index + 1}</span>{group.name}</a>)}
      </nav>
      <div className="catalog-groups">
        {collections.map((group, index) => (
          <section className="catalog-category" id={group.id} key={group.id} aria-labelledby={`${group.id}-title`}>
            <div className="category-heading"><div><p className="eyebrow">{group.eyebrow}</p><h3 id={`${group.id}-title`}>{group.name}</h3></div><span className="category-index">0{index + 1} / 03</span></div>
            <p className="category-description">{group.description}</p>
            <div className="plant-grid">
              {products.filter((plant) => plant.categoryId === group.id).map((plant) => <PlantCard key={plant.id} plant={plant} added={cartIds.has(plant.id)} onAdd={(item) => dispatch(addItem(item))} />)}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
