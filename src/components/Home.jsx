import React from "react";
import iphone from "../assets/iphone.jpg";
import watch from "../assets/watch.jpg";
import "../styles/Home.css";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { addToCart, calculateTotal } from "../redux/cartSlice";

const Home = () => {
  const dispatch = useDispatch();

  const addtoCartHandler = (options) => {
    dispatch(addToCart(options));
    dispatch(calculateTotal());

    toast.success("Item added to cart");
  };
  const data = [
    {
      id: 1,
      name: "IPhone 14 pro Max",
      price: "1500",
      image: iphone,
    },
    {
      id: 2,
      name: "Apple Watch Series 6",
      price: "900",
      image: watch,
    },
  ];

  return (
    <div className="home">
      {data.map((i, index) => (
        <Product
          key={i.id}
          id={i.id}
          name={i.name}
          price={i.price}
          image={i.image}
          handler={addtoCartHandler}
        />
      ))}
    </div>
  );
};

const Product = ({ id, name, price, image, handler }) => (
  <div className="product">
    <img className="img" src={image} alt="name" />
    <h4>{name}</h4>
    <p>${price}</p>
    <button
      className="btn"
      onClick={() => handler({ id, name, price, image, quantity: 1 })}
    >
      Add to Cart
    </button>
  </div>
);

export default Home;
