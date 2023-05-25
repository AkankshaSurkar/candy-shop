import React from "react";

const CartContext = React.createContext
({
    item:[],
    totalPrice: 0,
    addItem: (item)=>{},
    removeItem: (id)=>{}
});
export default CartContext;