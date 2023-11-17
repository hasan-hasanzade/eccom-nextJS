import { CartItem } from '../redux/cart/types';

export const getCartFromLS = () => {
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem('cart');
    return data ? (JSON.parse(data) as CartItem[]) : [];
  }
};
