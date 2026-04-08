// components/Task.js
// Renders a single task with:
// - checkbox to toggle done/not done
// - description text (with strike-through when done)
// - edit button that switches to edit mode
// - In edit mode: input field + Save/Cancel buttons

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleDone, editTodo } from '../features/todoSlice';

const Task = ({ task }) => {  // Receives the task object as a prop
  const dispatch = useDispatch();

  // Local state for edit mode: whether we are editing this specific task
  const [edit, setEdit] = useState(false);
  // Local state for the edited text (starts with current description)
  const [text, setText] = useState(task.description);

  // Save the edited description
  const handleSave = () => {
    if (text.trim()) {  // Don't save empty text
      // Dispatch editTodo action with the task's id and new description
      dispatch(editTodo({ id: task.id, description: text }));
      setEdit(false);   // Exit edit mode
    }
  };

  // Cancel editing – revert text and close edit mode
  const handleCancel = () => {
    setEdit(false);
    setText(task.description); // Reset to original description
  };

  // Pressing Enter in the input field saves automatically
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSave();
  };

  return (
    <div className="task-item">
      {edit ? (
        // ---------- EDIT MODE ----------
        <div className="task-edit">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyPress={handleKeyPress}
            autoFocus   // Automatically focus the input when edit mode opens
          />
          <div className="edit-actions">
            <button onClick={handleSave}>💾 Save</button>
            <button onClick={handleCancel}>✖ Cancel</button>
          </div>
        </div>
      ) : (
        // ---------- VIEW MODE ----------
        <div className="task-view">
          {/* Checkbox toggles isDone status */}
          <input
            type="checkbox"
            checked={task.isDone}   // Controlled by Redux state
            onChange={() => dispatch(toggleDone(task.id))} // Dispatch toggle action
          />
          {/* Task description – gets 'completed' class when isDone is true */}
          <span className={`task-text ${task.isDone ? 'completed' : ''}`}>
            {task.description}
          </span>
          {/* Edit button – switches to edit mode */}
          <button onClick={() => setEdit(true)} className="edit-btn">
            ✏️ Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default Task;