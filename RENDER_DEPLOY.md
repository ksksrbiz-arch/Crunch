# Render.com Deployment Guide

This Next.js project is configured for easy deployment on **Render**.

## Recommended Settings

- **Environment**: Node
- **Build Command**: `npm install && npm run build`
- **Start Command**: `npm start`
- **Node Version**: 20 (set via environment variable or in build settings)

## Using render.yaml (Best)

Render automatically detects `render.yaml` in the root folder when you connect your GitHub repo. It includes:

- Auto-deploy on push
- Health check path
- Optimized standalone output

## Manual Setup (if not using render.yaml)

1. Create a new **Web Service** on Render.
2. Connect your GitHub repository.
3. Use these settings:
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`
4. Add Environment Variable:
   - `NODE_VERSION=20`

## Why `output: 'standalone'`?

It creates a minimal production build that's faster to deploy and run on Render.

## Notes

- Your interactive shopping cart works perfectly (it's client-side).
- Images are optimized.
- Free tier is sufficient for this site.

Deploy once and enjoy automatic updates on every Git push! 🚀