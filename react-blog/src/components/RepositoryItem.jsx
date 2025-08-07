import React from 'react';

const RepositoryItem = ({ repository }) => {
  const formatStars = (stars) => {
    if (stars >= 1000) {
      return `${(stars / 1000).toFixed(1)}k`;
    }
    return stars.toString();
  };

  const formatDescription = (description) => {
    if (!description) return 'No description available';
    return description.length > 100 
      ? `${description.substring(0, 100)}...` 
      : description;
  };

  return (
    <div className="repository-item">
      <div className="repo-header">
        <h3 className="repo-name">{repository.name}</h3>
      </div>
      
      <p className="repo-description">
        {formatDescription(repository.description)}
      </p>
      
      <div className="repo-owner">
        <img 
          src={repository.owner.avatar_url} 
          alt={`${repository.owner.login} avatar`}
          className="owner-avatar"
        />
        <span className="owner-name">{repository.owner.login}</span>
        <div className="repo-stars">
          <span className="star-icon">⭐</span>
          <span className="star-count">{formatStars(repository.stargazers_count)}</span>
        </div>
      </div>
      
      <div className="repo-meta">
        <span className="repo-language">
          {repository.language || 'Unknown'}
        </span>
        <span className="repo-updated">
          Updated {new Date(repository.updated_at).toLocaleDateString()}
        </span>
      </div>
    </div>
  );
};

export default RepositoryItem; 