export interface TodoItem {
  text: string;
  id: number | undefined;
  completed: boolean;
}

export interface TodoSchema {
  todos: TodoItem[];
}
