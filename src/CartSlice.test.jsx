import { describe, expect, it } from 'vitest';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer, { addItem, removeItem, updateQuantity, selectCartQuantity, selectCartTotal } from './CartSlice.jsx';
const sample = { id: 'fern', name: 'Boston Fern', price: 25, image: '/fern.svg', category: 'Pet-friendly plants' };
const makeStore = () => configureStore({ reducer: { cart: cartReducer } });

describe('upstream CartSlice contract', () => {
  it('adds an item once and raises quantity when it is added again', () => {
    const store = makeStore();
    store.dispatch(addItem(sample)); store.dispatch(addItem(sample));
    expect(store.getState().cart.items).toHaveLength(1);
    expect(selectCartQuantity(store.getState())).toBe(2);
    expect(selectCartTotal(store.getState())).toBe(50);
  });
  it('updates quantity and removes a line when it reaches zero', () => {
    const store = makeStore();
    store.dispatch(addItem(sample));
    store.dispatch(updateQuantity({ id: 'fern', quantity: 2 }));
    expect(store.getState().cart.items[0].quantity).toBe(2);
    store.dispatch(updateQuantity({ id: 'fern', quantity: 1 }));
    store.dispatch(updateQuantity({ id: 'fern', quantity: 0 }));
    expect(store.getState().cart.items).toEqual([]);
    expect(selectCartQuantity(store.getState())).toBe(0);
    expect(selectCartTotal(store.getState())).toBe(0);
  });
  it('supports the explicit removeItem action', () => {
    const store = makeStore(); store.dispatch(addItem(sample)); store.dispatch(removeItem('fern'));
    expect(store.getState().cart.items).toEqual([]);
  });
});
