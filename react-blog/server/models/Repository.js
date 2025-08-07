import axios from 'axios';

class Repository {
  constructor() {
    this.baseURL = 'https://api.github.com';
  }

  async getTrendingRepositories(page = 1, perPage = 30) {
    try {
      // Calculate date 10 days ago from current date
      const tenDaysAgo = new Date();
      tenDaysAgo.setDate(tenDaysAgo.getDate() - 10);
      const dateString = tenDaysAgo.toISOString().split('T')[0];

      const url = `${this.baseURL}/search/repositories`;
      const params = {
        q: `created:>${dateString}`,
        sort: 'stars',
        order: 'desc',
        page,
        per_page: perPage
      };

      const response = await axios.get(url, { params });
      
      return {
        success: true,
        data: response.data.items,
        totalCount: response.data.total_count,
        page,
        hasNextPage: response.data.items.length === perPage
      };
    } catch (error) {
      console.error('Error fetching repositories:', error);
      return {
        success: false,
        error: error.message || 'Failed to fetch repositories'
      };
    }
  }

  async getRepositoryDetails(owner, repo) {
    try {
      const url = `${this.baseURL}/repos/${owner}/${repo}`;
      const response = await axios.get(url);
      
      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      console.error('Error fetching repository details:', error);
      return {
        success: false,
        error: error.message || 'Failed to fetch repository details'
      };
    }
  }
}

export default Repository; 