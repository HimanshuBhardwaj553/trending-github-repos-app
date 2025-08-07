import React from 'react';

const ErrorMessage = ({ message, onRetry }) => {
  return (
    <div className="error-message">
      <p className="error-text">{message}</p>
      {onRetry && (
        <button className="retry-button" onClick={onRetry}>
          Try Again
        </button>
      )}
    </div>
  );
};

export default ErrorMessage; 