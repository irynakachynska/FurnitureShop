import React, { useState } from 'react';
import { FaShoppingCart, FaBars } from "react-icons/fa"; // Додаємо іконку для відкриття меню
import '../index.css';
import Order from './Order';

// Функція для рендерингу замовлень
const ShowOrders = ({ orders, onDelete }) => {
  let summa = 0;
  orders.forEach(el => summa += parseFloat(el.price));  
  return (
    <div>
      {orders.map((el) => (
        <Order onDelete={onDelete} key={el.id} item={el} />
      ))}
      <p className='summa'>Сумма: {new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(summa)}$</p>
    </div>
  );
};

// Функція для відображення, коли немає замовлень
const ShowNothing = () => {
  return (
    <div className="empty">
      <h2>Немає товару</h2>
    </div>
  );
};

// Основний компонент Header
export default function Header({ orders, onDelete }) {
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Стан для керування меню

  // Функція для обробки кліку на кнопку меню
  const toggleMenu = (e) => {
    e.stopPropagation(); // Зупиняємо поширення події на інші елементи
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header" onClick={() => setMenuOpen(false)}>
      <div className="wrapper">
        <span className="logo">House Staff</span>

        {/* Кнопка для відкриття меню */}
        <div className="menu-toggle" onClick={toggleMenu}>
          <FaBars />
        </div>

        {/* Список навігації */}
        <ul className={`nav ${menuOpen ? 'open' : ''}`}>
          <li>Про нас</li>
          <li>Контакти</li>
          <li>Кабінет</li>
        </ul>

        {/* Кнопка корзини */}
        <div
          className="shop-cart-button"
          onClick={() => setCartOpen(!cartOpen)}
        >
          <FaShoppingCart
            className={`cart-icon ${cartOpen ? 'active' : ''}`}
          />
        </div>

        {/* Вміст корзини */}
        {cartOpen && (
          <div className="shop-cart">
            {orders.length > 0 ? <ShowOrders orders={orders} onDelete={onDelete} /> : <ShowNothing />}
          </div>
        )}

        {/* Основний блок з фоновим зображенням */}
        <div
          className="presentation"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/img/nana.jpg)`,
          }}
        >
          <div className="promo-text">за низькими цінами</div>
        </div>
      </div>
    </header>
  );
}
