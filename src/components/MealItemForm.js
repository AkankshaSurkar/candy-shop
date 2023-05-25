import { useRef, useState } from "react";

const MealItemForm = (props) => {
  const [priceIsValid, setPriceIsValid] = useState(true);
  const priceInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredPrice = priceInputRef.current.value;
    const enteredPriceNumber = +enteredPrice;

    if (
      enteredPrice.trim().length === 0 ||
      enteredPriceNumber < 1 ||
      enteredPriceNumber > 5
    ) {
      setPriceIsValid(false);
      return;
    }
    props.onAddToCart(enteredPriceNumber);
  };
  return (
    <form onSubmit={submitHandler}>
      ref={priceInputRef}
      label='Price', type = 'number', min='1', max: '5',
      <button>Buy one</button>
      <button>Buy two</button>
      <button>Buy Three</button>
      {!priceIsValid && <p>please enter a valid price</p>}
    </form>
  );
};
export default MealItemForm;
