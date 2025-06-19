import React, { useState } from 'react';

function TaskList({ tasks, onUpdate, onDelete, onComplete }) {
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editDateTime, setEditDateTime] = useState('');

  const startEdit = (task) => {
    setEditingId(task.id);
    setEditTitle(task.title);
    setEditDateTime(task.dateTime);
  };

  const saveEdit = (id) => {
    onUpdate(id, { title: editTitle, dateTime: editDateTime });
    setEditingId(null);
  };

  return (
    <div>
      <h2>🗂️ Pending Tasks</h2>
      {tasks.length === 0 && <p>No tasks to show.</p>}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map(task => (
          <li key={task.id} style={{ marginBottom: 10 }}>
            {editingId === task.id ? (
              <>
                <input
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  style={{ padding: 5, marginRight: 10 }}
                />
                <input
                  type="datetime-local"
                  value={editDateTime}
                  onChange={(e) => setEditDateTime(e.target.value)}
                  style={{ padding: 5, marginRight: 10 }}
                />
                <button onClick={() => saveEdit(task.id)}>Save</button>
              </>
            ) : (
              <>
                <strong>{task.title}</strong> <br />
                <small>{task.dateTime ? `📅 ${task.dateTime}` : ''}</small>
                <div style={{ marginTop: 5 }}>
                  <button onClick={() => startEdit(task)} style={{ marginRight: 5 }}>Edit</button>
                  <button onClick={() => onComplete(task.id)} style={{ marginRight: 5 }}>Mark Complete</button>
                  <button onClick={() => onDelete(task.id)}>Delete</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
