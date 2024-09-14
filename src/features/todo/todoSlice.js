import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [{ id: 1, text: "hello" }],
  },
  reducers: {
    addTodo: (state, action) => {
      const todo = { id: Date.now(), text: action.payload };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      state.todos.map((todo) =>
        todo.id === action.payload
          ? todo.text = "hellp"
          : todo.text
      );
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export const TodoReducer = todoSlice.reducer;
