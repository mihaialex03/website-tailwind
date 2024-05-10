import {create} from 'zustand';

const useCartStore = create((set) => ({
  cartItems: [],
  addToCart: (item) => set((state) => {
    // Verify if the item is in the cart already
    const itemExists = state.cartItems.some((cartItem) => cartItem.id === item.id);
    if (!itemExists) {
      // If the item is not in the cart, we add it to the cart
      return { cartItems: [...state.cartItems, item] };
    }
    return state;
  }),
  removeFromCart: (itemId) => set((state) => ({
    cartItems: state.cartItems.filter((item) => item.id !== itemId),
  })),
}));

export default useCartStore;
