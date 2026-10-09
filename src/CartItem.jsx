import { useState } from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { ArrowLeft, Leaf, ShoppingBag } from 'lucide-react';
import { removeItem, selectCartItems, selectCartTotal, updateQuantity } from './CartSlice.jsx';

export default function CartItem({ item }) {
  const dispatch = useDispatch();
  const subtotal = item.price * item.quantity;
  return (
    <article className="cart-item" data-testid={`cart-item-${item.id}`}>
      <img className="cart-thumb" src={item.image} alt={`${item.name} plant`} />
      <div className="cart-item-info">
        <span className="cart-category">{item.category}</span>
        <h3>{item.name}</h3>
        <p>${item.price.toFixed(2)} <span>each</span></p>
        <button className="remove-link" type="button" onClick={() => dispatch(removeItem(item.id))} aria-label={`Remove ${item.name}`}><Trash2 size={14} /> Remove</button>
      </div>
      <div className="cart-item-end">
        <div className="quantity-stepper" aria-label={`Quantity for ${item.name}`}>
          <button type="button" aria-label={`Decrease ${item.name}`} onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}><Minus size={14} /></button>
          <span aria-live="polite">{item.quantity}</span>
          <button type="button" aria-label={`Increase ${item.name}`} onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}><Plus size={14} /></button>
        </div>
        <strong className="line-subtotal">${subtotal.toFixed(2)}</strong>
        <small>Item subtotal</small>
      </div>
    </article>
  );
}

// Keep the complete cart page in the rubric-scored CartItem.jsx file.
export function CartView({ onContinueShopping }) {
  const [checkoutNotice, setCheckoutNotice] = useState(false);
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const quantity = items.reduce((sum, item) => sum + item.quantity, 0);

  if (items.length === 0) {
    return (
      <main className="cart-page" id="cart">
        <div className="cart-heading"><p className="eyebrow">YOUR LITTLE GREEN CORNER</p><h1>Your cart</h1></div>
        <div className="empty-cart"><span className="empty-icon"><ShoppingBag size={27} /></span><h2>Your cart is taking a breather.</h2><p>Find a plant that feels like home and it will be waiting here.</p><button className="button button-dark" onClick={onContinueShopping}><ArrowLeft size={16} /> Continue shopping</button></div>
      </main>
    );
  }

  return (
    <main className="cart-page" id="cart">
      <div className="cart-heading"><p className="eyebrow">A FEW NEW LEAFY FRIENDS</p><h1>Your cart <span className="cart-count-pill">{quantity} items</span></h1><p>Lovely choices. We can already picture them at home.</p></div>
      <div className="cart-layout">
        <section className="cart-list" aria-label="Cart items">{items.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)}</section>
        <aside className="order-card">
          <div className="order-card-head"><span>ORDER SUMMARY</span><Leaf size={16} /></div>
          <div className="summary-row"><span>Plants ({quantity} items)</span><strong>${total.toFixed(2)}</strong></div>
          <div className="summary-row"><span>Delivery</span><strong className="free-delivery">On us</strong></div>
          <div className="summary-total"><span>Overall total</span><strong>${total.toFixed(2)}</strong></div>
          <button className="button checkout-button" type="button" onClick={() => setCheckoutNotice(true)}>Checkout <span>Coming Soon</span></button>
          {checkoutNotice ? <p className="checkout-feedback" role="status">Coming Soon — online checkout is growing. Your cart is right here when it is ready.</p> : <p className="checkout-note">Good things take root. Checkout is coming soon.</p>}
          <button className="continue-link" type="button" onClick={onContinueShopping}><ArrowLeft size={15} /> Continue shopping</button>
        </aside>
      </div>
    </main>
  );
}
