import React from 'react';
import '../index.css';
import { FaTrash} from 'react-icons/fa';

function Order({ item, onDelete }) {
  return (
    <div className="item">
      <img src={`./img/${item.img}`} alt={item.title} />
      <h2>{item.title}</h2>
      <p>{item.price}$</p>
      <FaTrash className='delete-icon' onClick={() => onDelete(item.id)} />
    </div>
  );
}

export default Order;
