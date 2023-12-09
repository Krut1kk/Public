// redux
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// types
import { TodoItem, TodoSchema } from "../types/todo";

const initialState: TodoSchema = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoItem>) => {
      const currentState = state.todos;

      const newTodo = action.payload;

      currentState.push(newTodo);

      state.todos = currentState;
    },

    deleteTodo: (state, action: PayloadAction<number>) => {
      const currentState = state.todos;

      const deleteTodoId = action.payload;

      const todosWithDeletedTodo = currentState.filter(
        (todo) => todo.id !== deleteTodoId
      );

      state.todos = todosWithDeletedTodo;
    },
  },
});

export const { actions: todoActions, reducer: todoReducer } = todoSlice;
