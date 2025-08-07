import express from 'express';
import RepositoryController from '../controllers/repositoryController.js';

const router = express.Router();
const repositoryController = new RepositoryController();

// GET /api/repositories/trending - Get trending repositories
router.get('/trending', (req, res) => {
  repositoryController.getTrendingRepositories(req, res);
});

// GET /api/repositories/:owner/:repo - Get specific repository details
router.get('/:owner/:repo', (req, res) => {
  repositoryController.getRepositoryDetails(req, res);
});

export default router; 