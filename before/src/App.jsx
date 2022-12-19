import React from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Products from "./Products";
import { Routes,Route } from "react-router-dom";
import Detail from "./Details";
import Cart from "./Cart";
import Checkout from "./Checkout";


export default function App() {



  // function addToCart(sku,id){
  //   setcart((items) => {
  //     const itemInCart = items.find((i) => i.sku === sku);
  //     if(itemInCart){
  //       return items.map( (i) => i.sku === sku ? { ...i,quantity: i.quantity+1 } : i );
  //     } 
  //     else{
  //       return [...items,{id,sku,quantity: 1}];
  //     }
  //   });
  // }
  
  // function updateQuantity(sku, quantity){
  //   setcart((items) => {
  //     if(quantity === 0){
  //       return items.filter((i) => i.sku !== sku)
  //     }
  //     return items.map( (i) => i.sku === sku ? {...i,quantity } : i );
  //   })
  // }

  // function emptyCart(){
  //   setcart([]);
  // }
    
  
  return (
    <>
      <div className="content">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<h1>Welcome</h1>}/>
            <Route path="/:category" element={<Products />}/>
            <Route path="/:category/:id" element={<Detail />}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/checkout" element={<Checkout/>}/>
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}
