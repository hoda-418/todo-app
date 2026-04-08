// components/ListTask.js
// This component reads the list of tasks and the current filter from Redux,
// filters the tasks accordingly, and displays them.
// It also renders the filter buttons that dispatch setFilter actions.

import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Hooks to read and write Redux state
import Task from './Task';                               // The component that renders a single task
import { setFilter } from '../features/todoSlice';      // Action to change the filter ('all'/'done'/'not')

const ListTask = () => {
  // useSelector subscribes to the Redux store and returns the slice we need.
  // Here we get the `todos` slice which contains `list` (array of tasks) and `filter` (string).
  const { list, filter } = useSelector(state => state.todos);

  const dispatch = useDispatch(); // To dispatch setFilter when buttons are clicked

  // Filter the list based on current filter value
  const filtered = list.filter(task => {
    if (filter === 'done') return task.isDone === true;   // Show only completed tasks
    if (filter === 'not') return task.isDone === false;   // Show only incomplete tasks
    return true;                                          // 'all' – show everything
  });

  // Helper to get readable button labels (also adds icons)
  const getFilterLabel = (f) => {
    if (f === 'all') return 'All';
    if (f === 'done') return '✓ Done';
    return '✨ Not Done';
  };

  return (
    <div>
      {/* Filter buttons section */}
      <div className="filter-section">
        <div className="filter-buttons">
          {['all', 'done', 'not'].map((f) => (
            <button
              key={f}
              className={`filter-btn ${filter === f ? 'active' : ''}`}
              onClick={() => dispatch(setFilter(f))} // Update Redux filter state
            >
              {getFilterLabel(f)}
            </button>
          ))}
        </div>
        {/* Task counter – shows how many tasks are currently visible */}
        <div className="task-count">
          🧸 {filtered.length} {filtered.length === 1 ? 'task' : 'tasks'}
        </div>
      </div>

      {/* List of tasks */}
      <div className="tasks-list">
        {filtered.length === 0 ? (
          // Empty state when no tasks match the filter
          <div className="empty-state">
            <span>🌸✨</span>
            <p>So peaceful here! Add a new task 🌿</p>
          </div>
        ) : (
          // Render each task – passing the whole task object as prop
          filtered.map(task => <Task key={task.id} task={task} />)
        )}
      </div>
    </div>
  );
};

export default ListTask;