# GitHub Pages Setup Guide

## Required Repository Settings

To enable GitHub Pages deployment, you need to configure your repository settings:

### 1. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **"GitHub Actions"**
5. Save the settings

### 2. Repository Permissions

The workflow now includes the necessary permissions:

- `contents: read` - Read repository contents
- `pages: write` - Write to GitHub Pages
- `id-token: write` - Generate deployment tokens

### 3. Environment Setup

The workflow uses the `github-pages` environment which is automatically created when you enable GitHub Pages.

## What Changed

### Old Workflow Issues:

- ❌ Used `peaceiris/actions-gh-pages@v3` which requires manual token setup
- ❌ Missing permissions configuration
- ❌ No environment setup

### New Workflow Benefits:

- ✅ Uses official GitHub Pages actions (`actions/deploy-pages@v4`)
- ✅ Automatic permission handling
- ✅ Proper environment configuration
- ✅ Better error handling and logging

## Deployment Process

1. **Push to main branch** → Triggers workflow
2. **Build VuePress site** → Creates static files
3. **Upload artifact** → Prepares files for deployment
4. **Deploy to Pages** → Publishes to GitHub Pages

## Troubleshooting

If deployment still fails:

1. Check repository **Settings > Pages** is set to "GitHub Actions"
2. Verify **Settings > Actions > General** allows workflows
3. Ensure the repository is public (required for free GitHub Pages)

## Your Portfolio URL

Once deployed, your portfolio will be available at:
`https://engbahadin.github.io/portfolio/`
