import { createSlice } from "@reduxjs/toolkit";
import type { Todo } from "../../type/Todo";

const initialState = {
  todos: [] as Todo[], // TypeScript infers types automatically
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo: Todo = {
        id: crypto.randomUUID(),
        text: action.payload,
        completed: false,
      };
      state.todos.push(newTodo);
    },
    removeTodo:(state, action)=>{
        const idToRemove = action.payload;
        state.todos= state.todos.filter((todo)=> todo.id !== idToRemove)
    }
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
