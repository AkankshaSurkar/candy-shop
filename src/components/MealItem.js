import  {useContext} from 'react';
import CartContext from './CartContext';
import MealItemForm from './MealItemForm';

const MealItem =(props)=>{
    const cartCtx = useContext(CartContext);
    const price = `$${props.price.toFixed(2)}`;
    
    const addToCartHandler = amount =>{
        cartCtx.addItem({
            id:props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
    };
    return(
        <div>
        <div>{props.name}</div>
        <div>{props.description}</div>
        <div>{props.price}</div>


    <MealItemForm onAddToCart={addToCartHandler}/>
    </div>
    );

};
export default MealItem;