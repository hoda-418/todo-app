// features/todoSlice.js
// Defines the initial state, reducers, and actions for the todo feature.
// Uses createSlice from Redux Toolkit to reduce boilerplate.

import { createSlice, nanoid } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',          // Name used in action types (e.g., 'todos/addTodo')
  initialState: {
    list: [],             // Array of task objects: { id, description, isDone }
    filter: 'all',        // Can be 'all', 'done', or 'not'
  },
  reducers: {
    // addTodo: expects a payload (string description)
    addTodo: (state, action) => {
      state.list.push({
        id: nanoid(),               // Generates a unique ID (e.g., "V1StGXR8_Z5jdHi6B-myT")
        description: action.payload,
        isDone: false,
      });
    },
    // toggleDone: expects payload = task id (string)
    toggleDone: (state, action) => {
      const todo = state.list.find(t => t.id === action.payload);
      if (todo) todo.isDone = !todo.isDone; // Flip boolean
    },
    // editTodo: expects payload = { id, description }
    editTodo: (state, action) => {
      const { id, description } = action.payload;
      const todo = state.list.find(t => t.id === id);
      if (todo) todo.description = description;
    },
    // setFilter: expects payload = 'all', 'done', or 'not'
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

// Export actions so components can dispatch them
export const { addTodo, toggleDone, editTodo, setFilter } = todoSlice.actions;

// Export the reducer to be used in store.js
export default todoSlice.reducer;