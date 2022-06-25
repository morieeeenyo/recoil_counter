export type TodoType = {
  id: number;
  text: string;
  isComplete: boolean
};

export type TodoListFilterType = 'Show All' | 'Show Completed' | 'Show Uncompleted'

export type TodoListStatsType = {
  totalNum: number
  totalCompletedNum: number
  totalUncompletedNum: number
  percentCompleted: number
}