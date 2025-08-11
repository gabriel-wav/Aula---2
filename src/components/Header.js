import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../logo192.png'; // O caminho agora está correto (de components para src)

function Header({ cartItemCount, onCartClick }) {
  return (
    <header className="app-header">
      <div className="logo-container">
        <img src={logo} alt="Logo Gabriel Shop" className="logo" />
        <h1 className="shop-title">Gabriel Shop</h1>
      </div>
      <nav className="main-nav">
        <Link to="/">Início</Link>
        <Link to="/produtos">Produtos</Link>
        <button onClick={onCartClick} className="cart-button">
          Carrinho ({cartItemCount})
        </button>
      </nav>
    </header>
  );
}

export default Header;