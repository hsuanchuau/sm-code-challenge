import React from 'react';
import IssueList from './IssueList';
import AddIssue from './addIssue';

const App = () => {
  const handleIssueAdded = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <h1>Issue Management</h1>
      <AddIssue onIssueAdded={handleIssueAdded} />
      <IssueList />
    </div>
  );
};

export default App;
