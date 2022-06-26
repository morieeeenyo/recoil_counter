import React from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../../atoms/todos";
import { TodoType } from "../../atoms/todos/type";

interface Props {
  item: TodoType;
}

export const TodoItem = ({ item }: Props) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  const editItemText = (e: React.ChangeEvent<{ value: string }>) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      title: e.target.value,
    });

    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      completed: !item.completed,
    });

    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);

    setTodoList(newList);
  };

  function replaceItemAtIndex(
    arr: TodoType[],
    index: number,
    newValue: TodoType
  ) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
  }

  function removeItemAtIndex(arr: TodoType[], index: number) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  }

  return (
    <div>
      <input type="text" value={item.title} onChange={editItemText} />
      <input
        type="checkbox"
        checked={item.completed}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  );
};
