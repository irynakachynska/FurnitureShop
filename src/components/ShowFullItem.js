import React from "react";
import '../index.css';

function ShowFullItem({ item, onClose }) {
  if (!item) return null; // Якщо немає елемента, не показувати нічого

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      onClose(); // Закриваємо модальне вікно при кліку поза контентом
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="show-full-item">
        <div className="item-content">
          <img src={`./img/${item.img}`} alt={item.title} className="item-image" />
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
          <b>{item.price}$</b>
        </div>
        <button className="close-button" onClick={onClose}>
          ×
        </button>
      </div>
    </div>
  );
}

export default ShowFullItem;







  
