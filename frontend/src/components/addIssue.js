import React, { useState } from 'react';
import { addIssue } from '../api/issue.js';

const AddIssue = ({ onIssueAdded }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newIssue = { title, description };

    try {
      await addIssue(newIssue);
      onIssueAdded();
      setTitle('');
      setDescription('');
    } catch (error) {
      console.error('Error adding issue:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title: </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description: </label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add issue</button>
    </form>
  );
};

export default AddIssue;
