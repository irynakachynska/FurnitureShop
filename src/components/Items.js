import React from 'react';
import Item from './Item';

function Items({ items, onAdd, onShowItem }) {
  return (
    <main>
      {items.map((el) => (
        <Item 
          onShowItem={() => onShowItem(el.id)}  // Передаємо id товару для перемикання
          key={el.id} 
          item={el} 
          onAdd={onAdd}
        />
      ))}
    </main>
  );
}

export default Items;



