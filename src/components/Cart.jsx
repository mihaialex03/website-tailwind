import React from "react";
import useCartStore from "../store/useCartStore";

const Cart = () => {
  const { cartItems, removeFromCart } = useCartStore((state) => ({
    cartItems: state.cartItems,
    removeFromCart: state.removeFromCart,
  }));

  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
  };

  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <>
      {cartItems.length > 0 && (
        <div className="container mx-auto py-12">
          <h2 className="text-4xl font-bold mb-8 text-center text-primary">
            Shopping Cart
          </h2>
          <ul>
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="bg-secondary shadow-lg rounded-lg overflow-hidden flex justify-between items-center mx-4 my-2 px-6 py-4"
              >
                <div>
                  <p className="text-xl font-semibold mb-2 text-background">
                    {item.name}
                  </p>
                  <p className="text-background">Price: {item.price}$</p>
                </div>
                <button
                  onClick={() => handleRemoveFromCart(item.id)}
                  className="bg-accent  text-background py-2 px-4 rounded-lg"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="text-center mt-8">
            <p className="text-xl text-primary">
              Total amount: ${totalAmount}
            </p>
            <p className="text-xl text-primary">
              Number of items: {cartItems.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
