import { Status } from '../types/statusEnum';

export type Blog = {
  _id: string;
  imageUrl: string;
  title: string;
  date: number;
  month: string;
  author: string;
  text: string;
  mainText: string;
};

export interface BlogSliceState {
  blogItems: Blog[];
  blogItem: Blog | null;
  status: Status;
}