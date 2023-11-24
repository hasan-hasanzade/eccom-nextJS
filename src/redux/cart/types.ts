export type CartItem = {
  _id: string;
  imageUrl: string;
  title: string;
  price: number;
  count: number;
  rating: number;
  category: string;
};

export interface CartSliceState {
  totalPrice: number;
  totalCount: number;
  items: CartItem[];
}
