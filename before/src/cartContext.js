import React,{ useEffect,useReducer,useContext } from "react";
import cartReducer from "./cartReducer";


const cartContext = React.createContext(null);

let initialCart;

  try {
    initialCart =  JSON.parse(localStorage.getItem("cart")) ?? [];
  } catch (error) {
    console.error("The cart could not be parsed into json.");
    initialCart = [];
  }


export function CartProvider(props){
    const [cart,dispatch] = useReducer(cartReducer,initialCart);
    useEffect(() => localStorage.setItem("cart",JSON.stringify(cart)),[cart]);

    const contextValue = {
        cart,
        dispatch
    }
    return <cartContext.Provider value={contextValue}>{props.childern}</cartContext.Provider>
}

export function useCart(){
    const context = useContext(cartContext);
    if(!context){
      throw new Error("use cart error");
    }
    return context;
}