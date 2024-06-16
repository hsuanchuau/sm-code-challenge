import React, { useEffect, useState } from 'react';
import { getIssues, deleteIssue } from '../api/issue.js';

const IssuesList = () => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    fetchIssues();
  }, []);

  const fetchIssues = async () => {
    try {
      const data = await getIssues();
      setIssues(data);
    } catch (error) {
      console.error('Error fetching issues:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteIssue(id);
      fetchIssues(); // Refresh the list after deletion
    } catch (error) {
      console.error(`Error deleting issues with id ${id}:`, error);
    }
  };

  return (
    <div>
      <h1>Issues List</h1>
      <ul>
        {issues.map((issue) => (
          <li key={issue.id}>
            {issue.title} - {issue.description}
            <button onClick={() => handleDelete(issue.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IssuesList;
