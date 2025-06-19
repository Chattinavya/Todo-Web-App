import React from 'react';

function CompletedList({ tasks }) {
  return (
    <div style={{ marginTop: 30 }}>
      <h2>✅ Completed Tasks</h2>
      {tasks.length === 0 ? <p>No completed tasks.</p> : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {tasks.map(task => (
            <li key={task.id} style={{ marginBottom: 10 }}>
              <span style={{ textDecoration: 'line-through' }}>{task.title}</span>
              {task.dateTime && <div><small>📅 {task.dateTime}</small></div>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CompletedList;
