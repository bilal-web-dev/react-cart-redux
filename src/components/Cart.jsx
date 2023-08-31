import React from "react";
import "../styles/Cart.css";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteItem,
  increment,
  decrement,
  calculateTotal,
} from "../redux/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const incrementHandler = (id) => {
    dispatch(increment(id));
    dispatch(calculateTotal());
  };

  const decrementHandler = (id) => {
    dispatch(decrement(id));
    dispatch(calculateTotal());
  };

  const deleteHandler = (id) => {
    dispatch(deleteItem(id));
    dispatch(calculateTotal());
  };

  const { cartItems, subtotal, shipping, tax, total } = useSelector(
    (state) => state.cart
  );

  return (
    <>
      <div className="top">
        {cartItems.length > 0 ? (
          cartItems.map((i, index) => (
            <CartItem
              key={i.id}
              id={i.id}
              name={i.name}
              price={i.price}
              image={i.image}
              quantity={i.quantity}
              increment={incrementHandler}
              decrement={decrementHandler}
              deleteItem={deleteHandler}
            />
          ))
        ) : (
          <h1 style={{ margin: "20px" }}>Cart is Empty</h1>
        )}
      </div>
      <div className="bottom">
        {cartItems.length > 0 ? (
          <>
            <p>Subtotal: {subtotal}</p>
            <p>Shipping: {shipping}</p>
            <p>Tax: {tax}</p>
            <p>Total: {total}</p>
          </>
        ) : null}
      </div>
    </>
  );
};

const CartItem = ({
  id,
  name,
  price,
  image,
  quantity,
  increment,
  decrement,
  deleteItem,
  calculateTotal,
}) => (
  <div className="cartItem">
    <img className="cartImg" src={image} alt="name" />
    <h4>{name}</h4>

    <button onClick={() => decrement(id)} className="button">
      -
    </button>
    <p>{quantity}</p>
    <button onClick={() => increment(id)} className="button">
      +
    </button>
    <button onClick={() => deleteItem(id)} className="button">
      <AiFillDelete />
    </button>
  </div>
);

export default Cart;
