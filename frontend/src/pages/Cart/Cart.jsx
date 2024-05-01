import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);

  return (
    <>
      <div className="cart">
        <div className="card-items">
          <div className="card-items-title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br />
          <hr />
          {food_list.map((item, index) => {
            if (cartItems[item.id] > 0) {
              return (
                <div>
                  <div className="card-items-title cart-items-item">
                    <img src={item.image} alt="" />
                    <p>{item.name}</p>
                    <p>€{item.price}</p>
                    <p>{cartItems[item.id]}</p>
                    <p>€{item.price * cartItems[item.id]}</p>
                    <p
                      onClick={() => removeFromCart(item.id)}
                      className="cross"
                    >
                      x
                    </p>
                  </div>
                  <hr />
                </div>
              );
            }
          })}
        </div>
        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Total</h2>
            <div>
              <div className="cart-total-details">
                <p>SubTotal</p>
                <p>{0}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery fee</p>
                <p>{2}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>{0}</b>
              </div>
            </div>
            <button>Process to Checkout</button>
          </div>
          <div className="cart-promocode">
            <div>
              <p>If you have a promo code,Enter it here</p>
              <div className="cart-promocode-input">
                <input type="text" placeholder="promo code" />
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
