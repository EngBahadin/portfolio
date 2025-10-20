# Portfolio Deployment

This portfolio is automatically deployed using GitHub Actions.

## Deployment Process

1. **Push to main branch** triggers the deployment workflow
2. **GitHub Actions** builds the VuePress site
3. **GitHub Pages** serves the built site

## Local Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## GitHub Pages Setup

1. Go to repository Settings
2. Navigate to Pages section
3. Set Source to "GitHub Actions"
4. The workflow will automatically deploy on push to main

## Workflow Features

- ✅ **Automatic deployment** on push to main
- ✅ **pnpm caching** for faster builds
- ✅ **Node.js 18** with latest features
- ✅ **Build verification** before deployment
- ✅ **Clean builds** with frozen lockfile
