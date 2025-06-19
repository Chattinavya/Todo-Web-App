import React, { useState } from 'react';

function TaskForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [dateTime, setDateTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;
    onAdd({
      id: Date.now(),
      title,
      dateTime,
      completed: false
    });
    setTitle('');
    setDateTime('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      <input
        type="text"
        placeholder="Task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={{ padding: 8, width: '200px', marginRight: 10 }}
      />
      <input
        type="datetime-local"
        value={dateTime}
        onChange={(e) => setDateTime(e.target.value)}
        style={{ padding: 8, marginRight: 10 }}
      />
      <button type="submit" style={{ padding: 8 }}>Add</button>
    </form>
  );
}

export default TaskForm;
