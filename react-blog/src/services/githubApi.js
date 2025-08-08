// GitHub API service for direct integration
const GITHUB_API_BASE = 'https://api.github.com';

export const fetchTrendingRepositories = async (page = 1, perPage = 30) => {
  try {
    // Get repositories created in the last week, sorted by stars
    const date = new Date();
    date.setDate(date.getDate() - 7);
    const since = date.toISOString().split('T')[0];
    
    const response = await fetch(
      `${GITHUB_API_BASE}/search/repositories?q=created:>${since}&sort=stars&order=desc&page=${page}&per_page=${perPage}`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'Trending-Repos-App'
        }
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const data = await response.json();
    
    // Transform the data to match your existing format
    const repositories = data.items.map(repo => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      stargazers_count: repo.stargazers_count,
      language: repo.language,
      updated_at: repo.updated_at,
      owner: {
        login: repo.owner.login,
        avatar_url: repo.owner.avatar_url
      },
      html_url: repo.html_url
    }));

    return {
      success: true,
      data: repositories,
      pagination: {
        hasNextPage: data.items.length === perPage,
        currentPage: page,
        totalCount: data.total_count
      }
    };
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
}; 