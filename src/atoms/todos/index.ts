import axios from "axios";
import { atom, selector } from "recoil";
import { TodoListFilterType, TodoType, TodoListStatsType } from "./type";

export const todoListState = atom<TodoType[]>({
  key: "TodoList",
  default: [],
});

export const todoListFilterState = atom<TodoListFilterType>({
  key: "TodoListFilter",
  default: "Show All",
});

export const fetchTodoList = selector<TodoType[]>({
  key: "FetchTodoList",
  get: async () => {
    const response = await axios.get<TodoType[]>(
      "https://jsonplaceholder.typicode.com/todos/"
    );
    return response.data;
  },
});

export const filteredTodoListState = selector<TodoType[]>({
  key: "FilteredTodoList",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case "Show Completed":
        return list.filter((item) => item.completed);
      case "Show Uncompleted":
        return list.filter((item) => !item.completed);
      default:
        return list;
    }
  },
});

export const todoListStatsState = selector<TodoListStatsType>({
  key: "TodoListStats",
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item) => item.completed).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted =
      totalNum === 0 ? 0 : (totalCompletedNum / totalNum) * 100;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    };
  },
});
