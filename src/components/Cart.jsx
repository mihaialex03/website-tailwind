import React from "react";
import useCartStore from "../store/useCartStore";
import { Link as ScrollLink } from "react-scroll";


const Cart = () => {
  // using useCartStore Hook
  const { cartItems, removeFromCart } = useCartStore((state) => ({
    cartItems: state.cartItems,
    removeFromCart: state.removeFromCart,
  }));
  // Deleting items from the Cart
  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
  };
  // calculate total amount
  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <>
      {cartItems.length > 0 && (
        <section id="Cart">
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
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                className="bg-primary  text-background py-2 px-4 rounded-lg mt-4 inline-block mx-auto"
              >
                Proceed to checkout
              </ScrollLink>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Cart;
