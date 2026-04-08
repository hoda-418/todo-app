# 📝 Redux ToDo App

A simple ToDo application built with **React** and **Redux Toolkit** to manage global state. It allows users to add, edit, mark tasks as done/not done, and filter tasks accordingly.

---

## 📁 Features

- ✅ Add new tasks
- ✅ Edit existing tasks
- ✅ Toggle tasks as done or not done
- ✅ Filter tasks: All / Done / Not Done
- ✅ Uses Redux Toolkit for global state management

---

🧩 Redux Overview
✅ store.js
Configures the Redux store using configureStore.

Registers the todoSlice reducer under the key todos.

✅ todoSlice.js
Uses createSlice from Redux Toolkit.

Contains state:

list: array of task objects

filter: string ('all', 'done', 'not')

Contains reducers:

addTodo

toggleDone

editTodo

setFilter

💡 Components
🔹 AddTask.js
Controlled input field with a button

Dispatches addTodo action to Redux

🔹 Task.js
Displays a single task with checkbox and edit button

Dispatches toggleDone or editTodo

🔹 ListTask.js
Gets list and filter from Redux

Filters tasks based on filter

Maps over tasks and renders Task component
🛠 Built With
React
Redux Toolkit
React Redux

