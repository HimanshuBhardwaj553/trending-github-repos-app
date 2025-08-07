import React from 'react';
import RepositoryItem from './RepositoryItem';

const RepositoryList = ({ repositories, lastRepoElementRef }) => {
  if (repositories.length === 0) {
    return (
      <div className="empty-state">
        <p>No trending repositories found</p>
      </div>
    );
  }

  return (
    <div className="repository-list">
      {repositories.map((repo, index) => {
        const isLastElement = index === repositories.length - 1;
        return (
          <div
            key={`${repo.id}-${index}`}
            ref={isLastElement ? lastRepoElementRef : null}
          >
            <RepositoryItem repository={repo} />
          </div>
        );
      })}
    </div>
  );
};

export default RepositoryList; 