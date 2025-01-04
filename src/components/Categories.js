import React from 'react';

const Categories = ({ chooseCategory }) => { // Отримуємо функцію через пропси
    const categories = [
    { 
        key: 'all', 
        name: 'Все' 
    },
    { 
        key: 'table-lamp', 
        name: 'Лампа настільна' 
    },
    { 
        key: 'chair', 
        name: 'Крісло' 
    },
    {
        key: 'kitchen', 
        name: 'Кухня' 
    },
    { 
        key: 'sofa', 
        name: 'Диван' 
    },
    {
        key: 'office-chair', 
        name: 'Офісне крісло' 
    },
    { 
        key: 'mirror', 
        name: 'Дзеркало' 
    },
    { 
        key: 'cabinet', 
        name: 'Тумба' 
    },
    { 
        key: 'cupboard', 
        name: 'Шафа' ,
    }
    
  ];

  return (
    <div className="categories">
      {categories.map((el) => (
       <div key={el.key} onClick={() => chooseCategory(el.key)}>{el.name}</div>
      ))}
    </div>
  );
};

export default Categories;   
