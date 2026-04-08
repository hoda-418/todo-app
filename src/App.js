import React from 'react';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <div className="app-header">
        <h1>
          <span>📝</span> Cozy Tasks
        </h1>
      </div>
      <AddTask />
      <ListTask />
    </div>
  );
};

export default App;