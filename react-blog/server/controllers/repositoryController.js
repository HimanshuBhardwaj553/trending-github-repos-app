import Repository from '../models/Repository.js';

class RepositoryController {
  constructor() {
    this.repositoryModel = new Repository();
  }

  async getTrendingRepositories(req, res) {
    try {
      const page = parseInt(req.query.page) || 1;
      const perPage = parseInt(req.query.per_page) || 30;

      const result = await this.repositoryModel.getTrendingRepositories(page, perPage);

      if (!result.success) {
        return res.status(500).json({
          success: false,
          error: result.error
        });
      }

      res.json({
        success: true,
        data: result.data,
        pagination: {
          page: result.page,
          totalCount: result.totalCount,
          hasNextPage: result.hasNextPage
        }
      });
    } catch (error) {
      console.error('Controller error:', error);
      res.status(500).json({
        success: false,
        error: 'Internal server error'
      });
    }
  }

  async getRepositoryDetails(req, res) {
    try {
      const { owner, repo } = req.params;

      if (!owner || !repo) {
        return res.status(400).json({
          success: false,
          error: 'Owner and repository name are required'
        });
      }

      const result = await this.repositoryModel.getRepositoryDetails(owner, repo);

      if (!result.success) {
        return res.status(500).json({
          success: false,
          error: result.error
        });
      }

      res.json({
        success: true,
        data: result.data
      });
    } catch (error) {
      console.error('Controller error:', error);
      res.status(500).json({
        success: false,
        error: 'Internal server error'
      });
    }
  }
}

export default RepositoryController; 