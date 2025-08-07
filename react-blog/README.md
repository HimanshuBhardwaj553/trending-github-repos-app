# Trending GitHub Repositories App

A responsive React web application that displays the most starred GitHub repositories created in the last 10 days. Built with React frontend and Node.js backend following the MVC pattern.

## Features

- **Trending Repositories**: Displays the most starred GitHub repositories from the last 10 days
- **Infinite Scrolling**: Automatically loads more repositories as you scroll
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Repository Details**: Shows repository name, description, star count, owner avatar, and language
- **Navigation**: Tab-based navigation between Trending and Settings
- **Error Handling**: Graceful error handling with retry functionality
- **Loading States**: Smooth loading indicators

## Tech Stack

### Frontend
- React 19
- Vite (Build tool)
- CSS3 with responsive design

### Backend
- Node.js
- Express.js
- Axios (HTTP client)
- CORS (Cross-origin resource sharing)

## Architecture

The application follows the **MVC (Model-View-Controller)** pattern:

### Backend MVC Structure
```
server/
├── models/
│   └── Repository.js      # Data layer - GitHub API interactions
├── controllers/
│   └── repositoryController.js  # Business logic - Request/Response handling
├── routes/
│   └── repositoryRoutes.js      # Route definitions
└── index.js              # Server entry point
```

### Frontend MVC Structure
```
src/
├── components/            # View layer
│   ├── TrendingRepos.jsx
│   ├── RepositoryList.jsx
│   ├── RepositoryItem.jsx
│   ├── LoadingSpinner.jsx
│   ├── ErrorMessage.jsx
│   ├── Settings.jsx
│   └── Header.jsx
├── App.jsx               # Controller - Main app logic
└── main.jsx             # Entry point
```

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd react-blog
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development servers**
   ```bash
   # Start both frontend and backend
   npm run dev:full
   
   # Or start them separately:
   # Backend only
   npm run server
   
   # Frontend only
   npm run dev
   ```

4. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000

## API Endpoints

### GET /api/repositories/trending
Fetches trending repositories with pagination.

**Query Parameters:**
- `page` (optional): Page number (default: 1)
- `per_page` (optional): Items per page (default: 30)

**Response:**
```json
{
  "success": true,
  "data": [...],
  "pagination": {
    "page": 1,
    "totalCount": 1000,
    "hasNextPage": true
  }
}
```

### GET /api/repositories/:owner/:repo
Fetches specific repository details.

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 123456,
    "name": "repository-name",
    "description": "Repository description",
    "stargazers_count": 1000,
    "owner": {
      "login": "username",
      "avatar_url": "https://..."
    }
  }
}
```

## Project Structure

```
react-blog/
├── server/                 # Backend
│   ├── models/
│   │   └── Repository.js
│   ├── controllers/
│   │   └── repositoryController.js
│   ├── routes/
│   │   └── repositoryRoutes.js
│   └── index.js
├── src/                   # Frontend
│   ├── components/
│   │   ├── TrendingRepos.jsx
│   │   ├── RepositoryList.jsx
│   │   ├── RepositoryItem.jsx
│   │   ├── LoadingSpinner.jsx
│   │   ├── ErrorMessage.jsx
│   │   ├── Settings.jsx
│   │   └── Header.jsx
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── package.json
└── README.md
```

## Key Features Implementation

### 1. GitHub API Integration
- Uses GitHub's search API to fetch repositories created in the last 10 days
- Sorts by stars in descending order
- Implements pagination for efficient data loading

### 2. Infinite Scrolling
- Uses Intersection Observer API for performance
- Automatically loads more content when user scrolls to bottom
- Prevents duplicate requests during loading

### 3. Responsive Design
- Mobile-first approach
- Flexible layout that adapts to different screen sizes
- Touch-friendly navigation

### 4. Error Handling
- Network error recovery
- Graceful fallbacks for missing data
- User-friendly error messages

## Development

### Available Scripts

- `npm run dev` - Start frontend development server
- `npm run server` - Start backend server
- `npm run dev:full` - Start both frontend and backend
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
NODE_ENV=development
```

## Deployment

### Frontend
The React app can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages

### Backend
The Node.js server can be deployed to:
- Heroku
- Railway
- DigitalOcean
- AWS

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).
