import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

function App() {
  const [orders, setOrders] = useState([]); // Стан для кошика
  const [items] = useState([// Містить всі елементи
    {
      id: 1,
      title: "Лампа настільна",
      img: "table lamp.jpeg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing",
      category: "table-lamp",
      price: "800,00",
    },
    {
      id: 2,
      title: "Крісло",
      img: "chair.jpeg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing",
      category: "chair",
      price: "2000,00",
    },
    {
      id: 3,
      title: "Кухня",
      img: "kitchen.jpeg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing",
      category: "kitchen",
      price: "12000,00",
    },
    {
      id: 4,
      title: "Диван",
      img: "light-sofa.jpeg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing",
      category: "sofa",
      price: "9000,00",
    },
    {
      id: 5,
      title: "Крісло офісне",
      img: "office-chair.jpeg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing",
      category: "office-chair",
      price: "6000,00",
    },
    {
      id: 6,
      title: "Дзеркало",
      img: "mirror.jpeg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing",
      category: "mirror",
      price: "3000,00",
    },
    {
      id: 7,
      title: "Тумба",
      img: "cabinet.jpeg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing",
      category: "cabinet",
      price: "1200,00",
    },
    {
      id: 8,
      title: "Шафа",
      img: "cupboard.jpeg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing",
      category: "cupboard",
      price: "4500,00",
    },
    {
      id: 9,
      title: "Шафа купе",
      img: "Coat closet.jpeg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing",
      category: "cupboard",
      price: "9000,00",
    }
  ]);
  
 
   // Стан для id товару, для якого потрібно показати деталі
   const [showFullItemId, setShowFullItemId] = useState(null); 

   // Стан для поточних елементів (відображення категорій)
   const [currentItems, setCurrentItems] = useState(items);
 
   // Оновлення currentItems на основі items
   useEffect(() => {
     setCurrentItems(items);
   }, [items]);
 
   // Додавання товару до кошика
   const addToOrder = (item) => {
     if (!orders.some((el) => el.id === item.id)) {
       setOrders([...orders, item]);
     }
   };
 
   // Перемикання стану showFullItemId
   const toggleShowFullItem = (id) => {
     setShowFullItemId((prevId) => (prevId === id ? null : id)); // Перемикає між показом та приховуванням
   };
 
   // Вибір категорії
   const chooseCategory = (category) => {
     if (category === "all") {
       setCurrentItems(items);
     } else {
       setCurrentItems(items.filter((el) => el.category === category));
     }
   };
 
   // Видалення товару з кошика
   const deleteOrder = (id) => {
     setOrders(orders.filter((order) => order.id !== id));
   };
 
   return (
     <div className="wrapper">
       <Header orders={orders} onDelete={deleteOrder} />
       <Categories chooseCategory={chooseCategory} />
       <Items 
         items={currentItems} 
         onAdd={addToOrder} 
         onShowItem={toggleShowFullItem} // Передаємо функцію для перемикання 
       />
       
       {/* Умова для показу ShowFullItem */}
       {showFullItemId !== null && (
      <ShowFullItem 
       item={items.find((item) => item.id === showFullItemId)} 
       onClose={() => setShowFullItemId(null)} // Закриваємо модальне вікно
      />
      )}
       <Footer />
     </div>
   );
 }
 
 export default App;