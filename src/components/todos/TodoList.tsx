import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { TodoItem } from "./TodoItem";
import { TodoItemCreator } from "./TodoItemCreator";
import { TodoListFilters } from "./TodoListFilters";
import { TodoListStats } from "./TodoListStats";
import { fetchTodoList, filteredTodoListState, todoListState } from '../../atoms/todos/index';

export const TodoList = () => {
  const allTodos = useRecoilValue(fetchTodoList);
  const filteredTodos = useRecoilValue(filteredTodoListState);
  const [todoList, setTodoList] = useRecoilState(todoListState);

  useEffect(() => {
    setTodoList(allTodos)
  }, [])

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      {filteredTodos.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
};
