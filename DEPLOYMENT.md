# Deployment Guide

## GitHub Setup

1. **Delete old repository** (if exists)
2. **Create new repository**: `eco-wood-industry`
3. **Clone and push**:

```bash
git init
git add .
git commit -m "Initial commit: Clean Eco Wood Industries project"
git branch -M main
git remote add origin https://github.com/PranavYehale/eco-wood-industry.git
git push -u origin main
```

## Vercel Deployment

1. **Go to**: https://vercel.com/new
2. **Import**: `PranavYehale/eco-wood-industry`
3. **Settings**: Auto-detected (Vite framework)
4. **Deploy**: Click deploy button

## Environment Variables (Optional)

Add in Vercel dashboard if needed:
- `VITE_API_URL`
- `VITE_CONTACT_PHONE`
- `VITE_CONTACT_EMAIL`

## Expected Result

✅ Zero build errors
✅ Zero warnings  
✅ Fast loading
✅ Mobile responsive
✅ SEO optimized