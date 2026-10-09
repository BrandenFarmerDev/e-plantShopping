import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import App from './App';
import cartReducer from './CartSlice.jsx';

function renderApp() {
  const store = configureStore({ reducer: { cart: cartReducer } });
  return { store, ...render(<Provider store={store}><App /></Provider>) };
}

describe('Paradise Nursery shopping flow', () => {
  it('renders three categories with six unique plants each', () => {
    renderApp();
    expect(screen.getByRole('heading', { name: 'Air-purifying plants' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Low-light favorites' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Pet-friendly picks' })).toBeInTheDocument();
    expect(screen.getAllByRole('button', { name: /Add .* to cart/ })).toHaveLength(18);
  });

  it('adds a plant, updates the navbar count, supports quantity changes and deletion', async () => {
    const user = userEvent.setup();
    renderApp();
    await user.click(screen.getByRole('button', { name: 'Add Monstera Deliciosa to cart' }));
    expect(screen.getByTestId('cart-quantity')).toHaveTextContent('1');
    expect(screen.getByRole('button', { name: 'Monstera Deliciosa added to cart' })).toBeDisabled();
    await user.click(screen.getByRole('link', { name: /Cart, 1 items/ }));
    expect(screen.getByText('Overall total')).toBeInTheDocument();
    expect(screen.getByTestId('cart-item-monstera-deliciosa').querySelector('.line-subtotal')).toHaveTextContent('$32.00');
    expect(document.querySelector('.summary-total strong')).toHaveTextContent('$32.00');
    await user.click(screen.getByRole('button', { name: 'Increase Monstera Deliciosa' }));
    expect(screen.getByTestId('cart-quantity')).toHaveTextContent('2');
    expect(screen.getByTestId('cart-item-monstera-deliciosa').querySelector('.line-subtotal')).toHaveTextContent('$64.00');
    expect(document.querySelector('.summary-total strong')).toHaveTextContent('$64.00');
    await user.click(screen.getByRole('button', { name: 'Decrease Monstera Deliciosa' }));
    expect(screen.getByTestId('cart-quantity')).toHaveTextContent('1');
    await user.click(screen.getByRole('button', { name: 'Remove Monstera Deliciosa' }));
    expect(screen.getByText('Your cart is taking a breather.')).toBeInTheDocument();
    expect(screen.getByTestId('cart-quantity')).toHaveTextContent('0');
  });

  it('removes a cart line when decrementing from quantity one to zero', async () => {
    const user = userEvent.setup();
    renderApp();
    await user.click(screen.getByRole('button', { name: 'Add Snake Plant to cart' }));
    await user.click(screen.getByRole('link', { name: /Cart, 1 items/ }));
    await user.click(screen.getByRole('button', { name: 'Decrease Snake Plant' }));
    expect(screen.getByText('Your cart is taking a breather.')).toBeInTheDocument();
    expect(screen.getByTestId('cart-quantity')).toHaveTextContent('0');
  });

  it('shows checkout Coming Soon feedback and keeps Continue Shopping available', async () => {
    const user = userEvent.setup();
    renderApp();
    await user.click(screen.getByRole('button', { name: 'Add Snake Plant to cart' }));
    await user.click(screen.getByRole('link', { name: /Cart, 1 items/ }));
    const checkout = screen.getByRole('button', { name: /Checkout.*Coming Soon/ });
    expect(checkout).toBeEnabled();
    await user.click(checkout);
    expect(screen.getByRole('status')).toHaveTextContent('Coming Soon');
    await user.click(screen.getByRole('button', { name: 'Continue shopping' }));
    expect(screen.getByRole('heading', { name: 'Air-purifying plants' })).toBeInTheDocument();
  });
});
