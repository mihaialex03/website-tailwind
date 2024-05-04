import {create} from 'zustand';

const useCartStore = create((set) => ({
  cartItems: [],
  addToCart: (item) => set((state) => {
    // Verificam daca itemul este deja in cart
    const itemExists = state.cartItems.some((cartItem) => cartItem.id === item.id);
    if (!itemExists) {
      // Daca nu e itemul in cos, il adaugam la cart
      return { cartItems: [...state.cartItems, item] };
    }
    return state;
  }),
  removeFromCart: (itemId) => set((state) => ({
    cartItems: state.cartItems.filter((item) => item.id !== itemId),
  })),
}));

export default useCartStore;
