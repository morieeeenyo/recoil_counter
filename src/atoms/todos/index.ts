import { atom } from "recoil";
import { TodoType } from './type';

export const todoListState = atom<TodoType[]>({
  key: 'TodoList',
  default: [],
});

