export type FilteredData = {
  items: Product[]; // Assuming Product is already defined
  totalCount: number;
  pageCount: number;
  currentPage: number;
  next: { page: number };
};

export type Params = {
  searchValue: string;
  categoryName: string;
  sortBy: string;
  priceRange: [number, number];
  limit: number;
  currentPage: number;
};

export type Product = {
  _id: string;
  imageUrl: string;
  title: string;
  price: number;
  count: number;
  rating: number;
  category: string;
};
