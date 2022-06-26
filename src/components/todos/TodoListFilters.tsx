import React from "react";
import { useRecoilState } from "recoil";
import { todoListFilterState } from "../../atoms/todos";
import { TodoListFilterType } from "../../atoms/todos/type";

export const TodoListFilters = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = (
    e: React.ChangeEvent<{ value: unknown }>
  ) => {
    setFilter(e.target.value as TodoListFilterType);
  };

  return (
    <>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </>
  );
};
