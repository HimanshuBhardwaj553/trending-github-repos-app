# Deployment Guide

This guide will help you deploy your Trending GitHub Repos app to Vercel or Netlify.

## Prerequisites

1. Make sure your code is pushed to a GitHub repository
2. Have accounts on Vercel and/or Netlify

## Backend Deployment (Required)

Since your app has a backend API, you need to deploy it separately. Here are your options:

### Option 1: Deploy Backend to Railway/Render/Heroku
1. Create a new repository for your backend
2. Copy the `server/` folder to the new repository
3. Deploy to Railway, Render, or Heroku
4. Get your backend URL (e.g., `https://your-backend.railway.app`)

### Option 2: Use GitHub API Directly (Recommended)
Modify the frontend to call GitHub API directly instead of using your backend.

## Frontend Deployment

### For Vercel:

1. **Connect your repository:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Select the `react-blog` folder

2. **Configure environment variables:**
   - In your Vercel project settings, add:
   ```
   VITE_API_URL=https://your-backend-url.com
   ```
   - Or if using GitHub API directly, leave it empty

3. **Deploy:**
   - Vercel will automatically detect it's a Vite project
   - The `vercel.json` file is already configured
   - Click "Deploy"

### For Netlify:

1. **Connect your repository:**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `dist`

2. **Configure environment variables:**
   - In Site settings > Environment variables, add:
   ```
   VITE_API_URL=https://your-backend-url.com
   ```

3. **Deploy:**
   - Netlify will use the `netlify.toml` configuration
   - Click "Deploy site"

## Alternative: GitHub API Direct Integration

If you want to avoid backend deployment, you can modify the app to call GitHub API directly:

1. Create a GitHub Personal Access Token
2. Add it as environment variable: `VITE_GITHUB_TOKEN=your_token`
3. Update the API calls to use GitHub API directly

## Troubleshooting

### Common Issues:

1. **404 Errors:** Make sure your `vercel.json` or `netlify.toml` has proper redirects
2. **API Errors:** Check that your backend URL is correct in environment variables
3. **Build Errors:** Ensure all dependencies are in `package.json`

### Environment Variables:

- `VITE_API_URL`: Your backend API URL
- `VITE_GITHUB_TOKEN`: GitHub Personal Access Token (if using direct API)

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Start backend server
npm run server

# Start both frontend and backend
npm run dev:full
``` 