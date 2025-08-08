// API configuration for different environments
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const API_ENDPOINTS = {
  TRENDING_REPOS: `${API_BASE_URL}/api/repositories/trending`,
  HEALTH: `${API_BASE_URL}/api/health`,
};

export default API_BASE_URL; 