import React, { useState, useEffect, useCallback, useRef } from 'react';
import RepositoryList from './RepositoryList';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';

const TrendingRepos = () => {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  const observer = useRef();
  const lastRepoElementRef = useCallback(node => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPage(prevPage => prevPage + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, [loading, hasMore]);

  const fetchRepositories = async (pageNum) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(`http://localhost:5000/api/repositories/trending?page=${pageNum}&per_page=30`);
      const data = await response.json();
      
      if (!data.success) {
        throw new Error(data.error || 'Failed to fetch repositories');
      }
      
      if (pageNum === 1) {
        setRepositories(data.data);
      } else {
        setRepositories(prev => [...prev, ...data.data]);
      }
      
      setHasMore(data.pagination.hasNextPage);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
      setIsInitialLoad(false);
    }
  };

  useEffect(() => {
    fetchRepositories(1);
  }, []);

  useEffect(() => {
    if (page > 1) {
      fetchRepositories(page);
    }
  }, [page]);

  if (isInitialLoad && loading) {
    return <LoadingSpinner />;
  }

  if (error && repositories.length === 0) {
    return <ErrorMessage message={error} onRetry={() => fetchRepositories(1)} />;
  }

  return (
    <div className="trending-repos">
      <RepositoryList 
        repositories={repositories}
        lastRepoElementRef={lastRepoElementRef}
      />
      {loading && <LoadingSpinner />}
      {error && repositories.length > 0 && (
        <ErrorMessage message={error} onRetry={() => fetchRepositories(page)} />
      )}
    </div>
  );
};

export default TrendingRepos; 