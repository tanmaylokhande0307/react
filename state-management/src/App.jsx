import React, { useState, useEffect } from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Products from "./Products";
import { Routes, Route } from "react-router-dom";
import Detail from "./Details";
import Cart from "./Cart";

export default function App() {
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('cart')) ?? [];
    } catch (error) {
      console.error("data could not be parsed");
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('cart',JSON.stringify(cart))
  },[cart])

  function addToCart(id, sku) {
    setCart((items) => {
      const itemInCart = items.find((i) => i.sku === sku);
      if (itemInCart) {
        return items.map((i) =>
          i.sku === sku ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...items, { id, sku, quantity: 1 }];
      }
    });
  }

  function updateQuantity(sku, quantity) {

    setCart((items) => {
      if(quantity === 0){
        return items.filter((i) => i.sku !== sku);
      }
      return items.map((i) => (i.sku === sku ? { ...i, quantity } : i));
    });
  
  }


  return (
    <>
      <div className="content">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<h1>Welcome</h1>} />
            <Route path="/:category" element={<Products />} />
            <Route
              path="/:category/:id"
              element={<Detail addToCart={addToCart} />}
            />
            <Route
              path="/cart"
              element={<Cart cart={cart} updateQuantity={updateQuantity} />}
            />
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}
