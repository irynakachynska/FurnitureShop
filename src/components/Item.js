import React from "react";
import '../index.css';

function Item({ item, onAdd, onShowItem }) {
  return (
    <div className="item">
      <img
        src={`./img/${item.img}`}
        alt={item.title}
        onClick={() => onShowItem(item.id)}  // Викликає toggleShowFullItem з правильним id
      />
      <h2>{item.title}</h2>
      <p>{item.desc}</p>
      <b>{item.price}$</b>
      <div
        className="add-to-cart"
        onClick={() => {
          onAdd(item); // Викликаємо функцію додавання товару
        }}
      > + 
      </div>
    </div>
  );
}

export default Item;




