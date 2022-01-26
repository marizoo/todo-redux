import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const todoSlice = createSlice({
  name: "todoSlice",
  initialState: [
    { id: 11, text: "todo11", isCompleted: false },
    { id: 22, text: "todo22", isCompleted: false },
    { id: 33, text: "todo33", isCompleted: true },
  ],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        text: action.payload.text,
        isCompleted: false,
      };
      state.push(newTodo);
    },
    deleteTodo: (state, action) => {
      state.filter((text) => text.id !== action.payload.id);
    },
    toggleComplete: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].isCompleted = action.payload.isCompleted;
    },
  },
});

export const { addTodo, deleteTodo, toggleComplete } = todoSlice.actions;
export default todoSlice.reducer;
