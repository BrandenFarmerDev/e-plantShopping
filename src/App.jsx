import { useState } from 'react';
import { Leaf, Menu, ShoppingBag, X, ArrowUpRight } from 'lucide-react';
import AboutUs from './AboutUs.jsx';
import ProductList from './ProductList.jsx';
import { CartView } from './CartItem.jsx';
import { useSelector } from 'react-redux';
import { selectCartQuantity } from './CartSlice.jsx';
import './App.css';

function Navbar({ activePage, onNavigate, quantity }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const go = (page) => { onNavigate(page); setMenuOpen(false); };
  return (
    <header className="site-header">
      <a className="wordmark" href="#home" onClick={(event) => { event.preventDefault(); go('home'); }} aria-label="Paradise Nursery home">
        <span className="wordmark-mark"><Leaf size={19} /></span><span>paradise<span>nursery</span></span>
      </a>
      <button className="mobile-menu-toggle" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      <nav className={`main-nav${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
        <a className={activePage === 'home' ? 'active' : ''} href="#home" onClick={(event) => { event.preventDefault(); go('home'); }}>Home</a>
        <a className={activePage === 'plants' ? 'active' : ''} href="#plants" onClick={(event) => { event.preventDefault(); go('plants'); }}>Plants <span className="nav-new">NEW</span></a>
        <a className={activePage === 'cart' ? 'active' : ''} href="#cart" onClick={(event) => { event.preventDefault(); go('cart'); }} aria-label={`Cart, ${quantity} items`}>
          <ShoppingBag size={17} /> Cart <span className="cart-badge" data-testid="cart-quantity">{quantity}</span>
        </a>
      </nav>
      <button className="header-note" type="button" onClick={() => go('plants')}>Find your plant <ArrowUpRight size={15} /></button>
    </header>
  );
}

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [notice, setNotice] = useState('');
  const quantity = useSelector(selectCartQuantity);
  const navigate = (page) => {
    setActivePage(page);
    setNotice('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-shell">
      <Navbar activePage={activePage} onNavigate={navigate} quantity={quantity} />
      {activePage === 'cart' ? <CartView onContinueShopping={() => navigate('plants')} /> : (
        <main>
          {activePage === 'home' && <AboutUs />}
          <div className="page-ribbon"><span><Leaf size={14} /> A slower, greener kind of shopping</span><span>Complimentary plant care card with every order</span></div>
          <ProductList />
          <section className="nursery-note"><span className="note-flower"><Leaf size={23} /></span><div><p className="eyebrow">A NOTE FROM OUR NURSERY</p><h2>Good things grow with a little care.</h2><p>Every plant is selected for its character, packed with care, and ready to make your space feel a little more like you.</p></div><button type="button" className="note-link" onClick={() => setNotice('Our nursery notes are growing. Check back soon!')}>Our story <ArrowUpRight size={15} /></button></section>
        </main>
      )}
      <footer className="site-footer"><a className="footer-brand" href="#home" onClick={(event) => { event.preventDefault(); navigate('home'); }}><Leaf size={17} /> Paradise Nursery</a><span>Grow a little good wherever you are.</span><span>© 2026 Paradise Nursery</span></footer>
      {notice && <div className="toast" role="status"><Leaf size={17} /> {notice}<button type="button" aria-label="Dismiss" onClick={() => setNotice('')}>×</button></div>}
    </div>
  );
}
