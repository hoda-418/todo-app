// app/store.js
// Configures the Redux store using Redux Toolkit's configureStore.
// It combines reducers – here we only have the 'todos' reducer imported from todoSlice.

import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todoSlice';

export const store = configureStore({
  reducer: {
    todos: todoReducer,   // This key 'todos' will be used in useSelector(state => state.todos)
  },
});