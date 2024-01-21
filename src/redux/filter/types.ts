export interface FilterSliceState {
   searchValue: string,
   pageCount: number,
   categoryName: string,
   sortBy: string,
   priceRange: [number, number],
}